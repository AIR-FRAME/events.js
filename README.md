
# Trigger multiple events from one component to another component
# Ultra-light code, 300 Bytes, just 12 lines of code


## EXAMPLE of Events.js

### TRIGGER FROM COMPONENT A

```js
import Events from './events.js';

showData = (key) => {
   Events.trigger('showdata');
}

flashMessage = (key) => {
   Events.trigger('flashmessage');
}
```

### TRIGGERED AT COMPONENT B

```js
import Events from './events.js';

componentDidMount = () => {
   Events.bind('showdata', this.fnFetchData);
};
```

### TRIGGERED AT COMPONENT C

```js
import Events from './events.js';

componentDidMount = () => {
   Events.bind('flashmessage', this.fnFlashMessage);
};








