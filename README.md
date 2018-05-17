# Full Screen Background for React
Example of creating a full screen background with React and React Router DOM. That is specific
to a page loading using React Router.

## index.css
Add the following required rules index.css
```css
html, body {
  height: 100%;
}
```

Optional sizing and positioning of background image:
```css
body {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
}
```

## Page Component

Import the image:
```javascript
import Background from './bg-image.jpg';
```

Set the background image style for the `<body>` when the component is mounted:
```jsx
componentDidMount() {
  document.body.style.backgroundImage = `url("${Background}")`;
}
```
