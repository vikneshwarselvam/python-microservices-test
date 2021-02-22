import React, { useState, useEffect } from 'react';
import {Product} from '../interfaces/Product';

const Main = () => {

  const [products, setProducts] = useState([] as Product[]);

  useEffect( () => {
    (
      async() => {
        const response = await fetch('http://localhost:8001/api/products');

        const products = await response.json();

        setProducts(products);
      }
    )();
  }, []);

const like = async(id: number) => {
      await fetch(`http://localhost:8001/api/products/${id}/like`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'}
      });

      setProducts(products.map(
        (p:Product) => {
          if(p.id === id){
            p.likes++;
          }

          return p;
        }
      ))
};

  return (
    <div>

<header>
 <div className="navbar navbar-dark bg-dark shadow-sm">
   <div className="container">
     <a href="#" className="navbar-brand d-flex align-items-center">
       <strong>Products</strong>
     </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
   </div>
 </div>
</header>

<main>

 <div className="album py-5 bg-light">
   <div className="container">

       <div className="row">
         { products.map(
           (p: Product) => {
             return(
               <div className="col-md-4" key={p.id}>
               <div className="card shadow-sm" >
                 <img src = {p.image} height="180" />
                 <div className="card-body">
                   <p className="card-text">{p.title}</p>
                   <div className="d-flex justify-content-between align-items-center">
                     <div className="btn-group">
                       <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=> like(p.id)}>Like</button>
                     </div>
                     <small className="text-muted">{p.likes} likes</small>
                   </div>
             </div>
             </div>
             </div>

             )
           }
         )}
   </div>
</div>
</div>

</main>
</div>
  );
};

export default Main;
