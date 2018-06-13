
# Trigger events from one component to another component
# Ultra-light code, 200 Bytes, just 5 lines of code


## EXAMPLE of Events.js

### TRIGGERRING FROM COMPONENT A

```html
import Events from './events.js';
```

```js
componentDidMount = () => {
   Events.bind('showdata', this.fnFetchData);
};
```




### TRIGGERED AT COMPONENT B

```html
import Events from './events.js';
```

```js
showData = (key) => {
   Events.trigger('showdata');
}
```
