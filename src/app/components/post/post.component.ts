import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonServicesService } from 'src/app/services/json-services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: any;
  post: any = {};
  date: any = 'sin fecha';
  constructor(
      private route: ActivatedRoute,
      private json: JsonServicesService
    ) {
    this.route.params.subscribe(params => {
      this.getPost(Number(params.id));
    });
  }

  getPost(id: number) {
    this.json.getPost(id).subscribe(data => {
      this.post = data;
    });
  }

  ngOnInit() {
  }

}
