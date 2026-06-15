import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-black dark:text-white font-medium text-lg tracking-tight">
              Innowise Solutions
            </Link>
            <p className="text-black/55 dark:text-white/55 text-xs leading-relaxed">
              Smart technology for forward-thinking organisations. Cloud, security, ERP, and web solutions &mdash; all under one roof.
            </p>
            <div className="flex gap-4">
              <span className="text-black/45 dark:text-white/45" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              <span className="text-black/45 dark:text-white/45" aria-label="Twitter / X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="text-black/45 dark:text-white/45" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 dark:text-white/55 text-xs uppercase tracking-widest">Product</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-all duration-200">About</Link>
              <Link href="/services" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-all duration-200">Services</Link>            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 dark:text-white/55 text-xs uppercase tracking-widest">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/legal/terms" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-all duration-200">Terms &amp; Conditions</Link>
              <Link href="/legal/privacy" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-all duration-200">Privacy Policy</Link>
              <Link href="/legal/cookies" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white text-sm transition-all duration-200">Cookie Policy</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 dark:text-white/55 text-xs uppercase tracking-widest">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-black/65 dark:text-white/65">
              <p>Unit 112, THE DOCK, 75 Exploration Dr</p>
              <p>Leicester LE4 5NU</p>
              <a href="tel:+441162257865" className="text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white transition-all duration-200">+44 0116 225 7865</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/5 dark:border-white/5 text-center">
          <p className="text-black/35 dark:text-white/35 text-xs">&copy; 2012 Innowise Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
