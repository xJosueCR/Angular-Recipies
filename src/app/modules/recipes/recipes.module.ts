import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecipeDetailComponent } from '../../components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../../components/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from '../../components/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';
import { RecipeStartComponent } from '../../components/recipe-start/recipe-start.component';
import { RecipeBookComponent } from '../../features/recipe-book/recipe-book.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ],

})
export class RecipesModule {

}