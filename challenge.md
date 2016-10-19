We'd like for you to build tool for collecting cool Tumblr posts. Users can enter the name of a Tumblr blog or a tag, view posts that match that criteria, and add their favorites to their collection. It should look something like this:

![image](http://i.imgur.com/QBGaDgM.png)

The search area should allow the user to enter the name of any Tumblr blog (ie, for [peacecorps.tumblr.com](http://peacecorps.tumblr.com), the user would enter "peacecorps"). The site would then fetch a page of posts from that blog. The user could also enter any tag (such as "gif"). The filters should work together - if the user enters a blog name and a tag, it should fetch posts with that tag within that blog. However, if the user enters a tag without a blog name, it should fetch all posts with that tag.

Each post should render correctly based on its post type, and should have an "Add" button. If the user clicks on the "Add" button, that post should be added to their collection of favorite posts. Posts in the favorites collection should have a "Remove" button in place of the "Add" button.

Notes:

- The Tumblr API documentation is located [here](https://www.tumblr.com/docs/en/api/v2).
- Don't worry too much about the rendering of the individual posts, and feel free to ignore as much of the metadata as you want (ie, you can omit post date). Each post type should render differently.
- The collection of favorite posts doesn't have to persist anywhere; every time you refresh the page, the collection should be empty.
- The styling of the page is not important - you only have to style it enough so that it's usable.
- You can use whatever front-end technologies you want.