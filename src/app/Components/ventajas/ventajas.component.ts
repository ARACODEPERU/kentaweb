import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ventajas',
  templateUrl: './ventajas.component.html',
  styleUrls: ['./ventajas.component.css']
})
export class VentajasComponent {
  @Input() data: any; 
}
