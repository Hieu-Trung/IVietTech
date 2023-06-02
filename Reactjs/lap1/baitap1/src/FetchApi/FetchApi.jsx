import React, { useEffect, useState } from 'react'
import Loading from './loading.gif'


const FetchApi = () => {
    const [fetchApi, setFetchApi] = useState([])
    const [ loading, setLoading] = useState(true)
    useEffect(() => {
        getFetchApi()
    },[])
    async function getFetchApi() {
        const response = await fetch("http://ip-api.com/json");
        const jsonData = await response.json();
        setLoading(false)
        setFetchApi(jsonData.query)
      }
    return (
        <div>
        <p>IP: {loading  && <img src={Loading}/>}{fetchApi}</p>
        </div>
    )
}

export default FetchApi