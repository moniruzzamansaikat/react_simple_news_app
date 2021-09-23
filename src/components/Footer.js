import React from "react";

function Footer() {
  return (
    <footer className="bg-dark p-4 text-center">
      <p className="text-white">{new Date().getFullYear()} &copy; Moniruzzaman Saikat</p>
    </footer>
  );
}

export default Footer;
