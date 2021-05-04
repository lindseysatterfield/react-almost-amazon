import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import firebaseConfig from '../helpers/apiKeys';
import '../App/App.scss';
import AuthorCard from '../components/AuthorCard';

firebase.initializeApp(firebaseConfig);

function Authors({ authors, setAuthors }) {
  return (
    <div className='App'>
      {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          firstName={authorInfo.firstName}
          lastName={authorInfo.lastName}
          email={authorInfo.email}
          setAuthors={setAuthors}
        />
      ))}
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
