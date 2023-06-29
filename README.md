# Streamer's spotlight

The Streamer's Spotlight project is a web application that allows users to submit and explore their favorite streamers. It provides a streamlined interface for users to submit streamers, view a real-time updated list of submitted streamers, and access detailed information about specific streamers. The project utilizes SQLite as the database technology for data storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [License](#license)

## Features

- Streamer Submission Form:
  - Users can submit their favorite streamers by providing their name, streaming platform, and description.
  - The form allows users to select the streaming platform from a dropdown menu.
- Streamer List:

  - Displays a list of all submitted streamers.
  - Each streamer entry shows the streamer's name, streaming platform, description, and the number of upvotes and downvotes.
  - Real-time updates: The list updates dynamically as new streamers are added and upvotes/downvotes are cast.

- Streamer Details Page:

  - Shows detailed information about a specific streamer, including their name, description, platform, and a static image.
  - Users can navigate to this page to view specific streamer details.

- Backend Endpoints:

  - POST /api//streamers: Receives new streamer submissions from the frontend and stores them in a database.
  - GET /api//streamers: Returns all stored streamer submissions in response to a request from the frontend.
  - DELETE /api/streamers: Deletes all stored streamers (For testing purposes only)
  - GET /api/streamer/[streamerId]: Returns data about a specific streamer.
  - PUT /api/streamer/[streamerId]/vote: Receives an upvote for a specific streamer and updates their current upvote/downvote count.

- Database:
  - SQLite

## Installation

To run the application, follow these steps:

1. Clone the Git repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```shell
   cd streamer-spotlight
   ```

3. Install dependencies

   ```shell
   npm install
   ```

4. Start the application
   ```shell
   npm run start
   ```

This command will start the application and make it accessible at http://localhost:3000.

## License

Include the license information for your project. For example:

This project is licensed under the [MIT License](LICENSE).
