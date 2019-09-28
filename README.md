Data Visualization
===
http://a4-eos7l.glitch.me

This is a data visualization consists of 2 linked charts rendered using D3.js. 

To fulfill the requirements:
---
### Six user controls:
- Tooltip: there might be a slight delay but it is there. 
- Linked views on hover, also there is a caption being live-updated based on hover.
- Documentation tab can be triggered to reopen the documentation.
- a third visualization that allows brushing 
- a reset button to reset the third visualization

### Linter:

- I used the built-in linter in Webstorm.
- The JS Linter tolerates: for statement, multiple vars, single quote strings, this, whitespace mess, eval, bitwise operators 
- It assumes: ES6, Node.js, in development, in a browser
- Maximum line length: 100
- Maximum number of error: 50
- I could not figure out why the linter is not happy with me using d3 in area2.js while it is okay with me using d3 in area1.js. It claimed that I have never declared D3. While I literally did the same in both scripts. 
- In main.js, I cannot get rid of the warning from using a global directive. However, if I do not use the global directive, the linter will complain that I used the window object without declaring it. 
- I have discussed both two things mentioned above with Noelle and we were unable to find a way to get around it. 
- I also couldn't resolve the problem with "exportDefault" because once I change "export" to "exportDefault" my "import" stops working.

### General: 

- I included both helmet and compression packages in my server.
- I have two modules named mod1.js and mod2.js. 
- My HTML and CSS files are validated.  
- The redisplayable documentation can be triggered using the "Read Documentation" button.


Goals:
---
- My goal was to create a highly interactive and responsive visualization for the most popular movie genres produced between 2000 and 2018. I think I was successful in doing that. I had multiple interactions and users could freely play around with them.


Main Challenges:
---
- I had the most problems using dat.GUI and putting my codes into modules. I ended up not using dat.GUI and just 




Achievements:
---


### Technical:
- I did some user testing with my friend and they liked the visualization. They said they would prefer if there is a way to zoom in the line chart so they can see more details.
- There are many types of interactions involved in this visualization including linked views and tooltip. 
- The axises are dynamically generated based on the data input.
- It took me a while to clean up the data found from Professor's recommended website for jSON dataset. I mainly used the dplyr package in R, which was so much more efficient than Excel.



### Design:
- Used the Type.js library for aesthetics. 
- I hard coded all the styling. 
- I used materialize.css to create the collapsible documentation tab. 


    


