/**
 * URL utility helpers for Modding Lab
 */

/**
 * Normalizes an internal path by prepending the BASE_URL and ensuring consistent slashes.
 * Correctly handles query parameters and hashes.
 * 
 * Examples:
 * sitePath("mods") -> "/mods/"
 * sitePath("/mods/?filter=QoL") -> "/mods/?filter=QoL"
 * sitePath("/docs/#install") -> "/docs/#install"
 * sitePath("brand/logo.png") -> "/brand/logo.png"
 * 
 * @param path The relative path
 * @returns The normalized absolute-like path starting with BASE_URL
 */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  
  // Extract hash
  const hashIndex = path.indexOf('#');
  const hash = hashIndex !== -1 ? path.substring(hashIndex) : '';
  const withoutHash = hashIndex !== -1 ? path.substring(0, hashIndex) : path;

  // Extract query
  const queryIndex = withoutHash.indexOf('?');
  const query = queryIndex !== -1 ? withoutHash.substring(queryIndex) : '';
  let cleanPath = queryIndex !== -1 ? withoutHash.substring(0, queryIndex) : withoutHash;

  cleanPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  
  let normalizedPath = `${base}${cleanPath}`;
  
  // Ensure trailing slash for directory-style URLs (unless it's a file with an extension)
  const lastSegment = normalizedPath.split("/").pop() || "";
  if (!normalizedPath.endsWith("/") && !lastSegment.includes(".")) {
    normalizedPath += "/";
  }
  
  // Replace double slashes (except for protocols)
  normalizedPath = normalizedPath.replace(/([^:]\/)\/+/g, "$1");
  
  return normalizedPath + query + hash;
}
