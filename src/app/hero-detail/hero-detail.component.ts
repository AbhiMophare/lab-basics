import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() {}

  ngOnInit() {}
}
