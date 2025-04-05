# Mini React Program

## 1 Get Random Avatar

A lightweight React mini-program built with Vite and Tailwind CSS that allows users to fetch a random avatar image with a single click. This is one of the mini apps under the **MiniReact** collection, showcasing modular component design, API interaction, UI styling, and custom hooks in modern React.

---

## Features

| Feature                               | Description                                                                          |
| ------------------------------------- | ------------------------------------------------------------------------------------ |
| ✅ Random avatar fetching             | Uses the Unsplash API to fetch a random avatar image on button click                 |
| ✅ Custom React Hook                  | Encapsulates image-fetching logic into `useFetchAvatar` for cleaner state management |
| ✅ Tailwind CSS styling               | Fully responsive UI with gradient backgrounds, rounded avatars, and animations       |
| ✅ Component encapsulation            | `AvatarShow` handles image rendering only — separation of concerns                   |
| ✅ Environment variable configuration | API key securely loaded via `.env` using `import.meta.env` (Vite standard)           |

---

## Tech Stack

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧠 Custom React Hooks
- 🌐 Unsplash API
- 🛠️ JavaScript (ES6+)

---

## Project Structure

```md
get-random-avatar/
├── src/
│   ├── App.jsx                # Main layout & UI logic
│   ├── main.jsx               # Entry point for ReactDOM
│   ├── hooks/
│   │   └── useFetchAvatar.jsx # Custom hook: manages fetch logic & avatar state
│   ├── components/
│   │   └── AvatarShow.jsx     # Avatar display component
│   ├── services/
│   │   └── unplashApi.jsx     # Unsplash API abstraction layer
│   └── config.js              # Extracts VITE_UNSPLASH_ACCESS_KEY from env
├── .env                       # Stores Unsplash API key
├── vite.config.js
├── package.json
└── README.md
```

---

## How It Works

- Click the "Pick Random Avatar" button
- Calls `getRandomImage()` via Unsplash API (randomized)
- Updates local state with the image URL
- Re-renders `<AvatarShow>` with new image
- Background UI uses animated Tailwind gradient + smooth transitions

---

## Environment Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

> 🧠 Ensure you have a `.env` file in the project root:

```env
VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
```

---

## 📌 To-Do / Future Improvements

- [ ] Add a loading spinner while fetching new avatars
- [ ] Handle API errors gracefully with user feedback (e.g. toast or fallback UI)
- [ ] Support avatar download functionality
- [ ] Store and display previously fetched avatars (history view)
- [ ] Allow user to "favorite" avatars and persist via `localStorage`
- [ ] Improve accessibility: add ARIA labels, keyboard focus support
- [ ] Introduce light/dark theme toggle with Tailwind `dark` class
- [ ] Animate avatar changes using Framer Motion
- [ ] Refactor to TypeScript for type safety
- [ ] Deploy on Vercel with live demo link

---

## 📎 License

This mini-program is part of the [MiniReact Collection](https://github.com/yourname/MiniReact) and is open-source under the MIT License.
