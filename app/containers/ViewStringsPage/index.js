import React, { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import stringReducer from './reducer';
import stringsData from './saga';
import { getStrings, resetStringPage } from './actions';
import LoadingIndicator from './LoadingIndicator/index';
import {
  stringsSelector,
  getStringErrorSelector,
  loadingStringsSelector,
} from './selectors';

// eslint-disable-next-line prettier/prettier
const ViewStrings = ({ strings, onLoadPage, resetStringsRedux, loading, error }) => {
  useInjectReducer({ key: 'strings', reducer: stringReducer });
  useInjectSaga({ key: 'strings', saga: stringsData });

  useEffect(() => {
    resetStringsRedux();
    onLoadPage();
  }, []);

  const thereAreNoStrings = Boolean(strings.length === 0 && !loading && !error);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>All Strings:</h1>

      {error && (
        <h1 style={{ color: 'red' }}>
          Something Went Wrong... Please refresh the page to try again.
        </h1>
      )}
      {loading && <h3>Loading... {<LoadingIndicator />} </h3>}

      {thereAreNoStrings && (
        <h3 style={{ color: 'teal' }}>
          No Strings Here, Click The Link Below To Add One To The List !
        </h3>
      )}

      {strings.map(string => (
        <li key={uuid()}> {string} </li>
      ))}
      <br />
      <Link to="/addString">Add A String</Link>
    </div>
  );
};

ViewStrings.propTypes = {
  strings: PropTypes.array,
  onLoadPage: PropTypes.func,
  resetStringsRedux: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  strings: stringsSelector(),
  loading: loadingStringsSelector(),
  error: getStringErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(getStrings()),
    resetStringsRedux: () => dispatch(resetStringPage()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// eslint-disable-next-line prettier/prettier
export default compose( withConnect, memo )(ViewStrings);
