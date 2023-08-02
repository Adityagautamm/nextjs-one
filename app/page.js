import { Hero, Card } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="card__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
