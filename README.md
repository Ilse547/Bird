# **Bird Sightings Tracker**

A web application for tracking bird sightings by different users. The app allows users to log bird sightings, upload photos, and share their observations with others. It uses a **MongoDB database** with the **Mongoose plugin**, an **Express.js backend**, and **EJS** for rendering dynamic HTML.

---

## **Features**
- **Log Bird Sightings**: Users can log bird sightings with details such as name, date, time, and location.
- **Upload Photos**: Attach photos of the bird sightings for a richer experience.
- **Location Mapping**: Record the approximate location of the sighting.
- **User-Friendly Interface**: Simple and responsive design for easy navigation.
- **Privacy Options**: Choose to share sightings publicly or keep them private.
- **View Public Sightings**: See sightings shared by other users.
- **Secure Data**: Users cannot edit or modify entries made by others.

---

## **Description**
This app is designed for bird enthusiasts to document and share their sightings. Users can:
1. Add their bird sightings with detailed information.
2. Share their sightings publicly or keep them private.
3. View sightings shared by other users.
4. Upload photos to make sightings more engaging.

The app ensures that users can only modify their own entries, maintaining data integrity and security.

---

## **Backend Routing**
The backend routing is structured as follows:
- `/` → Displays the "Bird Homepage."
- `/birds` → Displays information about various birds.
- `/birds/:slug` → Displays details about a specific bird (e.g., "Looking at a page about the bird: `slug`").
- `/welcome` → Static HTML files
- `/welcome/:name` → Personalized welcome message (e.g., "Welcome, [name]! Hope you enjoy this simple dynamic backend routing").

---

## **Dummy Data**
The app includes sample images (`sml` and `sml2`) downloaded from the internet, which are used as placeholders for testing purposes.

---

## **CRUD and Database**
- The app uses **MongoDB Atlas** (free tier) as the database for storing bird sightings.
- The **Mongoose ODM** is used to define schemas and interact with the database.
- Full CRUD functionality is implemented:
  - **Create**: Add new bird sightings.
  - **Read**: View all or specific bird sightings.
  - **Update**: Edit existing sightings.
  - **Delete**: Remove unwanted sightings.

---

## **Environment Variables**
The app requires the following environment variables:
1. `PORT`: The port on which the server runs.
2. `MONGODB_URI`: The URI to connect to the MongoDB database.

These variables should be defined in a `.env` file.

---

## **Deployment**
- The Web application is deployed using the free tier of render.com, it may take some time before loading the page correctly as it shuts down after not having been accessed for a while.
- [Deployed Website](https://bird-nst6.onrender.com/)



---

## **Run server**
- for dev: `npm run dev`
- for one time use: `node index.js`
## **MongoDB**
- Start: `sudo systemctl start mongod`\
- Verify: `sudo systemctl status mongod`\
- Stop: `sudo systemctl stop mongod`\
- Restart: `sudo systemctl restart mongod`



