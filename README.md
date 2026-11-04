# MyAcceleron — Connected Workspace Portal

A modern, responsive frontend portal built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, replicating the MyAcceleron enterprise dashboard design.

---

## 🌟 Key Features

1. **Pixel-Perfect Mockup Match**:
   - Left sidebar with real-time counters, active indicators, and brand tagline.
   - Hero banner with personalized welcome ("*Welcome back, Arindam ✦*"), gateway tagline, and orbiting application badges.
   - Applications section with 5 core apps (*Zoho CRM*, *Zoho Books*, *Darwinbox HRMS*, *Acceleron Champ*, *Acceleronplus*) and *The Acceleron Advantage* callout card.
   - Interactive bottom productivity banner ("*A little more you. A lot more productive.*").

2. **Zero-Login Local Storage Engine**:
   - Users can use the portal immediately without logging in.
   - **Favourites**: Star or unstar any application; instantly reflected in counters and the Favourites view.
   - **Recently Opened**: Automatically logs click timestamps and access counts, showing recents with relative timestamps (e.g. "Opened 12m ago • 14 opens"). Option to clear history anytime.
   - **Customizable Links**: All application URLs are configurable in the **Workspace Settings** or directly via the hover gear icon on each card. Changes persist in `localStorage`.

3. **SSO (Single Sign-On) Ready Architecture**:
   - Ready for transition to enterprise identity providers (Microsoft Entra ID / Azure AD, Okta, Google Workspace, Ping Identity).
   - Includes an **SSO Architecture & Blueprint** preview in Settings showing group-based RBAC mapping and cloud sync.

4. **Keyboard & Search UX**:
   - Quick search with instant filtering across title, description, category, and tags.
   - Press <kbd>/</kbd> anywhere to immediately jump to and focus the search bar.
   - Category filtering dropdown (*Sales & Customers*, *Finance & Accounting*, *People & Culture*, *Rewards & Recognition*, *Projects & Delivery*).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will be accessible at `http://127.0.0.1:5173/`.

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Brand Assets & Colors

- **Primary Brand Navy**: `#162544` / `#1A2B4C`
- **Brand Accent Red**: `#E31B23` (from Acceleron chevron logo)
- **Sage / Emerald Background**: `#F0F5F2` – `#E4EEE7`
- **Active Navigation Green**: `#EAF2EC` with dot `#2E6848`
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## ⚙️ Configuring URLs

Since application URLs will be provided later, you can configure them in two ways:
1. **Via UI**: Click **Workspace settings** in the sidebar (or click the settings gear on any card) and enter your custom URLs.
2. **Via Code**: Edit `src/data/appsData.ts` and update the `defaultUrl` property for any app.
