import type { AppItem } from '../types';

export const INITIAL_APPS: AppItem[] = [
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'SALES & CUSTOMERS',
    description: 'Build stronger relationships. Turn opportunities into lasting partnerships.',
    defaultUrl: 'https://crm.zoho.com',
    tag: 'Zoho application',
    iconType: 'zoho-crm',
    accentColor: '#f97316',
  },
  {
    id: 'zoho-books',
    name: 'Zoho Books',
    category: 'FINANCE & ACCOUNTING',
    description: 'Keep your finances in focus. Manage invoices, expenses and accounting.',
    defaultUrl: 'https://books.zoho.com',
    tag: 'Zoho application',
    iconType: 'zoho-books',
    accentColor: '#3b82f6',
  },
  {
    id: 'darwinbox-hrms',
    name: 'Darwinbox HRMS',
    category: 'PEOPLE & CULTURE',
    description: 'Your people essentials, simplified. Attendance, leave and everything HR.',
    defaultUrl: 'https://darwinbox.in',
    tag: 'HR platform',
    iconType: 'darwinbox',
    accentColor: '#8b5cf6',
  },
  {
    id: 'acceleron-champ',
    name: 'Acceleron Champ',
    category: 'REWARDS & RECOGNITION',
    description: 'Celebrate the people who go further. Recognise great work, every day.',
    defaultUrl: 'https://champ.acceleron.com',
    tag: 'Made for Acceleron',
    iconType: 'champ',
    accentColor: '#f59e0b',
  },
  {
    id: 'acceleronplus',
    name: 'Acceleronplus',
    category: 'PROJECTS & DELIVERY',
    description: 'Bring teams and projects together. Plan, collaborate and deliver with clarity.',
    defaultUrl: 'https://plus.acceleron.com',
    tag: 'Made for Acceleron',
    iconType: 'plus',
    accentColor: '#10b981',
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
