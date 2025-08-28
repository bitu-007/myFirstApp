import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpletemplateform',
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './simpletemplateform.html',
  styleUrl: './simpletemplateform.css'
})
export class Simpletemplateform {
  studentObj: any = {
    firstname: "",
    lastname: "",
    username: "",
    city: "",
    state: "",
    zipcode: "",
    isAgreed: false,
  }

  Indiastates =
    [{
      id: 1,
      name: 'Odisha'
},
      {
        id: 2,
        name:"Andhra Pradesh"
      },
       {
        id: 3,
        name:"Karnataka"
      },
        {
        id: 4,
        name:"Telangana"
      }
]
  
  onSubmit()
  {
    console.log(this.studentObj);
  }
}
