import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "src/app/directives/dropdown/dropdown.directive";
import { PlaceholderDirective } from "src/app/directives/helpers/placeholder.directive";
import { AlertComponent } from "src/app/layout/alert/alert.component";
import { LoadingSpinnerComponent } from "src/app/layout/spinners/loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule {

}