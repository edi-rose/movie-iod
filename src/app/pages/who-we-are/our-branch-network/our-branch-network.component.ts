import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-branch-network',
  templateUrl: './our-branch-network.component.html',
  styleUrls: ['./our-branch-network.component.scss']
})
export class OurBranchNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
        document.getElementById("eight").innerHTML = '8';
    }, 1000);

    setTimeout(function(){
        document.getElementById("twohundred").innerHTML = '200';
    }, 1000);

  }

}
