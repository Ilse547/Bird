This project is a web app to track bird sightings by different users.


## Features:
Log bird sightings\
upload fotos\
location mapping\
user friendly interface\

## Description:
The user should be able to add it's sightings, with a picture that they took, the approximate time, and the location.
A user can share the sightings with other users by making them public, or keep the sightings priavte
Other users can see the sightings of other users
Other users cannot modify other users entries


## Backend Routing:
The backend routing works as is:\
/ -> "Bird Homepage"\
/...bird/ -> Information about various birds\
/birds/[birdname] -> "Looking at a page about the bird: [birdname]"\
/welcome/[name] -> "Welcome, [name]! Hope you enjoy this simple dynamic backend routing"\
To test the backend routing run: `node index.js`

## Dummy data:
The Images named "sml" and "sml2" Were downloaded from the internet and are used as dummy data

## CRUD and Databases


## Run server:
for dev: `npm run dev`\
for one time use: `node index.js`
## MongoDB:
Start: `sudo systemctl start mongod`\
Verify: `sudo systemctl status mongod`\
Stop: `sudo systemctl stop mongod`\
Restart: `sudo systemctl restart mongod`

