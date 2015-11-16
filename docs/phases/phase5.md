# Phase 4: News and Admin

## Rails
### Models
* Posts

### Controllers
* Api::Posts (create, update, destroy, index, show)

### Views
* posts/index.json.jbuilder
* posts/show.json.jbuilder
* posts/new.json.jbuilder
* posts/edit.json.jbuilder

## Flux
### Views (React Components)
* PostsIndex
* PostsDetail
* PostsForm

### Stores
* Posts

### Actions
* ApiActions.receiveAllPosts
* ApiActions.receivePost
* ApiActions.editPost
* ApiActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.updatePost
* ApiUtil.destroyPost

## Gems/Libraries
