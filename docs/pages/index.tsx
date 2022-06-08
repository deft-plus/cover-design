import Link from 'next/link';

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <br />
      <Link href="/buttons" passHref>
        <a>Buttons</a>
      </Link>
      <br />
    </div>
  );
}
