# EcmaScript 6 Promises
## Tasks




> 0. Keep every promise you make and only make promises you can keep `mandatory`
######
Return a Promise using this prototype ```function getResponseFromAPI()```
```bash
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```
Repo:

* GitHub repository: `alx-frontend-javascript`
* Directory: `0x01-ES6_promise`
* File: `0-promise.js`

Checker:

- [x] README.md exists and is not empty
- [x] File exists
- [x] Correct output - returned a Promise
 [0-promise.test.js]()
```JavaScript
import getResponseFromAPI from "./0-promise.js";

test("getResponseFromAPI returns a promise", () => {
    const response = getResponseFromAPI();
    expect(response instanceof Promise).toBe(true);
  });
  ```
  ```bash
  npx jest <file_name>
  ```
  - [x] Passes lint
  ```bash
  npx eslint <file_name>
  ```
  
  #
&nbsp;
  
 > 1. Don't make a promise...if you know you can't keep it `mandatory`
  ######
Using the prototype below, return a ```promise```. The parameter is a ```boolean```
```
getFullResponseFromAPI(success)
```
When the argument is:
* `true`
  * resolve the promise by passing an object with 2 attributes:
    * `status`: `200`
    * `body`: `'Success'`
* `false`
  * reject the promise with an error object with the message `The fake API is not working currently`
  
Try testing it out for yourself

```bash
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```
Repo:

* GitHub repository: `alx-frontend-javascript`
* Directory: `0x01-ES6_promise`
* File: `1-promise.js`

Checker:

- [x] File exists
- [x] getFullResponseFromAPI resolves correctly
 [1-promise-resolve.test.js]()
```JavaScript
import getFullResponseFromAPI from './1-promise';

test("getFullResponseFromAPI resolves correctly", () => {
    const successResponse = getFullResponseFromAPI(true);
    return expect(successResponse).resolves.toEqual({
      status: 200,
      body: "Success"
    });
});
  ```
  ```bash
  npx jest <file_name>
  ```
  - [x] getFullResponseFromAPI rejects correctly
  - [x] Passes lint
  ```bash
  npx eslint <file_name>
  ```
