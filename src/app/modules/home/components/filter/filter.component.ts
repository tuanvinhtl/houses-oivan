import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { debounceTime, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Filter } from "src/app/shared/models/filter";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input()
  set filter(filter: Filter | any) {
    this.formGroup.setValue(filter, { emitEvent: false });
  }

  @Output()
  filterUpdate: EventEmitter<Filter> = new EventEmitter();

  blockNumberValues = ["A","B", "C", "D", "001", "002"];
  landNumberValues = ["riverside"];

  minPriceValues = [1000000000, 2000000000, 3000000000];

  maxPriceValues = [7000000000, 8000000000, 9000000000];

  formGroup: FormGroup = new FormGroup({
    blockNumber: new FormControl(),
    landNumber: new FormControl(),
    minPrice: new FormControl(),
    maxPrice: new FormControl(),
  });

  private unsubscribe$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.formGroup.controls["blockNumber"].valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(350))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          blockNumber: value,
        });
      });
    this.formGroup.controls["landNumber"].valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(350))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          landNumber: value,
        });
      });
    this.formGroup.controls["minPrice"].valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(350))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          minPrice: value,
        });
      });
    this.formGroup.controls["maxPrice"].valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(350))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          maxPrice: value,
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
