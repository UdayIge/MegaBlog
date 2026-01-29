<p align="center">
  <h3 align="center">MegaBlog</h3>

  <p align="center">
    A full-stack, modern blog publishing platform powered by Appwrite and React.
    <br />
    <a href="#features"><strong>Explore Features »</strong></a>
    <br />
    <br />
    <a href="#getting-started">Getting Started</a>
    ·
    <a href="#deployment">Deployment</a>
    ·
    <a href="#contributing">Contributing</a>
    ·
    <a href="https://github.com/UdayIge/megaBlog/issues">Issues</a>
  </p>
</p>

<p align="center">
  <a href="https://github.com/UdayIge/megaBlog/stargazers"><img src="https://img.shields.io/github/stars/UdayIge/megaBlog" alt="Github Stars"></a>
  <a href="https://github.com/UdayIge/megaBlog/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
  <a href="https://github.com/UdayIge/megaBlog/pulse"><img src="https://img.shields.io/github/commit-activity/m/UdayIge/megaBlog" alt="Commits-per-month"></a>
  <a href="#"><img src="https://img.shields.io/badge/Pricing-Free-brightgreen" alt="Pricing"></a>
  <a href="https://github.com/UdayIge/megaBlog/issues?q=is:issue+is:open+label:%22help+wanted%22"><img src="https://img.shields.io/badge/Help%20Wanted-Contribute-blue"></a>
</p>

## 📄 About MegaBlog

A feature-rich, open-source blogging platform built with React, Appwrite, and Redux Toolkit. Write, edit, and publish content with ease using an intuitive UI and powerful backend.

## Features

* 🌗 Light/Dark mode toggle support
* 🔐 Authentication (Signup/Login/Logout)
* 📄 Create, edit, delete articles
* 📷 Upload featured images
* 🔒 Access-controlled CRUD operations
* 📋 Rich-text editor via TinyMCE
* 🤝 Redux Toolkit integration
* 🌐 HTML parsing using html-react-parser
* ✅ Form handling with react-hook-form

## 🛠️ Built With

### Frontend

* [React](https://reactjs.org)
* [Vite](https://vitejs.dev)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [React Router DOM](https://reactrouter.com)
* [React Hook Form](https://react-hook-form.com)
* [TinyMCE](https://www.tiny.cloud)
* [html-react-parser](https://github.com/remarkablemark/html-react-parser)

### Backend / Services

* [Appwrite](https://appwrite.io)

  * Auth
  * Database
  * Storage (Bucket)

## Getting Started

### Prerequisites

* Node.js >= 18.x
* Appwrite Project & API Keys

### Local Setup

1. Clone the repo:

```bash
git clone https://github.com/UdayIge/megaBlog.git
cd megaBlog
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env`:

```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=''
```

4. Start development server:

```bash
npm run dev
```

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template)

1. Push code to GitHub
2. Connect repo on [Vercel](https://vercel.com)
3. Set up environment variables in Vercel dashboard
4. Deploy and go live!

### Vercel Config (Optional)

Create a `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Appwrite Configuration

1. Create a new Appwrite project (megaBlog)
2. Create database: `blog`
3. Add collection: `articles`

   * Attributes: `title`, `content`, `featuredImage`, `userId`, `status`
   * Index on `status`
4. Create a storage bucket for image uploads
5. Provide CRUD permissions as needed

## Project Structure

```
megaBlog/
├── appwrite-services/
│   ├── auth.js
│   └── config.js
├── components/
├── pages/
├── store/
├── conf/
├── App.jsx
├── main.jsx
└── .env
```

## Highlights

> **Vendor lock-in**: Appwrite services are modular, and while this project uses Appwrite SDKs, abstraction layers are used to minimize vendor dependency.


## Contributing

Contributions are welcome! Here's how:

1. Fork the repo
2. Create a new branch
3. Make changes and commit
4. Push and open a pull request

### Dev Guidelines

* Use Prettier and ESLint
* Maintain code consistency
* Document changes

## License

Distributed under the MIT License. See `LICENSE` for more info.

## Acknowledgments

* [Appwrite](https://appwrite.io)
* [TinyMCE](https://www.tiny.cloud)
* [Vercel](https://vercel.com)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [React Hook Form](https://react-hook-form.com)

## Support

* File an [issue](https://github.com/UdayIge/megaBlog/issues)
* Open discussions for suggestions

---

<p align="center">
  Built by <a href="https://github.com/UdayIge">@UdayIge</a>
</p>

