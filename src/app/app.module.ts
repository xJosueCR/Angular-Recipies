import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { RecipeService } from './services/recipe.service';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './layout/spinners/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './layout/alert/alert.component';
import { PlaceholderDirective } from './directives/helpers/placeholder.directive';

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
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    AuthComponent,
    LoadingSpinner,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
