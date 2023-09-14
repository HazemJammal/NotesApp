import { Component, OnInit, } from '@angular/core';
import { NoteServiceService } from '../note-service.service'
import { Notes } from '../notes'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Notes[] = [];
  searchQuery: any;

  editNote = -1;

  constructor(private service: NoteServiceService) {
  }

  filteredNotes:Notes[] = []

  ngOnInit(): void {

    this.service.getNotes().subscribe((responce) => {
      this.notes = responce;
      this.filteredNotes = this.notes
    });
    this.service.noteSubject.subscribe((color: string) => {

      var tempNoteIdx = this.notes.findIndex(x => x.id == -1);

      const date = new Date()
      const options = { month: 'short' } as Intl.DateTimeFormatOptions;; 
      
      var month = date.toLocaleDateString('en-US', options);
      var day = ("0" + new Date().getDate()).slice(-2)
      var year = date.getFullYear();

      const fullDate = month + ' ' + day+','+year;
      if (tempNoteIdx == -1) {
        this.notes.push(new Notes(-1, '', fullDate, color))
      }
      else {
        this.notes[tempNoteIdx].color = color
      }
    });

  }


   


  filterNotes(event: any) {

    if (this.searchQuery) {
      this.filteredNotes = this.notes.filter(note =>
        note.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredNotes = this.notes;
    }
  }

  addUpdateNote(content: string, id: number) {

    if (id == -1) {
      var addThisNote = this.notes[this.notes.findIndex(x => x.id == -1)]
      addThisNote.content = content;
      addThisNote.id = 0;
      this.service.insertNotes(addThisNote).subscribe((x) => {
        addThisNote.id = x.id;
      });
    }
    else {
      var fixNote = this.notes[this.notes.findIndex(x => x.id == id)]

      fixNote.content = content;

      this.service.updateNote(fixNote).subscribe(any => {
        console.log("Note updated")
      })
      this.editNote = -1
    }
  }

  deleteNote(note: Notes) {
    var fixNote = this.notes[this.notes.findIndex(x => x.id == note.id)]
    this.service.deleteNote(note.id).subscribe((x: any) => {
      this.filteredNotes = this.filteredNotes.filter(e => e !== note);
    }, (err: any) => {
      alert("Something went wrong")
    });

  }


  

}
