import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (!selectedDate || !eventName.trim()) return;

        const newEvent = {
            id: Date.now(),
            date: selectedDate,
            title: eventName.trim(),
        };

        setEvents([...events, newEvent]);
        setEventName("");
    };

    const Update_Event_Fun = (eventId) => {
        const newName = prompt("Enter new event title:");

        if (!newName || !newName.trim()) return;

        const updatedEvents = events.map((event) =>
            event.id === eventId
                ? { ...event, title: newName.trim() }
                : event
        );

        setEvents(updatedEvents);
    };

    const Delete_Event_Fun = (eventId) => {
        setEvents(events.filter((event) => event.id !== eventId));
    };

    const Go_To_Today = () => {
        setSelectedDate(new Date());
    };

    const selectedDateEvents = events.filter(
        (event) =>
            event.date.toDateString() === selectedDate.toDateString()
    );

    const hasEvent = (date) => {
        return events.some(
            (event) =>
                event.date.toDateString() === date.toDateString()
        );
    };

    return (
        <div className="app">

            {/* Animated Background */}
            <div className="background-orb orb-one"></div>
            <div className="background-orb orb-two"></div>
            <div className="background-orb orb-three"></div>

            {/* Header */}
            <header className="header">
                <div>
                    <div className="logo">
                        <span className="logo-icon">📅</span>
                        EventFlow
                    </div>

                    <p className="subtitle">
                        Organize your days. Track your events.
                    </p>
                </div>

                <button
                    className="today-btn"
                    onClick={Go_To_Today}
                >
                    Today
                </button>
            </header>


            {/* Statistics */}
            <div className="stats">

                <div className="stat-card">
                    <div className="stat-icon purple">
                        📅
                    </div>

                    <div>
                        <span>Total Events</span>
                        <strong>{events.length}</strong>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon blue">
                        ✨
                    </div>

                    <div>
                        <span>Selected Day</span>
                        <strong>
                            {selectedDate.toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </strong>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon pink">
                        📌
                    </div>

                    <div>
                        <span>Today's Events</span>
                        <strong>
                            {
                                events.filter(
                                    (event) =>
                                        event.date.toDateString() ===
                                        new Date().toDateString()
                                ).length
                            }
                        </strong>
                    </div>
                </div>

            </div>


            {/* Main Content */}
            <main className="main-container">

                {/* Calendar */}
                <section className="calendar-card">

                    <div className="section-header">
                        <div>
                            <h2>Calendar</h2>
                            <p>Select a date to manage events</p>
                        </div>

                        <span className="calendar-badge">
                            {selectedDate.toLocaleDateString(
                                "en-US",
                                {
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </span>
                    </div>


                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}

                        tileClassName={({ date }) => {
                            if (
                                date.toDateString() ===
                                selectedDate.toDateString()
                            ) {
                                return "selected";
                            }

                            if (hasEvent(date)) {
                                return "event-marked";
                            }

                            return "";
                        }}

                        tileContent={({ date }) =>
                            hasEvent(date) ? (
                                <span className="event-dot"></span>
                            ) : null
                        }
                    />

                </section>


                {/* Right Side */}
                <section className="right-section">

                    {/* Add Event */}
                    <div className="event-form">

                        <div className="form-title">
                            <div className="form-icon">
                                +
                            </div>

                            <div>
                                <h2>Create Event</h2>

                                <p>
                                    {selectedDate.toLocaleDateString(
                                        "en-US",
                                        {
                                            weekday: "long",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </p>
                            </div>
                        </div>


                        <div className="input-wrapper">

                            <input
                                type="text"
                                placeholder="What do you have planned?"
                                value={eventName}
                                onChange={Event_Data_Update}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        Create_Event_Fun();
                                    }
                                }}
                            />

                            <button
                                className="add-btn"
                                onClick={Create_Event_Fun}
                            >
                                Add Event
                                <span>→</span>
                            </button>

                        </div>

                    </div>


                    {/* Events */}
                    <div className="events-section">

                        <div className="events-header">

                            <div>
                                <h2>My Events</h2>

                                <p>
                                    {selectedDateEvents.length === 0
                                        ? "Nothing scheduled"
                                        : `${selectedDateEvents.length} event${
                                              selectedDateEvents.length > 1
                                                  ? "s"
                                                  : ""
                                          } scheduled`}
                                </p>
                            </div>

                            <span className="event-count">
                                {selectedDateEvents.length}
                            </span>

                        </div>


                        {selectedDateEvents.length === 0 ? (

                            <div className="empty-state">

                                <div className="empty-icon">
                                    🗓️
                                </div>

                                <h3>No events yet</h3>

                                <p>
                                    Your schedule is clear.
                                    Add something to this day!
                                </p>

                            </div>

                        ) : (

                            <div className="event-cards">

                                {selectedDateEvents.map(
                                    (event, index) => (

                                        <div
                                            className="event-card"
                                            key={event.id}
                                            style={{
                                                animationDelay: `${index * 0.08}s`,
                                            }}
                                        >

                                            <div className="event-color"></div>

                                            <div className="event-content">

                                                <div className="event-card-top">

                                                    <span className="event-time">
                                                        EVENT
                                                    </span>

                                                    <div className="event-actions">

                                                        <button
                                                            className="action edit"
                                                            onClick={() =>
                                                                Update_Event_Fun(
                                                                    event.id
                                                                )
                                                            }
                                                        >
                                                            ✏️
                                                        </button>

                                                        <button
                                                            className="action delete"
                                                            onClick={() =>
                                                                Delete_Event_Fun(
                                                                    event.id
                                                                )
                                                            }
                                                        >
                                                            🗑️
                                                        </button>

                                                    </div>

                                                </div>


                                                <h3>
                                                    {event.title}
                                                </h3>

                                                <p>
                                                    📅{" "}
                                                    {event.date.toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            weekday: "short",
                                                            month: "short",
                                                            day: "numeric",
                                                        }
                                                    )}
                                                </p>

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                    </div>

                </section>

            </main>

            <footer>
                <span>EventFlow</span>
                <span>•</span>
                <span>Plan your day, your way.</span>
            </footer>

        </div>
    );
};

export default App;