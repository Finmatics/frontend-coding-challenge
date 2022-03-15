import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable({ providedIn: 'any' })
export class DashboardEffects {

  constructor(private readonly actions$: Actions) {}
}
