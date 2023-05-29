import "./globals.css";

export const metadata = {
  title: "Rubber Band",
  description: "experimental currency converter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
