"use client";

import React, { useState } from "react";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>
      <ThemeToggleButton onClick={toggleTheme} theme={theme} />
      <BackgroundEffect />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

const ThemeToggleButton = ({
  onClick,
  theme,
}: {
  onClick: () => void;
  theme: "light" | "dark";
}) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-md hover:scale-105 transition-transform z-50"
    aria-label="Toggle Theme"
  >
    {theme === "light" ? "🌙" : "☀️"}
  </button>
);

const BackgroundEffect = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
);

const Footer = () => (
  <footer className="text-center py-4 text-sm text-gray-500">
    © {new Date().getFullYear()} Create Next App. All rights reserved.
  </footer>
);
