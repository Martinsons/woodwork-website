"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Koka Skaistums</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700 bg-background">
            <Link 
              href="/darbi" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mani Darbi
            </Link>
            <Link 
              href="/kontakti" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakti
            </Link>
            <div className="px-3 py-2">
              <Button 
                variant="outline" 
                className="w-full border-amber-600/70 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors" 
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/kontakti">
                  Pasūtīt
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
