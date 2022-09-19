import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccination-check',
  templateUrl: './vaccination-check.component.html',
  styleUrls: ['./vaccination-check.component.css'],
})
export class VaccinationCheckComponent implements OnInit {
  constructor(private location: Location) {}
  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
