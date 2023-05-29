import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <h1 class>Welcome!</h1>
        <p>This is (Rubber Band), a currency converter app.</p>
      </div>
      <Link className={styles.mainLink} href="/converter">
        Get Started 🚀
      </Link>
    </main>
  );
}
