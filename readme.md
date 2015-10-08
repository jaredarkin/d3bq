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

### D3BQ as a Solution

D3BQ is my response to this problem. As a first step, it maps [eater.com](http://www.eater.com/)'s top-50 BBQ in the South (I don't fully endorse this list, but for dummy data, it's a very strong start) using D3.js's [Voronoi methods](https://github.com/mbostock/d3/wiki/Voronoi-Geom).


More coming soon...
