import styles from "./page.module.css";
import Header from "./ui/header/header";
import Hero from "./ui/hero/hero";
import Mouse from "./ui/mouse/mouse";
import About from "./ui/about/about";
import Services from "./ui/services/services";
import Cases from "./ui/cases/cases";
import Contacts from "./ui/contacts/contacts";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      {/* <Mouse /> */}
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="cases"><Cases /></div>
      <div id="contacts"><Contacts /></div>
    </main>
  );
}
