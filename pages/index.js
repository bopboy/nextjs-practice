import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Seo from "../components/Seo"

const API_KEY = process.env.API_KEY

export default function Home({ results }) {
    const router = useRouter()
    const onClick = (id, title) => {
        router.push({
            pathname: `/movies/${id}`,
            query: {
                title
            },
        }, `/movies/${id}`)
    }
    return (
        <div className="container">
            <Seo title="Home " />
            <Head><title>Home | Next Movies</title></Head>
            {!results && <h4>Loading...</h4>}
            {results?.map(m => (
                <div className="movie" key={m.id} onClick={() => onClick(m.id, m.original_title)}>
                    <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} />
                    <h4>
                        <Link href={{
                            pathname: `/movies/${m.id}`,
                            query: { title: m.original_title }
                        }}
                            as={`/movies/${m.id}`}>
                            <a>{m.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))
            }
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
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
        </div >
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': '*',
        }
    })
    const { results } = await res.json()
    return {
        props: {
            results
        }
    }
}