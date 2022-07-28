# solo-project
An application to allow users to hold their recipes + track nutrition information in one place :)

## Goals
- Core idea: lifestyle/nutrition tracking app
    - Connect to a nutrition API
    - Text box for users to search for food items
    - Add food to individual days/meals?
- Secondary idea:
    - Allow users to set RECIPES
        - Combine foods into saved recipes for users to re-add later
- Stretch goal:
    - Allow users to track workouts

## Core Idea + MVP
##### [ x ] Connect to a nutrition API (https://developer.edamam.com/edamam-nutrition-api was the first google search result + has a free option with fewer calls)  
- this one is not working --> attempting to use the edamam recipes api
- only has full recipes, looking for another food API
- attempt 3: https://fdc.nal.usda.gov/fdc-app.html#/   
##### [ x ] Generate a search box for users to search for food items  
- currently not working (can't search)
- now generates a search box that works but all code is stuck in App.jsx
- fixed! code is now separated out with redux + prop drilling  
##### [ x ] Specify recipes of foods?  
- currently can add list of ingredients in a recipe but cannot list their nutritional information  

### Stretch  
##### [ ] Add specific recipes to days?  

## Recipes
Allow users to combine foods into saved recipes for users to come back to later  
##### [ x ] set up SQL database system for foods + recipes  
##### [ x ] functionality to add recipes into the database  
##### [ ] functionality remove recipes into the database  
##### [ ] functionality to alter recipes in the database  
##### [ ] ability to add those recipes to specific days + meals  

## Stretch Goal: Workouts --- will not have time for this  
##### [ ] create a SQL database system for workouts  
##### [ ] find a way to specify caloric burn? - another API?  
##### [ ] TO COMPLETE ONLY IF I GET HERE...   