"use client"
import ProductCard from "./components/ProductCard";
import Userspage from "./user/page";

export default function Home() {
  return (
   <div className="text-center text-4xl font-black mt-3">
    <h1 className="text-center text-4xl font-black mt-3">Home</h1>
    <ProductCard />
    <Userspage/>
    </div>
  );
}
