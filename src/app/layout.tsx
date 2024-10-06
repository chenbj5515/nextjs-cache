import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div>
            <Link href="/other-route">other-route</Link>
            /
            <Link href="/">home</Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
