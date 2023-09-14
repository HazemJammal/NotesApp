import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private  service :NoteServiceService) { }

  ngOnInit(): void {

  }



  

}
