import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './helpers/data/authorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  firstName,
  lastName,
  email,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
      <>
      <div className='author-form'>
        <form
          id='addAuthorForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>First Name: </label>
          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            value={author.firstName}
            onChange={handleInputChange}>
          </input>
          <label>Last Name: </label>
          <input
            name='lastName'
            type='text'
            placeholder=''
            value={author.lastName}
            onChange={handleInputChange}>
          </input>
          <label>Email: </label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={author.email}
            onChange={handleInputChange}>
          </input>
          <button type='submit'>Submit</button>
        </form>
      </div>
      </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
