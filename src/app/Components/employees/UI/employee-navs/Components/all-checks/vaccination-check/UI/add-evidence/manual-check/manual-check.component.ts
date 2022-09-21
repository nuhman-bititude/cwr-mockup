import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-check',
  templateUrl: './manual-check.component.html',
  styleUrls: ['./manual-check.component.css'],
})
export class ManualCheckComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  PartlyVaccinated() {
    this.router.navigateByUrl('/vaccination/add-partly-vaccinated');
  }
  MedicalExemption() {
    this.router.navigateByUrl('/vaccination/add-medical-exemption');
  }
  PersonalObjection() {
    this.router.navigateByUrl('/vaccination/add-personal-objection');
  }
}
