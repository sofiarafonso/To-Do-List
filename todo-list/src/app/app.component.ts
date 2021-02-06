import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

class Note {
id: number;
title: string;
text: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  notes: Note[] = [];
  selected_note: number;
  editing=false;
  id_counter=0
  constructor(){
    
  }
  new_note(){
    let nota= new Note();
    nota.id= this.id_counter;
    nota.title= "Insert Title";
    nota.text="Describe your note here";
    this.notes.push(nota);
    this.id_counter+=1;
    this.editing=false;
  }
  select(id:number){
    if (this.selected_note==id) {
      this.selected_note=null ;
    }
    else {this.selected_note=id};
    this.editing=false;
  }
  edit(){
    this.editing=!this.editing;
  }
  delete(){
    let index = this.notes.findIndex((elemento)=>{return elemento.id==this.selected_note});
    if(index==-1){return;}
    else{this.notes.splice(index, 1)};
    this.editing=false;
  }
}
