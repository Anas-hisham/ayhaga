"use client";
import Login from "./pages/page";
import ProductCard from "./components/ProductCard";
import Card from "./ayhaga/page";

export default function Home() {
  return (
    <>
      <nav className="grid  grid-flow-col justify-around  p-5">
        <div>Logo</div>
        <div>
          <a className="pr-2 p-3 bg-slate-500" href="/users">
            Users
          </a>
          <a className="pr-2 p-3 bg-slate-500" href="ayhaga">
            Cards
          </a>
        </div>
      </nav>
      <main>
        <Login />
        <div className="h-screen">
          <Card />
        </div>
        <ProductCard />
      </main>
    </>
  );
}
