<h1 align="center">
  🎓 Udolor AZ
  <br>
  <sub>A desktop Udemy course downloader with an Azerbaijani interface</sub>
</h1>

<p align="center">
  <img alt="Electron" src="https://img.shields.io/badge/Electron-2C2E3B?logo=electron&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

---

## Overview

**Udolor AZ** is a cross-platform **desktop app** (Electron) for downloading the Udemy courses you are enrolled in, for offline viewing. It features a clean, modern, glassmorphism UI and a **fully Azerbaijani interface** (with multi-language support).

> For personal, offline use of courses you have legitimately purchased/enrolled in. Respect Udemy's Terms of Service and instructors' copyright.

## Features

- 🎬 Download enrolled-course videos for offline access
- 🌐 **Azerbaijani UI** + i18n (locale sync)
- 🪟 Modern, glassmorphism desktop interface
- 🖥️ Cross-platform (Windows / macOS / Linux via Electron)
- ⚙️ Configurable download options

## Tech Stack

- **Electron** (main + preload + renderer)
- Vanilla **JavaScript**
- i18n with locale sync script

## Getting Started

```bash
git clone https://github.com/goshgarhasanov/udolor_az.git
cd udolor_az
npm install
npm start        # launch the desktop app
```

## Project Structure

```
udolor_az/
├── main.js            # Electron main process
├── preload.js         # secure bridge
├── app/               # renderer (UI)
├── scripts/
├── environments.js
└── sync-locales.js    # i18n locale sync
```

## Disclaimer

This tool is intended for downloading content you have the right to access, for personal offline use only.

## License

MIT © Goshgar Hasanzadeh
