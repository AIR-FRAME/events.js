
# Trigger multiple events from one component to another components in any direction
# Ultra-light code, ~400 bytes and 15 lines of code

### Subscribe to the events
```js
Events.bind('eventname', myFunction);
```

### Trigger the subscribed events
```js
Events.trigger('eventname');
```



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
```
