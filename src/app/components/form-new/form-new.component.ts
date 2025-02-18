import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-form-new',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-new.component.html',
  styleUrl: './form-new.component.css'
})
export class FormNewComponent {
  @Output() newEventEmit: EventEmitter<INew> = new EventEmitter

  newPost: INew = {title: '', image: '', message: '', date: ''}
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title:   new FormControl('',[Validators.required]),
      image:   new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
      date:    new FormControl('',[Validators.required])
    })
  }

  hasError(field: string): boolean {
    let error = false
    if(this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched)){
      error = true
    }
    return error
  }

  getMessageError(field: string) {
    return `El campo ${field} es obligatorio`
  }

  onSubmit() {
    this.newPost = this.form.value
    console.log("Enviando la nueva noticia: " , this.newPost )
    this.newEventEmit.emit(this.newPost)
  }
}
