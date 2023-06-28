import { Box, ButtonBase, Typography } from "@mui/material";

interface ImageUploadProps {
  image: string;
  setImage: (image: string) => void;
}

export const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
  const handleOpenFileUpload = () => {
    setImage(
      "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
    );
  };

  if (image)
    return (
      <Box
        sx={{
          display: "flex",
          height: "200px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="streamer image"
          style={{
            contain: "fit",
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "30px",
          }}
        />
      </Box>
    );

  return (
    <ButtonBase
      sx={{ width: "100%" }}
      onClick={handleOpenFileUpload}
      onDrop={handleOpenFileUpload}
    >
      <Box
        sx={{
          display: "flex",
          height: "200px",
          width: "100%",
          border: "3px dashed grey",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Click to upload image
        </Typography>
      </Box>
    </ButtonBase>
  );
};
