import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from './app-service';


interface IContact
{
  id: number;
  name: string;
  email: string;
}
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contact,FormsModule,CommonModule,About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
  
export class App {
  title = 'Hi Everyone';
  hero = 'shaktiman';
  srcUrl = "https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png";


  constructor(private appser: AppService)
  {

  }

  firstsize = "firstsizecss";
  firstbackcolorcss = "firstbackcolorcss";

  firstCssArr = ["first", "firstsizecss", "firstbackcolorcss"];

  firstCssObj =
    {
      first: true,
      firstsizecss: true,
      firstbackcolorcss:true
    }
  
  hastrue = true;
  firstStyle = { "color": "black", "background-color": "yellow" };

  secondStyle = this.hastrue ? "red" : "green";
  fontsizeStyle = "20px";
  


  UserName = "Bitu";

  

  getResult(a:any)
  {
    alert(a+" is a value");
  }

  getEventValue(event:any)
  {
    console.log(event);
  }



  cars = ['BMW', 'NANO', 'AUDI'];
  sports = [
            { id: 1, name: 'cricket' },
            { id: 2, name: 'hockey' },
            { id: 3, name: 'kabadi' }
  ]

  contacts:IContact[]= [
    {
    id: 1,
    name: 'sachin',
    email: 'sachin@gmail.com',
    
  },
    {
    id: 2,
    name: 'virat',
    email: 'virat@gmail.com'
    },
      {
    id: 3,
    name: 'dhoni',
    email: 'dhoni@gmail.com'
  },
  ]


  isCarAvailable = true;

  SwitchVar = "K";


  fun(value: any)
  {
    alert(value);
  }

  login()
  {
    this.appser.setAuthdetails("true");
  }
  
  logout()
  {
    this.appser.setAuthdetails("false");
  }

}
