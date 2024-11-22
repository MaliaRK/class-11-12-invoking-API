import React from 'react'

interface Params {
    params: {
        id: string;
    }
}

interface BookDetail {
    id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  'current-stock': number;
  available: boolean;
}

const DynamicPage = async ({params}: Params) => {

    const {id} = await params;

    const result = await fetch(`https://simple-books-api.glitch.me/books/${id}`);

    const bookDetail: BookDetail = await result.json();

    console.log(bookDetail);

    return (
    <div className='text-center'>
        <h1 className='text-green-400 my-[1%]'>Book ID: {id} </h1>
        <h2>Name: {bookDetail.name}</h2>
        <h2>Author: {bookDetail.author}</h2>
        <h2>Price: {bookDetail.price}</h2>
    </div>
  )
}

export default DynamicPage