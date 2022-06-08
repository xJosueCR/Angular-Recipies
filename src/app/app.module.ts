import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';


import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
