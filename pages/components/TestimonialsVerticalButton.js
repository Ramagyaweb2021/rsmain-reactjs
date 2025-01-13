import Link from "next/link";
import { useRouter } from "next/router";

export default function TestimonialsNav() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="d-flex justify-content-center">
      <Link
        href="/testimonials"
        className={`btn mx-2 ${
          pathname === "/testimonials"
            ? "btn-warning-gallery"
            : "btn-outline-warning"
        }`}
      >
        Noida
      </Link>
      <Link
        href="/noida-ext-testimonials"
        className={`btn mx-2 ${
          pathname === "/noida-ext-testimonials"
            ? "btn-warning-gallery"
            : "btn-outline-warning"
        }`}
      >
        Noida Extension
      </Link>
    </div>
  );
}
