
# Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

This webapp features reviews for different restaurant using googleMap. Responsiveness, Accessibility and service worker are all implemented in this project.

## Dependencies

 - [googleMap API](https://developers.google.com/maps/?hl=fr)

## Responsiveness
 
 The webapp can adapt to small devices using flexbox to ensure that restaurant links breaks when necessary

## Accessibility

 All focusable elements are accessible via tab key. Especially the modal that display the address of a restaurant was built with accessibility in mind. Here are some design patterns with the modals:

 	- a click in the overlay closes the modal
 	- `esc` quits the modals
 	- the modal traps the tab key until the user closes it

## Service Worker

The service worker script ensures that the user can access offline the contents that have been consulted.

## launch the project

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

With the server running, the project is served with this url : `http://localhost:8000`
## Contribution

This project is done as part of the nanodegree curriculum. So no pull request will be accepted.