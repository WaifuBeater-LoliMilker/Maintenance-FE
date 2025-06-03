import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-dynamic-tabs',
  standalone: true,
  templateUrl: './dynamic-tabs.component.html',
})
export class DynamicTabsComponent {
  @Input() tabs: Tab[] = [];
  @Output() tabRemoved = new EventEmitter<string>();
  @Output() tabSelected = new EventEmitter<Tab>();

  selectTab(tabId: string) {
    this.tabs.forEach((tab) => (tab.active = tab.id === tabId));
    const selected = this.tabs.find((t) => t.id === tabId);
    if (selected) this.tabSelected.emit(selected);
  }

  removeTab(tabId: string) {
    const index = this.tabs.findIndex((t) => t.id === tabId);
    const wasActive = this.tabs[index]?.active;
    this.tabs.splice(index, 1);
    if (wasActive && this.tabs.length) this.tabs[0].active = true;
    this.tabRemoved.emit(tabId);
  }
}

export interface Tab {
  id: string;
  title: string;
  content: string;
  active: boolean;
}
