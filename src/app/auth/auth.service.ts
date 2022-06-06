import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(null)
    token: string = null
    tokenTimer: any
    constructor(private http: HttpClient, private router: Router) {
    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(`${environment.SIGN_UP_URL}?key=${environment.AUTH_API_KEY}`, {
            email,
            password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap((resData) => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(`${environment.SIGN_IN_URL}?key=${environment.AUTH_API_KEY}`, {
            email,
            password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap((resData) => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        }))
    }
    private handleError(serverError: HttpErrorResponse) {
        let errorMessage = 'An unknown error has occurred'
        if (!serverError.error || !serverError.error.error) {
            return throwError(errorMessage)
        }
        switch (serverError.error.error.message) {
            case 'EMAIL_EXISTS': errorMessage = 'The email address is already in use by another account'
                break
            case 'OPERATION_NOT_ALLOWED': errorMessage = 'Password sign-in is disabled for this project'
                break
            case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
                break
            case 'EMAIL_NOT_FOUND': errorMessage = 'No user found.'
                break
            case 'INVALID_PASSWORD': errorMessage = 'The password is invalid.'
                break
            case 'USER_DISABLED': errorMessage = 'The user account has been disabled by an administrator.'
                break
        }
        return throwError(() => new Error(errorMessage))

    }

    private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User(email, localId, idToken, expirationDate)
        this.user.next(user)
        this.autoLogout(expiresIn * 1000)
        localStorage.setItem('user', JSON.stringify(user))
    }

    logout(){
        this.user.next(null)
        this.router.navigate(['/auth'])
        localStorage.removeItem('user')
        if(this.tokenTimer){
            clearTimeout(this.tokenTimer)
        }
        this.tokenTimer = null
    }
    autoLogin(){
        const user: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('user'))

        if(!user){
            return
        }
        const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser)
            const expirationDuration = new Date(user._tokenExpirationDate).getTime() - new Date().getTime()
            this.autoLogout(expirationDuration)
        }
    }

    autoLogout(expirationDuration: number){
       this.tokenTimer = setTimeout(() =>{
            this.logout()
        }, expirationDuration)
    }
}