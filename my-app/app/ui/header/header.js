"use client"
import { useState } from "react";
import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { id: 'about', title: 'About Us' },
    { id: 'services', title: 'Services' },
    { id: 'cases', title: 'Cases' },
    { id: 'contacts', title: 'Contacts' }
  ];

  const [active, setActive] = useState('');

  return (
    <header className={styles.header_main}>
    <Link href="/" onClick={() => setActive('')}><img className={styles.image} src="/logo.png" alt="Company Logo" /></Link>
    <div className={styles.nav}>
      {navLinks.map((link) => (
        <Link 
          key={link.id} 
          href={`#${link.id}`} 
          className={`${styles.link_wrapper} ${active === link.id ? styles.active : ''}`}
          onClick={() => setActive(link.id)}
        >
          {link.title}
        </Link>
      ))}
    </div>
  </header>
  );
}

