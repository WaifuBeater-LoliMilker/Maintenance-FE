import { Component, OnInit } from '@angular/core';
import { Factories, ManagersService } from '../../../services/managers/managers.service';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.css']
})
export class FactoriesComponent implements OnInit {

  constructor(private service:ManagersService) { }

  ngOnInit() {
    this.service.getAllFactories().subscribe({
      next: (data) => (this.factories = data),
      error: (err) => console.error('Failed to load factories', err),
    });
  }
  factories: Factories[] = [];
}
