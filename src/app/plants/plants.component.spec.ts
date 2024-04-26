import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsComponent } from './plants.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../models/plant';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;

    const plants: Plant[] = [];

    for (let i = 0; i < 3; i++) {
      plants.push({
        id: faker.number.int(),
        nombre_cientifico: faker.lorem.sentence(),
        nombre_comun: faker.lorem.sentence(),
        tipo: faker.number.int() % 2 === 0 ? 'Interior' : 'Exterior',
        altura_maxima: faker.number.int(),
        sustrato_siembra: faker.lorem.sentence(),
        clima: faker.lorem.sentence(),
      });
    }
    
    component.plants = plants;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain 3 plants', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });
});
