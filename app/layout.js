import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { ThemeProvider } from "./themeprovider";

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`bg-surface-container_default dark:bg-surface-inverse_container_highest antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
