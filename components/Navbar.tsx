"use client";

import { Gift, Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "./cart/CartDrawer";
import { SearchInput } from "./SearchInput";
import { useSearchStore } from "@/store/search-store";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { search, setSearch } = useSearchStore();

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">RDC</p>
              <p className="text-xs text-muted-foreground">
                Jabones Artesanales
              </p>
            </div>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <SearchInput value={search} onChange={setSearch} />
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@rdcjabones.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <CartDrawer />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-4">
            <SearchInput value={search} onChange={setSearch} />
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <a
                href="tel:+1234567890"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@rdcjabones.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <CartDrawer />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
