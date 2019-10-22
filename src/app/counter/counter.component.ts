import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "cc-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  total: number = 0;
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  increment() {
    this.total += 1;
    this.store.dispatch({ type: "INCREMENT", payload: 1 });
  }

  decrement() {
    if (this.total > 0) {
      this.total -= 1;
      // this.store.dispatch({ type: "DECREMENT", payload: -1 });
    }
  }
}
