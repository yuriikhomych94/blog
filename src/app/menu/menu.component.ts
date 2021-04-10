import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';
import { TopicService } from '../shared/services/topic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  articleTitle!: string;
  article: Array<Article> = [];
  topic!: string;

  constructor(private articleService: ArticleService,
    private topicService: TopicService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const articleName = this.activateRoute.snapshot.paramMap.get('topic');
        this.getArticle(articleName)
        console.log(articleName)
      }
    })
  }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle(name?: any): void {
    name = name || this.activateRoute.snapshot.paramMap.get('topic');
    this.articleService.getArticle().subscribe(data => {
      this.article = data.filter(article => article.topic.name === name);
      console.log(this.article)
      this.articleTitle = this.article[0].topic.name;
    }
    );
  }


}
