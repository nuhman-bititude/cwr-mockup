import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PartlyVaccinatedService } from '../partly-vaccinated.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partly-vaccinated',
  templateUrl: './partly-vaccinated.component.html',
  styleUrls: ['./partly-vaccinated.component.css'],
})
export class PartlyVaccinatedComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(
    private VaccineService: PartlyVaccinatedService,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {}

  AddVaccination(form: NgForm) {
    this.VaccineService.firstDoseDate = form.value.firstDoseDay;
    this.VaccineService.firstDoseMonth = form.value.firstDoseMonth;
    this.VaccineService.firstDoseYear = form.value.firstDoseYear;
    this.VaccineService.SecondDoseDate = form.value.secondDoseDay;
    this.VaccineService.SecondDoseMonth = form.value.secondDoseMonth;
    this.VaccineService.SecondDoseYear = form.value.secondDoseYear;

    this.router.navigateByUrl('/vaccination/submit-evidence');
  }
  back() {
    this.location.back();
  }
}
