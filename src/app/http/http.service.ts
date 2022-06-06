import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
/**
 * Implementation for HTTP Services
 */
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient){

    }
    /**
     * 
     * @param url endpoint to send the POST request
     * @param body body of the request
     * @param headers customized headers
     * @param options additional information like params, responseType
     * @returns 
     */
    public post<T>(url: string, body : any, headers?: any, options?: any): Observable<any> {
        return this.http.post<T>(url, body, { headers: {
            ...headers
        }, ...options} )
    }
    /**
     * 
     * @param url endpoint to send the GET request
     * @param headers customized headers
     * @param options additional information like params, responseType
     * @returns 
     */
    public get(url: string, headers?, options?): Observable<any> {
        return this.http.get(url, {headers : {
            ...headers
        },  ...options} )
    }

    /**
     * 
     * @param url endpoint to send the PUT request
     * @param body body of the request
     * @param headers customized headers
     * @param options additional information like params, responseType
     * @returns 
     */
     public put(url: string, body: any, headers?: any, options?: any): Observable<any> {
        return this.http.put(url, body, {headers : {
            ...headers
        },  ...options})
    }
    /**
     * 
     * @param url endpoint to send the DELETE request
     * @param headers customized headers
     * @param options additional information like params, responseType
     * @returns 
     */
     public delete(url: string,  headers?: any, options?: any): Observable<any> {
        return this.http.delete(url, {headers : {
            ...headers
        },  ...options})
    }

}