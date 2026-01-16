/**
 * Screenshot metadata and auto-scan utilities
 * Scans /public/screenshots/ at build time
 */
import fs from 'node:fs';
import path from 'node:path';

export interface Screenshot {
  src: string;
  alt: string;
  mod: string; // The mod this screenshot belongs to (folder name)
}

const SCREENSHOTS_DIR = path.resolve(import.meta.dirname, '../../public/screenshots');

/**
 * Auto-scan screenshots directory recursively
 */
export function getScreenshots(): Screenshot[] {
  const screenshots: Screenshot[] = [];
  
  try {
    if (!fs.existsSync(SCREENSHOTS_DIR)) {
      console.warn('[screenshots] Directory not found:', SCREENSHOTS_DIR);
      return screenshots;
    }
    
    // Helper to scan a directory
    const scanDir = (dirPath: string, modName: string = 'General') => {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
          // Recursively scan subdirectories, using the folder name as the mod name
          scanDir(fullPath, entry.name);
        } else if (entry.isFile()) {
           // Only include image files
          if (!/\.(png|jpg|jpeg|gif|webp)$/i.test(entry.name)) continue;
          
          // Skip .import files (Godot artifacts)
          if (entry.name.endsWith('.import')) continue;
          
          // Generate alt text from filename
          const alt = entry.name
            .replace(/\.[^.]+$/, '') // Remove extension
            .replace(/[-_]/g, ' ')   // Replace separators with spaces
            .replace(/^\d+\s*/, '')  // Remove leading numbers
            .trim() || 'Screenshot';
          
            // Calculate relative path for the src
            const relativePath = path.relative(path.resolve(import.meta.dirname, '../../public'), fullPath).replace(/\\/g, '/');

          screenshots.push({
            src: `/${relativePath}`,
            alt,
            mod: modName
          });
        }
      }
    };

    scanDir(SCREENSHOTS_DIR);
    
    console.log(`[screenshots] Found ${screenshots.length} screenshots`);
  } catch (error) {
    console.error('[screenshots] Error scanning directory:', error);
  }
  
  return screenshots;
}

// Pre-load at build time
export const screenshots = getScreenshots();
