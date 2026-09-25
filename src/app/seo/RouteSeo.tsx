import { useEffect } from "react";
import { useLocation } from "react-router";
import { renderSeoHead } from "./metadata.mjs";

/** Keep SPA navigation in sync with the metadata emitted at build time. */
export function RouteSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const head = document.head;
    head.querySelectorAll('title, meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], #skillum-schema')
      .forEach(node => node.remove());
    const template = document.createElement("template");
    template.innerHTML = renderSeoHead(pathname);
    head.append(template.content);
  }, [pathname]);
  return null;
}
