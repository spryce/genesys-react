# **Genesys Guitars - React Application** 🎸🚀

## **Overview**
Genesys Guitars is a **modernized React application** designed to bring the best of high-quality guitars directly to music lovers. Originally built as a **PHP-based web app**, it has now been fully **ported to React** for better performance, scalability, and maintainability.

This application is **designed for seamless deployment on AWS S3 via CloudFront**, making it highly efficient as a **static site** with **JSON-based data management** instead of a traditional database.

This project is intentionally simple as Genesys no longer operates an online store. The images are ancient with some missing and lost to the sands of time...

---

## **Features**
- ✅ **High-Performance React Framework** – Faster loading, smooth interactivity  
- ✅ **Static Site Deployment (AWS S3)** – No backend needed, reducing complexity  
- ✅ **JSON-Based Data Storage** – Migrated from MySQL for direct frontend access  
- ✅ **Enhanced UI & UX** – Improved visuals and responsiveness  
- ✅ **Customer Feedback Section** – Displayed dynamically from structured JSON data  

---

## **Technology Stack**
- 🚀 **React.js** – Frontend framework  
- 📜 **JSON** – Data storage solution  
- ☁️ **AWS S3** – Static hosting for easy scaling  
- 🎨 **CSS Modules** – Component-specific styling  
- 🛠️ **React Router** – For navigation  

---

## **Installation & Setup**

### Clone the repository:
```sh
git clone https://github.com/GenesysGuitars/react-app.git
cd react-app
```

### Install dependencies:
```sh
npm install
```

### Run the application locally:
```sh
npm start
```


### Deployment to AWS S3
- Build the static site:npm run build
- Upload to AWS S3 bucket via CLI or AWS Console
- Ensure the bucket is set for static website hosting
- Attach a custom domain (optional) for branding

### Data Migration from MySQL to JSON
Previously, customer reviews, inventory, and product data were stored in MySQL. To simplify deployment, all structured data has been migrated into JSON files, enabling direct access without a backend.

```sh
Example JSON format:
{
  "products": [
    {
      "id": 1,
      "name": "Classic Electric Guitar",
      "price": "$999",
      "image": "/images/classic-guitar.png"
    }
  ]
}
```

### License
📜 This project is unlicensed

