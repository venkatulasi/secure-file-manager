import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Secure File Manager</h1>
      <p>Upload, manage, and download your files securely.</p>
      <Link href="/login">Login</Link>
      <Link href="/files">Files</Link>
      <Link href="/register">Register</Link>
    </main>
  );
}
