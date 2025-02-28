import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  game: string = `CS ${this.rand(2)}`
  online: string = `9.100.${this.rand(999)}`
  peak: string = `12.200.${this.rand(999)}`

  rand(max: number): number {
    return Math.floor(Math.random() * max)
  }

}
