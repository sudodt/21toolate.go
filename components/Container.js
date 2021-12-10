import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Dang Thao',
    description: `Developer`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://dangthao.com${router.asPath}`} />
        <link rel="canonical" href={`https://dangthao.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Dang Thao" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dangthao" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink>
          <NextLink href="/about">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
          </NextLink>

        </div>
      </nav>

      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
