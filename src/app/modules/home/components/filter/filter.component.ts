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
  set filter(filter: Filter) {
    this.formGroup.setValue(filter, { emitEvent: false });
  }

  @Output()
  filterUpdate: EventEmitter<Filter> = new EventEmitter();

  formGroup: FormGroup = new FormGroup({
    search: new FormControl(),
    category: new FormGroup({
      isBusiness: new FormControl(),
      isPrivate: new FormControl(),
    }),
  });

  private unsubscribe$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.formGroup.controls["search"].valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(350))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          search: value,
        });
      });

    this.formGroup.controls["category"].valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.filterUpdate.emit({
          ...this.formGroup.value,
          category: value,
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
