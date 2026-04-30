/**
 * Build-time search index for the Command Palette and global search.
 * Aggregates all searchable content from pages, features, and FAQ.
 */
import { features } from './features';
import { faq } from './faq';
import { sitePath } from '../utils/urls';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'feature' | 'faq' | 'action';
  href: string;
  icon?: string;
  tags?: string[];
}

// Static pages
const pages: SearchItem[] = [
  { id: 'page-home', title: 'Home', description: 'Homepage with overview and quick links', category: 'page', href: sitePath('/'), icon: '🏠' },
  { id: 'page-features', title: 'Features', description: 'Browse all mod features', category: 'page', href: sitePath('/features/'), icon: '✨' },
  { id: 'page-faq', title: 'FAQ', description: 'Frequently asked questions', category: 'page', href: sitePath('/faq/'), icon: '❓' },
  { id: 'page-roadmap', title: 'Roadmap', description: 'Planned features and improvements', category: 'page', href: sitePath('/roadmap/'), icon: '🗺️' },
  { id: 'page-support', title: 'Support', description: 'Get help and support the project', category: 'page', href: sitePath('/support/'), icon: '💙' },
  { id: 'page-docs', title: 'Documentation', description: 'Technical documentation and guides', category: 'page', href: sitePath('/docs/'), icon: '📚' },
  { id: 'page-troubleshooting', title: 'Troubleshooting', description: 'Diagnostic checklist and common fixes', category: 'page', href: sitePath('/troubleshooting/'), icon: '🔧' },
  { id: 'page-screenshots', title: 'Screenshots', description: 'Gallery of mod screenshots', category: 'page', href: sitePath('/screenshots/'), icon: '📸' },
  { id: 'page-credits', title: 'Credits & License', description: 'Acknowledgments and licensing info', category: 'page', href: sitePath('/credits/'), icon: '📜' },
];

// Quick actions
const actions: SearchItem[] = [
  { id: 'action-steam', title: 'Subscribe on Steam', description: 'Open Steam Workshop page', category: 'action', href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3628222709', icon: '🎮' },
  { id: 'action-github', title: 'Open GitHub', description: 'View source code and issues', category: 'action', href: 'https://github.com/TajsMods', icon: '💻' },
  { id: 'action-discord', title: 'Join Discord', description: 'EnigmaDev community server', category: 'action', href: 'https://discord.gg/enigmadev', icon: '💬' },
  { id: 'action-report', title: 'Report Issue', description: 'Report a bug on GitHub', category: 'action', href: 'https://github.com/TajsMods/Core/issues/new', icon: '🐛' },
];

/**
 * Generate the complete search index at build time
 */
export function generateSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [...pages, ...actions];
  
  // Add features
  for (const feature of features) {
    items.push({
      id: `feature-${feature.id}`,
      title: feature.title,
      description: feature.description,
      category: 'feature',
      href: `/features/#${feature.id}`,
      icon: feature.icon,
      tags: feature.tags,
    });
  }
  
  // Add FAQ items
  for (const item of faq) {
    items.push({
      id: `faq-${item.id}`,
      title: item.question,
      description: item.answer.substring(0, 100) + '...',
      category: 'faq',
      href: `/faq/#${item.id}`,
      icon: '❓',
    });
  }
  
  return items;
}

/**
 * Simple fuzzy search (substring matching)
 */
export function searchItems(query: string, items: SearchItem[]): SearchItem[] {
  if (!query.trim()) return items.slice(0, 10);
  
  const q = query.toLowerCase();
  
  return items
    .filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags?.some(t => t.toLowerCase().includes(q))
    )
    .slice(0, 15);
}

// Pre-generate the index for static builds
export const searchIndex = generateSearchIndex();
