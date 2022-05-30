import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Recipe } from "../models/recipe.model";
import { RecipeService } from "../services/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }
    storeRecipes(){
       const recipes = this.recipeService.getRecipes()
       this.http.put(`${environment.API_URL}/recipe.json`, recipes)
        .subscribe(response => {
            console.log(response)
        })
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(`${environment.API_URL}/recipe.json`)
        .pipe(map(recipes =>{
            return recipes.map(recipe => {
                return {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                }
            })
        }), tap(recipes =>{
            this.recipeService.updateRecipes(recipes)
        })
        )
    }

}