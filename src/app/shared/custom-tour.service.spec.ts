import { TestBed } from '@angular/core/testing';

import { CustomTourService } from './custom-tour.service';

describe('CustomTourService', () => {
  let service: CustomTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
