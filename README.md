# My Dream Job Application

It is a simple Job Portal where you can search jobs and you can view the details of that job. The 
Application build on the latest version of all thechbolgies. It is a responsive design.

Live Demo: http://mydreamjob.appexwebsolutions.com/joblist

# Technology Used in this project

React js , Redux, node js, webpack , babel , eslint, mocha, karma

    react : 16.12.0,
    redux: 4.0.5
    redux-saga: 1.1.3
    webpack:  4.41.5
    mocha: 7.0.0
    chai: 4.2.0
    @babel/core:  7.8.3
    karma: 4.4.1
    node 12.41.1

## To Run the project execute following commands in sequence

    1. npm install

    2. npm start

    it will run on 3000 port, if you want to change the port you can change it on build/scripts/start.js file

    direct it will run : http://localhost:3000

## To Run the test cases you can run 
     
     npm run test
     
# In Progress work List

   1. Integrate with backend services ( https://github.com/avickmukh/job_portal_service )
   2. Pagination in Joblist
   3. Writting more test cases and adding code coverage
   4. Adding Authorization so user can apply the job 
   5. Adding more validation
   6. Adding error boundary

# Others

   I am building same application without redux with only context api and react hooks ( https://github.com/avickmukh/React_Hooks )

# Note
  
  I used React class component as well as functional component. I used react hooks as well as class life cycle methods. Also I used styled component and reactstrap for the design.
  
# Assumptions 
   1. For now I am reading the static data from json file from Redux-saga api call
   ```json
        {
            "id": 1,
            "title": "Frontend Developer",
            "location": "Bangalore",
            "skills": " javascript, css, asp.net, react",
            "description": "Comfortable with modern JS stack, experience with React.",
            "employment_type": "Full Time",
            "company": {
                "name": "ABCD TECH System Private Limited",
                "about": "Lorem ipsum dolor sit amet.",
                "ceo": "A M mamam",
                "founded": "2015"
            }
        }
   
      


