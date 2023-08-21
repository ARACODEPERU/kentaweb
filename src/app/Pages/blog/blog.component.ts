import { Component, OnInit  } from '@angular/core';
import { ApiKenthaService } from 'src/app/Services/api-kentha.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any;
  constructor(private apiService: ApiKenthaService) { }

  ngOnInit(): void {
    // Aquí puedes llamar a métodos del servicio al cargar el componente
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getDataBlog().subscribe(
      (data) => {
        // Aquí puedes procesar los datos que has obtenido de la API
        console.log(data);
        this.articles = data.articles;
        console.log(this.articles);
      },
      (error) => {
        // Manejo de errores en caso de que la solicitud falle
        console.error(error);
      }
    );
  }
}
