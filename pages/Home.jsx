export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Bienvenue sur JetPulse</h1>
      <p className="mt-4 text-lg">Personnalisez vos gravures facilement.</p>
      <a href="/customize" className="mt-6 inline-block px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600">
        Commencer
      </a>
    </div>
  );
}
