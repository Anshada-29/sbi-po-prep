import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./Cursor";

export const metadata: Metadata = {
  title: "SBI PO Prep Hub",
  description: "Personal SBI PO Prelims prep website with notes, mocks & PYQs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}