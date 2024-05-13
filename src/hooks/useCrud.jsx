import { useState } from 'react';
import axios from 'axios'

const useCrud = (BASEURL) => {

  const [response, setResponse] = useState()
  
  // GET API DATA
  const getApi=(path)=>{
    const url= `${BASEURL}${path}/`
    axios.get(url)
    .then(res => {
        setResponse(res.data)
    })
    .catch(err=> console.log(err))
  }
 // CREATE
 const createApi=(path, data)=>{
    const url= `${BASEURL}${path}/`
    axios.post(url, data)
    .then(res => {
        setResponse([...response, res.data])
    })
    .catch(err=> console.log(err))
  }
 
  // DELETE

 const deleteApi=(path,id)=>{
  const url= `${BASEURL}${path}${id}/`
  axios.delete(url)
  .then(res => {
      setResponse(response.filter( filt => (filt.id !== id)))
  })
  .catch(err=> console.log(err))
}

 // UPDATE -- patch
 const  updateApi =(path, id, data)=>{
  const url = `${BASEURL}${path}${id}/`
    axios.put(url,data)
    .then(res =>{
      setResponse(response.map(ind => ind.id === id ? res.data : ind))
    })
    .catch(err => console.log(err))
}


  return [response, getApi, createApi, deleteApi , updateApi]
}

export default useCrud