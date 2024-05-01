import styles from "./page.module.css";
import Header from "./ui/header.js/header";
import Hero from "./ui/hero/hero";
import Mouse from "./ui/mouse/mouse";
import About from "./ui/about/about";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mouse />
      <About />
    </main>
  );
}
