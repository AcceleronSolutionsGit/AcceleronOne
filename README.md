# Acceleron One — Connected Workspace Portal

A compact enterprise workspace dashboard designed with the **Acceleron Solutions** brand identity (**Navy `#162544`**, **Red `#E31B23`**, and **Cool Slate `#F6F8FB`**).

Repository: [https://github.com/AcceleronSolutionsGit/AcceleronOne.git](https://github.com/AcceleronSolutionsGit/AcceleronOne.git)

---

## 🚀 Key Features

1. **Brand Identity & Compact Design**:
   - Features the uploaded **Acceleron Solutions** logo and custom favicon derivation.
   - Themed with the official brand color palette: Acceleron Navy (`#162544`) and accent red (`#E31B23`).
   - Compact density: streamlined cards, hero banner, and sidebar designed for high information density.

2. **Hardcoded URLs**:
   - URLs cannot be modified from the frontend UI.
   - All links are centrally maintained in [`src/data/appsData.ts`](./src/data/appsData.ts) and can be updated directly with production URLs when provided.

3. **Zero-Login Local Storage Engine**:
   - **Favourites**: Star or unstar any application; instantly reflected in badge counters and the Favourites tab filter.
   - **Recently Opened**: Tracks launch activity per browser with relative timestamps and access counters.

4. **SSO (Single Sign-On) Ready**:
   - Configured with an architectural blueprint for upcoming corporate SSO migration (SAML 2.0 / OIDC / Azure AD / Okta).

5. **Configured for Vercel Deployment**:
   - Pre-configured with [`vercel.json`](./vercel.json) for Vite Single Page Application routing and caching.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ☁️ Deployment to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New... > Project**.
3. Import the repository: `AcceleronSolutionsGit/AcceleronOne`.
4. The build settings are auto-detected via `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
