import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/shared/models/topic.model';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  topics: Array<Topic> = [];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    this.topicService.getTopic().subscribe(data => {
      this.topics = data;
    })
  }

}
