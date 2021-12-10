import Link from 'next/link';

import Container from '@/components/Container';

export async function getStaticProps() {
  return {
    props: {
    },
  };
}

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dt
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          Xin chào, mình là 1 developer. Thích UX/UI và đang code Backend.
        </h2>
      </div>
    </Container>
  );
}
2