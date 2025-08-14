# User Data Fetcher - Task 7

A modern web application that demonstrates the use of JavaScript Fetch API to retrieve and display user data from a public API.

## 🎯 Objective

This project showcases:
- **Fetch API** usage for making HTTP requests
- **Asynchronous JavaScript** with async/await
- **JSON parsing** and data manipulation
- **Error handling** for network requests
- **Modern UI/UX** with responsive design
- **Interactive features** and loading states

## 🚀 Features

### Core Functionality
- ✅ Fetch user data from JSONPlaceholder API
- ✅ Display user information in beautiful cards
- ✅ Show user name, email, phone, website, company, and address
- ✅ Responsive grid layout that adapts to screen size
- ✅ Loading spinner during data fetch
- ✅ Comprehensive error handling

### User Interface
- 🎨 Modern gradient background design
- 📱 Fully responsive layout
- 🎯 Interactive buttons with hover effects
- 🔄 Reload functionality
- ⌨️ Keyboard shortcuts (Ctrl+R to reload)
- 🎭 Smooth animations and transitions

### Error Handling
- 🌐 Network error detection
- 📡 HTTP status code handling
- 🔄 Retry functionality
- 💬 User-friendly error messages

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Fetch API, async/await, DOM manipulation
- **JSONPlaceholder API** - Public REST API for testing

## 📁 Project Structure

```
task7/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 How to Run

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Or** use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
4. **Navigate** to `http://localhost:8000` in your browser

## 📖 API Information

The application fetches data from:
- **URL**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: JSON array of user objects
- **Data**: 10 mock users with complete information

### Sample User Data Structure
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  },
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  }
}
```

## 🎯 Key Learning Concepts

### 1. Fetch API
- Making HTTP requests to external APIs
- Handling different response types
- Working with JSON data

### 2. Asynchronous JavaScript
- Understanding promises
- Using async/await syntax
- Managing asynchronous operations

### 3. Error Handling
- Try-catch blocks
- Network error detection
- User-friendly error messages

### 4. DOM Manipulation
- Creating dynamic content
- Event handling
- State management

### 5. Modern CSS
- Flexbox and Grid layouts
- Responsive design
- CSS animations and transitions

## 🔧 Testing Error Scenarios

To test error handling:

1. **Network Error**: Disconnect your internet connection and click "Fetch Users"
2. **API Error**: Temporarily change the API URL in `script.js` to an invalid endpoint
3. **Browser Console**: Open developer tools to see detailed error logs

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎨 Customization

You can easily customize the application:

- **Colors**: Modify CSS variables in `styles.css`
- **Layout**: Adjust grid settings for different card arrangements
- **API**: Change the API URL to fetch different data
- **Styling**: Modify card design and animations

## 📚 Related Interview Questions

This project demonstrates concepts commonly asked in interviews:

1. **What is Fetch API?** - Making HTTP requests in JavaScript
2. **How do promises work?** - Asynchronous programming patterns
3. **Difference between synchronous and asynchronous code?** - Blocking vs non-blocking operations
4. **How to handle errors in Fetch?** - Try-catch and response validation
5. **What is JSON?** - Data format for API responses
6. **What is CORS?** - Cross-origin resource sharing
7. **How to parse JSON?** - Converting JSON strings to JavaScript objects
8. **Explain async/await** - Modern syntax for handling promises
9. **What are HTTP status codes?** - Response status indicators
10. **What is REST API?** - Representational state transfer

## 🤝 Contributing

Feel free to enhance this project by:
- Adding more user information fields
- Implementing search/filter functionality
- Adding pagination for large datasets
- Creating additional API integrations
- Improving accessibility features

## 📄 License

This project is created for educational purposes as part of the WEB DEVELOPMENT INTERNSHIP task.

---

**Happy Coding! 🚀**
