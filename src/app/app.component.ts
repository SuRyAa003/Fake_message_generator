import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalnavbarComponent } from './shared/globalnavbar/globalnavbar.component';
import { AndroidMessagerComponent } from './modules/android-messager/android-messager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GlobalnavbarComponent,AndroidMessagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
