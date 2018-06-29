import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { UserState } from '../../beans/user-state';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userStates:UserState[];
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.commonService.fetchUserStateRefData().subscribe((data:UserState[])=>{
        this.userStates=data;
        console.log(data);
    });
  }

}
