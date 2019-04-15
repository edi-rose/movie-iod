import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-council',
  templateUrl: './our-council.component.html',
  styleUrls: ['./our-council.component.scss']
})
export class OurCouncilComponent implements OnInit {

  // EDIT BELOW TO UPDATE INFORATION OF COUNCILLORS
  titledCouncillors = [
    { fullname: 'Liz Coutts',
      role: 'President',
      credentials: 'ONZM, CFInstD',
      img: '/../../../assets/2_Our council/Liz-Coutts.png'
    },
    { fullname: 'Alan Isaac',
      role: 'Vice President',
      credentials: 'CNZM, CFInstD',
      img: '/../../../assets/2_Our council/Alan-Isaac.png'
    }
  ]
  councillors = [
    { fullname: 'Dr Helen Anderson',
      role: '',
      credentials: 'QSO, CFInstD',
      img: '/../../../assets/2_Our council/Helen-Anderson.png'
    },
    { fullname: 'Des Hammond',
      role: '',
      credentials: 'CFInstD',
      img: '/../../../assets/2_Our council/Des-Hammond.png'
    },
    { fullname: 'Julia Hoare',
      role: '',
      credentials: 'CMInstD',
      img: '/../../../assets/2_Our council/Julia-Hoare.png'
    },
    { fullname: 'Jackie Lloyd',
      role: '',
      credentials: 'CMInstD',
      img: '/../../../assets/2_Our council/Jackie-Lloyd.png'
    },
    { fullname: 'Simon Lockwood',
      role: '',
      credentials: 'CMInstD',
      img: '/../../../assets/2_Our council/Simon-Lockwood.png'
    },
    { fullname: 'Vincent Pooch',
      role: '',
      credentials: 'CFInstD',
      img: '/../../../assets/2_Our council/Vincent-Pooch.png'
    },
    { fullname: 'Geoff Thomas',
      role: '',
      credentials: 'CFInstD',
      img: '/../../../assets/2_Our council/Geoff-Thomas.png'
    },
    { fullname: 'Clayton Wakefield',
      role: '',
      credentials: 'CMInstD',
      img: '/../../../assets/2_Our council/Clayton-Wakefield.png'
    },
    { fullname: 'Sarah-Jane Weir',
      role: '',
      credentials: 'CMInstD',
      img: '/../../../assets/2_Our council/Sarah-Jane.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
