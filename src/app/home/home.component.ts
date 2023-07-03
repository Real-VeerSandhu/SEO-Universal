import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList"
    [housingLocation]="housingLocation"></app-housing-location> 
  </section> 
`, // why [] = "", name references housing-location
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []; // set empty array
  housingService: HousingService = inject(HousingService); // inject data

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations(); // assign data to correct value
  } 
}