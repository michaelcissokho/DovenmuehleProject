/**
 * Test the NewStringPage container
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line prettier/prettier
import {
  render,
  fireEvent,
} from 'react-testing-library';
import NewStringPage from '../index';

describe('<NewStringPage />', () => {
  it('should render and match the snapshot', () => {
    const newStringPage = render(
      <BrowserRouter>
        <NewStringPage />
      </BrowserRouter>,
    );
    expect(newStringPage).toMatchSnapshot();
  });

  describe('form submission', () => {
    describe('onSubmitString', () => {
      it('should start with Light theme and toggle to Dark Upon Click', () => {
        const { getByText, getByTestId } = render(
          <BrowserRouter>
            <NewStringPage />
          </BrowserRouter>,
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

      it('instantiate an alert from the window which means the addString function did not have an error', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();

        const { getByText } = render(
          <BrowserRouter>
            <NewStringPage />
          </BrowserRouter>,
        );

        const submitButton = getByText('Submit');
        fireEvent.click(submitButton);

        expect(alertMock).toHaveBeenCalled();
      });
    });
  });
});
