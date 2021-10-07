import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';

const shoes:string[]=[
  {'nike':string}
];
@NgModule({
  declarations: [
    AppComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
