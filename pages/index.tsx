import NavBar from 'components/nav'
import type { NextPage } from 'next'
import Head from 'next/head'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="ToDo app Page" />
        <html lang="en" />
      </Head>

      <NavBar elements={["home", "about"]} />
    </>)
}

export default Home;
