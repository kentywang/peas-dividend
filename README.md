# Peas Dividend

Since this project didn’t need complex event or data handling, I wanted to keep most of the functionality declarative and in HTML and CSS.

Radio buttons seemed to be a good fit for the genotype selection input, since I needed the user to select one choice out of several.

A `<table>` was also a natural fit for the Punnett square itself.

For the implementation of the chart, I considered libraries like chart.js and working directly with the `<Canvas>` API but eventually decided HTML made for a slightly more a11y-friendly experience.

For CSS, I used a preprocessor for some quality-of-life improvements to writing stylesheets, although with more time and a larger project, I would use CSS modules coupled to individual UI components.

For the small amount of input handling needed, I decided to try out Vue.js for the first time, since I heard it was lightweight. While my Vue code could use some DRYing, I think it’s acceptable for a small project like this. I liked how easy it was to integrate Vue into my vanilla HTML.
