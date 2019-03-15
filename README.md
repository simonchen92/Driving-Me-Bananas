# Driving Me Bananas

## List of Technologies Used

* HTML
* CSS
* jQuery
* AJAX
* Bootstrap
* SCSS (Sass)
* Handlebars

## User stories

* As a user, I would like to be able to sign up and sign in to the application
* As a user, I would like be able to create a new entry
* As a user, I would like to see the date,title and description for when I create the entry
* As a user, I would like to edit an entry if needed
* As a user, I would like to get all of my entries
* As a user, I would like to be able to clear my entries if needed
* As a user, I would like to be able to delete an entry
* As a user, I would like to be able to change password if needed and also sign out

## Wireframe

![image](https://media.git.generalassemb.ly/user/18685/files/55757f80-4681-11e9-9fa3-7cf4f9fd3c22)


## Planning and Development

I wanted to create my first full stack application where it can store my entries - a journal entry or diary to be more precise - to many of its users. My idea began by planning out my user stories and my wireframe to how I envision it to be.

To start it off, I decided that I want to create the back end first so I can create the relationship between the many users to their entries. The setting up of the back end using ruby on rails wasn't that difficult because the library and framework can already produce a base template for us when we use scaffold and database migrate to commit our changes. The only challenge that I encountered was the permit portion of the back end since at one point in time I ran into the problem where the user can get all journal entries and by fixing my code to be the current user in the controller, eliminated most of my concerns and problems.

Before the deployment of my back end to heroku, I made sure to do some local testing using curl scripts to make sure my entries and users can be created. All of the relationship mapping on my back end went without too much trouble.

Front end didn't give me that much trouble except the initial planning of what I wanted my page to be laid out for all my content. After some thinking, I decided to create all my authentification to work first to have some content on my page. One I got my authentification buttons to work, I decided to create an entry and get button since I figured the two would be my main source to create information on my page. I did not run into trouble with passing in my function here to get my create button to work since I knew what parameters is needed (e.g. date, title, description) to make sure it passes through to the back end successfully. However, I did run into some issue with the get button when I was using it with handlebars. The issue with my get button was that it was pulling in all of user's created entries and my original intent was to only get the user's entries. I figured that the issue was due to my back end was requiring that I get all of the users upong my get request so I had to change it to be viewable only to the current user.

My other problem was my update button which I couldn't pass in my information correctly to update the information I wanted to target. I realized eventually that my API on my front end was not passing in the data values correctly so I updated it by physically typing in the data values that it passes through so I can get my information to update. While doing the front end correction, I created a back end controller where the permitted field for updates was only the entry title and description which enable the user to only update the title and description since date is required when you wanted to create an entry. Once both the back end and the front end match the form data, everything started to update okay.

Once the update button to work, I create the event listener to target the entry and it worked pretty pretty smoothly thereafter.

Then came the touch up and styling. I think this was a harder part than the rest of the project because I wanted to make it look clean and nice but styling is not my strongest forte. I wanted to make sure the boxes length were all the same and that all of the buttons and text were centered. While styling, I noticed that the bootstrap and flexbox always conflicted so I had a hard time making things work the way I wanted to. Once it was completed, the product is what we see now.

## Unsolved Problems and Future Plans

I want to fix my fade in and fade out which causes the little feature on my sign in and sign up button when you click back and forth from one to another. I may want to fix this by either deleting the event listeners entirely and in place of it create a toggle form that switches back and forth from one another.

A future iteration that I may want to implent is to maybe create updates where once the entry is updated, the text box itself would stay in the same place as we see it instead of moving elsewhere. Another future iteration would probably be sorting my dates chronologically instead of being all over the place.
