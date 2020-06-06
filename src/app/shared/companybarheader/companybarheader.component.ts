import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companybarheader',
  templateUrl: './companybarheader.component.html',
  styles: [
  ]
})
export class CompanybarheaderComponent implements OnInit {

  CompanyName: string = 'Company';

  constructor() { }

  ngOnInit(): void {
  }

}
