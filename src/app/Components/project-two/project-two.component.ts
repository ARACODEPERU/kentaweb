import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.css']
})
export class ProjectTwoComponent {
  @Input() data: any; 
}
