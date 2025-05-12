import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)
    // const [follow, setData] = useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // })
    return (
        <div className='text-center bg-gray-700 m-4  text-white p-4 text-3xl'>
            Github profile  Image: <img src={data.avatar_url} />
            Github Followers: {data.followers}
        </div>
    )
}

export default Github
export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tejas7410')
    return response.json()
}