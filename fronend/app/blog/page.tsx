export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold mb-8">
        Tactical AI Writings
      </h1>

      <p className="max-w-2xl text-gray-400 mb-10">
        Deep dives into Agentic AI, Graph RAG, LLM architecture,
        production ML systems, and the philosophy of intelligence.
      </p>

      <a
        href="https://medium.com/@cpt1995daas"
        target="_blank"
        className="border border-red-600 px-8 py-4 hover:bg-red-700 transition text-lg"
      >
        Enter the Archive
      </a>
    </main>
  );
}