import { Component, OnInit } from '@angular/core';

import { RenovationItem } from '../renovationitem';
import { RenovationitemService } from '../renovationitem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  renovationItems: RenovationItem[] = [];

  constructor(private renovationItemService: RenovationitemService) { }

  ngOnInit() {
    this.getRenovationItems();
  }

  getRenovationItems(){
    this.renovationItemService.getRenovationItems()
          .subscribe(renovationItems => this.renovationItems = renovationItems.slice(0,4));
  }


  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '{your-app-id}',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : '{api-version}'
  //   });
      
  //   FB.AppEvents.logPageView();   
      
  // };

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "https://connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));

}
