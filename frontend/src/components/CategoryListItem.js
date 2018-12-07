import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoryListItem = ({ category }) => {
  return (
    <li>
      <NavLink to={`/${category.path}`}>
        {category.name}
      </NavLink>
    </li>
  );
};

CategoryListItem.propTypes = {
  category: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryListItem;
