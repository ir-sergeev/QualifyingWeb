import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versions-list',
  templateUrl: './versions-list.component.html',
  styleUrls: ['./versions-list.component.scss'],
})
export class VersionsListComponent implements OnInit {
  public items: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    19,
    50,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
  ];

  constructor() {}

  ngOnInit(): void {}
}
