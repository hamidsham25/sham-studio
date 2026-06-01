import type { MouseEvent } from "react";

export function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function isSamePageLink(pathname: string, href: string) {
  if (!href.startsWith("/")) return false;
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  return pathname === href;
}

export function handleNavLinkClick(
  e: MouseEvent<HTMLAnchorElement>,
  pathname: string,
  href: string,
  isHome: boolean
) {
  if (isHome && href.startsWith("#")) {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (isSamePageLink(pathname, href)) {
    e.preventDefault();
    scrollToPageTop();
  }
}
