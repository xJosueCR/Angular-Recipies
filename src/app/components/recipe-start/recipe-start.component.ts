import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  recipeForm: FormGroup
  editMode: boolean = false
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

}
