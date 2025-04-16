import { Link } from "@remix-run/react";

export default function Accueil() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 text-center">🍽️ Bienvenue sur ZileCuisine</h1>
      <p className="text-lg text-center text-gray-700">Choisissez une catégorie de recettes :</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li><Link to="/petit-dejeuner" className="block bg-yellow-100 hover:bg-yellow-200 p-4 rounded shadow text-center">🥐 Petit Déjeuner</Link></li>
        <li><Link to="/dejeuner" className="block bg-green-100 hover:bg-green-200 p-4 rounded shadow text-center">🍛 Déjeuner</Link></li>
        <li><Link to="/diner" className="block bg-blue-100 hover:bg-blue-200 p-4 rounded shadow text-center">🍽️ Dîner</Link></li>
        <li><Link to="/desserts" className="block bg-pink-100 hover:bg-pink-200 p-4 rounded shadow text-center">🍰 Desserts</Link></li>
        <li><Link to="/boissons" className="block bg-indigo-100 hover:bg-indigo-200 p-4 rounded shadow text-center">🥤 Boissons</Link></li>
      </ul>
    </div>
  );
}