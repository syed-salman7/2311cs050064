import NotificationCard from "./NotificationCard";
import { Typography } from "@mui/material";

function NotificationList({ notifications }) {
  if (!notifications || notifications.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 3 }}>
        No Notifications Found
      </Typography>
    );
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}

export default NotificationList;