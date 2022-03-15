import { Action, createReducer } from '@ngrx/store';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface State {
  isLoading: boolean;
}

export interface DashboardPartialState {
  readonly [DASHBOARD_FEATURE_KEY]: State;
}

export const initialState: State = {
  isLoading: true,
};

const dashboardReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action): State {
  return dashboardReducer(state, action);
}
