import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
    return (
        <div>
            <Seo title="Home " />
            <Head><title>Home | Next Movies</title></Head>
            <h1 className="active">Hello</h1>
        </div>
    )
}