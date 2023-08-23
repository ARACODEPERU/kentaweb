import { Component, OnInit  } from '@angular/core';
import { ApiKenthaService } from 'src/app/Services/api-kentha.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any;
  links: any;
  last_page: any;
  current_page: number = 1;
  categories: any;
  latest_articles : any;

  currentPage: number = 1;

  constructor(private apiService: ApiKenthaService) { }

  ngOnInit(): void {
    // Aquí puedes llamar a métodos del servicio al cargar el componente
    this.getDataFromApi(this.currentPage);
  }

  getDataFromApi(page: number): void {
    this.apiService.getDataBlog(page).subscribe(
      (res) => {
        // Aquí puedes procesar los datos que has obtenido de la API
        this.articles = res.articles.data;
        this.links = res.articles.links;
        this.last_page = res.articles.last_page;
        this.current_page = res.articles.current_page;
        this.categories = res.categories;
        this.latest_articles = res.latest_articles;
      },
      (error) => {
        // Manejo de errores en caso de que la solicitud falle
        console.error(error);
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getDataFromApi(this.currentPage);
  }


}
