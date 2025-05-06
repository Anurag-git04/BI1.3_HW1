import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import BookByTitle from './components/BookByTitle'
import BookByAuthor from './components/BookByauthor'
import BookForm from './components/BookForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div className='m-4'>
      <BookForm/>
      <Books/>
      <BookByTitle/>
      <BookByAuthor author="Phil Knight"/>
    </div>
  )
}

export default App
