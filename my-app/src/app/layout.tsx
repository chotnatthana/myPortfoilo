import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "chotnatthana",
  description: "Showcasing my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#071021] text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="text-gray-400 py-4">
          <div className="container mx-auto text-center">
            <a href="https://github.com/chotnatthana/myPortfoilo">
              <p>
                &copy; {new Date().getFullYear()} chotnatthana. This website is
                open source.
              </p>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
