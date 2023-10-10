When I began my job search over the Summer, I created a Relational Database using PostgreSQL to keep track of my applications, company replies, follow-ups, and interviews. I chose this route because it was an effective way to store the information and work with it analytically, while also keeping my SQL skills fresh.

Using the Database, I decided to create an Interactive Dashboard showcasing my job search. No matter how skilled or qualified you are for a job in Data, the reality of the situation is that it may take 200, 300, or 400 applications before you land a job. I have been hearing this from other job seekers in the same industry all year, and this rings true in my personal experience as well. May these numbers serve fellow job seekers not as a demoralizing snapshot, but as encouragement to keep pushing forward in today’s job market.

## Job Search Dashboard Overview:

First, I connected the data from my SQL Database to an API. Then, I used JavaScript, HTML, and CSS to create my app. I used D3.js to connect my app to my API, and Plotly and Leaflet are two libraries that I used to help me create the visualizations. The API is hosted by JSONBin.io. The app is hosted directly from my GitHub repository for this project using GitHub Pages.

Relevant commenting is found throughout the .js and .html files.

I have also included an overview of some of the other projects that I’ve worked on in the “Home” section. Code for all these projects can be found on my GitHub page.


### Resources used:
- https://www.shecodes.io/athena?tag=current+date+and+time#:~:text=innerHTML%20%3D%20getCurrentDateAndTime()%3B,the%20date%20and%20time%20in
- https://www.educative.io/answers/how-to-find-the-most-frequent-word-in-an-array-of-strings-in-js
- https://leafletjs.com/examples/choropleth/
(Data from statesData in app.js obtained from https://leafletjs.com/examples/choropleth/us-states.js, with density info replaced with application count info.)
- https://mdbootstrap.com/docs/standard/content-styles/hover-effects/