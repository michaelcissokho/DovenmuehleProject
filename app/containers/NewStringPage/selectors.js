import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

const stringForm = state => state.addStringForm || INITIAL_STATE;

const stringSelector = () =>
  createSelector(
    [stringForm],
    state => state.string,
  );

const addStringErrorSelector = () =>
  createSelector(
    [stringForm],
    state => state.error,
  );

const addStringSuccessSelector = () =>
  createSelector(
    [stringForm],
    state => state.success,
  );

export { stringSelector, addStringErrorSelector, addStringSuccessSelector };
