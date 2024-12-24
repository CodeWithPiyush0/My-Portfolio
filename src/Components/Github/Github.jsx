import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/CodeWithPiyush0')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center bg-custom-bg2 text-[#301d4f] p-4 gap-4 text-3xl">Github Followers: {data.followers}
    <img className='rounded-full ' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/CodeWithPiyush0')
  return response.json()
}