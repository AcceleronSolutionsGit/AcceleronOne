import type { AppItem } from '../types';

/**
 * Hardcoded application links configuration.
 * URLs will be populated here when provided.
 */
export const INITIAL_APPS: AppItem[] = [
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'SALES & CUSTOMERS',
    description: 'Build stronger relationships. Turn opportunities into lasting partnerships.',
    url: 'https://crm.zoho.com', // Replace with production URL when provided
    tag: 'Zoho application',
    iconType: 'zoho-crm',
    accentColor: '#f97316',
  },
  {
    id: 'zoho-books',
    name: 'Zoho Books',
    category: 'FINANCE & ACCOUNTING',
    description: 'Keep your finances in focus. Manage invoices, expenses and accounting.',
    url: 'https://books.zoho.com', // Replace with production URL when provided
    tag: 'Zoho application',
    iconType: 'zoho-books',
    accentColor: '#3b82f6',
  },
  {
    id: 'darwinbox-hrms',
    name: 'Darwinbox HRMS',
    category: 'PEOPLE & CULTURE',
    description: 'Your people essentials, simplified. Attendance, leave and everything HR.',
    url: 'https://darwinbox.in', // Replace with production URL when provided
    tag: 'HR platform',
    iconType: 'darwinbox',
    accentColor: '#8b5cf6',
  },
  {
    id: 'acceleron-champ',
    name: 'Acceleron Champ',
    category: 'REWARDS & RECOGNITION',
    description: 'Celebrate the people who go further. Recognise great work, every day.',
    url: 'https://champ.acceleron.com', // Replace with production URL when provided
    tag: 'Made for Acceleron',
    iconType: 'champ',
    accentColor: '#e31b23',
  },
  {
    id: 'acceleronplus',
    name: 'Acceleronplus',
    category: 'PROJECTS & DELIVERY',
    description: 'Bring teams and projects together. Plan, collaborate and deliver with clarity.',
    url: 'https://plus.acceleron.com', // Replace with production URL when provided
    tag: 'Made for Acceleron',
    iconType: 'plus',
    accentColor: '#162544',
  },
];

export const CATEGORIES = [
  'All categories',
  'SALES & CUSTOMERS',
  'FINANCE & ACCOUNTING',
  'PEOPLE & CULTURE',
  'REWARDS & RECOGNITION',
  'PROJECTS & DELIVERY',
] as const;
