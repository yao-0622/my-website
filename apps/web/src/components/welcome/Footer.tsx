import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 text-center">
      <p className="text-sm text-text-secondary">
        © {year} {SITE_NAME} · {SITE_TAGLINE}
      </p>
      <p className="mt-2 text-xs text-text-secondary/70">iyao.com</p>
    </footer>
  );
}
