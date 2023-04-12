import React, {useState, useEffect} from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('데이터 받아옴');
      setProducts(data);
    });

    return () => {
      console.log('청소!')
    }
  }, []);
  
  return (
    <>
      <ul>
        {products.map((product) => (
        <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
        </li>
        ))}
      </ul>
      <button onClick={()=> setCount(
        (prev) => prev + 1)}
        >
        {count}
      </button>
    </>
  );
}