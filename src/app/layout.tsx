import { Noto_Sans_Display, Pacifico } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Display({
  subsets: ["latin"],
});
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const metadata = {
  title: "Picture Ai",
  description: "Generate picture using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className} ${pacifico.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
