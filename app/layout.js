import "./globals.css";

export const metadata = {
  title: "Grit Gym",
  description: "Created by Siratul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
