import { useState , useEffect } from "react";

function useCurrencyinfo(curr){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[curr]))
    },[curr])
    return data;
}

export default useCurrencyinfo;