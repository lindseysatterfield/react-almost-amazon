import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../AuthorForm';

function AddAuthor({ setAuthors }) {
  return (
    <div>
      <AuthorForm
        formTitle='Author Form'
        setAuthors={setAuthors}
      />
    </div>
  );
}

AddAuthor.propTypes = {
  setAuthors: PropTypes.func.isRequired
};

export default AddAuthor;
