import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";

//NgRx
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/state/app.reducer";

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
