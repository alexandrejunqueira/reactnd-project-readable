import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ categories }) => {
  return (
    <div>
      <h3>Categorias</h3>
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category.path} category={category} />
        ))}
      </ul>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default CategoryList;
