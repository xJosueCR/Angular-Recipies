import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipeDetailComponent } from "src/app/components/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "src/app/components/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "src/app/components/recipe-start/recipe-start.component";
import { RecipeBookComponent } from "src/app/features/recipe-book/recipe-book.component";
import { RecipeResolverService } from "src/app/services/resolvers/recipe-resolver.service";

const routes: Routes = [
    {path: '', component: RecipeBookComponent, canActivate:[AuthGuard], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit', component: RecipeEditComponent,  resolve: [RecipeResolverService]},
    ]},
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule {

}