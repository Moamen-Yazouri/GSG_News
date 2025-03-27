import type { Metadata } from "next";
import "./globals.css";
import {ToastContainer} from "react-toastify";


export const metadata: Metadata = {
    title: "GSG News",
    description: "GSG News, get latest news around the world"
};

interface IProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
    return (
        <html lang="en">
            <body>
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}