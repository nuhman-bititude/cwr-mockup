import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partly-vaccinated',
  templateUrl: './partly-vaccinated.component.html',
  styleUrls: ['./partly-vaccinated.component.css'],
})
export class PartlyVaccinatedComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  AddVaccination(form) {
    console.log(form);
  }
}
