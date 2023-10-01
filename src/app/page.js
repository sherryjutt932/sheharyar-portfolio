import React from "react";
import App from "./App.jsx";
import favicon from "./favicon.ico"

// const Hero = dynamic(() => import("@/components/Hero"), {});

export const metadata = {
  title: 'Sheharyar Saeed | Portfolio',
  description: 'Sheharyar Saeed web developer portfolio in NextJS',
  keywords: 'HTML, CSS, JavaScript, NextJS',
  author: 'Sheharyar Saeed',
}
 

export default function Home() {
  
  return (
    <main className="main">
      {/* <Head>
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
          <link rel="shortcut icon" href = {favicon} />
          <link rel="apple-touch-icon" sizes="180x180" href = {favicon}/>
          <link rel="icon" type="image/png" sizes="32x32" href = {favicon}/>
          <link rel="icon" type="image/png" sizes="16x16" href = {favicon}/>
      </Head> */}
      <App/>
    </main>
  );
}
