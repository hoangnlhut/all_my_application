import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Form } from './form/form';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [Header, Form, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
