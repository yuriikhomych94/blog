import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {

  view: any;
  activateRoute: any;

  constructor(
    private articleService: ArticleService,
    private router: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getOneArticle()
  }

  getOneArticle(): void {
    const id: any = this.router.snapshot.paramMap.get('id');
    this.articleService.getOneArticle(id).subscribe(data => {
      this.view = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
