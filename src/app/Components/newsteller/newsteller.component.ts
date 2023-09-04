import { Component } from '@angular/core';
import { ApiKenthaService } from 'src/app/Services/api-kentha.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsteller',
  templateUrl: './newsteller.component.html',
  styleUrls: ['./newsteller.component.css']
})
export class NewstellerComponent {

  subscriberForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.max(255),
      Validators.email
    ])
  });
  submitted = false;
  constructor(private apiService: ApiKenthaService) { }

  
  saveData(): void {
    // Obtener el valor del campo de correo electrónico del formulario
    this.submitted = true;
    const form = this.subscriberForm.value;
    // Verificar si se ingresó un correo electrónico antes de hacer la solicitud
    // if (form.email) {
      // Enviar el correo electrónico al servicio para registrarlo
      this.apiService.saveSubscriber({ email: form.email }).subscribe(
        (res) => {
          // Aquí puedes procesar los datos que has obtenido de la API
          alert('Se registró correctamente');
          // También puedes limpiar el formulario después de un registro exitoso si lo deseas
          this.subscriberForm.reset();
          this.submitted = false;
        },
        (error) => {
          // Manejo de errores en caso de que la solicitud falle
          console.error(error);
        }
      );
    // } else {
    //   // Mostrar un mensaje de error si no se ingresó un correo electrónico
    //   alert('Por favor, ingrese un correo electrónico válido');
    // }
  }

}
