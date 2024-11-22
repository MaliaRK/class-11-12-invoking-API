import React from 'react'
import Link from 'next/link';
import { trace } from 'console';

export default async function ApiTesting () {
const res = await fetch("https://simple-books-api.glitch.me/books", {
    method: "GET"         //by default
  });

  interface IBook {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

  const books: IBook[] = await res.json();

  console.log(books)  

  return (
    <div className='text-center'>
        <h2 className='text-2xl text-green-500 mb-[5%]'>BOOKS:</h2>
        {
        books.map((book) => {
            return (
            <Link href={`book/${book.id}`} target='_blank' key={book.id}>
                <h1>{book.name}</h1></Link>
                )
            })
        }
    </div>
  )
  }

  
//   book api token validity from 21-nov-2k24 7 days{
//   "accessToken": "bd512ec5e0dd3f9ebf2f5ad7d6159cdfbe4c67765f47582d8dfb14e15c7b4a2e"
// }