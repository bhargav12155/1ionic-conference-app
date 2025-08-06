# Ionic Angular Conference Application (Enhanced Geofencing Edition)

This application is an enhanced version of the Ionic Framework and Angular conference demo, featuring advanced geofencing capabilities, real-time activity tracking, and comprehensive data management.

## 🌐 Live Demo

**Live Application:** [https://bhargav12155.github.io/1ionic-conference-app/](https://bhargav12155.github.io/1ionic-conference-app/)

## ✨ Enhanced Features

### 🗺️ **Advanced Geofencing System**

- **Custom Polygon Drawing**: Draw custom geofence areas on Google Maps
- **Real-time Geofence Detection**: Automatic entry/exit detection
- **Multiple Geofence Support**: Create and manage multiple geofenced areas
- **Backend Integration**: Automatically sync geofences to backend API

### 📊 **Enhanced Activity Log**

- **Advanced Table UI**: Professional data table with sorting, filtering, and pagination
- **Smart Deduplication**: Removes duplicate events based on timestamp, location, IP, and device
- **Real-time Data**: Fetches data from external API endpoints
- **Comprehensive Search**: Search by User ID, IP address, device type, or event type
- **Responsive Design**: Optimized for both desktop and mobile devices

### 🔗 **Backend API Integration**

- **Dynamic API URLs**: Automatically detects localhost vs production environment
- **Geofence API**: `https://loc-end.onrender.com/api/geofence` (POST)
- **Location Data API**: `https://loc-end.onrender.com/api/location` (GET)
- **Error Handling**: Comprehensive error handling with user-friendly notifications

## Table of Contents

- [Getting Started](#getting-started)
- [Enhanced Features](#enhanced-features)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
  - [GitHub Pages (Production)](#github-pages-production)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)
- [Contributing](#contributing)
- [App Preview](#app-preview)

## 🚀 Getting Started

- [Download the installer](https://nodejs.org/) for Node LTS.
- Install the ionic CLI globally: `npm install -g ionic`
- Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
- Run `npm install` from the project root.
- Run `ionic serve` in a terminal from the project root.
- Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## 🔌 API Endpoints

The application integrates with the following backend APIs:

### Geofence Management

- **URL**: `https://loc-end.onrender.com/api/geofence`
- **Method**: POST
- **Purpose**: Create and store geofence boundaries
- **Auto-triggered**: When drawing polygons on the map

### Location Data

- **URL**: `https://loc-end.onrender.com/api/location`
- **Method**: GET
- **Purpose**: Fetch user location and activity data
- **Features**: Displays in activity log with deduplication and filtering

### Environment Detection

```typescript
const isLocal = window.location.protocol === "file:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const API_BASE = isLocal ? "http://localhost:3000" : "https://loc-end.onrender.com";
```

## 🚀 Deployment

### GitHub Pages (Production)

The application is automatically deployed to GitHub Pages. To deploy updates:

1. **Build for production with correct base href:**

   ```bash
   npx @angular/cli build --base-href "https://bhargav12155.github.io/1ionic-conference-app/"
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npx angular-cli-ghpages --dir=dist/ionic-conference-app
   ```

3. **Access the live application:**
   - **URL**: https://bhargav12155.github.io/1ionic-conference-app/
   - **Features**: All geofencing and activity tracking features available
   - **API Integration**: Connects to production backend automatically

### Development Deployment

For local development:

```bash
# Install dependencies
npm install

# Start development server
ionic serve

# The app will be available at http://localhost:4200
# API calls will be made to localhost:3000 if running locally
```

## App Preview

### [Menu](https://github.com/ionic-team/ionic-conference-app/blob/main/src/app/app.component.html)

| Material Design                                          | iOS                                              |
| -------------------------------------------------------- | ------------------------------------------------ |
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |

### [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/main/src/app/pages/schedule/schedule.html)

| Material Design                                                  | iOS                                                      |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| ![Android Schedule](/resources/screenshots/android-schedule.png) | ![iOS Schedule](/resources/screenshots/ios-schedule.png) |

### [Speakers Page](https://github.com/ionic-team/ionic-conference-app/blob/main/src/app/pages/speaker-list/speaker-list.html)

| Material Design                                                  | iOS                                                      |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Speaker Detail Page](https://github.com/ionic-team/ionic-conference-app/blob/main/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design                                                              | iOS                                                                  |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [About Page](https://github.com/ionic-team/ionic-conference-app/blob/main/src/app/pages/about/about.html)

| Material Design                                            | iOS                                                |
| ---------------------------------------------------------- | -------------------------------------------------- |
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |

## 📱 Enhanced Features Preview

### 🗺️ **Map & Geofencing**

- Interactive Google Maps with custom polygon drawing
- Real-time geofence boundary creation
- Automatic API synchronization with backend
- Visual feedback for entry/exit events

### 📋 **Activity Log Dashboard**

- Professional data table with advanced controls
- Search, filter, sort, and paginate through events
- Real-time data from external APIs
- Smart deduplication prevents duplicate entries
- Responsive design for all screen sizes

### 🔄 **Real-time Integration**

- Automatic detection of local vs production environment
- Seamless API integration with error handling
- Toast notifications for user feedback
- Background sync for geofence data

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/main/.github/CONTRIBUTING.md) :tada::+1:

---

## 📋 Deployment Summary

- **Live URL**: https://bhargav12155.github.io/1ionic-conference-app/
- **Backend API**: https://loc-end.onrender.com
- **Last Deployed**: August 6, 2025
- **Build Tool**: Angular CLI with GitHub Pages deployment
- **Features**: Enhanced geofencing, activity tracking, real-time API integration

### Quick Deployment Commands:

```bash
# Build for production
npx @angular/cli build --base-href "https://bhargav12155.github.io/1ionic-conference-app/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/ionic-conference-app
```
