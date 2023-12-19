import List from './components/List'
import Details from './components/Details';
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="users">
      <List onSelectUser = {setUser} selectUser={user.id}/>
      {user.id ? <Details id={user.id} /> : null}
    </div>
  );
}

export default App
