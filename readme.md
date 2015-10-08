### d3bq

Welcome to d3bq, a companion app for anyone planning a BBQ tour in the Southeastern U.S.

## Requirements

- [Node.js](http://nodejs.org/)
- [Bower](http://bower.io/)

## Running locally

    $ git clone git@github.com:petergcutler/d3bq.git
    $ cd d3bq
    $ npm install
    $ bower install
    $ nodemon

## BBQ Data

If you'd like to use or review the raw data used to power d3bq, it's stored in: `bbq-best-of-south.geojson`

---

### Why BBQ?

I created d3bq as my final project for General Assembly's Web Development Immersive program. Each year, I take a bbq trip with a group of friends from Washington, D.C., to St. Simon's Island, GA. The year of the program, however, I couldn't attend due to my engagement with GA's WDI program. This inspired my vicarious bbq experience, the d3bq app.

### The Problem

Once you cross the Mason-Dixon line driving south - especially on a long, highway road-trip - each lunch stop becomes a precious opportunity for local, regional BBQ. Each state has a different style and take on the classic food, but finding the best places to stop is a challenge. Whether you're taking 95 South or a web of backroads, you need to find the best BBQ within a reasonable distance of your route, and within a reasonable timeframe for hunger's sake.

### d3bq as a Solution

d3bq is my response to this problem. As a first step, it maps [eater.com](http://www.eater.com/)'s top-50 BBQ in the South (I don't fully endorse this list, but for dummy data, it's a very strong start) using D3.js's [Voronoi methods](https://github.com/mbostock/d3/wiki/Voronoi-Geom).

A [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram) uses [Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) to visualize multiple locations/coordinates. Please take a look at the linked Wikipedia articles for the mathematical evaluations involved, but put simply:

A Voronoi map shows a set of locations, and, around each location, it shows the area in which a given point is closer than any other in the set.

For d3bq, this visualization helps users to plan their trip and their pit stops wisely. With d3bq, you can evaluate your route against the presence of BBQ and make sure you're hitting the richest of BBQ regions.


### Beyond d3bq

With only a week to develop the project, there's more work left to do! I'd like to expand d3bq to include user authentication, profiles, and functionality to support user creation and deletion of BBQ locations. This would allow users to participate in the interactivity further, seeing how their changes to the location set of points alters the Voronoi diagram itself.

In addition, I happen to have a personal connection to BBQ and interactive visulizations... That said, I'd like to boilerplate the d3bq code to share as a learning tool. Whether it visualizes hospitals, schools, fire stations, or another public or commercial service, the Voronoi map has amazing potential for depicting the relative sparsity or density of locations in a region. I'd like to package this as an open source template for anyone looking to build a d3 Voronoi map.

More to come here!
