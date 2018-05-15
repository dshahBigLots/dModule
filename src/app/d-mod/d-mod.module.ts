import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampComponent } from './samp/samp.component';
import { MathService } from './math.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MathService],
  declarations: [SampComponent],
  exports: [SampComponent]
})
export class DModModule { }
