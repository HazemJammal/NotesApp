import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Notes } from './notes';



@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  //private color = new BehaviorSubject<string>('');
  //private currentColor = this.color.asObservable();
  public noteSubject = new Subject<string>();
  public searchSubject = new Subject<string>();

  private _url: string = "https://localhost:7070/api/Notes"


  constructor(private http: HttpClient) {
  }

  getNotes():Observable<Notes[]> {
    return this.http.get<Notes[]>(this._url);
  }

  insertNotes(note: Notes) {
    return this.http.post<Notes>(this._url,note)
  }

  updateNote(note: Notes) {
    return this.http.put<Notes>(this._url,note)
  }

  deleteNote(id: number) {
    return this.http.delete<number>(this._url + "/" + id);
  }


}
