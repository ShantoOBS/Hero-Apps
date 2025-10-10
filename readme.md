<h1>🦸‍♂️ Hero IO</h1>

<p>
  A modern, responsive web application built with React.js to showcase and manage apps, 
  including live search, installation management, and visual analytics.
</p>

<h2>📖 Project Overview</h2>
<p>
  <strong>Hero IO</strong> is an App Store-like platform where users can explore apps, 
  view details with charts, and install or uninstall them using localStorage. 
  It ensures responsiveness, smooth navigation, and dynamic user experience.
</p>

<h2>✨ Features</h2>

<h3>🧱 Layout & Structure</h3>
<ul>
  <li>Responsive Header with Logo, Navigation Links, and Contribution Button</li>
  <li>Custom Footer with creative design</li>
</ul>

<h3>🏠 Home Page</h3>
<ul>
  <li>Beautiful banner with heading, text, and buttons for App Store & Play Store</li>
  <li>Stats section with 3 informative cards</li>
  <li>Top Apps section showing 8 apps with title, rating, and downloads</li>
  <li>“Show All” button navigates to All Apps page</li>
</ul>

<h3>📱 All Apps Page</h3>
<ul>
  <li>Live search functionality (case-insensitive)</li>
  <li>Total app count and search bar</li>
  <li>“No App Found” message for unmatched queries</li>
</ul>

<h3>📊 App Details Page</h3>
<ul>
  <li>App image, title, rating, downloads, and reviews</li>
  <li>Install button becomes “Installed” after click with toast notification</li>
  <li>Interactive chart built using Recharts</li>
  <li>Responsive design for all screen sizes</li>
</ul>

<h3>💾 My Installation Page</h3>
<ul>
  <li>Displays all installed apps from localStorage</li>
  <li>Uninstall button removes app from both UI and localStorage</li>
  <li>Toast notifications for install/uninstall actions</li>
  <li>Sorting dropdown by downloads (High-Low / Low-High)</li>
</ul>

<h3>⚙️ Additional Features</h3>
<ul>
  <li>Custom error page for invalid routes</li>
  <li>Loading animations during page navigation and search</li>
  <li>404-safe reloading after deployment</li>
</ul>

<h2>🧰 Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> React.js, React Router DOM</li>
  <li><strong>Styling:</strong> Tailwind CSS</li>
  <li><strong>Chart:</strong> Recharts</li>
  <li><strong>Storage:</strong> localStorage</li>
  <li><strong>Deployment:</strong> Vercel / Netlify / Cloudflare</li>
</ul>

<h2>🗂️ Data Structure Example</h2>

<pre>
{
  "image": "https://example.com/app.png",
  "title": "Hero Tracker",
  "companyName": "Hero Tech",
  "id": 1,
  "description": "Track your favorite heroes in one place.",
  "size": 85,
  "reviews": 15000,
  "ratingAvg": 4.7,
  "downloads": 500000,
  "ratings": [
    { "name": "1 star", "count": 150 },
    { "name": "2 star", "count": 230 },
    { "name": "3 star", "count": 520 },
    { "name": "4 star", "count": 2400 },
    { "name": "5 star", "count": 12300 }
  ]
}
</pre>

<h2>🚀 Deployment</h2>
<p>
  Deployed on <strong>Vercel / Netlify / Cloudflare</strong><br>
  🔗 <a href="hero-apps222.netlify.app" target="_blank">Live Demo Link</a>
</p>

<h2>🧑‍💻 Developer</h2>
<p>
  <strong>Name:</strong> Shanto Shil<br>
  <strong>Institute:</strong> International Standard University (CSE)<br>
  <strong>GitHub:</strong> <a href="https://github.com/ShantoOBS" target="_blank">ShantoOBS</a><br>
  <strong>Coding Alias:</strong> Code_Is_Fun
</p>

<h2>🪄 How to Run Locally</h2>
<pre>
git clone https://github.com/ShantoOBS/hero-io.git
cd hero-io
npm install
npm run dev
</pre>

<h2>🏁 Final Notes</h2>
<ul>
  <li>Fully responsive on all devices</li>
  <li>Error-free production build</li>
  <li>Includes minimum 5 meaningful commits</li>
  <li>Built with ❤️ for Assignment 008 — Hero IO</li>
</ul>
