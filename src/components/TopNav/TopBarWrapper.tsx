import { Box } from "@mui/material";
import { Breadcrumbs } from "./Breadcrumbs";

interface TopBarWrapperProps {}

export const TopBarWrapper = (props: TopBarWrapperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        alignItems: "center",
      }}
    >
      <Breadcrumbs />
    </Box>
  );
};
