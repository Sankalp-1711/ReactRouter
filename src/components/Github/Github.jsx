import React from 'react'
import  { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data =  useLoaderData()
    // const [data, setData] =  useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')      .then(response => response.json()) // string ko json krdia
    //   .then(data => {
    //     console.log(data);  //but hume ise render bhi krana pdega uske lie useState
    //     setData(data)
    //   })

    // }, [])
    
  return (
    <div className='text-center m-4 bg-orange-600 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img  src = {data.avatar_url} alt = "Git picture" width={300}></img>
    </div>
    ////
  )
}

export default Github

// github k followers k lie ek api call hogi thats why we use useEffect hook to load that page 
// But react router m ek aur property hoti h ki agar humne hover bhi kia uspar tb bhi wo us api ko fetch krlega aur uska data cache m rkhlega aur button/option pr click krte hi vo show ho jaega 


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary') 
     return response.json()
}