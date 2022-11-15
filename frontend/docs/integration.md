# Integration

Instantiate your Spot Class Using:

```javascript
const spot = new Spot(<Your Project ID>, <Your Public API Key>);
```

This would automatically start monitoring end-user's API Calls and Browser Logs.
This also instantiates a Session for the user.

### Tag Session to a User

You might want to assign a session to a user of your app. To do so:

```javascript
spot.identify({ email?, name?, phone?, photoURL? });
```
