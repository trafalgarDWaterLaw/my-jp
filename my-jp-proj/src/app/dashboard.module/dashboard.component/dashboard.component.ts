import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard Component';

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  gotoProfile() {
    debugger;
    this.router.navigate(['/profile']);
  }
}
