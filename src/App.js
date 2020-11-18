import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './store/user'

function App() {
  const users = useSelector(state => state.user)
  const dispatch = useDispatch()

  const addNewUser= () => {
    const user = { 
      name: 'Daniel',
      age: '20'
    }
    
    dispatch(addUser(user))
  }

  return (
      <div>
          <button onClick={addNewUser}>Cadastrar</button>
          
          { users &&  users.map(user => user.name )}
      </div>
  );
}

export default App;
