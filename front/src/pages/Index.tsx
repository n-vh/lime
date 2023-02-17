import { useState } from 'react';
import { Navbar } from '~/components/Navbar';
import { Card } from '~/components/Card';

export function Index() {
  const [page, setPage] = useState('');

  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}
