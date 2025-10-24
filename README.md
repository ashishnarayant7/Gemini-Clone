# Gemini Clone (React + Gemini API)

A simple Gemini AI Chat Clone built using **React** and the **Google Gemini API**.  
This project mimics the functionality and interface of Google’s Gemini chat — allowing users to ask questions, get AI-generated responses, and view past prompts.

---

## 🚀 Features

- Real-time AI chat powered by **Gemini 2.5 Flash** model
- Persistent chat history (Recent Prompts)
- Typing animation for AI responses
- Dynamic bold formatting and line breaks
- Interactive sidebar with expand/collapse
- Keyboard shortcut: Press **Enter** to send a message
- Clean and modern UI using pure CSS

---

## 🧩 Tech Stack

- **Frontend:** React.js (Vite)
- **Language:** JavaScript (ES6+)
- **API:** Google Generative AI (`@google/genai`)
- **Styling:** CSS3
- **Build Tool:** Vite

---

## 📦 Folder Structure

```
gemini-clone/
│
├── src/
│   ├── assets/                # Icons and images
│   ├── components/
│   │   ├── Main/              # Main chat UI
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── Sidebar/           # Sidebar for prompts and navigation
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.css
│   │
│   ├── config/
│   │   └── gemini.js          # Gemini API setup and chat function
│   │
│   ├── context/
│   │   └── Context.jsx        # Global context for state management
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your Gemini API Key

Create a `.env` file in the root directory and add your key:

```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

Then update your `gemini.js` file to use the key:

```js
const ai = new GoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});
```

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 💬 How It Works

1. The user types a question in the input box.
2. When the **Send** icon is clicked (or **Enter** pressed), the `onSent()` function is called from `Context.jsx`.
3. The function calls `runChat()` from `gemini.js`, which communicates with the Gemini 2.5 Flash model.
4. The model’s response is formatted, animated word-by-word, and displayed on the screen.
5. The user’s prompt is saved in `prevPrompts`, shown in the sidebar under “Recent”.

---

## 🧠 Example Prompt

Try typing:

```
Explain the concept of machine learning in simple terms.
```

Or click one of the suggested cards on the home screen.

---

## 🔧 Troubleshooting

**1. Images not showing up**  
Make sure your image imports are correct:

```js
import { assets } from "../../assets/assets";
```

**2. "Prompt is required" Error**  
Ensure you pass a non-empty string to `runChat(prompt)`.

**3. Sidebar showing duplicate prompts**  
Add a condition in Context to avoid pushing duplicate prompts.

---

## 🧑‍💻 Author

**Ashish Narayan Tellakula**  
Frontend Developer | AI & Web Enthusiast

---

## 📄 License

This project is open-source under the MIT License.

---

## 🌟 Future Improvements

- Add persistent chat history using localStorage or a backend API
- Improve UI with Tailwind or Material UI
- Add voice input and image upload support
- Implement dark/light mode toggle
