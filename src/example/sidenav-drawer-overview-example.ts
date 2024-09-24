import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

/** @title Basic drawer */
@Component({
  selector: 'sidenav-drawer-overview-example',
  templateUrl: 'sidenav-drawer-overview-example.html',
  styleUrl: 'sidenav-drawer-overview-example.css',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule,MatToolbarModule, MatButtonModule, MatListModule],
})
export class SidenavDrawerOverviewExample {
  items = Array.from({ length: 40 }, (_, index) => `item ${index}`);
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */