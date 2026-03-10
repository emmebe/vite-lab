import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaReact, FaRocket, FaHeart, FaCode } from 'react-icons/fa'
import viteLogo from '/vite.svg'
import './App.css'

const recentMovies = [
  {id: 1, title: 'The Grey Man', image: 'https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png', theme: 'action', isGood: true},
  {id: 2, title: 'Hoodwinked', image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Hoodwinked.jpg', theme: 'comedy', isGood: true},
  {id: 3, title: 'Point Break', image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Pointbreaktheatrical.jpg', theme: 'action', isGood: false},
];

function MovieShelf() {
  const listMovies = recentMovies.map(movie => 
    <li
      key={movie.id}
      style={{
        color: movie.isGood ? 'green' : 'red',
      }}
      >
        {movie.title}
        <img 
          className="moviePoster"
          src={movie.image}
          alt={movie.title + ' poster'}
          width="100px"
          height="100%"
        />
      </li>
  );
  return (
    <ul>{listMovies}</ul>
  )
}

const books = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: '1997',
    isGood: true,
  },
  {
    id: 2,
    title: 'The Familiar',
    author: 'Leigh Bardugo',
    year: '2024',
    isGood: false,   
  },
  {
    id: 3,
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    year: '1996',
    isGood: true,
  }
];

function BookShelf() {
  const listBooks = books.map(book =>
    <div key={book.id}>
      <h3>{book.title} {book.year}</h3>
      <p>by {book.author}</p>
    </div>
  );
  return (
    <div>{listBooks}</div>
  )
}

function GenreFilter() {
  return (
    <div>
      <h3>Filter by Genre</h3>
      <button>Action</button>
      <button>Comedy</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Entertainment Library</h1>
        <GenreFilter />
        <h2>Movies</h2>
        <MovieShelf />
        <h2>Books</h2>
        <BookShelf />
      </header>
    </div>
  );
}

export default App
