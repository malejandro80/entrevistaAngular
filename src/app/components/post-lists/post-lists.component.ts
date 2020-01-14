import { Component, OnInit } from '@angular/core';
import { JsonServicesService } from 'src/app/services/json-services.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.scss']
})
export class PostListsComponent implements OnInit {

  list: any[] = [];

  constructor(private json: JsonServicesService ) {

    this.json.getPosts().subscribe( (res: any)  => this.list = res);

  }

  ngOnInit() {
  }

}
