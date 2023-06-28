import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { text } from "stream/consumers";

interface BreadcrumbTextProps {
  text: string;
  href: string;
}

const BreadcrumbText = ({ text, href }: BreadcrumbTextProps) => {
  return (
    <Typography
      variant="h6"
      component={Link}
      href={href}
      sx={{
        textDecoration: "none",
        color: "inherit",
        fontWeight: "bold",
      }}
    >
      {text}
    </Typography>
  );
};

export const Breadcrumbs = (props: any) => {
  const router = useRouter();
  const query = router.query;
  return (
    <MUIBreadcrumbs sx={{ display: "flex", alignItems: "center", ml: 3 }}>
      <BreadcrumbText text="Home" href="/" />
      {query.streamerId && (
        <BreadcrumbText
          text="Streamer"
          href={`/streamer/${query.streamerId}`}
        />
      )}
    </MUIBreadcrumbs>
  );
};
