import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  @Input() data: any; 
}
