import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import { Plant } from '../models/plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];
  
  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.plantsService.getPlants().subscribe((data: any) => {
      this.plants = data.sort((a: Plant, b: Plant) => a.id - b.id);
    });
  }
}
