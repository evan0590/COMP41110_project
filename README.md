# COMP41110_project
Cloud Computing - Online Calendar

This project may be considered an interpretation of cloud based scheduling services such as Google Calendar or Apple's iCloud Calendar and is enabled with the following operations:\
&nbsp; a)	Create new events,\
&nbsp; b)	Edit or delete existing events,\
&nbsp; c)	Search for events,\
&nbsp; d)	Time slots booking,\
&nbsp; e)	Share calendar.

This project is divided into a backend and frontend. The backend has been developed using Django and the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

In order to run this project locally it is necessary to have Node.js, the npm package manager, and Python 3 installed on your machine. 

With these prerequisites fulfilled, to start the backend run the following commands from the ```backend``` directory:
```json
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```
These commands will create and activate a virtual environment named ```env``` with the required dependencies.\
Following this, navigate into the ```src``` directory located within the ```backend``` directory and run the following command:
```json
python manage.py runserver
```
This command will run the Django server that serves the user interface with the calendar data.


Following this, open another window while keeping the Django server running. Navigate first into the ```frontend``` directory located at the top of the source directory, and then into the ```gui``` directory. When inside this directory run the following two commands:
```json
npm install
npm start
```

The first command will install all of the necessary requirements for the React application and may take some time. The second command will start the application and run it with instructions displayed as to how to access it. At this point you now have the application running locally on your machine. 
