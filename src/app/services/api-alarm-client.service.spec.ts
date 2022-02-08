import { TestBed } from '@angular/core/testing';

import { ApiAlarmClientService } from './api-alarm-client.service';

describe('ApiAlarmClientService', () => {
  let service: ApiAlarmClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAlarmClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
