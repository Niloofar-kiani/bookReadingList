import React,{useState} from 'react';
import useBooksContext from '../hooks/useBooksContext';


const BookEdit = ({book,onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useBooksContext();
  

  const changeHandler =(event)=>{
    setTitle(event.target.value);
  }

  const submitHandler =(event) =>{
  event.preventDefault();
  onSubmit();
  editBookById(book.id,title)
  }

  return (
    <form onSubmit={submitHandler} className='book-edit'>
      <label>Title:</label>
      <input className='input' value={title} onChange={changeHandler}></input>
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit