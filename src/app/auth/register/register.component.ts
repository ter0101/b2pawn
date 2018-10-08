import { Component, OnInit } from '@angular/core';

import { PawnerRegisterService } from "../../service/pawner/register.service";
import { Pawner } from '../../modules/pawner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: PawnerRegisterService) { }

  pawner: Pawner = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.pawner.email != '' && this.pawner.password != '') {
      this.service.addPawner(this.pawner);
      this.pawner.email = '';
      this.pawner.password = '';
    }
  }
}
