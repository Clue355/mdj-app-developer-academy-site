import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>App Dev Academy</title>
                <meta name="description" content="App Dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
