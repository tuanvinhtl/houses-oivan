import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef,
} from "@angular/core";
import { AccordionGroupComponent } from "./accordion-group.component";

@Component({
  selector: "accordion",
  template: ` <ng-content></ng-content> `,
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;
  ngAfterContentInit() {
    this.groups.toArray()[0].opened = true;
    this.groups.toArray().forEach((t) => {
      t.toggle.subscribe((i) => {
        this.openGroup(t);
      });
    });
  }
  openGroup(group: any) {
    this.groups.toArray().forEach((t) => (t.opened = false));
    group.opened = true;
  }
}
