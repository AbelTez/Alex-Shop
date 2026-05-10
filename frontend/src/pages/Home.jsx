import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Product/GenderCollectionSection";
import NewArrivals from "./../components/Product/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  );
}
