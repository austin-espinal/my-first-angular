import { Component, OnInit } from '@angular/core';

@Component({
  // use selector by attribute. see below
  // selector: '[app-servers]',
  // use selector by class. can not use by ID or pseudo classes(hover). see below
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // can use template with just element instead of external file. see below
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
