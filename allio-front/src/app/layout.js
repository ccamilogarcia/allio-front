import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <navbar></navbar> */}
      </body>
    </html>
  );
}
