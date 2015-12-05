# Cider Spot
[CiderSpot](http://www.ciderspot.com)

Cider Spot is a web application built with Ruby on Rails, PostgreSQL, React.js, and JQuery, and is a cider review aggregator with social elements inspired by [BeerAdvocate](http://www.beeradvocate.com/).

### Main Functionality:

* Search for ciders by name or brewery name
* Filter results by most recently updated or average review
* Submit, edit and delete reviews
* Maintain a Cider Stash with ciders you want to try, have already tried and one's you've reviewed
* Like other people's reviews of ciders
* Edit user profile and upload an avatar

### Additional Features:
* Hand-rolled authentication via Rails
* Server side searching and pagination
* Integration with AWS for cloud storage of all uploaded assets
* Hand-crafted error handler designed in React with Flux architecture to notify user of any issues in a pleasant non-intrusive or experience inhibiting manner
* Modular model-level filtering to maintain active record for chaining of filters, eg:
```
def self.with_averages
  subquery = Review.select('reviews.cider_id AS cider_id, ((reviews.overall_rating +
    reviews.look_rating +
    reviews.smell_rating +
    reviews.feel_rating +
    reviews.taste_rating) / 5) AS total_scores')

  Cider.select("ciders.*, ROUND(CAST(AVG(totals.total_scores) AS numeric), 1) AS average, COUNT(totals.total_scores) as review_count").joins("INNER JOIN (#{subquery.to_sql}) as totals on ciders.id = totals.cider_id").group('ciders.id')
end
```

### Future Features:
If I have some free time I would really like to continue to add to the social aspect of the site, my main features to come will be:

- [ ] Friend other users
- [ ] Ability to message other users
- [ ] Let users add ciders
