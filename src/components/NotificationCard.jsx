import React from "react";

function NotificationCard({ notification }) {
  const getTypeClass = (type) => {
    switch (type) {
      case "Placement":
        return "notification-placement";

      case "Result":
        return "notification-result";

      case "Event":
        return "notification-event";

      case "Exam":
        return "notification-exam";

      default:
        return "notification-general";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Placement":
        return "bi-briefcase-fill";

      case "Result":
        return "bi-trophy-fill";

      case "Event":
        return "bi-calendar-event-fill";

      case "Exam":
        return "bi-journal-text";

      default:
        return "bi-bell-fill";
    }
  };

  return (
    <div className={`notification-card ${getTypeClass(notification.Type)}`}>

      <div className="notification-card-content">

        {/* ICON */}
        <div className="notification-icon">
          <i className={`bi ${getIcon(notification.Type)}`}></i>
        </div>

        {/* CONTENT */}
        <div className="notification-content">

          {/* TYPE */}
          <div className="notification-header">
            <span className="notification-badge">
              {notification.Type}
            </span>
          </div>

          {/* MESSAGE */}
          <h5 className="notification-title">
            {notification.Message}
          </h5>

          {/* DATE */}
          <div className="notification-date">
            <i className="bi bi-clock me-2"></i>

            {new Date(notification.Timestamp).toLocaleString()}
          </div>

        </div>

      </div>

    </div>
  );
}

export default NotificationCard;