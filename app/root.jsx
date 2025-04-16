import { Links, Meta, Outlet, Scripts, ScrollRestoration, LiveReload } from "@remix-run/react";
import stylesheet from "./styles/tailwind.css";

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }
  ];
}

export const meta = () => {
  return [
    { title: "ZileCuisine - Recettes" },
    { name: "description", content: "Recettes haïtiennes et internationales." },
  ];
};

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}