import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header/Header";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "GSG_News",
  description: "This is web application is for Palestine news, created by GSG",
};
interface IProps {
  children: React.ReactNode;
  latestUS: React.ReactNode;
  latestGB: React.ReactNode;
}
export default function RootLayout({children}: IProps) {

  return (
    <html lang="en">
      <body>
        <ToastContainer/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
