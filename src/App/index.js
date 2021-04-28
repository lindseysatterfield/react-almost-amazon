import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import firebaseConfig from '../helpers/apiKeys';
import AuthorForm from '../AuthorForm';
import { getAuthors } from '../helpers/data/authorData';
import './App.scss';
import AuthorCard from '../components/AuthorCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);
  console.warn(authors);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
        formTitle='Author Form'
        setAuthors={setAuthors}
      />
      <hr/>
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

export default App;
