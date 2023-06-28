import { Typography } from "@mui/material";

interface HelperTextProps {
  text: string;
}
export const HelperText = (props: HelperTextProps) => {
  return <Typography>{props.text}</Typography>;
};
