import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-android-messager',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './android-messager.component.html',
  styleUrl: './android-messager.component.css'
})
export class AndroidMessagerComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }


  public connectionsList:string[] = ['LTE','4G','5G'];

}
