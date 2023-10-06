import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus('Under construction'));
  }, [dispatch]);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
