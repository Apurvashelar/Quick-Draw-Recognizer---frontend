import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  
  classes=['Sun', 'Flower', 'Pencil', 'Umbrella', 'Spoon', 'Tree', 'House',];
  constructor() { }
  
  ngOnInit(): void {
    this.classes.sort()
  } 

  @Output() classname = new EventEmitter<string>();

  sendClassname(name:string){
    var class1 = name;
    this.classname.emit(class1);
    
  }

  

}
