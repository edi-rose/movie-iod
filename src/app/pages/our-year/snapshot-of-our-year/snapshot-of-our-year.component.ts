import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot-of-our-year',
  templateUrl: './snapshot-of-our-year.component.html',
  styleUrls: ['./snapshot-of-our-year.component.scss']
})
export class SnapshotOfOurYearComponent implements OnInit {

  // EDIT THIS CODE TO UPDATE HTML CONTENT //
  thoughtLeadershipStats = [
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 17,
      statText: 'submissions to Government',
      statChange: '(8 in 2017)',
      description: 'We made submissions on a wide range of governance issues.'
    },
    {
      col: 'col-md-6',
      blockSize: 'twoxone h-100',
      statNumber: 25,
      statText: 'media statements',
      statChange: '(11 in 2017)',
      description: 'We also began to markedly increase our social media engagement across our social media channels, spreading the influence of good governance.'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: '304,489',
      statText: 'Website visits',
      statChange: '(246,547 in 2017)',
      description: 'demonstrating the importance of our digital infrastructure.'
    }
  ];

  raisingStandardsStatsFirstRow = [
    {
      col: 'col-md-6 h-80',
      blockSize: 'twoxone',
      statNumber: 173,
      statText: 'new Chartered Members',
      statChange: '(121 in 2017)',
      description: 'We are committed to professionalising governance and in 2018 we continued to see growth of our Chartered Membership pathway.'
    },
    {
      col: 'col-md-6 h-80',
      blockSize: 'twoxone',
      statNumber: 68,
      statText: 'Boardwide Membership',
      statChange: '(53 in 2017)',
      description: 'We encourage organisations to demonstrate their commitment to governance best practice by becoming BoardWide members.'
    }
    ]

    raisingStandardsStatsSecondRow = [
    {
      col: 'col-md-6 h-80',
      blockSize: 'twoxone',
      statNumber: 3,
      statText:'webcasts accessed by 1,618 people',
      statChange: '(new initiative)',
      description: 'We developed a series of webcasts based around the three 𝘞𝘩𝘢𝘵 𝘔𝘢𝘵𝘵𝘦𝘳𝘴 themes: Stakeholder Engagement, Culture and Ethics, and A World of Data.'
    }
  ];

  inspireStats = [
    {
      col: 'col-md-6',
      blockSize: 'twoxone',
      statNumber: 13,
      statText: 'Future Directors were appointed to host boards',
      statChange: '(14 in 2017)',
      statChangeClass: 'leftAlignedStatChange',
      description: 'The total number of Future Directors appointed since the programme\'s inception is now 51'
    },
    {
      col: 'col-md-6',
      blockSize: 'twoxone upside-down',
      statNumber: 20,
      statText: 'mentees selected from 76 applicants for Mentoring for Diversity.',
      description: '(24 in 2017)',
      statChangeClass: 'leftAlignedStatChange',
      statDown: 'statDown'
    }
  ];

  buildEngagementStatsFirstRow = [
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: '9,071',
      statText: 'total membership',
      statUp: 'statUp',
      description: '(8,686 in 2017)'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 215,
      statText: 'branch events',
      statUp: 'statUp',
      description: '(188 in 2017)'
    },
    {
      col: 'col-md-6 h-80',
      blockSize: 'twoxone',
      statNumber: 597,
      statText: 'attendees at our annual leadership conference',
      statChange: '(469 in 2017)',
      description: 'Satisfaction was 95%',
      descriptionUp: '(93% in 2017)'
    }
  ]
    buildEngagementStatsSecondRow = [

    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: 26,
      statText: 'assignments for DirectorSearch',
      statUp: 'statUp',
      description: '(23 in 2017)'
    },
    {
      col: 'col-md-3',
      blockSize: 'onexone',
      statNumber: '3.7%',
      statUp: 'statUp',
      description: 'more Director Vacancies placed'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
