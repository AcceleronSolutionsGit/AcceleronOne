import type { AppItem } from '../types';

/**
 * Enterprise applications configuration.
 * Hardcoded production URLs for Acceleron internal platforms.
 */
export const INITIAL_APPS: AppItem[] = [
  {
    id: 'acceleronplus',
    name: 'Acceleronplus',
    category: 'PROJECTS & DELIVERY',
    description: 'Project delivery management, team timesheets, sprint tracking, and client milestones.',
    url: 'https://apps.acceleronsolutions.io/acceleron-plus/login',
    tag: 'Delivery Platform',
    iconType: 'plus',
    accentColor: '#162544',
  },
  {
    id: 'darwinbox-hrms',
    name: 'Darwinbox HRMS',
    category: 'PEOPLE & CULTURE',
    description: 'Daily attendance, leave requests, salary slips, and employee self-service portal.',
    url: 'https://onegainwellonehr.darwinbox.in/',
    tag: 'Core HRMS',
    iconType: 'darwinbox',
    accentColor: '#8b5cf6',
  },
  {
    id: 'acceleron-champ',
    name: 'Acceleron Champ',
    category: 'REWARDS & RECOGNITION',
    description: 'Peer-to-peer spot recognition, quarterly awards, celebrations, and team milestones.',
    url: 'https://acceleron-champ-server.vercel.app/login',
    tag: 'Internal Tool',
    iconType: 'champ',
    accentColor: '#e31b23',
  },
  {
    id: 'zoho-books',
    name: 'Zoho Books',
    category: 'FINANCE & ACCOUNTING',
    description: 'Corporate financial accounting, vendor invoices, payment approvals, and expense records.',
    url: 'https://books.zoho.com',
    tag: 'Zoho Suite',
    iconType: 'zoho-books',
    accentColor: '#3b82f6',
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'SALES & CUSTOMERS',
    description: 'Customer accounts, lead management, sales pipeline, and client communication tracking.',
    url: 'https://crm.zoho.com',
    tag: 'Zoho Suite',
    iconType: 'zoho-crm',
    accentColor: '#f97316',
  },
];

export const CATEGORIES = [
  'All categories',
  'PROJECTS & DELIVERY',
  'PEOPLE & CULTURE',
  'REWARDS & RECOGNITION',
  'FINANCE & ACCOUNTING',
  'SALES & CUSTOMERS',
] as const;
