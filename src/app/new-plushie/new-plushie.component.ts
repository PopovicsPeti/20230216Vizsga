import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plushie } from './plushie.model';

@Component({
  selector: 'app-new-plushie',
  templateUrl: './new-plushie.component.html',
  styleUrls: ['./new-plushie.component.scss']
})
export class NewPlushieComponent implements OnInit{
  plushieForm: FormGroup = <FormGroup>{}
  plushieArray: Array<Plushie> = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    let name = '';
    let szize = '';

    this.plushieForm = new FormGroup({
      'name': new FormControl( name, [ Validators.required]),
      'szize': new FormControl( szize, [ 
        Validators.required,
        Validators.min(1)
      ])
    })
  }

  onSubmit(){
    if(this.plushieForm.valid){
      this.plushieArray.push(this.plushieForm.value);
    } else {
      this.errorMessage = 'a beírt adatok nem megfelelőek, a név kötelező a magasságnak pozitív egész számnak kell lennie!'
    }
    console.log(this.plushieForm.value);
    console.log(this.plushieArray)
  }

  makeList(){
    
  }

}
