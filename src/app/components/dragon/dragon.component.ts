import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dragon } from '../../model/Dragon';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {

  @Input() dragon: Dragon;
  @Output() deleteTriggered: EventEmitter<Dragon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeDragon() {
    this.deleteTriggered.emit(this.dragon);
  }

}
