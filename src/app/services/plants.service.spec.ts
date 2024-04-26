import { TestBed, inject } from '@angular/core/testing';

import { PlantsService } from './plants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantsService', () => {
  let service: PlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantsService]
    });
    service = TestBed.inject(PlantsService);
  });

  it('should ...', inject([PlantsService], (service: PlantsService) => {
    expect(service).toBeTruthy();
  }));
});
