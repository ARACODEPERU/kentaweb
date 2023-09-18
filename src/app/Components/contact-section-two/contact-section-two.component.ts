import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-section-two',
  templateUrl: './contact-section-two.component.html',
  styleUrls: ['./contact-section-two.component.css']
})

export class ContactSectionTwoComponent {
  @Input() data: any; 
}
