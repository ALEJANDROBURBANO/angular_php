import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


// import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  formUser!:FormGroup ;
  title = 'Registrar usuario';
  description = 'Por favor ingrese todos los campos requeridos';


  submitted = false;

  constructor(private form:FormBuilder) {}
  

  ngOnInit():void {
    this.formUser=this.form.group({

      name:['',Validators.required],
      last_name:['',Validators.required],
      date:['',Validators.required],
      email:['',
        [Validators.required,Validators.email]
      ],
      phone:[
        '',
        [
          Validators.required, 
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]
      ]

    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formUser.controls;
  }

  enviarDatos():any{

    this.submitted = true;

    if(this.formUser.invalid){
      return;
    }

    alert('Mensaje Enviado !'+JSON.stringify(this.formUser.value, null, 2));
    // console.log("Me precionaste");
    console.log(this.formUser.value);
    // this.cruService.AddUser(this.formUser.value).subscribe();
  }

}
