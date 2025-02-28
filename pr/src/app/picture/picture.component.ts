import { Component } from '@angular/core';

@Component({
  selector: 'app-picture',
  standalone: false,
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {
  title: string = `Title ${this.rand(100)} `
  likes: number = this.rand(100);
  rand(max: number): number {
    return Math.floor(Math.random() * max)
  }
}
