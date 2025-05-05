import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Koka Skaistums</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="/darbi" className="text-foreground/80 hover:text-foreground font-medium">
              Mani Darbi
            </Link>
            <Link href="/kontakti" className="text-foreground/80 hover:text-foreground font-medium">
              Kontakti
            </Link>
            <Button 
              variant="outline" 
              className="border-amber-600/70 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors" 
              asChild
            >
              <Link href="/kontakti">
                Pasūtīt
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
