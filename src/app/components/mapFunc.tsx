import React from 'react'

const simpleMapFunc = () => {

interface IBook {
  title: string;
  id: number;
}

const books: IBook[] = [
  {
    title: "the day",
    id: 1
  },
  {
    title: "the night",
    id: 2
  }
]

  return (
    <div>
      { books.map((book) => {
        return <div key={book.id}>
          {book.id}
          <h2>{book.title}</h2>
        </div>
      })
      }
    </div>
  )
}

export default simpleMapFunc
