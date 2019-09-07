import React from 'react';
import { Checkbox } from 'antd';
import { addCatagory, removeCatagory} from '../../actions/user';

const categories = [
  "Famous",
  "Actors",
  "Artists",
  "Politics",
  "Science",
  "Singers",
  "Sport",
]

const updateCategory = (checked, category, dispatch) => {
  checked ? dispatch(addCatagory(category)) : dispatch(removeCatagory(category))
}

export const CategorySettings = (props) => (
  <div>
    <h2 className="theme">Categories</h2>
    <div style={{ width: '100%' }}    >
      {categories.map(cat => 
        <Checkbox
          checked={props.user.categories.includes(cat)}
          onChange={value => updateCategory(value.target.checked, cat, props.dispatch,)}
          key={cat}>
          {cat}
        </Checkbox>  
      )}
    </div>
  </div>
)