# MongoDB $in operator with null values

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with arrays containing `null` values.  The `$in` operator does not correctly handle `null` values in the way one might expect, leading to unexpected query results.

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the correct approach using `$in` along with `$or` to properly handle `null` values.

## How to Reproduce

1. Clone this repository.
2. Ensure you have MongoDB running.
3. Create a sample collection:
   ```bash
   db.collection.insertMany([{ field: 1 }, { field: 2 }, { field: null }]);
   ```
4. Run `bug.js` to see the unexpected results.
5. Run `bugSolution.js` to see the correct results.