import React, {useState, SyntheticEvent} from 'react';
import Wrapper from './Wrapper';
import { Redirect } from 'react-router-dom';

const ProductsCreate = () => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const create = async(e: SyntheticEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/products',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        image
      })
    });
    setRedirect(true);
  };

  if(redirect){
    return <Redirect to={'/admin/products'} />
  }

  return (
    <Wrapper>
      <form onSubmit={create}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="title"
                  onChange={ e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" name="image"
                onChange={ e => setImage(e.target.value)} />
        </div>
        <button className="btn btn-outline-secondary">Create</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
