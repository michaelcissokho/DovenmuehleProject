/**
 * Test the NewStringPage container
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line prettier/prettier
import {
  render,
  fireEvent,
} from 'react-testing-library';
import NewStringPage, { mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { changeString } from '../actions';

let store;

beforeAll(() => {
  store = configureStore({});
});

describe('<NewStringPage />', () => {
  it('should render and match the snapshot', () => {
    const newStringPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewStringPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(newStringPage).toMatchSnapshot();
  });

  it('should start with Light theme and toggle to Dark Upon Click', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewStringPage />
        </BrowserRouter>
      </Provider>,
    );

    const inputBox = getByTestId('inputBox');
    const classList = Object.values(inputBox.classList);
    expect(classList[1]).toBe(`fOXpjI`);

    const button = getByText('Toggle Theme');
    fireEvent.click(button);

    const newClassList = Object.values(inputBox.classList);

    // eslint-disable-next-line prettier/prettier
    expect(newClassList[1]).toBe(`hGYcCd`)
  });

  describe('form submission', () => {
    it('should produce success message for valid string', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewStringPage />
          </BrowserRouter>
        </Provider>,
      );

      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const newText = 'hello world';

      result.handleChangeString({ target: { value: newText } });
      expect(dispatch).toHaveBeenCalledWith(changeString(newText));
    });
    it('should return alert when trying to submit invalid string', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation();
      const { getByPlaceholderText, getByText } = render(
        <Provider store={store}>
          <BrowserRouter>
            <NewStringPage />
          </BrowserRouter>
        </Provider>,
      );

      const input = getByPlaceholderText('New String');
      fireEvent.change(input, { target: { value: '      ' } });

      const submitButton = getByText('Submit');
      fireEvent.click(submitButton);

      // eslint-disable-next-line prettier/prettier
      expect(alertMock).toHaveBeenCalled();
    });
  });
});
