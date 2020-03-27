import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../apps/covidly/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class GitService {

  constructor(private http: HttpClient) { }

  getReportContent(_filename: string) {
    const url = `${environment.gitEndpoint}${environment.gitRepository}${environment.gitDailyReportPath}/${_filename}`;
    return this.http.get(url).pipe(map(result => result["content"]));
  }
}
