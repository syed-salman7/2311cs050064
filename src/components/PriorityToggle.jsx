import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function PriorityToggle({ showPriority, setShowPriority }) {
  const handleChange = (event, value) => {
    if (value !== null) {
      setShowPriority(value);
    }
  };

  return (
    <ToggleButtonGroup
      value={showPriority}
      exclusive
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    >
      <ToggleButton value={false}>
        All Notifications
      </ToggleButton>

      <ToggleButton value={true}>
        Priority Notifications
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default PriorityToggle;