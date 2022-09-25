import React, {useState, useEffect} from 'react'

const Todo = () => {

  const [subject, setSubject] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(subject);
  }

  return (
    <>
      <div className="container">
        <form className='todo-form' onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='subject' 
            id='subject' 
            placeholder='Todo' 
            value={subject}
            onChange={(e)=> setSubject(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </>
  )
}

export default Todo
