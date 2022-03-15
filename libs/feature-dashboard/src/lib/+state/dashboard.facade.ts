import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardPartialState } from './dashboard.reducer';

@Injectable({ providedIn: 'any' })
export class DashboardFacade {

  private get store(): Store<DashboardPartialState> {
    return this.untypedStore as Store<DashboardPartialState>;
  }

  constructor(private readonly untypedStore: Store) {}
}
