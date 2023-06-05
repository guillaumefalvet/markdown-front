import Head from 'next/head'
import Image from 'next/image'


import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Home() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('http://localhost:3000');
        const data = await res.json();
        setMarkdownContent(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      <Head>
        <title>test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ReactMarkdown children={markdownContent} remarkPlugins={[remarkGfm]} />
      </main>
    </>
  )
}