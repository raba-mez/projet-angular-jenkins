import { Component, OnInit } from '@angular/core';
import { Dragon, generateRandomDragon } from '../../model/Dragon';
import { DragonsService } from 'src/app/services/dragons.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  boss: Dragon;
  dragons: Dragon[];
  creationInProgress = false;

  constructor(private dragonsService: DragonsService) { }

  changeBoss() {
    this.boss = this.dragons[1];
  }

  removeDragon(dragon: Dragon) {
    dragon.removalInProgress = true;
    this.dragonsService.deleteDragon(dragon).subscribe(
      dragons => this.dragons = dragons
    );
  }

  ngOnInit() {
    this.dragonsService.getList()
      .subscribe(
      dragons => {
        this.dragons = dragons;
        this.boss = this.dragons[0];
      }
    );
  }

  createRandomDragon() {
    this.creationInProgress = true;
    const randomDragon = generateRandomDragon();
    this.dragonsService.createDragon(randomDragon).subscribe(
      dragons => {
        this.dragons = dragons;
        this.creationInProgress = false;
      }
    );
  }

}
