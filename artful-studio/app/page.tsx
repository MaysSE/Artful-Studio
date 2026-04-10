import { sanityClient } from "../lib/sanity";

export default async function Home() {
  // const data = await sanityClient.fetch('*[_type != null][0...5]{_id, _type, title}');

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Artful Studio</h1>
      <p className="mt-4 text-gray-600">Coming soon.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Sanity Test Data:</h2>
        <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify([], null, 2)}</pre>
      </div>
    </main>
  );
}
