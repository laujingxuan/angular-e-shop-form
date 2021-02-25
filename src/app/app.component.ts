import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'e-shop';
  fruitList = ["acorn_squash", "apple", "bell_pepper", "blueberries", "broccoli", "carrot", "celery", "chili_pepper", "corn", "eggplant", "lettuce", "mushroom", "onion", "potato", "pumpkin", "radish", "squash", "strawberry", "sugar_snap", "tomato", "zucchini" ];
  mart='assets/kwik-e-mart.png';
  fruitSelected = "apple";

  addCart(fruit){
    this.fruitSelected = fruit;
    console.info("Application: ", this.fruitSelected);
    //Add to the other component as item added
  }
}
