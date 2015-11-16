# CiderSpot
[CiderSpot](http://www.ciderspot.com)

## Minimum Viable Product

CiderSpot is a web application inspired by [BeerAdvocate](http://www.beeradvocate.com/) built using Ruby on Rails and React.js. CiderSpot allows users to:

Website to aggregate cider reviews for both cider enthusiasts and regulars alike. While the main content and driver of traffic to the site is its crowdsourced reviews there will also be a main page with blog/news posts.

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit and delete reviews
- [ ] Can like other reviews
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

### Phase 1: User Authentication, Cider and Review Model, Cider Seed Data and JSON API (2 Days)

In Phase 1, I will begin by implementing the user signup and authentication process (using BCrypt). There will be a basic landing page after signing up which will have container for the application's root react component. Before working on the front end I will be setting up a JSON API for the reviews and the ciders themselves.

[Details][phase-one]

### Phase 2: Flux Architecture and Cider CRUD (2 Days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic flux structure has been set up, a Cider store will be implemented and a set of actions corresponding to the CRUD functionality needed. Once that is done I will create the react views Ciders `Index`, `IndexItem` and `IndexDetailView`. At the end of Phase 2 Ciders can be viewed and sorted. I will be using basic CSS styling at the phase in the project to ensure the overall design

[phase-two]: ./docs/phases/phase2.md
