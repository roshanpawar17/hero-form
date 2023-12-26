import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submited=false
  showData=false
  inputDisable=false

  onSubmit(data: any) {
    if(data.valid){
      // console.log(data.value)
      this.submited=true
      this.showData=true
      this.inputDisable=true
    }
  }

  newHero(){
    this.model = new Hero(42, '', '');
  }

  editForm(){
    this.inputDisable=false
    this.showData=false
  }

}
