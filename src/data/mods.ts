/**
 * Mods Registry - Single source of truth for all mod data
 * This file powers:
 * - Homepage featured mods
 * - /mods directory listing
 * - /mods/<slug> detail pages
 * - Navigation and footer links
 */

export type ModStatus = 'stable' | 'beta' | 'wip';

export interface ModLink {
  type: 'steam' | 'github' | 'docs' | 'issues' | 'discord' | 'modio' | 'website';
  url: string;
  label?: string;
}

export interface Mod {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  status: ModStatus;
  tags: string[];
  links: ModLink[];
  version?: string;
  updatedAt?: string; // ISO date string
  heroImage?: string;
  logo?: string;
  screenshots?: string[];
  features?: string[];
  installInstructions?: string;
  compatibility?: string[];
  knownIssues?: string[];
  featured?: boolean;
  game?: string;
}

// Status display configuration
export const statusConfig = {
  stable: { label: 'Stable', color: 'green', bgClass: 'bg-green-500/10 text-green-600 dark:text-green-400' },
  beta: { label: 'Beta', color: 'yellow', bgClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' },
  wip: { label: 'Work in Progress', color: 'orange', bgClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
} as const;

/**
 * Tag categories for filtering and display
 * Can be used to add icons/colors to tag chips in the UI
 * Future enhancement: Use these in ModCard and filter UI for visual consistency
 */
export const tagCategories = {
  'QoL': { icon: '✨', color: 'blue' },
  'UI': { icon: '🎨', color: 'purple' },
  'Utility': { icon: '🔧', color: 'green' },
  'Graphics': { icon: '🖼️', color: 'pink' },
  'Gameplay': { icon: '🎮', color: 'orange' },
  'Debug': { icon: '🐛', color: 'gray' },
  'Tools': { icon: '⚙️', color: 'slate' },
} as const;

/**
 * The mods registry
 * Add new mods here - they will automatically appear on all relevant pages
 */
export const mods: Mod[] = [
  {
    slug: 'core',
    name: 'TajemnikTV-Core',
    shortDescription: 'The foundational library required for all other modules. Provides shared APIs, standardized diagnostic output, and essential UI framework components.',
    status: 'stable',
    tags: ['Utility', 'Tools'],
    links: [
      { type: 'github', url: 'https://github.com/TajsMods/Core', label: 'GitHub' },
      { type: 'issues', url: 'https://github.com/TajsMods/Core/issues', label: 'Issues' },
    ],
    version: '1.2.0',
    logo: 'brand/Core - 512x.png',
    featured: true,
    game: 'Upload Labs',
  },
  {
    slug: 'qol',
    name: 'TajemnikTV-QoL',
    shortDescription: 'A collection of quality-of-life improvements. Enhances existing interfaces, streamlines repetitive tasks, and adjusts visual feedback for better clarity.',
    status: 'stable',
    tags: ['QoL', 'Utility'],
    links: [
      { type: 'github', url: 'https://github.com/TajsMods/QoL', label: 'GitHub' },
      { type: 'issues', url: 'https://github.com/TajsMods/QoL/issues', label: 'Issues' },
    ],
    version: '0.9.4',
    logo: 'brand/QoL - 512x.png',
    featured: true,
    game: 'Upload Labs',
  },
  {
    slug: 'command-palette',
    name: 'Command Palette',
    shortDescription: 'An advanced overlay for executing quick commands, searching active processes, and toggling debug states without navigating complex menus.',
    status: 'stable',
    tags: ['UI', 'Utility', 'QoL'],
    links: [
      { type: 'github', url: 'https://github.com/TajsMods/CommandPalette', label: 'GitHub' },
      { type: 'issues', url: 'https://github.com/TajsMods/CommandPalette/issues', label: 'Issues' },
    ],
    version: '2.0.1',
    logo: 'brand/Command Palette - 512x.png',
    featured: true,
    game: 'Upload Labs',
  },
  {
    slug: 'cheats',
    name: 'Cheats',
    shortDescription: 'Debug and testing tools for developers and power users. Unlock hidden features and test scenarios.',
    status: 'beta',
    tags: ['Debug', 'Tools', 'Utility'],
    links: [
      { type: 'github', url: 'https://github.com/TajsMods/Cheats', label: 'GitHub' },
      { type: 'issues', url: 'https://github.com/TajsMods/Cheats/issues', label: 'Issues' },
    ],
    logo: 'brand/Cheats - 512x.png',
    featured: true,
    game: 'Upload Labs',
  },
  {
    slug: 'tajs-mod',
    name: "Taj's Mod (Legacy Bundle)",
    shortDescription: 'The original all-in-one bundle containing Utility, QoL, and Visual Tweaks. Now superseded by the modular TajsMods ecosystem.',
    longDescription: `Taj's Mod was the original comprehensive quality-of-life enhancement mod for Upload Labs. It provided a wide range of features in a single package.

**Note:** This monolithic version is now deprecated. Users should switch to the modular versions (Core, QoL, Command Palette, Cheats) for better compatibility, more frequent updates, and less performance overhead.`,
    status: 'stable',
    tags: ['Legacy', 'Bundle'],
    links: [
      { type: 'steam', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3628222709', label: 'Steam Workshop' },
      { type: 'github', url: 'https://github.com/TajemnikTV/TajsMod', label: 'Legacy Repository' },
    ],
    version: '0.6.1',
    updatedAt: '2026-01-16',
    heroImage: 'brand/TajsModHeader.png',
    logo: 'brand/TajsModLogo.png',
    featured: false,
    game: 'Upload Labs',
  },
];

/**
 * Get all featured mods
 */
export function getFeaturedMods(): Mod[] {
  return mods.filter(mod => mod.featured);
}

/**
 * Get a mod by its slug
 */
export function getModBySlug(slug: string): Mod | undefined {
  return mods.find(mod => mod.slug === slug);
}

/**
 * Get mods by tag
 */
export function getModsByTag(tag: string): Mod[] {
  return mods.filter(mod => mod.tags.includes(tag));
}

/**
 * Get all unique tags from all mods
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  mods.forEach(mod => mod.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

/**
 * Get all unique games from all mods
 */
export function getAllGames(): string[] {
  const games = new Set<string>();
  mods.forEach(mod => {
    if (mod.game) games.add(mod.game);
  });
  return Array.from(games).sort();
}

/**
 * Search mods by query
 */
export function searchMods(query: string): Mod[] {
  const q = query.toLowerCase();
  return mods.filter(mod =>
    mod.name.toLowerCase().includes(q) ||
    mod.shortDescription.toLowerCase().includes(q) ||
    mod.tags.some(t => t.toLowerCase().includes(q))
  );
}

/**
 * Sort mods by different criteria
 */
export function sortMods(modsToSort: Mod[], sortBy: 'name' | 'updated' | 'status'): Mod[] {
  return [...modsToSort].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'updated':
        return (b.updatedAt || '').localeCompare(a.updatedAt || '');
      case 'status':
        const statusOrder = { stable: 0, beta: 1, wip: 2 };
        return statusOrder[a.status] - statusOrder[b.status];
      default:
        return 0;
    }
  });
}

/**
 * Get related mods based on shared tags
 */
export function getRelatedMods(mod: Mod, limit = 3): Mod[] {
  return mods
    .filter(m => m.slug !== mod.slug)
    .map(m => ({
      mod: m,
      score: m.tags.filter(t => mod.tags.includes(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ mod }) => mod);
}
