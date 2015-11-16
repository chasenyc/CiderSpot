# Phase 4: Implement Wants, Gots and Likes

## Rails
### Models
* Wants
* Gots
* Likes

### Controllers
* Api::Wants (create, destroy, index)
* Api::Gots (create, destroy, index)
* Api::Likes (create, destroy)

### Views
* wants/index.json.jbuilder
* gots/index.json.jbuilder
* likes/index.json.jbuilder

## Flux
### Views (React Components)
* WantsIndexForm
* GotsIndexForm

### Stores
* Wants
* Gots
* Likes

### Actions
* ApiActions.receiveAllWants
* ApiActions.receiveAllGots
* ApiActions.destroyWant
* ApiActions.destroyGot
* ApiActions.destroyLike

### ApiUtil
* ApiUtil.fetchAllWants
* ApiUtil.fetchAllGots
* ApiUtil.createWant
* ApiUtil.createGot
* ApiUtil.createLike
* ApiUtil.destroyWant
* ApiUtil.destroyGot
* ApiUtil.destroyLike

## Gems/Libraries
