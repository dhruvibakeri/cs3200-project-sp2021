### TO RUN THE PROJECT:

- run make from the root directory.
- the backend server will be started and the react app will be started as well.
- you can go to localhost:3000 and view the react app

## NAME OF PROJECT: YELP REVIEWS

## DATABASE DESIGN TEAM 33

## TEAM MEMBERS:

DHRUVI BAKERI (3:15 - 5:25 section)

## PROJECT DESCRIPTION:

In this project, I am aiming to create a data model where users who are logged into their 'yelp' (a restaurant review website) account can create/read/update/delete reviews given to restaurants. In principle, they should be able to 'read' all reviews and can 'create' any number of reviews, but can only 'update/delete' reviews created by them BUT for this project I will stick to the requirements mentioned for the project. The technologies I am planning to use for this is JavaScript, MongoDB and React.js.

## UML DIAGRAM:

You can find the UML diagram in the git repository. I was having problems embeding it into this README.

## USER DATA MODEL:

The user data model will have all the generally required information for any user account :

- First Name
- Last Name
- Password
- Email
- Date Of Birth

## TWO DOMAIN OBJECT DATA MODELS:

- Review: The Review data model contains the information about a review. It would contain the score of the restaurant, the comment that the user has for that restaurant and the date on which the review was created.
- Restautant: The Restaurant data model contains information about a restaurant listed on 'Yelp Reviews'. It would contain the name of the restaurant, the cuisine, and the pricePoint which describes how expensive or affordable this restaurant is.

## USER TO DOMAIN OBJECT RELATIONSHIP:

Here, the User data model will have a one to many relationship with the Review data model as one user can create many reviews.

## DOMAIN OBJECT TO DOMAIN OBJECT RELATIONSHIP:

Here, the Restaurant data model will have a one to many relationship with the Review data model and one restaurant can have many reviews.

## PORTABLE ENUMERATION:

The portable enumeration being used here is for the 'pricePoint' field in the Restaurant data model. 'pricePoint' can be one of the following :

- $ : not pricey at all
- $$ : not fancy, but not very cheap as well
- $$$ : fancy
- $$$$: very fancy

## USER INTERFACE REQUIREMENTS:

- There are three sections in the home screen: Users, Restaurants and Reviews.
- User Section:
  - This section will have a User List and a User editor. In User List, you can view all users and in User editor you can edit a particular user and also navigate to reviews created by that user.
- Restaurant Section:
  - This section will have a Restaurant List and a Restaurant editor. In Restaurant List, you can view all Restaurants and in Restaurant editor you can edit a particular Restaurant and also navigate to reviews created for that restaurant.
- Review Section:
  - This section will have a Reviews List and a Review editor. In Review List, you can view all Reviews and in Review editor you can edit a particular Review and also navigate to the user who created that review and the restaurant for that review.
