import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BasketContextProvider from "@/context/BasketContextProvider";
import FloatingBasketBtn from "@/components/FloatingBasketBtn";
import NextTopLoader from "nextjs-toploader";
import MaintenancePage from "@/components/MaintenancePage";

// --font family--
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meowcademy.com'),
  title: {
    default:"Meowcademy - Expert Online maths and  classes & Training ",
    template:"%s | Meowcademy"
  },
  description: "Learn expert cat care, training tips, and fun courses at Meowcademy. Become the best cat parent today!",
  alternates:{
    canonical:'/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <NextTopLoader
          color="#013668"
       
        />
        <>
          <BasketContextProvider>
            <>
              <Header />

              {children}
              <FloatingBasketBtn />
              <Footer />
            </>
          </BasketContextProvider>
        </>
      </body>
    </html>
  );
}
