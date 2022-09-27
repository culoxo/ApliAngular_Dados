import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoizq = "../assets/ImgDados/dice4.jpg";
  dadodcha = "../assets/ImgDados/dice1.jpg";
  numero1=1;
  numero2=2;

  tirarDados(): void{
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;
    this.dadoizq = "../assets/ImgDados/dice" + this.numero1 + ".jpg";
    this.dadodcha = "../assets/ImgDados/dice" + this.numero2 + ".jpg";
    console.log(this.numero1)
  }
}
