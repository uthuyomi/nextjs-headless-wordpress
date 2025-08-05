// src/app/layout.tsx
import "@/styles/globals.css";

export const metadata = {
  title: "サイトタイトル",
  description: "サイト説明",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
