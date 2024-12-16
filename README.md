# **Otaku Community - Public Website for Anime Fans**

Welcome to the **Otaku Community** project! This is a web-based platform that enables anime enthusiasts to chat in real-time across different groups and channels. Built with **Firebase** for authentication and database, it provides a seamless experience for anime fans to connect, share, and discuss their favorite topics.

---
---

## **Tech Stack**
- **Frontend**:
-  
  - **TypeScript** (92.4%)
  - **JavaScript** (5.3%)
  - **HTML** (2.0%)
  - **CSS** (0.3%)
- **Tools & Frameworks**:
  - **Vite**: Fast development environment.
  - **Tailwind CSS**: Utility-first CSS framework for quick styling.
  - **Firebase**: For real-time database and user authentication.
- **Package Management**:
  - **npm**: Package manager for JavaScript.

---

## **File Structure**
```
├── src/                    # Main source code
├── .gitignore              # Files to ignore in version control
├── README.md               # Project documentation
├── eslint.config.js        # Linting configuration
├── index.html              # Main HTML file
├── package-lock.json       # Lock file for npm dependencies
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js
└── vite.config.ts          # Vite configuration file
```

---

## **Setup Instructions**
Follow these steps to set up and run the project locally:

### **Prerequisites**
- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account and project setup

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/Kartikesh001/your-repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Setup Firebase:
   - Add your Firebase configuration to `firebase.ts` or the relevant file.
   - Enable **Authentication** and **Realtime Database** in Firebase Console.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Deployment**
The project is deployed on **Netlify**. You can access it here:
[otaku-community.netlify.app](https://otaku-community.netlify.app)

To deploy your own version:
- Connect your GitHub repository to Netlify.
- Configure environment variables if required.

---

## **Contributing**
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a Pull Request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For any queries or suggestions, feel free to connect:
- **GitHub**: [Kartikesh001](https://github.com/Kartikesh001)
- **Website**: [Otaku Community](https://otaku-community.netlify.app)
