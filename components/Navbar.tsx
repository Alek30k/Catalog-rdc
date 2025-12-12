"use client";

import { Gift, Menu, ShoppingCart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CartDrawer } from "./cart/CartDrawer";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#inicio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Productos
            </a>
            <a
              href="#personalizados"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Personalizados
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Desktop Actions */}
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
            <div className="flex items-center">
              <CartDrawer />
            </div>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <a
                href="#inicio"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="#personalizados"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Personalizados
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="flex items-center gap-3 pt-2 border-t border-border mt-2">
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
                <div className="flex items-center ">
                  <CartDrawer />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
