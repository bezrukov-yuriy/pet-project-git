import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPipe } from '../pipes/counter.pipe';

const pipes = [CounterPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
