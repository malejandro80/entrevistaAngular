import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JsonServicesService } from 'src/app/services/json-services.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() idPost: number;
  @Output() fecha = new EventEmitter();
  comments: any;
   constructor(private json: JsonServicesService) {
  }

  getComments(idPost: number){
    this.json.getComments(idPost).subscribe(data => {
      this.comments = data;
    });
  }

  emitDate(){
    var f = new Date();
    this.fecha.emit(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
  }

  ngOnInit() {
    this.getComments(this.idPost);
  }

}
