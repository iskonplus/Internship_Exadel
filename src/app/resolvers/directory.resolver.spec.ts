import { TestBed } from '@angular/core/testing';

import { DirectoryResolver } from './directory.resolver';

describe('DirectoryResolver', () => {
  let resolver: DirectoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DirectoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
