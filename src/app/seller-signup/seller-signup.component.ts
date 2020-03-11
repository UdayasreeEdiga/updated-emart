import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

 seller:Seller;
  msg: string;
  isNew: boolean;



  constructor(private service: SellerService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params.id;

    if (id) {
      this.isNew = false;
      this.service.getById(id).subscribe(
        (data) => {
          this.seller = data;
        }
      );
    } else {
      this.isNew = true;
      this.seller = {
        id: 0,
        username: "",
        mobileNumber:"",
        password: "",
        confirmPassword:"",
        brand:""
      };
    }
  }

  save() {
    let ob: Observable<User>;

    if (this.isNew) {
      ob = this.service.add(this.seller);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/adc");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
    
  }

}
