import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {
  const BASEURL= 'https://todos-crud-q35d.onrender.com/'
  
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(BASEURL)

  const [userEdit, setuserEdit] = useState()

  const [modal, setmodal] = useState(false)
 
  const handleBtnClick =()=>{
      setmodal(!modal)
  }

  useEffect(()=>{
    getUsers('users')
 
  },[])

  return (
    <div className='container'>
       <nav>
        <h1>Usuarios</h1>
        <button onClick={handleBtnClick}>Agregar nuevo usuario</button></nav>
        <div className='form-container'>
           {
            modal ? <FormUser userEdit={userEdit} setuserEdit={setuserEdit} updateUser={updateUser} createUser={createUser}modal={modal} setmodal={setmodal}/> : ''
           }
        </div>
        
      <div className='card-container'>
        {
          users?.map(item =>(
            <UserCard key={Math.random()} modal={modal} setmodal={setmodal} user={item} deleteUser={deleteUser} cardId={item.id} setuserEdit={setuserEdit} updateUser={updateUser} />
          ))
        }
      </div>
    </div>
  )
}

export default App
