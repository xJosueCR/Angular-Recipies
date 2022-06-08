import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IngredientComponent } from "src/app/components/ingredient/ingredient.component";
import { ShoppingEditComponent } from "src/app/components/shopping-edit/shopping-edit.component";
import { ShoppingComponent } from "src/app/features/shopping/shopping.component";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingComponent,
        IngredientComponent,
        ShoppingEditComponent,
    ],
    imports: [FormsModule, SharedModule, ShoppingListRoutingModule]
})
export class ShoppingListModule {

}