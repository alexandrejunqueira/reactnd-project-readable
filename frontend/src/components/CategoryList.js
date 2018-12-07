import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ categories }) => {
  return (
    <div>
      <h3>Categorias</h3>
      <ul>
        {Object.keys(categories).map((key) => (
          <CategoryListItem key={categories[key].path} category={categories[key]} />
        ))}
      </ul>
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default CategoryList;
