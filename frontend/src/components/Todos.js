import React, { useEffect } from 'react'
import axios from 'axios'

const Todos = () => {
    useEffect(() => {

       
        axios.get('http://127.0.0.1:8000/')
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)})


    }, [])

  return (
    <div>
<h1>hello</h1>
    </div>
  )
}

export default Todos