import { createFeatureSelector } from '@ngrx/store';
import { DASHBOARD_FEATURE_KEY, State, } from './dashboard.reducer';

export const getDashboardState = createFeatureSelector<State>(
  DASHBOARD_FEATURE_KEY
);
