"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import StationList from "@/components/StationList";
import Conclusion from "@/components/Conclusion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Introduction />
        <StationList />
        <Conclusion />
      </main>
    </div>
  );
}
