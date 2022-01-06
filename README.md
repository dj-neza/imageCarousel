# Image Carousel

This image carousel is a product of a quick exercise in React. The idea is to have an easy-to-use component that you can drop into various container sizes. It takes in two props:

- _images_: a list of images that should be an array of objects with **url** and **alt** properties
- _imageFit_: a string equivalent to the values of css property **object-fit** that determines how the image is resized to fit the carousel container, default is cover

The carousel styling is done using the [Styled Components](https://styled-components.com), which make it really easy to programmatically style elements. It uses transitions from the [React Spring](https://react-spring.io) animation library for a bit nicer, animated experience.

To showcase its use in practice, I used the [Unsplash](https://unsplash.com) API to fetch and render some real images. To change the image query, just pass a different string to a _useGetImages hook_ in the Page.jsx file.

## Get started

After pulling the project and opening it in your IDE, you should start by running a `npm install` . To actually run the project you can use `npm start` command which will run the app in the development mode, so you can open it at [http://localhost:3000](http://localhost:3000) in your browser.

## What else could be done

Since I only worked on this for a very limited amount of time, it could of course be improved a lot. Some of the things that I would have loved to add are:

- **make it even more responsive** - right now it looks decent in different sizes but could be vastly improved by rendering content based on the aspect ratio of its container
- **make it more customisable** - it would be nice to have more custom options that could be passed as props, like different modes (e.g. manual navigation with the arrow or automatic interval of image switching) or just have options to style it without changing an entire component
- **add actions to the carousel** - would be nice to be able to add text on the image or show something on hover, add a button or maybe trigger an action when the image is clicked
- **add theme for styling**
