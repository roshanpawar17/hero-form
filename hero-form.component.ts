import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']

  heroData = {
    name: 'Roshan',
    alterEgo: 'Chuck Overstreet',
    power: 'Really Smart'
  }

  submited=false
  showData=false
  inputDisable=false

  onSubmit(data: any) {
    if(data.valid){
      // console.log(data.value)
      this.submited=true
      this.showData=true
      this.heroData = data.value
      this.inputDisable=true
    }
  }

  editForm(){
    this.inputDisable=false
    this.showData=false
  }

}
