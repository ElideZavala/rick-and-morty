import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import Observable from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private itemsPerPage = 10;
  private apiUrl = environment.API;

  constructor(private http: HttpClient) { }

  // getCharacters(page: number): Observable<any> {
  //   const url = `${this.apiUrl}/character/?page=${page}`;
  //   return this.http.get<any>(url);
  // }

  async getCharacters(page: number): Promise<any> {
    try {
      const response = await this.http.get<any>(
        `${this.apiUrl.CHARACTERS}?page=${page}&count=${this.itemsPerPage}`, 
            { observe: 'response' }
        ).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
