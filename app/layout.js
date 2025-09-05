import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  metadataBase: new URL("https://barbendingmachinesupplier.com/"), 
  title: "Shree Shakti Machines",
  description: "Leading supplier of machines",
    icons: {
    icon: "/logo.png", 
  
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
     

        <main>{children}</main>
   
      </body>
    </html>
  );
}
