import { useLocation, Link } from "wouter";
import { useCallback } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function HashLink({ href, children, className }: Props) {
  const [location] = useLocation();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (location === "/") {
        e.preventDefault();
        const hash = href.startsWith("/#") ? href.slice(2) : href.startsWith("#") ? href.slice(1) : "";
        if (hash) scrollToSection(hash);
      }
    },
    [location, href],
  );

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function NavHashLink({ href, children, className, onClick: externalOnClick }: Props & { onClick?: () => void }) {
  const [, navigate] = useLocation();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const hash = href.startsWith("/#") ? href.slice(2) : href.startsWith("#") ? href.slice(1) : "";
      if (window.location.pathname === "/" || window.location.pathname === "") {
        if (hash) scrollToSection(hash);
      } else {
        navigate("/", { replace: true });
        setTimeout(() => {
          if (hash) scrollToSection(hash);
        }, 100);
      }
      externalOnClick?.();
    },
    [href, navigate, externalOnClick],
  );

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
