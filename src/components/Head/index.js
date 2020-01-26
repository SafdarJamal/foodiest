import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Foodiest</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired
};

export default Head;
