import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Index() {
  const [page, setPage] = useState('');

  return (
    <>
      <input type="text" value={page} onChange={(e) => setPage(e.target.value)} />
      <Link to={page}>Go to {page}</Link>
    </>
  );
}
