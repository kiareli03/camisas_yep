import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeailsComponentComponent } from './product-deails-component.component';

describe('ProductDeailsComponentComponent', () => {
  let component: ProductDeailsComponentComponent;
  let fixture: ComponentFixture<ProductDeailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDeailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
