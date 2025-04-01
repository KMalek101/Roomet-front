import React from "react";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProviders";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`w-[100vw] overflow-x-hidden`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}