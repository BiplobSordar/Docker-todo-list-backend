# 🚀 3-Tier Application with Docker  

**Frontend Repository** 👉 [Docker-todo-list-client](https://github.com/BiplobSordar/Docker-todo-list-client.git)  
**Backend Repository** 👉 [Docker-todo-list-backend](https://github.com/BiplobSordar/Docker-todo-list-backend.git)  

---

## 📌 Project Overview  

এই প্রজেক্টে আমি একটি **3-Tier Application** তৈরি করেছি যেখানে:  

- **Frontend (React):** User interface তৈরি করা হয়েছে।  
- **Backend (Node.js / Express):** API service handle করা হয়েছে।  
- **Database (MySQL):** Application data store করার জন্য ব্যবহৃত।  

আমি পুরো application কে **Docker** ব্যবহার করে containerize করেছি, এবং প্রতিটি service আলাদা container এ চালানো হয়েছে।  

---

## ✨ Key Features  

- 🐳 **Dockerized Setup** → Frontend, Backend, Database আলাদা আলাদা container এ রান করে।  
- 🌐 **Custom Docker Network** → Container গুলো একে অপরের সাথে network এর মাধ্যমে communicate করে।  
- 💾 **Persistent Storage** → Database container এ volume attach করা হয়েছে, ফলে data safe থাকে container remove হলেও।  
- ⚡ **Scalable Structure** → সহজেই future এ Docker Compose / Kubernetes এ scale করা যাবে।  
- ☁️ **AWS Deployment Ready** → Application কে AWS EC2 instance এ deploy করা হয়েছে।  

---

## 🔧 How It Works  

1. **MySQL Container** → `mysql:8.0` image ব্যবহার করে database setup করা হয়েছে।  
2. **Backend Container** → API server run করে এবং MySQL database এর সাথে connect করে।  
3. **Frontend Container** → React app backend API কে consume করে এবং UI provide করে।  

---

## 🎯 Learning Outcome  

- Docker container basics  
- Docker network (bridge) ব্যবহার করে services connect করা  
- Docker volume ব্যবহার করে data persist করা  
- Multi-tier architecture deploy করা  
- AWS EC2 তে Dockerized app host করা  

---

## 🛠️ Run the Project on Local (Docker)  

To run this application locally using Docker:  

### 1️⃣ Clone the Backend Repository  

```bash
git clone https://github.com/BiplobSordar/Docker-todo-list-backend.git
cd Docker-todo-list-backend
```

### 2️⃣ Install Dependencies (Optional)


```bash
npm install 
```


### 3️⃣ Run with Docker Compose

```bash
docker compose up -d

```


### 🌍 Access the Application

Frontend (React UI): 👉 http://localhost:3000

Backend API (Express): 👉 http://localhost:5000

👉 যদি AWS EC2 তে deploy করেন, তবে EC2 Public IP / Domain ব্যবহার করে access করতে হবে।

