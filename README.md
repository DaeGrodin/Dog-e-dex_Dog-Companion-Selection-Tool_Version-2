<h1>Dog E-dex: A Companion Dog Selection Tool</h1>

Overview:

A capstone project for Code You: Kentucky using a third party API, while demonstrating skills 
in HTML, CSS, and Javascript.

<h1>Project Description</h1>

This project is a basic app for people who are beginning the process of finding a companion dog.
It introduces them to different breeds of dogs and what they look like. They can also learn random dog facts as well.

<h1>Capstone Requirements Features</h1>

| Requirements | Implementation |
|--------------|----------------|

| **Retrieve data from a third party API** | - Integrated the Dog API to pull a breed image database and random dog facts |  

| **Create a node.js web server using Express.js** | - Built a functional server for routing and files |

| **Analyze data that is stored in arrays, objects, sets or maps and display information about it** | - Fetched breed list from Dog API  
    and looped through the list to create a drop down menu | 

| **Visualize data in a user friendly way (e.g. graph, chart, etc)** | - Displayed dog breed images | 

| **Responsive Design** | - Used CSS, Flexbox, and added Media Queries for small screen and desktop |

<h1>Installation and Usage Instructions</h1>

What you will need to install/obtain prior to running this app:

1. Obtain a Dog Api Key - https://thedogapi.com/ 

    - Click Get your Api Key 
    - Click Get Free Access
    - Fill out the form and click submit 
    - Check your email for your API Key

2. Visual Studio Code - https://code.visualstudio.com/ 

    -Download the appropriate version for your operating system on your pc or mac and follow the prompts

3. Clone Repository 

    https://github.com/DaeGrodin/Dog-e-dex_Dog-Companion-Selection-Tool_Version-2

4. Navigate to project

    Type into your terminal, cd Dog-e-dex_Dog-Companion-Selection-Tool_Version 2 in your terminal

5. Install Express package (express.js using node.js module) - https://nodejs.org/en/download in your terminal

    - Download the appropriate version for your operating system on your pc or mac and follow the prompts
     (you can also check your system if you have this by typing -node -v and npm -v in your terminal)
    - Initialize node by typing npm init -y in your terminal (git bash) which will Create a package.json
    - Type into terminal npm install express which will create "dependencies"

6. Create .env file at root level

    In file, type DOG_API_KEY=Your Access Key

7. Start the server 

    Type into your terminal, node server.js

8. Open application into your browser

    http: localhost:5001

<h1>License</h1> 

This project can be shared to those who are interested in getting a new dog as a way to introduce them to dog breeds.

<h1>Credits</h1> 

- Google for general questions - stack overflow, MDN
- ChatGPT - concepts with fetching api, troubleshooting