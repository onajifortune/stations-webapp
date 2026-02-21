"use client";

import { Cross, Moon, Sun } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-8 w-8 text-accent"
          />
          <h1 className="text-xl font-serif font-light tracking-wide">
            Stations of the Cross
          </h1>
        </div>
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}
