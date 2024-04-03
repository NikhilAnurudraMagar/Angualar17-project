import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './component/create-bin/firebaseconfig';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor()
{
   initializeApp(firebaseConfig);
}
}
