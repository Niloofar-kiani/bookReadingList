import React, { useState} from 'react';
import useBooksContext from '../hooks/useBooksContext';

const BookCreate = () => {
  const [title,setTitle] = useState('');
  const {createBook} = useBooksContext();

  const handleChange = (e) =>{
  setTitle(e.target.value);
  }
  const submit = (event) =>{
    event.preventDefault();
    createBook(title);
    setTitle('')
    
  }
  return (
    <div className='book-create'>
      <h3>Add a book</h3>
    <form onSubmit={submit}>
      <label>Title: </label>
      <input className='input' value={title} onChange={handleChange}/>
      <button className='button'>Create</button>
    </form>
    </div>
  )
}

export default BookCreate