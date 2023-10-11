When I began my job search over the Summer, I created a Relational Database using PostgreSQL to keep track of my applications, company replies, follow-ups, and interviews. I chose this route because it was an effective way to store the information, run queries, and work with data analytically, while also keeping my SQL skills fresh.

Using the Database, I decided to create an Interactive Dashboard showcasing some aspects of my job search. No matter how skilled or qualified you are for a job in Data, the reality of the situation is that it may take 200, 300, or 400 applications before you find the right job. I have been hearing this from other job seekers in the same industry all year, and this rings true in my personal experience as well. May these numbers serve fellow job seekers not as a demoralizing snapshot, but as encouragement to keep pushing forward in today’s job market.

## Job Search Dashboard Overview:

First, I laid the foundation of this project by creating an API hosted on JSONBin.io, which serves data from my SQL Database to power my application. With the data pipeline in place, I then crafted the user interface and functionality of the app. Leveraging three languages for web development—JavaScript, HTML, and CSS—I designed and coded an application that creates an engaging and seamless user experience.

One of the key aspects of the app is its dynamic nature, made possible by incorporating three indispensable JavaScript libraries. First, the capabilities of D3.js created practical and interactive visualizations illustrating some data from my job search. Next, I used Plotly to craft bar graphs and pie charts that presented information with clarity. Finally, I harnessed the power of Leaflet, a library renowned for its prowess in web mapping. With Leaflet, I was able to create an interactive map that enhanced the user experience in visualizing where the companies that I applied for are based.

The app is hosted directly from my GitHub repository for this project using GitHub Pages, making it accessible to everyone online. I have also included an overview of some of the other projects that I’ve worked on in the “Home” section. Code and comments for all these projects can be found on my GitHub page.

In summary, this project is a testament to my passion for data management, visualization, and creating dynamic dashboards.

### Resources used:
- https://www.shecodes.io/athena?tag=current+date+and+time#:~:text=innerHTML%20%3D%20getCurrentDateAndTime()%3B,the%20date%20and%20time%20in
- https://www.educative.io/answers/how-to-find-the-most-frequent-word-in-an-array-of-strings-in-js
- https://leafletjs.com/examples/choropleth/
(Data from statesData in app.js obtained from https://leafletjs.com/examples/choropleth/us-states.js, with density info replaced with application count info.)
- https://mdbootstrap.com/docs/standard/content-styles/hover-effects/