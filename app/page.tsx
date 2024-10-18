import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="title text-4xl font-bold mb-4">Hello World</h1>
      <Link href="/contacts" className="text-blue-600 hover:underline text-lg">
          Go to Contacts
      </Link>
    </div>
  );
}
