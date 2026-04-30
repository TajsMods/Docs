/**
 * URL utility helpers for Modding Lab
 */

/**
 * Normalizes an internal path by prepending the BASE_URL and ensuring consistent slashes.
 * @param path The relative path (e.g., 'docs', '/mods/', 'faq.html')
 * @returns The normalized absolute-like path starting with BASE_URL
 */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Ensure trailing slash for directory-style URLs (default in astro.config.mjs)
  // unless it's a file with an extension
  let normalizedPath = `${base}${cleanPath}`;
  
  if (!normalizedPath.endsWith("/") && !normalizedPath.split("/").pop()?.includes(".")) {
    normalizedPath += "/";
  }
  
  // Replace double slashes (except for protocols)
  return normalizedPath.replace(/([^:]\/)\/+/g, "$1");
}
