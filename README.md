# ⚡ Quick AI App

Quick AI is a powerful, all-in-one AI assistant built using Node.js, React, and the latest generative APIs. It includes multiple productivity and creative tools to assist users in content generation, image editing, and career building — with both free and premium access levels.

---

## 🚀 Features

- ✍️ **Write Article** – Generate professional articles from prompts using Gemini API.
- 🧠 **Title Generator** – Instantly generate catchy and relevant titles for blogs or documents.
- 🖼️ **Generate Image** – Create stunning visuals using Clipboard API.
- 🧽 **Remove Background** – Upload an image and instantly remove its background.
- 🧹 **Remove Object** – Erase unwanted elements from an image seamlessly.
- 📄 **Resume Review** – Upload your resume to get detailed AI feedback and suggestions.

---

## 🔐 Authentication

- Integrated using **[Clerk](https://clerk.dev/)** for user authentication.
- Users can log in via email/password, Google, or other OAuth providers.
- Sessions and route protection implemented using `@clerk/express` and `@clerk/clerk-react`.

---

## 💰 Free & Premium Access

- **Free Tier**: Limited usage of all features.
- **Premium Tier**: Full access to advanced tools with extended limits.
- Payment gateway handled using **Clerk's built-in payments** with Stripe integration.

---

## 🧠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL or MongoDB (as per your config)
- **Authentication**: Clerk
- **AI Models**: Gemini API via `GEMINI_API_KEY`
- **Image Generation**: Clipboard API via `CLIPBOARD_API_KEY`
