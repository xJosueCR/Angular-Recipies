import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "../components/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../components/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "../components/recipe-start/recipe-start.component";
import { RecipeBookComponent } from "../features/recipe-book/recipe-book.component";
import { ShoppingComponent } from "../features/shopping/shopping.component";
import { RecipeResolverService } from "../services/resolvers/recipe-resolver.service";

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit', component: RecipeEditComponent,  resolve: [RecipeResolverService]},
    ]},
    {path: 'shopping-list', component: ShoppingComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}