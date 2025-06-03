import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
  selector: 'app-managers',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CdkMenu,
    CdkMenuTrigger,
  ],
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.css',
})
export class ManagersComponent implements OnInit {
  isSideNavSideMode = false;
  isSideNavOpened = false;

  ngOnInit(): void {
    this.isSideNavSideMode =
      localStorage.getItem('is_sidenav_side_mode') == 'side';
    this.isSideNavOpened = localStorage.getItem('is_sidenav_opened') == 'true';
  }
  onDrawerOpenChange(open: boolean) {
    this.isSideNavOpened = open;
    localStorage.setItem('is_sidenav_opened', open.toString());
  }
  onDrawerModeChange() {
    this.isSideNavSideMode = !this.isSideNavSideMode;
    localStorage.setItem(
      'is_sidenav_side_mode',
      this.isSideNavSideMode ? 'side' : 'over'
    );
  }
}
