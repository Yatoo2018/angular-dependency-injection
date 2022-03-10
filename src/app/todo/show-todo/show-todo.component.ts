import { DatePipe } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css'],
  providers: [DatePipe],
})
export class ShowTodoComponent implements OnInit {
  constructor(private datepipe: DatePipe, private inject: Injector) {
    this.content = this.datepipe.transform.toString();
    console.log(this.inject);
  }

  content = '';
  ngOnInit() {}
}
