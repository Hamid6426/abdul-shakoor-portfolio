# SRS

This is a portfolio website for Dr. Abdul Shakoor of Mechanical Engineering Department, UET Peshawar.
The project contains normal pages like landing page, about, contact
There is also blogs page which showcase all blogs
The blog has a dedicated backend which give admin the ability to create, update and delete a blog easily

## TECH STACK

### FRONTEND
- Vite
- React
- Tailwind CSS
- Javascript

### BACKEND
- Node.js
- Express.js
- Mongoose.js
- Javascript

## User Journey
- The user visits the website at "example.com/"
- The user can see the recent and old projects
- The user moves to "example.com/about" page
- The user can see introduction Experiences, Education, Volunteer Works and other details
- The user move to "example.com/contact" page
- The user can send an email using the contact form
- The user move to "example.com/blogs" page which contain various blogs in card shape with info like Title, thumbnail etc
- The user click "read more" button and navigate to read the blog at "example.com/blogs/[blog-title]"

## Admin Dashboard

- The admin visit the website at "example.com/admin/dashboard"
- If token is not available, admin is redirected to "example.com/signin"
- The Admin sign-in with credentials which is verified and the admin is redirected to "example.com/admin/dashboard"
- There are various admin pages such as manage-blogs, manage-mails, account-settings, admin-support
- All the pages have their respective functions just as its name suggest

## TREE


website.com/
|
|-- @/about
|-- @/contact
|-- @/projects
|-- @/blogs
|   |-- @/blogs/:blogId
|
|-- @/admin
|   |-- @/dashboard
|   |-- @/manage-blogs
|   |-- @/manage-mails
|   |-- @/account-settings
|   |-- @/support

## PROJECT STRUCTURE

backend/
|── node_modules/
│   |── packages ...
|── src/
│   |── config/
│   │   |── db.js
│   |── controllers/
│   │   |── adminController.js
│   │   |── authController.js
│   │   |── blogController.js
│   │   |── mailController.js
│   |── helpers/
│   │   |── logger.js
│   │   |── responseFormatter.js
│   |── middlewares/
│   │   |── authMiddleware.js
│   │   |── errorHandler.js
│   |── models/ (mongoose)
│   │   |── Admin.js   # fullName, email, password, createdAt + bcrypt.hash + bcrypt.compare
│   │   |── Blog.js    # title, thumbnail, content, author, createdAt, updatedAt
│   │   |── Mail.js    # firstName, lastName, email, subject, message, sendAt
│   |── routes/
│   │   |── adminRoutes.js
│   │   |── authRoutes.js
│   │   |── blogRoutes.js
│   │   |── mailRoutes.js
│   |── services/
│   │   |── adminService.js
│   │   |── blogService.js
│   │   |── mailService.js
|── .env
|── .gitignore
│── app.js
|── package.lock.json
|── package.json
|── README.md
│── server.js
|
|
frontend/
|── node_modules/
│   |── packages ...
|── public/
│   |── profile-picture.png
│   |── favicon.ico
│   |── logo.svg
|── src/
│   |── components/
│   │   |── buttons/
│   │   │   |── BlogDeleteButton.jsx
│   │   │   |── MailDeleteButton.jsx
│   │   |── cards/
│   │   │   |── BlogCard.jsx
│   │   │   |── MailCard.jsx
│   │   |── forms/
│   │   │   |── AdminSigninForm.jsx
│   │   │   |── AdminSignupForm.jsx
│   │   |── modals/
│   │   │   |── BlogCreateModal.jsx
│   │   │   |── BlogUpdateModal.jsx
│   │   │   |── ShowMailModal.jsx
│   │   |── navigation/
│   │   │   |── AdminHeader.jsx
│   │   │   |── AdminNavbar.jsx
│   │   │   |── MainNavbar.jsx
│   │   │   |── MainFooter.jsx
│   │   |── routing/
│   │   │   |── ProtectedRoute.jsx
│   |── context/
│   │   |── AuthContext.jsx    # using useReducer
│   |── hooks/
│   │   |── useFetchBlogs.js
│   │   |── useFetchMails.js
│   |── layouts/
│   │   |── AdminLayout.jsx
│   │   |── AuthLayout.jsx
│   │   |── UserLayout.jsx
│   |── pages/
│   │   |── admin/
│   │   │   |── auth/
│   │   │   │   |── AdminSigninPage.jsx
│   │   │   │   |── AdminSignupPage.jsx
│   │   │   |── AdminDashboardPage.jsx
│   │   │   |── AdminManageBlogsPage.jsx
│   │   │   |── AdminManageMailsPage.jsx
│   │   │   |── AdminSettingsPage.jsx
│   │   │   |── AdminSupportPage.jsx
│   │   |── user/
│   │   │   |── AboutPage.jsx
│   │   │   |── BlogDetailPage.jsx (show a full blog page)
│   │   │   |── BlogsPage.jsx
│   │   │   |── ContactPage.jsx
│   │   │   |── HomePage.jsx
│   │   │   |── ProjectsPage.jsx  # No backend for this one
│   |── styles/
│   │   |── global.css
│   |── utils/
│   │   |── axiosConfig.js
│   |── App.jsx (All routings here)
│   |── main.jsx
|── .gitignore
|── eslint.config.js
│── index.html
|── package.lock.json
|── package.json
|── postcss.config.js
│── README.md
|── tailwind.config.js
|── vite.config.js
|
|
|── README.md
|── vercel.json