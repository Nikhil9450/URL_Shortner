import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'


const Home = () => {
  const [apidata,setApidata] = useState(null);
  const urlRef = useRef(null)
    useEffect(()=>{
      axios.get("http://localhost:3000/",{ withCredentials: true})
      .then((res)=>{
        const data = res.data;
        setApidata(data);
      })
    },[])
    useEffect(()=>{
        console.log("this is api data",apidata);
      },[apidata]);

    const generateShortUrl =async()=>{
      const url = urlRef.current.value;
      await axios.post("http://localhost:3000/url",{url},{ withCredentials: true})
      .then((res)=>console.log("response from server------>",res.data))
      .catch((err)=>console.log("error---------->",err))
    }  

    const visitUrl = (shortId)=>{
      window.location.href = `http://localhost:3000/${shortId}`;
    }
  return (
    <div>
      <input type="text" ref={urlRef} />
      <button onClick={generateShortUrl}>Generate Short URL</button>
      <div>
        {apidata ? apidata.urls.map((element, index) => (
          <p key={index}>
            {element.redirectURL} | {element.shortId} | {element.visitHistory.length} <span><button onClick={() => visitUrl(element.shortId)} >visit</button></span>
          </p>
        )) : ''}
      </div>
    </div>
  )
}

export default Home