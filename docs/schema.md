# Schema Information


## ciders
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key, indexed
name         | string    | not null
description  | text      | not null
abv          | float     |
brewery_id   | integer   | not null, foreign key (references breweries), indexed
style        | integer   | not null
organic      | string    | not null
image_url    | string    |

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
location    | string    | not null

## styles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    | not null

## reviews
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
cider_id     | integer   | not null, foreign key (references ciders), indexed
title        | string    |
content      | text      |
look_rating  | float     | not null
smell_rating | float     | not null
taste_rating | float     | not null
feel_rating  | float     | not null
overall_ratin| float     | not null

## likes
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
review_id    | integer   | not null, foreign key (references reviews), indexed

## wants
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
cider_id     | integer   | not null, foreign key (references ciders), indexed

## gots
column name  | data type | details
-------------|-----------|----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
cider_id     | integer   | not null, foreign key (references ciders), indexed

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null
birthdate       | data      | not null
image           | string    | not null, default: "default_avatar.jpg"
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
admin           | boolean   | not null, default: false
