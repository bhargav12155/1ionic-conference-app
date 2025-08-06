# Deploying Your Ionic Conference App

This guide will help you deploy your Ionic/Angular app to a public URL using Vercel (recommended), GitHub Pages, or Netlify.

---

## 🚀 Deploy to Vercel (Recommended)

### 1. Push Your Code to GitHub

- Make sure your latest code is committed and pushed to a GitHub repository.

### 2. Build Your App for Production

```bash
npm run build
```

- This creates a `dist/ionic-conference-app` folder.

### 3. Go to [vercel.com](https://vercel.com/) and Sign In with GitHub

### 4. Click "New Project" and Import Your GitHub Repo

### 5. Set Build Settings:

- **Framework Preset:** Angular
- **Build Command:** `npm run build`
- **Output Directory:** `dist/ionic-conference-app`

### 6. Click "Deploy"

### 7. Get Your Public URL

- Vercel will give you a live URL (e.g., `https://your-app-name.vercel.app`).

---

## 🌐 Deploy to GitHub Pages (Alternative)

### 1. Install the Deploy Tool

```bash
npm install -g angular-cli-ghpages
```

### 2. Build for Production

```bash
ng build --base-href "https://<your-github-username>.github.io/<repo-name>/"
```

### 3. Deploy

```bash
npx angular-cli-ghpages --dir=dist/ionic-conference-app
```

### 4. Access Your App

- Go to: `https://<your-github-username>.github.io/<repo-name>/`

---

## 🌍 Deploy to Netlify (Alternative)

### 1. Push your code to GitHub.

### 2. Go to [netlify.com](https://netlify.com/) and sign up.

### 3. Click "Add new site" > "Import an existing project".

### 4. Connect your GitHub repo.

### 5. Set build command: `npm run build`

### 6. Set publish directory: `dist/ionic-conference-app`

### 7. Click "Deploy site".

---

## ⚠️ Notes

- If your app uses Cordova/Capacitor plugins that require native device features, those features will not work in a web deployment.
- For best results, test your deployed app on both desktop and mobile browsers.

---

If you need more help, just ask!
