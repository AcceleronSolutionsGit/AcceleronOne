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
  url: string;
  tag: string;
  iconType: 'zoho-crm' | 'zoho-books' | 'darwinbox' | 'champ' | 'plus';
  accentColor?: string;
}

export interface RecentlyOpenedEntry {
  appId: string;
  lastOpenedAt: number;
  openCount: number;
}

export type ViewTab = 'overview' | 'all' | 'favourites' | 'recent';
