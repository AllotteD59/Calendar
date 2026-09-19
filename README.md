# 📅 EventFlow — React Calendar & Event Manager

**EventFlow** is a modern and responsive calendar application built with **React.js** that allows users to organize their schedules by creating, viewing, editing, and deleting events for specific dates.

The application combines a clean calendar interface with a dark **glassmorphism-inspired UI**, animated elements, event indicators, and responsive layouts for different screen sizes.

---

## ✨ Features

* 📅 **Interactive Calendar**

  * Select any date from the calendar.
  * Quickly navigate through months.
  * Jump back to the current date using the **Today** button.

* ➕ **Create Events**

  * Add an event to the currently selected date.
  * Press **Enter** to quickly create an event.
  * Events are displayed under the selected date.

* ✏️ **Edit Events**

  * Update the title of an existing event.

* 🗑️ **Delete Events**

  * Remove events directly from the event list.

* 🔵 **Event Indicators**

  * Dates containing events are visually marked on the calendar with an event indicator.

* 📊 **Event Statistics**

  * Total number of events.
  * Currently selected date.
  * Number of events scheduled for today.

* 📱 **Responsive Design**

  * Desktop, tablet, and mobile-friendly layouts.
  * Calendar and event sections adapt to smaller screens.

* 🎨 **Modern UI**

  * Dark theme.
  * Glassmorphism-style cards.
  * Gradient accents.
  * Animated background elements.
  * Smooth hover and entry animations.

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **CSS3**
* **React Calendar**

### UI & Styling

* CSS Grid & Flexbox
* CSS Gradients
* Glassmorphism
* CSS Animations
* Responsive Media Queries
* Google Fonts — Inter

The application uses `react-calendar` for the interactive calendar component.

---

## ⚙️ How It Works

EventFlow maintains the selected date, event input, and event collection using React's `useState` hook.

```text
                 ┌─────────────────┐
                 │     Calendar    │
                 └────────┬────────┘
                          │
                    Select a Date
                          │
                          ▼
                 ┌─────────────────┐
                 │  Create Event   │
                 │   Event Title   │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   Event List    │
                 └───────┬─┬───────┘
                         │ │
                    Edit │ │ Delete
                         │ │
                         ▼ ▼
                 ┌─────────────────┐
                 │ Updated Events  │
                 └─────────────────┘
```

Events are stored in React state, with each event containing an ID, date, and title.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AllotteD59/Calendar.git
```

### 2. Navigate to the project

```bash
cd Calendar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

---

## 📂 Project Structure

```text
Calendar/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧠 Core React Concepts Used

This project demonstrates several fundamental React concepts:

### State Management

React's `useState` is used to manage:

* Selected date
* Event title input
* Event collection

```javascript
const [selectedDate, setSelectedDate] = useState(new Date());
const [eventName, setEventName] = useState("");
const [events, setEvents] = useState([]);
```

### Event Handling

The application handles user interactions such as:

* Selecting calendar dates
* Creating events
* Editing events
* Deleting events
* Returning to today's date

### Conditional Rendering

The event section displays either the user's events or an empty-state message depending on whether events exist for the selected date.

### Array Methods

JavaScript array methods such as:

* `map()`
* `filter()`
* `some()`

are used to update, delete, and identify events.

---

## 🎨 UI Design

The interface uses a dark visual theme with translucent cards, gradients, blurred background elements, and animations.

The CSS includes responsive breakpoints at **900px** and **600px**, allowing the layout to adapt from a two-column desktop interface to a single-column mobile layout.

---

## 🔮 Future Improvements

Possible enhancements for future versions:

* 💾 Persistent event storage using **LocalStorage**
* 🔐 User authentication
* ☁️ Backend integration with **Node.js & Express**
* 🗄️ MongoDB database integration
* 🔔 Event reminders and notifications
* ⏰ Event time and duration support
* 🔎 Search and filter events
* 🏷️ Event categories and colors
* 📆 Multiple calendar views
* 🌐 Deployment with a live backend and database

---

## 📌 Current Limitations

Currently, events are maintained in React state, so they are not persisted to a database or permanent browser storage. Refreshing the application will therefore reset the event data. The current implementation focuses on the frontend calendar and event-management experience.

---

## 👨‍💻 Author

**Alok Kumar**

Built with React.js while learning and practicing modern frontend development.

---

## ⭐ If You Like It

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!
