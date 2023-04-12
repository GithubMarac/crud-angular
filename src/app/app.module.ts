import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PorscheDesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
