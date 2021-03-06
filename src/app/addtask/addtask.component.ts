import { Component } from '@angular/core'
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-addtask',
    templateUrl: './addtask.component.html',
    styleUrls: ['./addtask.component.css']
})

export class AddtaskComponent {

    constructor(private todo:TodoService) {}

    item:string;
    
    //TODO: perform add task logic
    add() {
        this.todo.addItem(this.item, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
        console.log(this.item);
        this.item = '';
    }

}