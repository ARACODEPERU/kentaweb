import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiKenthaService {

  private apiUrl = 'http://erp-app.test/api/blog_v1';

  constructor(private http: HttpClient) { }


  // Ejemplo de método para hacer una solicitud GET
  getDataBlog(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  // Puedes crear más métodos para otras solicitudes
}
