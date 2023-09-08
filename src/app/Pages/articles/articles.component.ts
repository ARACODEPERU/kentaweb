import { Component, OnInit } from '@angular/core';
import { ApiKenthaService } from 'src/app/Services/api-kentha.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  slug: any; // Declaración de la propiedad slug
  article: any; // Declaración de la propiedad article
  categories: any;
  latest_articles : any;

  constructor(private apiService: ApiKenthaService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Aquí puedes llamar a métodos del servicio al cargar el componente
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.getArticleApi(this.slug);
    });
    
  }

  getArticleApi(slug: any): void {
    this.apiService.getDataArticle(slug).subscribe(
      (res) => {
        this.article = res.article;
        this.categories = res.categories;
        this.latest_articles = res.latest_articles;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
