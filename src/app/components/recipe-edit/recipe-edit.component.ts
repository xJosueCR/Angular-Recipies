import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup
  recipeSubscription: Subscription
  selectedRecipe: Recipe
  id: number;
  editMode: boolean = false

  constructor(
      private route: ActivatedRoute, 
      private recipeService: RecipeService, 
      private location: Location,
      private router: Router) { }

  ngOnInit(): void {

   this.recipeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.editMode = params['id'] != null
        this.loadRecipe()
      }
    )
  }
  onSubmit(){
   if(this.editMode){
     this.recipeService.updateRecipe(this.id, this.recipeForm.value)
     this.location.back()
   } else{
    const recipeID = this.recipeService.addRecipe(this.recipeForm.value)
    this.router.navigate([`recipes/${recipeID}`])
   }
  }

  private loadRecipe(): void {
    let name: string, imagePath: string, description: string = ''
    let ingredients = new FormArray([])

    if(this.editMode){
      this.selectedRecipe = this.recipeService.getOneRecipie(this.id)
      name = this.selectedRecipe.name
      imagePath = this.selectedRecipe.imagePath
      description = this.selectedRecipe.description
      if(this.selectedRecipe['ingredients']){
        for(let ingredient of this.selectedRecipe.ingredients){
          ingredients.push( new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount,  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'imagePath': new FormControl(imagePath, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'ingredients': ingredients
    })
  }

  getIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  } 
  getIngredient(index: number){
    return (<FormArray>this.recipeForm.get('ingredients')).controls[index]
  }
  onAddIngredient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
     'name': new FormControl(null, Validators.required),
     'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
   }))
  }
  onDeleteIngredient(index: number){
    (<FormArray>(this.recipeForm.get('ingredients'))).removeAt(index)
  }

  onCancel(){
    this.location.back()
  }
  ngOnDestroy(): void { //avoid memory leaks
    this.recipeSubscription.unsubscribe()
}
}
