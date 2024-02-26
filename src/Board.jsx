import { useEffect, useState } from "react"
import axios from "axios"

function Board() {
    const [query, setQuery] = useState('')
    const [post, setPost] = useState()

    useEffect(()=> {
        const fetchPosts = async () => {
            console.log('검색중... ')
            const res = await axios.get(`https://humfreejob.azurewebsites.net/posts/${query}`)
            setPost(res.data)
        }
        const fetchInitialPosts = async () => {
            const res = await axios.get(`https://humfreejob.azurewebsites.net/allPosts`)
            console.log(res)
            setPost(res.data)
        }
        if(query.length === 0) fetchInitialPosts()
        if(query.length >= 2) fetchPosts()
    },[query])

    return(
        <div className="flex flex-col">
            <input className="py-2 border-2" type="text" placeholder="검색어를 입력하세요." onChange={(e) => setQuery(e.target.value)}/>
            <ul className="grid gap-4 lg:grid-cols-4 px-8 mt-16">
                {post && post.map((p, i) => (
                    <li key={i} className="border-4 border-indigo-100 p-4 rounded-lg drop-shadow-xl cursor-pointer"> 
                        <p className="text-2xl font-bold text-blue-800">{p.profile}</p>
                        <p className="mt-4">{p.desc}</p>
                        <p className="mt-2">경력: <span className="font-bold">{p.exp}</span></p>
                        <p className="mt-1 text-sm">키워드: {p.techs.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Board