import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.component.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  title = 'Profile Component';

  constructor() {

  }

  ngOnInit() {
  }
}
