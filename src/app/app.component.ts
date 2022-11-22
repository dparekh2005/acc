import {Component, OnDestroy, OnInit} from '@angular/core';
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'acc';
  //@ts-ignore
  mediaSub: Subscription;
  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((changes:MediaChange[])=>{
      console.log(changes);
      })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
