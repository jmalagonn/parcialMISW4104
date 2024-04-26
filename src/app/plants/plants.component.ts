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
  interiorPlants: number = 0;
  exteriorPlants: number = 0;
  
  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.plantsService.getPlants().subscribe((data: any) => {
      this.plants = data.sort((a: Plant, b: Plant) => a.id - b.id);
      this.getCountByType();
    });
  }

  getCountByType(): void {
    this.interiorPlants = this.plants.reduce((a, b) => a + ((b.tipo === "Interior") ? 1 : 0), 0);
    this.exteriorPlants = this.plants.reduce((a, b) => a + ((b.tipo === "Exterior") ? 1 : 0), 0);
  }
}
