# ✅ ToDo App with Firebase

A cross-platform React Native To-Do application with Firebase Authentication and Firestore integration. Users can register, login, create, edit, and delete their tasks in real-time. Built with Expo and styled using custom theming for a responsive and clean user experience.

## 📲 Preview

Coming soon: APK download & demo GIF.

---

## 🚀 Features

- 🔐 **User Authentication** (Email/Password via Firebase Auth)
- ✅ **Real-Time To-Do Management** using Firebase Firestore
- 🌗 **Light/Dark Mode Support** with a custom ThemeContext
- 📝 **Edit & Delete Support** with modal interaction
- 📱 **Responsive UI** for Android and Web (Expo-compatible)
- 🔒 **Protected Routes** (Login required to access main app)

---

## 🧱 Tech Stack

- **React Native** with Expo
- **Firebase Auth** & **Firestore**
- **TypeScript**
- **Modular file structure** with separation of services, hooks, and styles
- **Custom Theming** using Context API
- **EAS Build** support for generating APKs locally

---

## 📂 Project Structure

```
📁 app
├── _layout.tsx       # Expo Router layout
├── Login.tsx         # Login screen
├── Todo.tsx          # Main To-Do screen
│
📁 services            # Firestore and Auth logic
📁 hooks               # Custom hooks (e.g. useAddToDo, useEditToDo)
📁 constants           # ThemeContext and theme definitions
📁 styles              # Modularized style files
📁 assets              # Icons, splash, and images
```

---

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/HDemir23/ToDo-App-Firebase.git
cd ToDo-App-Firebase
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add Firebase Configuration
Create a `.env` file at the root and provide your Firebase project credentials:

```env
EXPO_PUBLIC_apiKey=your_api_key
EXPO_PUBLIC_authDomain=your_project.firebaseapp.com
EXPO_PUBLIC_projectId=your_project_id
EXPO_PUBLIC_storageBucket=your_project.appspot.com
EXPO_PUBLIC_messagingSenderId=your_sender_id
EXPO_PUBLIC_appId=your_app_id
```

> ⚠️ Do not commit `.env` to GitHub.

### 4. Run the app

```bash
npx expo start
```

---

## 📦 Building APK Locally

To generate an Android `.apk` file locally:

```bash
npx eas build --platform android --profile preview --local
```

> Ensure Android SDK is set up and `sdk.dir` is defined in `android/local.properties`.

---

## 📌 Todos

- [ ] Add password reset
- [ ] Push notifications
- [ ] Firebase Analytics
- [ ] UI/UX polishing

---

## 🧑‍💻 Author

**A. Hakan Demir**  
[GitHub](https://github.com/HDemir23) • [LinkedIn](https://www.linkedin.com/in/hakandemirdev)

---

## 📝 License

This project is open-sourced under the [MIT License](LICENSE).