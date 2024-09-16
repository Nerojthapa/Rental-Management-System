import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SearchResultsScreen() {
  const { keyword } = useParams(); // Get the search keyword from the URL
  const [products, setProducts] = useState([]); // Assuming you're searching products

  useEffect(() => {
    // Fetch filtered products based on keyword
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?search=${keyword}`);
      const data = await response.json();
      setProducts(data);
    };
    
    fetchProducts();
  }, [keyword]);

  return (
    <div>
      <h1>Search Results for "{keyword}"</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsScreen;
