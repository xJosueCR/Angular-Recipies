import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "src/app/models/recipe.model";
import { StorageService } from "src/app/services/storage/storage.service";
import { RecipeService } from "../recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private storageService: StorageService, private recipeService: RecipeService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes: Recipe[] = this.recipeService.getRecipes()
        if(recipes.length === 0)
            return this.storageService.fetchRecipes()
        return recipes
    }

}