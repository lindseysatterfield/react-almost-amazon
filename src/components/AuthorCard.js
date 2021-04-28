import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/authorData';

const AuthorCard = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  setAuthors
}) => {
  const handleClick = () => {
    deleteAuthor(firebaseKey).then((authorArray) => setAuthors(authorArray));
  };

  return (
    <Card body>
      <CardTitle tag="h5">{firstName}</CardTitle>
      <CardTitle tag="h5">{lastName}</CardTitle>
      <CardText>{email}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Author</Button>
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;
