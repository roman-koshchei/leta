import Head from "next/head";
import { Button, Title } from "ui";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>LETA</Title>

      <h1>LETA</h1>
    </div >
  );
}

export default Home