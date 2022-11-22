import { animate, state, style, transition, trigger } from "@angular/animations";
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
  animations: [
    trigger("contentExpansion", [
      state('expanded', style({height: '*', opacity: 1, visibility: 'visible',padding: '10px'})),
      state('collapsed', style({height: '0px', opacity: 0, visibility: 'hidden'})),
      transition("expanded <=> collapsed", [
        animate("200ms ease-in-out"),
      ]),
    ]),
  ],
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

  itemSelected(i: any) {
    if(this.selected === i){
      this.selected = -1
      return
    }
    this.selected = i;
  }
}
