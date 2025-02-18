import { Component } from '@angular/core';
import { FormNewComponent } from "../form-new/form-new.component";
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-blog',
  imports: [FormNewComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  getNew(newPost: INew){
    console.log("Recogiendo nuevo post: ", newPost)
  }
}
