import { Component, Input, OnInit } from '@angular/core';
import { PlanetInterface } from '../../models/planets.interface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit{
  @Input() cards: PlanetInterface[] = [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
   ];

   contador= 0;
   selectedCard?: PlanetInterface;

   ngOnInit(): void {
    this.cards = this.cards.sort((a,b) => 0.5 - Math.random())
   }

   checkCard(card: PlanetInterface){
    if (this.selectedCard) {
      if (this.selectedCard.name === card.name){
        card.checked = true;
        this.selectedCard.checked= true

        this.selectedCard.selected = false;
        this.selectedCard = undefined

        this.contador++
      }else{
        card.selected = true;
        setTimeout(()=>{
          card.selected = false;
          this.selectedCard!.selected= false
          this.selectedCard = undefined
        }, 500)
      }
    }else{
      this.selectedCard = card;
      card.selected = true;
    }
   }

   reset(){
    this.contador = 0
   }
}


