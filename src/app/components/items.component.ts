import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

const IMAGE_BASE = 'assets/fruits';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  fruit = "apple";

  @Output()
  fruitClicked = new Subject<String>()

  constructor() { }

  image = 'assets/fruits/apple';

  ngOnInit(): void {
    this.image = `${IMAGE_BASE}/${this.fruit}.png`
  }

  handleClick(){
    console.info('Selected: ', this.fruit);
    this.fruitClicked.next(this.fruit);
  }

}
