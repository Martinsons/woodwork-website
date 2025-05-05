import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Koka Skaistums. Visas tiesības aizsargātas.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Sākums
          </Link>
          <Link href="/darbi" className="text-sm text-muted-foreground hover:text-foreground">
            Mani Darbi
          </Link>
          <Link href="/kontakti" className="text-sm text-muted-foreground hover:text-foreground">
            Kontakti
          </Link>
        </div>
      </div>
    </footer>
  );
}
