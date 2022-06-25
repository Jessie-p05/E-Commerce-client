import { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React, { useState } from "react";
const axios = require('axios').default;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
  const getProducts = async () => {
    try {
    const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` :"http://localhost:5000/api/products");
    // console.log("hiiiiiii",res)
    setProducts(res.data)
    }catch(err){
    console.log("err from axios",err)
    }
  }
  getProducts()
  },[cat])

  

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
