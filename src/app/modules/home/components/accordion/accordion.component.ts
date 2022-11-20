import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent {
  @Input() items: any;

  @Input("accordionTemplateItem")
  accordionTemplateItemRef: TemplateRef<any>;
  
  @Input("itemLabelRef")
  itemLabelRef: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter();
  selected = 0;

  itemSelected(item: any) {
    this.selected = item.id;
  }
}
