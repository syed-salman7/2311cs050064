const priorityOrder = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(notifications) {
  return [...notifications]
    .sort((a, b) => {
      // Sort by notification type priority
      const priorityDifference =
        priorityOrder[b.Type] - priorityOrder[a.Type];

      if (priorityDifference !== 0) {
        return priorityDifference;
      }

      // If same type, sort by latest timestamp
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10); // Keep only Top 10
}