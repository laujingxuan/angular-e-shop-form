import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  form:FormGroup

  constructor(private fb:FormBuilder) { }

  @Input()
  carts = new Map();

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('@hotmail.com', [Validators.required, Validators.email])
    })
  }

  checkOut(){
    //console.info the user information
    //console.info cartItems
  }

}
