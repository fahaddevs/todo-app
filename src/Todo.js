import React, {useState, useEffect} from 'react'

const Todo = () => {

  const [subject, setSubject] = useState('');

  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {id: new Date().getTime().toString(), subject}

    if (subject){
      setTodos((todo)=>{
        return [...todo, task]
      });
      setSubject('');
    } else {
      console.log('Field required')
    }

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

        <div className='todo-wrapper'>
          {
            todos.map((todo)=>{
              const {id, subject} = todo;

              return (
                <div key={id} className='todo-item'>
                  <h3>{subject}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Todo
