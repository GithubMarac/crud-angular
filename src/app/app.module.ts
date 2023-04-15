import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PorscheDesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
