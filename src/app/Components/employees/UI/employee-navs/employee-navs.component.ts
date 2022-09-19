import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-navs',
  templateUrl: './employee-navs.component.html',
  styleUrls: ['./employee-navs.component.css'],
})
export class EmployeeNavsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  AllChecks() {
    this.router.navigate(['checks'], { relativeTo: this.route });
  }
  Communications() {
    this.router.navigate(['communications'], { relativeTo: this.route });
  }
  Notes() {
    this.router.navigate(['notes'], { relativeTo: this.route });
  }
  Documents() {
    this.router.navigate(['documents'], { relativeTo: this.route });
  }
}
