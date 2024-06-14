import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese"/>
        <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
        <Pet name="Doink" animal="Cat" breed="Mixed"/> */}
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         [
//         React.createElement("h1", {}, "Adopt me!"),

//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "Dog",
//             breed: "Havanese"
//         }),
//         React.createElement(Pet, {
//             animal: "Bird",
//             name: "Pepper",
//             breed: "Cockatiel"
//         }),
//         React.createElement(Pet, {
//             breed: "Mixed",
//             animal:"Cat",
//             name:"Doink"
//         })
//         ]
//     );
// };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
