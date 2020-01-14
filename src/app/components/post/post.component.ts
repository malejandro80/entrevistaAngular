import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonServicesService } from 'src/app/services/json-services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: any;
  post: any;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private json: JsonServicesService
    ) {
    //   this.route.paramMap.subscribe(data => {
    //   this.id = data.get("id");
    // });
    json.getPost(1).subscribe(data => console.log(data) );

  }

  ngOnInit() {
  }

}
