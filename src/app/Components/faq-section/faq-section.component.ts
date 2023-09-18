import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'],
})

export class FaqSectionComponent {
  @Input() data: any; 
  
  activeIndex = 1; // Índice del elemento activo inicialmente

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      // Si haces clic en el elemento activo, ciérralo
      this.activeIndex = -1;
    } else {
      // De lo contrario, abre el elemento seleccionado
      this.activeIndex = index;
    }
  }
}







