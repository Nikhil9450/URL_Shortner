import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Home = () => {
  const [apidata,setApidata] = useState(null);
  useEffect(()=>{
    axios.get("http://localhost:3000/")
    .then((res)=>{
      const data = res.data;
      setApidata(data);
    })

    useEffect(()=>{
      console.log("this is api data",apidata);

    },[apidata]);
  })
  return (
    <div>Home</div>
  )
}

export default Home