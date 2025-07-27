# CineScope – Honest Movie Reviews

A modern, responsive movie review website built with HTML, CSS, and JavaScript. This is a static website designed for a student project with admin-controlled content and no backend requirements.

## 🌟 Features

### Core Functionality
- **Dynamic Review System**: JavaScript-powered movie review cards rendered from arrays
- **Advanced Filtering**: Filter by genre, rating, year, and search functionality
- **Responsive Design**: Works perfectly on all screen sizes
- **Dark Cinematic Theme**: Modern UI with smooth animations and hover effects
- **Static Content**: No backend required - all data stored locally

### Pages Included
1. **Home (`index.html`)**: Hero section, featured reviews, comparison table, viewer comments
2. **Reviews (`reviews.html`)**: Dynamic review cards with filtering and search
3. **Editor's Choice (`editors-choice.html`)**: Admin-selected top picks
4. **Polls (`polls.html`)**: Static poll results with animated bar charts
5. **Viewer Comments (`viewer-comments.html`)**: Fake comments for demonstration
6. **Suggestions (`suggestions.html`)**: Upcoming reviews and trending movies
7. **Contact (`contact.html`)**: Contact form with JavaScript validation and alerts
8. **About (`about.html`)**: Information about the site's mission

### JavaScript Features
- **Dynamic Content Rendering**: Movie reviews stored in arrays and rendered via JavaScript
- **Real-time Filtering**: Instant filtering by genre, rating, year, and search terms
- **Sorting Options**: Sort by latest, highest rated, or alphabetical
- **Modal Popups**: Detailed movie information in modal windows
- **Form Validation**: Contact form with real-time validation and success alerts
- **Smooth Animations**: Fade-in effects and hover animations

### Design Features
- **Dark Theme**: Cinematic dark color scheme with cyan accents
- **Google Fonts**: Plus Jakarta Sans, Noto Sans, Anton, Oswald, Bebas Neue
- **Responsive Grid**: CSS Grid layouts that adapt to all screen sizes
- **Hover Effects**: Interactive elements with smooth transitions
- **Modern UI**: Clean, professional design with attention to detail

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. Navigate through the different pages using the navigation menu

### Running Locally
You can run the website using any local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 File Structure

```
Website/
├── index.html              # Home page
├── reviews.html            # Reviews page with dynamic content
├── editors-choice.html     # Editor's choice page
├── polls.html             # Polls with bar charts
├── viewer-comments.html    # Viewer comments page
├── suggestions.html        # Movie suggestions page
├── contact.html           # Contact form with JavaScript
├── about.html             # About page
├── home.css               # Main stylesheet
├── reviews.css            # Reviews page specific styles
├── reviews.js             # JavaScript for dynamic reviews
├── editors-choice.js      # JavaScript for editor's choice
├── editors-choice.css     # Editor's choice styles
└── README.md              # This file
```

## 🎬 Movie Data Structure

The website uses JavaScript arrays to store movie information:

```javascript
const movieReviews = [
  {
    id: 1,
    title: "Movie Title",
    year: 2024,
    director: "Director Name",
    cast: "Actor 1, Actor 2, Actor 3",
    genre: "Genre",
    rating: 5,
    poster: "poster-url.jpg",
    summary: "Movie description...",
    runtime: "120 minutes",
    language: "English",
    country: "USA",
    boxOffice: "$100M"
  }
];
```

## 🎨 Customization

### Adding New Movies
1. Open `reviews.js`
2. Add new movie objects to the `movieReviews` array
3. Include all required fields (title, year, director, etc.)

### Changing Styles
1. Modify `home.css` for global styles
2. Edit `reviews.css` for reviews page specific styles
3. Update color variables for theme changes

### Adding New Pages
1. Create new HTML file following the existing structure
2. Include the header and footer from other pages
3. Add page-specific CSS in a `<style>` tag or separate CSS file

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Dynamic content rendering and interactivity
- **Google Fonts**: Typography enhancement

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized images and assets
- Efficient CSS animations
- Minimal JavaScript footprint
- Responsive design for all devices

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers (1920px+)
- Laptops (1366px)
- Tablets (768px)
- Mobile phones (480px and below)

## 🎯 Key Features Demonstrated

### JavaScript Functionality
- **Dynamic Content**: Movie reviews rendered from JavaScript arrays
- **Real-time Search**: Instant filtering as you type
- **Advanced Filtering**: Multiple filter criteria (genre, rating, year)
- **Sorting**: Multiple sort options (latest, rating, alphabetical)
- **Modal Windows**: Detailed movie information in popup modals
- **Form Validation**: Contact form with client-side validation
- **Success Alerts**: JavaScript alerts on form submission

### CSS Features
- **Modern Layout**: CSS Grid and Flexbox
- **Smooth Animations**: Keyframe animations and transitions
- **Hover Effects**: Interactive element states
- **Dark Theme**: Professional cinematic color scheme
- **Responsive Design**: Mobile-first approach

### HTML Structure
- **Semantic Markup**: Proper use of HTML5 elements
- **Accessibility**: ARIA labels and semantic structure
- **SEO Friendly**: Proper meta tags and structure
- **Clean Code**: Well-organized and commented code

## 🚫 What's NOT Included

As per requirements, the website does NOT include:
- YouTube trailers or video embeds
- Real-time forms or voting systems
- Backend connections or databases
- User input or dynamic content submission
- Real-time APIs or external data sources

## 📄 License

This project is created for educational purposes as a student project. All movie data and images are for demonstration purposes only.

## 🤝 Contributing

This is a student project, but suggestions for improvements are welcome. The code is well-documented and easy to modify for different use cases.

---

**CineScope – Honest Movie Reviews**  
A modern, responsive movie review website built with passion for cinema and clean code. 