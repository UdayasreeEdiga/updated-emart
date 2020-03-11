import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User;
  msg: string;
  isNew: boolean;


  constructor(private service: UserService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params.id;

    if (id) {
      this.isNew = false;
      this.service.getById(id).subscribe(
        (data) => {
          this.user = data;
        }
      );
    } else {
      this.isNew = true;
      this.user = {
        id: 0,
        username: "",
        password: "",
        confirmPassword:"",
      };
    }
  }

  save() {
    let ob: Observable<User>;

    if (this.isNew) {
      ob = this.service.add(this.user);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/cat");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
}