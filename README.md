
# Trigger event from one component and recieve at one or more components
# Ultra-light code, ~400 bytes and 15 lines of code

### Subscribing to the events
```js
Events.bind('eventname', myFunction);
```

### Triggering the subscribed events
```js
Events.trigger('eventname');
```


 
## ReactJS EXAMPLE 

### TRIGGER FROM COMPONENT A

```js
import Events from './events.js';

<Button onClick={ () => Events.trigger('PROJECTCHANGED') }>Project "Apple & Oranges"</Button>

```

### RECEIVED AT COMPONENT B

```js

import Events from './events.js';

componentDidMount = () => {
   Events.bind('PROJECTCHANGED', this.doSomething);
};

```

### RECEIVED AT COMPONENT C

```js

import Events from './events.js';

componentDidMount = () => {
   Events.bind('PROJECTCHANGED', this.doSomethingElse);
};

```
