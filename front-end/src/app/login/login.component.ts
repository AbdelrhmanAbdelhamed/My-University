import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;

  constructor( private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
   }

  ngOnInit(): void {
    this.buildSignInForm();
  }

  buildSignInForm(): void {
      this.signInForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/) ] ],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSignInFormSubmit(): void {
    this.authService.login(this.signInForm.value.email, this.signInForm.value.password);
  }

}
