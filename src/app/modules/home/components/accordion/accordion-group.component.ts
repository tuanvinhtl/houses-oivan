import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "group",
  template: `
    <div class="mypanel">
      <div
        class="title"
        [ngClass]="{ active: opened }"
        (click)="toggle.emit(id)"
      >
        {{ title }}
      </div>
      <div class="body" [ngClass]="{ hidden: !opened }">
        <ng-content></ng-content>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ["accordion.component.scss"],
})
export class AccordionGroupComponent {
  @Input() opened = false;
  @Input() title: any = "";
  @Input() id: Number | undefined;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
