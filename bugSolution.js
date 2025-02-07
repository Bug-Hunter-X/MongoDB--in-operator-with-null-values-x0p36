```javascript
// Correct usage of $in operator with null values handled using $or
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```