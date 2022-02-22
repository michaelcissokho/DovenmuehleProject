import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const selectStrings = state => state.strings || INITIAL_STATE;

const makeSelectorStrings = () =>
  createSelector(
    [selectStrings],
    state => state.strings,
  );

export { selectStrings, makeSelectorStrings };
