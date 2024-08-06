import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent],
  template: `
  <!-- sezione tabs -->
  <div class="tabs w-full">
    <div class="flex justify-center p-5">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"[ngClass]="{'btn-neutral': tab==1}" (click)="tab=1" >Home</button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"[ngClass]="{'btn-neutral': tab==2}" (click)="tab=2">Products to buy</button>
    </div>
  </div>

  <!-- contenuti -->
  <div class="contents">
   @if (tab==1) {
     <div class="py-10 px-6">
    <app-home/>
    </div>
   }@else{
     <div class="py-10 px-6">Tab 2</div>
   }
   </div>
  `,
  styles: ``
})
export class TabComponent {
 tab: number = 1; 

}
