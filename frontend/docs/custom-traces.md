# Custom Traces

Spot is also useful to monitor the performance of app level code.

```javascript
const trace = spot.trace('my-custom-app-code-performance');
trace.start();
/// Your heavy application logic here.
trace.stop();
```

The trace details and duration will automatically reflect on your project's dashboard.
