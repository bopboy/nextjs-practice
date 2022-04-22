import Head from "next/head"
import { useState, useEffect } from "react"
import Seo from "../components/Seo"

const API_KEY = process.env.API_KEYs

export default function Home() {
    const [movies, setMovies] = useState()
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`/api/movies`)).json()
            setMovies(results)
        })()
    }, [])
    return (
        <div className="container">
            <Seo title="Home " />
            <Head><title>Home | Next Movies</title></Head>
            {!movies && <h4>Loading...</h4>}
            {movies?.map(m => (
                <div className="movie" key={m.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} />
                    <h4>{m.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }             
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}
            </style>
        </div>
    )
}