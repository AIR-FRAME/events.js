
# Trigger events from one component to another component
# Ultra-light code, 200 Bytes, just 5 lines of code


## EXAMPLE of Events.js

### TRIGGERRING FROM COMPONENT A

```js
import Events from './events.js';
Events.trigger('clientChange');
```




### TRIGGERED AT COMPONENT B

```js
import Events from './events.js';
componentDidMount = () => {
	Events.clientChange = function(){
        console.log('triggered in component B');
    }
};
```
