# Spot - Web SDK

Install the SDK to your web project using the following instructions.

Via NPM or yarn:

```bash
npm i spot-web
# or
yarn add spot-web
```

Via CDN

```html
<script type="text/javascript" src="https://unpkg.com/spot-web"></script>
```

### Get Started

Instantiate your Spot Class Using:

```javascript
const spot = new Spot(<Your Project ID>, <Your Public API Key>);
```

Tag session to a user:

```javascript
spot.identify({ email?, name?, phone?, photoURL? });
```

[Check out the detailed documentation](https://spot-monitoring.vercel.app/docs)
