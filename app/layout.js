import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Patient Dashboard</title>
      </head>
      <body className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Hospital Patient Dashboard</h1>
            <nav className="mt-4">
              <Link href="/" className="mr-4 text-blue-500 hover:underline">
                Overview
              </Link>
              <Link href="/patients" className="text-blue-500 hover:underline">
                Patient List
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
