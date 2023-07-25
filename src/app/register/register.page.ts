import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio" },
      { type: "pattern", message: "Debe ingresar un email válido" },
      { type: "minlength", message: "El email debe tener al menos 8 caracteres" }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria" },
      { type: "minlength", message: "La contraseña debe tener al menos 6 caracteres" }
    ],
    name: [
      { type: "required", message: "El nombre es obligatorio" },
      { type: "minlength", message: "El nombre debe tener al menos 3 caracteres" }
    ],
    last_name: [
      { type: "required", message: "El apellido es obligatorio" },
      { type: "minlength", message: "El apellido debe tener al menos 3 caracteres" }
    ]
  };
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }

}
