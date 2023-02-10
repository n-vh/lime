import { Link, useParams } from 'react-router-dom';

export function TestParams() {
  const params = useParams();

  return (
    <>
      <h2 className="font-bold underline">Hello from {params.page} Page!</h2>
      <Link to={'/'}>Go back</Link>
    </>
  );
}
