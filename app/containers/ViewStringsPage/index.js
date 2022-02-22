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
import { getStrings } from './actions';
import { makeSelectorStrings } from './selectors';

export function ViewStrings({ strings, onLoadPage }) {
  useInjectReducer({ key: 'strings', reducer: stringReducer });
  useInjectSaga({ key: 'strings', saga: stringsData });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <div>
      <h1>All Strings:</h1>
      {strings.map(string => (
        <li key={uuid()}> {string} </li>
      ))}
      <Link to="/addString">Add A String</Link>
    </div>
  );
}

ViewStrings.propTypes = {
  strings: PropTypes.array,
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectorStrings(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(getStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// eslint-disable-next-line prettier/prettier
export default compose( withConnect, memo )(ViewStrings);
