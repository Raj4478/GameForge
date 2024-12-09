# GameForge 🎮  
Your gateway to explore and discover games effortlessly!  

## 📋 Table of Contents  
- [✨ Features](#-features)  
- [💻 Technologies Used](#-technologies-used)  
- [🚀 Getting Started](#-getting-started)  
  - [📦 Installation](#-installation)  
  - [⚙️ Environment Variables](#-environment-variables)  
- [📁 Project Structure](#-project-structure)  
- [🛠️ Usage](#-usage)  
- [📅 Future Enhancements](#-future-enhancements)  
- [🤝 Contributing](#-contributing)  
- [📜 License](#-license)  

---

## ✨ Features  
- 🔒 **Secure User Authentication**: Login and registration with **bcrypt encryption**.  
- 🎮 **Real-time Game Data**: Fetches data via the [RAWG API](https://rawg.io/apidocs).  
- 📱 **Responsive Design**: Accessible on all devices.  
- 🔍 **Search Functionality**: Find detailed information about any game.  
- 🌟 **Modern Interface**: User-friendly and aesthetically pleasing UI.  

---

## 💻 Technologies Used  
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Encryption**: bcrypt  
- **Game Data API**: [RAWG API](https://rawg.io/apidocs)  
- **Deployment**: Vercel (Currently in Progress)  

---

## 🚀 Getting Started  

### 📦 Installation  
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Raj4478/GameForge.git
   cd GameForge

2. **Install Dependencies**
   ```bash

# For Backend
cd backend
npm install

# For Frontend
cd frontend
cd vite-project
npm install

#### Note - Here we have to use different Terminal to run Frontend and Backend 

3. **Run the Application**
   ```bash

    # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   cd vite-project
   npm run dev


## ⚙️ Environment Variables

### Create a .env file in the backend directory and add the following variables:
    ```bash
    PORT=5000
    MONGO_URI=<Your MongoDB URI>
    RAWG_API_KEY=<Your RAWG API Key>
    JWT_SECRET=<Your Secret Key>


## 📁 Project Structure
   ```bash
GameForge/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   └── App.js
└── README.md

