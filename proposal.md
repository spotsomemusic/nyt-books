### Justlexa TBD
**Created by Justin and Alexa**

### 🚀 Mission Statement
**Our application, [app name], is designed for book enthusiasts, or those who want to explore best-selling books featured in The New York Times lists. It allows users to:**
- Search for best-selling books by date or simply look at the current list.
- Access detailed information about each book, including cover image and description.

### API
**Link to API documentation:** [NYT Books API Documentation](https://developer.nytimes.com/docs/books-product/1/overview)

- **API Endpoint #1: Current Best Sellers**
  - Endpoint: `https://api.nytimes.com/svc/books/v3/lists.json`
  - Parameters:
    - List of books to search (categories found in [Names JSON](https://api.nytimes.com/svc/books/v3/lists/names.json))
    - Best sellers date
    - Published date(date the list was published, typically after the best sellers date)
    - Offset integer(In plain english, a number that is a multiple of 20 to decide whether to start the list from the 0th book, 20th book, 40th book, etc. This is optional.)

- **API Endpoint #2: Get Best Sellers by Date**
  - Endpoint: `https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json`
  - Parameters:
    - Date to search
    - List of books
    - Offset integer

- **API Endpoint #3: Best Sellers List History**
  - Endpoint: `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json`
  - Parameters:
    - Age group or demographic
    - Author
    - Contributor(Author as well as any other contributors such as an illustrator)
    - ISBN
    - Offset integer
    - Price of book
    - Publisher
    - Title

### 👩‍💻 MVP User Stories
**The core features of the application include:**
- Users have the ability to search for best-selling books by a specific date.
- Users can access detailed information about each best-selling book.
- Users can search for the current best sellers for specific genres of books.

### 🤔 Stretch User Stories
**If time permits, the following stretch features will be implemented in order of priority:**
- Users will be able to…
- Users will be able to…
- Users will be able to…

### 📆 Timeline for Reaching MVP in 1 Week

**Day 1**
- **Ticket 1: Initialize React App**
  - Set up the React project using `npm create vite@latest` or similar tool.
- **Ticket 2: API Key Configuration**
  - Integrate the New York Times Books API key.
- **Ticket 3: Basic Layout Design**
  - Design a simple layout for the application.

**Day 2**
- **Ticket 4: Best Sellers Search Functionality**
  - Implement functionality to search for best-selling books.
- **Ticket 5: Book Details Display**
  - Display detailed information about each book.

**Day 3**
- **Ticket 6: Genre-specific Best Sellers**
  - Implement the feature to search for current best sellers for specific genres of books.
- **Ticket 7: Best Sellers List History**
  - Create functionality to explore the history of best-seller lists.

**Day 4**
- **Ticket 8: UI Enhancements and Responsiveness**
  - Refine the UI/UX with CSS and potentially integrate a UI framework.
- **Ticket 9: Comprehensive Testing**
  - Thoroughly test the application for bugs.

**Day 5**

- **Wireframes of Each Page in Your Application**
  - Develop wireframes for each page of the application.


