import Head from "next/head";
import NavBar from "../components/navBar";
import Seo from "../components/Seo";

export default function About() {
    return (
        <div>
            <Seo title="About"></Seo>
            <Head><title>About | Next Movies</title></Head>
            <h1>About</h1>
        </div>
    )
}