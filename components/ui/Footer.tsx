import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-start gap-2 text-primary">
      <div>&copy; {new Date().getFullYear()}</div>
      <div>Antony90</div>
    </footer>
  );
}
