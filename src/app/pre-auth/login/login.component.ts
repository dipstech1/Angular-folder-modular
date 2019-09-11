import { Component, OnInit, OnDestroy } from "@angular/core";
import { TestService } from "../../core/services/test.service";
import { AuthService } from "../../core/services/auth.service";

import { IUser } from "../../core/models/user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { HostListener } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private tst: TestService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}
  loginForm: FormGroup;
  userData: IUser[] = [];

  unsubscribe = new Subject();

  @HostListener("window:beforeunload")
  canDeactivate(): Observable<boolean> | boolean {
    if (this.loginForm.dirty) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
    this.testApi();
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.email])],
      password: ["", Validators.compose([Validators.required])]
    });
  }

  testApi() {
    // this.tst
    //   .doTest()
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe(
    //     (res: IUser[]) => {
    //       let id = res.map(user => user);
    //       console.log(id);
    //     },
    //     (error: HttpErrorResponse) => {
    //       console.log(error.status);
    //     },
    //     () => {
    //       console.log("Process done");
    //     }
    //   );
    this.userData = this.activatedRoute.snapshot.data as IUser[]
    console.log(this.userData)
  }

  async onSubmit() {
    let { email, password } = this.loginForm.value;
    if (email && password) {
      this.loginForm.markAsPristine();
      await this.authService.login("");
    }
    this.router.navigate(["/emp"]);
  }

  ngOnDestroy() {
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}
