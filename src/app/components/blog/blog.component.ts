import { Component } from '@angular/core';
import { FormNewComponent } from "../form-new/form-new.component";
import { INew } from '../../interfaces/inew.interface';
import { ListNewComponent } from "../list-new/list-new.component";

@Component({
  selector: 'app-blog',
  imports: [FormNewComponent, ListNewComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  listNews: INew[] = [
    {title: 'Mi viaje a Islandia', image:'https://cdn.pixabay.com/photo/2019/11/24/14/03/nature-4649472_960_720.jpg', message:'Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu luctus laoreet turpis nullam massa sapien lobortis. Vel tempus integer hac montes litora. Maximus faucibus nostra auctor tincidunt netus duis. Ullamcorper maximus per diam nulla malesuada', date:'18/02/2025 10:50'},
    {title: 'Mi viaje a China', image:'https://cdn.pixabay.com/photo/2019/03/14/18/15/landscape-4055549_960_720.jpg', message:'Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu luctus laoreet turpis nullam massa sapien lobortis. Vel tempus integer hac montes litora. Maximus faucibus nostra auctor tincidunt netus duis. Ullamcorper maximus per diam nulla malesuada. Lobortis bibendum massa dui dis vulputate dictum. Pulvinar arcu amet purus a viverra', date:'18/02/2025 12:30'}
  ]

  getNew(newPost: INew){
    this.listNews.unshift(newPost);
  }
}
