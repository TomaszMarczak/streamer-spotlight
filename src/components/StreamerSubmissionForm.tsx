import {
  Button,
  FormControl,
  MenuItem,
  TextField,
  useFormControl,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Section } from "./Section";
import { SectionTitle } from "./Text";
import { ImageUpload } from "./ImageUpload";
import { useStreamers } from "../context/streamers.context";
import { Streamer } from "@prisma/client";

export default function StreamerSubmissionForm() {
  const formControl = useFormControl();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState<string>("");

  const { saveStreamer } = useStreamers();

  const handleSubmit = async () => {
    const streamer = {
      name,
      description,
      platform,
      image,
    };
    saveStreamer(streamer as Streamer).then(() => {
      setName("");
      setDescription("");
      setPlatform("");
      setImage("");
    });
  };

  return (
    <Section>
      <SectionTitle>Streamer submission form</SectionTitle>
      <FormControl {...formControl} fullWidth>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              id="streamer-name"
              label="Streamer name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="streamer-platform"
              label="Platform"
              value={platform}
              select
              fullWidth
              onChange={(e) => setPlatform(e.target.value as string)}
              required
            >
              <MenuItem value="Twitch">Twitch</MenuItem>
              <MenuItem value="YouTube">YouTube</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="Kick">Kick</MenuItem>
              <MenuItem value="Rumble">Rumble</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="streamer-description"
              label="Streamer description"
              value={description}
              multiline
              minRows={4}
              maxRows={8}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <ImageUpload image={image} setImage={setImage} />
          </Grid>
        </Grid>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Section>
  );
}
