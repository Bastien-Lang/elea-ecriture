// app/layout.js
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Emanuelle Lang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@100..900&family=Playfair+Display:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}