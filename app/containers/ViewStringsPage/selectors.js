import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const stringReducerSelector = state => state.strings || INITIAL_STATE;

const stringsSelector = () =>
  createSelector(
    [stringReducerSelector],
    state => state.strings,
  );

const getStringErrorSelector = () =>
  createSelector(
    [stringReducerSelector],
    state => state.error,
  );

const loadingStringsSelector = () =>
  createSelector(
    [stringReducerSelector],
    state => state.loading,
  );

export {
  stringReducerSelector,
  stringsSelector,
  getStringErrorSelector,
  loadingStringsSelector,
};
