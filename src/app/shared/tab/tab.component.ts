import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: `
  <!-- sezione tabs -->
  <div class="tabs w-full">
    <div class="flex justify-center p-5">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Home</button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Best Products</button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Products to buy</button>
    </div>
  </div>
  `,
  styles: ``
})
export class TabComponent {

}
