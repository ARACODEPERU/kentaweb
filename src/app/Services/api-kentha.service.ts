import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKenthaService {

private apiUrl = 'http://erp-app.test/api/blog_v1'; //dev
//private apiUrl = 'http://demo.delventas.co.uk/api/blog_v1'; //prod

  constructor(private http: HttpClient) { }


  // Ejemplo de método para hacer una solicitud GET
  getDataBlog(page: number): Observable<any> {
    //return this.http.get<any>(`${this.apiUrl}/all`);
    return this.http.get<any>(`${this.apiUrl}/all?page=${page}`);
  }

  saveSubscriber(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subscriber`, data);
  }

  getDataArticle(slug: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetArticle/${slug}`);
  }

  getDataPage(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/page/all_data/${page}`);
  }
}
