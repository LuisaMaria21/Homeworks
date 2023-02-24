import { useState } from "react"
import { AddCategory } from "./AddCategory";
import  GiftGrid  from "./GiftGrid";
import React from 'react';
import useCounter from './useCounter';
import useFetch from "./UseFetch";


function ComponentApp() {
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <div>
      <h1>Challenge useFetch</h1> 
      <p>{data[0].quote}</p>
      <p>- {data[0].author}</p>
    </div>
  );
}

export default ComponentApp;


