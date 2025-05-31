# Gym Management Dashboard

## About the Project

This project provides a comprehensive super admin dashboard designed for gym owners and their designated super-admin controllers. It offers a robust solution for managing various aspects of a gym's operations, from member data to administrative permissions and invoice generation. The aim is to streamline gym management, enhance data organization, and provide powerful tools for both gym owners and their administrative staff.

## Key Features

* **Admin Dashboard:** A dedicated interface for gym administrators to manage daily operations, member information, and other relevant gym activities.
* **Super Admin Dashboard:** A powerful control panel for gym owners (or designated super-admins) to oversee all aspects of the gym's management, including user permissions and overall system configurations.

## Tech Stack

* **Frontend:** Next.js, Tailwind CSS.
* **Backend:** Next.js Server Actions
* **Database:** MySQL
* **Deployment:** Vercel

## Installation Process

To get a local copy up and running, follow these simple steps.

**Prerequisites:**


* Node.js (LTS version recommended)
* npm (comes with Node.js) or yarn
* Git

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Siratul804/grit_gym_main.git
    ```
    Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

2.  **Navigate to the project directory:**
    ```bash
    cd YOUR_REPO_NAME
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the environment variables.

    ```
    # Example .env file
    NEXT_PUBLIC_API_URL=http://localhost:3000
    NEXT_PUBLIC_IMG_API_URL=http://localhost:3000/uploads
    MYSQL_HOST=
    MYSQL_DATABASE=
    MYSQL_USER=
    MYSQL_PASS=
    MYSQL_PORT=
    AUTH_SECRET=
    AUTH_URL=http://localhost:3000/app/auth
    ```
    *Make sure to replace the example values with your actual configuration.*


5.  **Start the development servers:**


        ```bash
        npm run dev
        ```


    Your application should now be running! Open your browser and navigate to `http://localhost:3000` (or whatever port your frontend is running on).
