import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  price: number = this.rand(1000) + 1000;
  disc: string = `0.${this.rand(98) + 1}`;
  visualPrice: number = Math.floor(this.price - (this.price * +this.disc));
  visualDisc: number = Math.floor(+this.disc * 100);
  desc: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veritatis reprehenderit, a mollitia quod qui non! Dolor itaque reprehenderit laudantium non accusantium, velit nam voluptatibus. Voluptatem pariatur quaerat eligendi odio.";

  rand(max: number): number {
    return Math.floor(Math.random() * max)
  }
}
