import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private itemsPerPage: number = 10;
  private apiUrlCharacter: string = environment.API.CHARACTER;
  private apiUrlCharacters: string = environment.API.CHARACTER_PAGE;

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrlCharacters}${page}`, {
        observe: 'response',
      })
      .pipe(catchError((error) => throwError(error)));
  }

  getCharacter(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrlCharacter}${id}`, {
        observe: 'response',
      })
      .pipe(catchError((error) => throwError(error)));
  }
}
