import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'e-shop';
  fruitList = ["acorn_squash", "apple", "bell_pepper", "blueberries", "broccoli", "carrot", "celery", "chili_pepper", "corn", "eggplant", "lettuce", "mushroom", "onion", "potato", "pumpkin", "radish", "squash", "strawberry", "sugar_snap", "tomato", "zucchini" ];
  mart='assets/kwik-e-mart.png';
  fruitSelected = "apple";
  form: FormGroup;
  carts: FormArray;

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.carts = this.fb.array([])
    this.form = this.fb.group({
      name: this.fb.control('JingXuan', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('jxlau@hotmail.com', [Validators.required, Validators.email]),
      itemName: this.fb.control(''),
      quantity: this.fb.control(''),
      carts: this.carts
    })
  }

  //triggered by fruitClicked event when user clicks on one of the item components
  addCart(fruit){
    this.fruitSelected = fruit;
    console.info("Application: ", this.fruitSelected);
    let exist = false;
    let quantity = 0;
    let index = 0;
    for (let i = 0; i < this.carts.length; i++){
      if (this.carts.at(i).value.itemName === fruit){
        exist = true;
        quantity = this.carts.at(i).value.quantity;
        this.carts.removeAt(i);
        index = i;
        console.info("duplicate: ", exist);
        break;
      }
    }
    const newCart = this.fb.group({
        itemName: fruit,
        quantity: quantity+1
    })
    //if its not a new item, insert the item at the correct place
    if (exist === false){
      this.carts.push(newCart);        
    }else{
      this.carts.insert(index, newCart);
    }
  }

  checkOut(){
    console.info("Infos: ", {"email":this.form.value.email, "items":this.form.value.carts, "name":this.form.value.name});
  }
}
