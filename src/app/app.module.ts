import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './features/recipe-book/recipe-book.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { RecipeService } from './services/recipe.service';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    IngredientComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
