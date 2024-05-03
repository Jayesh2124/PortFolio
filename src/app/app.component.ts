import { AfterViewInit, Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent  {
  
  constructor(private observer: BreakpointObserver ){
  }
  isDropdownVisible = false;
  title = 'TailApplication';
  imagePath: string = './assets/Images/Profile-bg.png'; 

  @ViewChild('mobile_menu_button') menuBtn !:ElementRef;
  @ViewChild('mobile_menu') mobile_menu !:ElementRef;

  toggel(){
    this.mobile_menu.nativeElement.classList.toggle("hidden");
  }
}
