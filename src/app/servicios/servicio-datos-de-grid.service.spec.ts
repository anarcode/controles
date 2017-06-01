import { TestBed, inject } from '@angular/core/testing';

import { ServicioDatosDeGrid } from './servicio-datos-de-grid.service';

describe('ServicioDatosDeGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDatosDeGrid]
    });
  });

  it('should ...', inject([ServicioDatosDeGrid], (service: ServicioDatosDeGrid) => {
    expect(service).toBeTruthy();
  }));
});
