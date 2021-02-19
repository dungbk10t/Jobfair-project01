# Events app

![screenshot-1](screenshot1.png)<br />
*This is the home page!*<br />


Please check out [Events App](http://events-app-220700.firebaseapp.com/) to study the app's basic functionality which is still in development! This app is an example of using Google Maps, Firebase, Firestore, Cloud Functions, Authentication, React, Redux Thunk and Semantic-UI React to build a web based application to schedule events, and meetings with your business partners to help keep moving your business ideas and projects forward! 

![screenshot-2](screenshot2.png)<br />
*The email and Google/Facebook login - please note Facebook login isn't setup yet!*

![screenshot-3](screenshot3.png)<br />
*Your event form to create, and cancel events!*

![screenshot-4](screenshot4.png)<br />
*The events page with infinite scroll and a activity feed showing live events*

![screenshot-5](screenshot5.png)<br />
*The Event Page which shows `event_attendees`, event info, and the great chat! This chat features uses real-time database Firebase!*

![screenshot-6](screenshot6.png)<br />
*Google Maps in action! Toggle hide/show map! Please note I have a 1 per day limit quota for my API so you may not see full map*

![screenshot-7](screenshot7.png)<br />
*The image upload page in the ->profile/settings/images section this utilizes Firestore*

![screenshot-8](screenshot8.png)<br />
*This is an example of how the image upload from the UI would be stored in Firestore. Firestore uses collections and documents are added to that collection with fields that are certain values. This was a great learning experience on image uploads!* 

![screenshot-9](screenshot9.png)<br />
*Taking advantage of monitoring Redux Chrome Extension to show event actions*

![screenshot-10](screenshot10.png)<br />
*Firestore collection and document schema for `users`, `events` and we added `activities` and `event_attendees` as well. Understanding what your collections are is a great practice for naming conventions as well.*

![screenshot-11](screenshot11.png)<br />
*Firebase Cloud Functions! This was my first experience with a almost serverless backend. Essentially you are running "functions" stored in `Cloud Functions` that get triggered by Firebase code you implement and HTTPS requests. Fascinating!! In this case there was a createActivity function and cancelActivity function to handle when users were "creating" and "canceling" events!*



