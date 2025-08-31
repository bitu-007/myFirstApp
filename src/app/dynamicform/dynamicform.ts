import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamicform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamicform.html',
  styleUrl: './dynamicform.css'
})
export class Dynamicform implements OnInit {
  form!: FormGroup;
  formConfig = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      values: '',
      validators: {
        required:true
      }
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      values: '',
      validators: {
        required:true
      }
    }
  ]

  constructor(private fb:FormBuilder) {
    
  }
  ngOnInit(): void {
    this.buildForm();
  }


  buildForm()
  {
    const group: { [key: string]: any } = {};
    this.formConfig.forEach(control => {
      const validators = [];
      if (control.validators?.required) {
        validators.push(Validators.required);
      }

      group[control.name] = [control.values || ""];

    })

    this.form = this.fb.group(group);
  }
}
