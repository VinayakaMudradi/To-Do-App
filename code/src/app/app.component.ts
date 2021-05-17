import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks = [];
  public newTask = '';

  public addTask() {
    if (this.newTask == '') {
    }
    else {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTask(index) {
    this.tasks.splice(index, 1);
  }

}
