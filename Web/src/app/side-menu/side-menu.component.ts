import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { NotesComponent } from '../notes/notes.component';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor( private service: NoteServiceService) { }

  ngOnInit(): void {
  }



  showNotes = false;

  addTempNote(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const bgColor = target.style.backgroundColor;
    console.log(bgColor)
    // this.service.addNote(bgColor)
    this.service.noteSubject.next(bgColor);

  }
}

