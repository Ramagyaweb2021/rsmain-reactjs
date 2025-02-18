// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">Oops! Page Not Found</p>
      <Link href="/" className="error-homeLink">
        Go Back Home
      </Link>
    </div>
  );
}
