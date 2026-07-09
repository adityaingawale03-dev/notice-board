import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome 
        </h2>

        <p className="mt-2 text-gray-600">
          Manage all notices from one place.
        </p>
      </main>
    </div>
  );
}