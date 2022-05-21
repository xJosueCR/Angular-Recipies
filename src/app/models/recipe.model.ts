import { Ingredient } from "./ingredient.model";

export class Recipe {
    public name: string; //public attributes
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]

    constructor(name: string, description: string, imagePath: string, ingredients?: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath
        this.ingredients = ingredients
    }
}