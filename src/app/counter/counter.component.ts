import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Detail } from "../../models/details";
import { IncrementCounter, DecrementCounter } from "src/state/app.action";

@Component({
  selector: "cc-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  total: number;
  allDetails: Detail[];
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appState")).subscribe(data => {
      console.log(data);
      this.total = data.count;
      this.allDetails = data.details;
    });
  }

  increment() {
    // this.store.dispatch({ type: "INCREMENT", payload: 1 });
    this.store.dispatch(new IncrementCounter(1));
  }

  decrement() {
    // this.store.dispatch({ type: "DECREMENT", payload: 1 });
    this.store.dispatch(new DecrementCounter(1));
  }
}
