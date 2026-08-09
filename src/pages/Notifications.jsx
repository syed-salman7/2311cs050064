import { useState } from "react";
import { Container, Typography } from "@mui/material";

import NotificationList from "../components/NotificationList";
import NotificationFilter from "../components/NotificationFilter";
import PriorityToggle from "../components/PriorityToggle";
import PaginationComponent from "../components/PaginationComponent";

import { getPriorityNotifications } from "../utils/prioritySort";

function Notifications() {
  // Sample data (replace with API later)
  const sampleNotifications = [
    {
      ID: "1",
      Type: "Placement",
      Message: "AMD Hiring Drive",
      Timestamp: "2026-04-22T10:00:00",
    },
    {
      ID: "2",
      Type: "Result",
      Message: "Java Results Published",
      Timestamp: "2026-04-21T09:00:00",
    },
    {
      ID: "3",
      Type: "Event",
      Message: "Hackathon Registration Open",
      Timestamp: "2026-04-20T08:00:00",
    },
    {
      ID: "4",
      Type: "Placement",
      Message: "TCS Hiring",
      Timestamp: "2026-04-22T11:30:00",
    },
    {
      ID: "5",
      Type: "Event",
      Message: "Technical Seminar",
      Timestamp: "2026-04-19T02:30:00",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [showPriority, setShowPriority] = useState(false);
  const [page, setPage] = useState(1);

  // Filter notifications
  let notifications = sampleNotifications;

  if (filter !== "All") {
    notifications = notifications.filter(
      (item) => item.Type === filter
    );
  }

  // Show Priority Notifications
  if (showPriority) {
    notifications = getPriorityNotifications(notifications);
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Campus Notification System
      </Typography>

      <NotificationFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PriorityToggle
        showPriority={showPriority}
        setShowPriority={setShowPriority}
      />

      <NotificationList
        notifications={notifications}
      />

      <PaginationComponent
        page={page}
        totalPages={5}
        setPage={setPage}
      />
    </Container>
  );
}

export default Notifications;