import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-board',
  templateUrl: './function-board.component.html',
  styleUrls: ['./function-board.component.scss'],
})
export class FunctionBoardComponent implements OnInit {
  title: string = "album";
  constructor() { }

  ngOnInit() {
  }

  toggleMode(){
    return this.title == "album" ? this.title = "phone" : this.title = "album"
  }

}
