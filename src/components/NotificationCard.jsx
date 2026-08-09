import { Card, CardContent, Typography, Chip } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Chip
          label={notification.Type}
          color={
            notification.Type === "Placement"
              ? "success"
              : notification.Type === "Result"
              ? "primary"
              : "warning"
          }
          sx={{ marginBottom: 2 }}
        />

        <Typography variant="h6" fontWeight="bold">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          {new Date(notification.Timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;