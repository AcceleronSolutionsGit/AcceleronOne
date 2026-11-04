export type AppCategory = 
  | 'SALES & CUSTOMERS'
  | 'FINANCE & ACCOUNTING'
  | 'PEOPLE & CULTURE'
  | 'REWARDS & RECOGNITION'
  | 'PROJECTS & DELIVERY';

export interface AppItem {
  id: string;
  name: string;
  category: AppCategory;
  description: string;
  url: string; // Hardcoded destination URL (to be updated later via code as requested)
  tag: string; // e.g. "Zoho application", "HR platform", "Made for Acceleron"
  iconType: 'zoho-crm' | 'zoho-books' | 'darwinbox' | 'champ' | 'plus';
  accentColor?: string;
}

export interface RecentlyOpenedEntry {
  appId: string;
  lastOpenedAt: number; // timestamp
  openCount: number;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  isGuest: boolean;
  avatarLetter: string;
}

export type ViewTab = 'overview' | 'all' | 'favourites' | 'recent' | 'settings';
