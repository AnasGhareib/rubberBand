"use client";

import "./globals.css";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main className="main">
          <h2>Oops something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
