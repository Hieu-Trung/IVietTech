import React, { useEffect, useState } from 'react'

const FetchListRendery = () => {
    const [listData, setListData] = useState([])
    useEffect(()=>{
        getApi()
        console.log(setListData);
    },[])
    async function getApi() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await response.json();
        setListData(jsonData.id);
      }
  return (
    <div>{listData}</div>
  )
}

export default FetchListRendery