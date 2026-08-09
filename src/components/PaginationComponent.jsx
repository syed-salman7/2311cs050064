import { Box, Pagination } from "@mui/material";

function PaginationComponent({ page, totalPages, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
        mb: 3,
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
}

export default PaginationComponent;