import { PartlyVaccinatedService } from './../add-evidence/manual-check/partly-vaccinated.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-check',
  templateUrl: './submit-check.component.html',
  styleUrls: ['./submit-check.component.css'],
})
export class SubmitCheckComponent implements OnInit {
  timer: boolean = true;
  firstDoseDate: string;
  secondDoseDate: string;
  constructor(
    private VaccineService: PartlyVaccinatedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.timer = false;
    }, 3000);

    try {
      this.firstDoseDate =
        this.VaccineService.firstDoseDate.toString() +
        ' ' +
        this.VaccineService.firstDoseMonth +
        ' ' +
        this.VaccineService.firstDoseYear.toString();
      this.secondDoseDate =
        this.VaccineService.SecondDoseDate.toString() +
        ' ' +
        this.VaccineService.SecondDoseMonth +
        ' ' +
        this.VaccineService.SecondDoseYear.toString();
    } catch (error) {
      this.router.navigateByUrl('vaccination/add-partly-vaccinated');
    }
  }
}
