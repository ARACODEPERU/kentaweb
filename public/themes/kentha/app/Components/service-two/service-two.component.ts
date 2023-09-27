import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css']
})
export class ServiceTwoComponent {
  @Input() data: any; 
}
