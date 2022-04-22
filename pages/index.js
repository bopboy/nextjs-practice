import Head from "next/head"
import { useState, useEffect } from "react"
import Seo from "../components/Seo"

const API_KEY = "d23b6e209156de66ef98203b83473aac"

export default function Home() {
    const [movies, setMovies] = useState()
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json()
            setMovies(results)
        })()
    }, [])
    return (
        <div>
            <Seo title="Home " />
            <Head><title>Home | Next Movies</title></Head>
            <h1 className="active">Movies</h1>
            {!movies && <h4>Loading...</h4>}
            {movies?.map(m => (
                <div key={m.id}><h4>{m.original_title}</h4></div>
            ))}
        </div>
    )
}