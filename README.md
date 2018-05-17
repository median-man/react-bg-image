# Full Screen Background for React
Example of creating a full screen background with React and React Router DOM. That is specific
to a page loading using React Router.

## App.css
Add the following rules to App.css.
```css
html, body, #root, .App {  
  height: 100%;
  min-height: 100%;
}
```
All ancestor nodes of the page must have the `height` and `min-height` set to `100%`.

## Page Component
Add CSS rules to make the page fill the window:
```css
.Page {
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

Import the image and css:
```javascript
import Background from './bg-image.jpg';
import './Page.css';
```

Set the background image for the root node of the component.
```jsx
<div className="Home" style={{ backgroundImage: `url("${Background}")` }}>

</div>
```
