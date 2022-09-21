import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartlyVaccinatedService {
  firstDoseDate: number;
  firstDoseMonth: string;
  firstDoseYear: number;

  SecondDoseDate: number;
  SecondDoseMonth: string;
  SecondDoseYear: number;
  constructor() {}
}
