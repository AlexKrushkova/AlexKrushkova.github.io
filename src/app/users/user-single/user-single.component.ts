import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(private userService: UserService,
    private route: ActivatedRoute) 
    {}
    
    ngOnInit() {

    //grab the username out of the url     
    this.route.params.subscribe(params => {
      const id = params['id'];
      // use the userService to get the data
      this.userService
      .getUser(id)
      .subscribe(user => this.user = user);
      // bind that to the user variable
      
    });
  }
}
