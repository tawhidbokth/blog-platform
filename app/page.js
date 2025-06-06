export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Next.js App
        </h1>
        <p className="text-center mt-4 text-gray-600">
          This is a simple example of a Next.js application with a custom layout
          and navigation.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="/about"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
