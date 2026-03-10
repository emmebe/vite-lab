import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaReact, FaRocket, FaHeart, FaCode } from 'react-icons/fa'
import viteLogo from '/vite.svg'
import './App.css'

const magazines = [
  {id: 1, title: 'architectural digest', image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Architectural_Digest_Magazine_Cover.jpg', theme: 'architecture', isAvailable: true},
  {id: 2, title: 'vogue', image: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Vogue_Magazine_Cover.jpg', theme: 'fashion', isAvailable: true},
  {id: 3, title: 'communication arts', image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Communication_Arts_Magazine_Cover.jpg', theme: 'design', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine => 
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red',
      }}
      >
        {zine.title}
      </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: '1925',
  image: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
  width: '264',
  height: '400'
};

function BookShelf() {
  return (
    <div>
      <h2>{book.title} ({book.year})</h2>
      <p>by {book.author}</p>
        <img 
          className="bookCover"
          src={book.image} 
          alt={book.title + ' cover'}
          style={{
            width: book.width,
            height: book.height
          }} />
    </div>
  );
}

function MagicButton() {
  return (
    <>
      <h3>This is a magic button.</h3>
      <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MagicButton />
      <BookShelf />
      <ZineRack />
      </header>
    </div>
  );
}

export default App
