import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerComponent } from './server/server.component';
import { BlueprintComponent } from './blueprint/blueprint.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerEditComponent,
    ServerComponent,
    BlueprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
