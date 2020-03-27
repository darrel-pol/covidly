import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from './chart.service';
import { GitService } from './git.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [ChartService, GitService]
})
export class UiModule { }
