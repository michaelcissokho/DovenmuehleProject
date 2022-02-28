/* eslint-disable no-alert */
import React, { useState, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import watchStringAddition from './saga';
import addStringReducer from './reducer';
import Input from './Input';
import {
  stringSelector,
  addStringErrorSelector,
  addStringSuccessSelector,
} from './selectors';
import { sendString, resetStringForm, changeString } from './actions';

// eslint-disable-next-line prettier/prettier
const NewStringPage = ({ string, handleChangeString, handleSendString, resetStringFormRedux, success, error }) => {
  useInjectReducer({ key: 'addStringForm', reducer: addStringReducer });
  useInjectSaga({ key: 'addStringForm', saga: watchStringAddition });
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    resetStringFormRedux();
  }, [reRender]);

  const [theme, setTheme] = useState('light');

  // passes prop type of theme to input component
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // handles submission of form
  const handleSubmit = e => {
    e.preventDefault();
    const onlyHasWhiteSpace = !string.replace(/\s/g, '').length;
    if (onlyHasWhiteSpace) {
      alert('Cannot Submit String With Only Whitespace, Please Try Again');
      setReRender(!reRender);
    } else {
      handleSendString(string);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {success && (
        <h3 style={{ color: 'green' }}> Successfully Added String </h3>
      )}
      {error && (
        <h3 style={{ color: 'red' }}>
          Error... Could Not Add String, Please Try Again
        </h3>
      )}
      <h1>Add A New String:</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            theme={theme}
            placeholder="New String"
            value={string}
            onChange={handleChangeString}
            name="string"
            data-testid="inputBox"
            required
          />
          <button type="submit"> Submit </button>
        </form>
        <h3>{theme.toUpperCase()} mode</h3>
        <button type="button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <br />

      <Link to="/"> View All Strings </Link>
    </div>
  );
};

NewStringPage.propTypes = {
  string: PropTypes.string,
  handleSendString: PropTypes.func,
  resetStringFormRedux: PropTypes.func,
  handleChangeString: PropTypes.func,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  string: stringSelector(),
  error: addStringErrorSelector(),
  success: addStringSuccessSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleSendString: string => dispatch(sendString(string)),
    resetStringFormRedux: () => dispatch(resetStringForm()),
    handleChangeString: e => dispatch(changeString(e.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// eslint-disable-next-line prettier/prettier
export default compose( withConnect, memo )(NewStringPage);