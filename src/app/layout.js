import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-1  w-full ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
