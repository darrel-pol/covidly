import { Injectable } from '@angular/core';
import { GitService } from './git.service';

@Injectable()
export class ChartService {

  constructor(private gitService: GitService) { }

  getReport(date: Date) {
    const day = date.getDate();
    const month = this.addLeadingZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const fileName = `${month}-${day}-${year}.csv`;
    const content = this.gitService.getReportContent(fileName).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
    return content;
  }

  addLeadingZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
