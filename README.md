# CiderSpot
[CiderSpot](http://www.ciderspot.com)

## Minimum Viable Product

CiderSpot is a web application inspired by [BeerAdvocate](http://www.beeradvocate.com/) built using Ruby on Rails and React.js. CiderSpot allows users to:

Website to aggregate cider reviews for both cider enthusiasts and regulars alike. While the main content and driver of traffic to the site is its crowdsourced reviews there will also be a main page with blog/news posts.

- [x] Create an account
- [x] Log in / Log out
- [x] Create, read, edit and delete reviews
- [x] Can like other reviews
- [ ] Keep track of ciders they have had
- [ ] Maintain a wish list
- [ ] Admins can post to blog
- [ ] Admins can delete reviews

* (Potentially) Utilize brewery DB for database, alternatively use own database.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Cider and Review Model, Cider Seed Data and JSON API (2 days)

In Phase 1, I will begin by implementing the user signup and authentication process (using BCrypt). There will be a basic landing page after signing up which will have container for the application's root react component. Before working on the front end I will be setting up a JSON API for the reviews and the ciders themselves.

[Details][phase-one]

### Phase 2: Flux Architecture and Cider CRUD (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic flux structure has been set up, a Cider store will be implemented and a set of actions corresponding to the CRUD functionality needed. Once that is done I will create the react views Ciders `Index`, `IndexItem` and `IndexDetailView`. At the end of Phase 2 Ciders can be viewed and sorted. I will be using basic CSS styling at the phase in the project to ensure the overall design

[Details][phase-two]

### Phase 3: Reviews with Flux and CRUD (1.5 days)

Phase 3 is composed of implementing more FLUX, a Review Store, Actions and more views. The `ReviewIndex` and  `ReviewForm` React views will be created in this phase. At the end of phase three a user will be able to review a cider, edit their review, delete their review. Ciders will display an index of reviews

[Details][phase-three]

### Phase 4: Implement Wants, Gots and Likes (1.5 days)

Phase 4 will be a day to committed to implementing Wants, Gots and Likes, all three of these are joining tables between users and ciders and users and reviews respectively. I will be implementing the models, JSON APIs, Actions, Stores and necessary views. By the end of phase four users will be able to like reviews and put ciders in their wants/gots or delete them from them respectively.

[Details][phase-four]

### Phase 5: Posts and Admin (1 day)

Phase 5 will mainly be a day adding features for admin users who can both post entries that will reside on the front page and secondly can delete reviews.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)
Phase six will be devoted to styling the site and tying up any loose ends.

### Bonus Features (TBD)
- [ ] Add profile information including avatar
- [ ] Use other services to log in (Google, FB, Twitter)
- [ ] Ability to message other users
- [ ] Notifications on liked posts

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
