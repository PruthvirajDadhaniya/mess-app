import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Content } from './content/content';
import { Footer } from './footer/footer';
// Footer removed because it's not used in the template

@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [
    Header,
    Content,
    Footer
  ],
  templateUrl: './customer-home.html',
  styleUrls: ['./customer-home.css'],
})
export class CustomerHome {

}
