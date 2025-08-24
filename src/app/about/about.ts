import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppDeactivateGuardService, IDeactivate } from '../app-deactivate-guard-service';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit,IDeactivate {
  FirstName = 'Bitu Kumar';

  @Input() parentdata: string = '';
  @Output() childdata = new EventEmitter<string>();


  user = {
    id: "",
    name:""
  }

  constructor(private router: ActivatedRoute)
  {

  }

  canExit(): boolean{
    if (confirm("Are you sure you want to exit")) {
      return true;
    }
    
      return false;
    
  }

  ngOnInit(): void {
    // this.user = {
    //   id: this.router.snapshot.params['id'],
    //   name:this.router.snapshot.params['name']
    // }
    this.router.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name:data['name']
      }
    })
    // console.log(this.router.snapshot.queryParams);
    // console.log(this.router.snapshot.fragment);

    this.router.queryParams.subscribe((data) => { console.log(data) });
    this.router.fragment.subscribe((data) => { console.log(data) });

  }

  ChildToParent()
  {
    this.childdata.emit('Good Morning');
  }
}
