import React from 'react';
// import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Products from '../components/Products';
import { useGetProductsQuery } from '../slices/productsApiSlice';

import Loader from '../components/Loader';
import Message from '../components/Message';
// import axios from 'axios';

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      ;
    </>
  );
};

export default HomeScreen;
