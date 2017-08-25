# JS Cookie
JavaScript cookie implementation

# Introduction
Do you have a weakness for amazing tasty cookies? Then this cookie jar is great for you!

Don't like to get into a cookie implementation on your own, yet want one to be easy and as you go?
At this very moment, this "library" is the correct one for you, with only one .js file added to your project with only 4 methods and 3 properties you are on to go.

# Usage
| Code | Description
| --- | --- |
| **_Properties_** |
| `Cookie.cookieList` | Is an object filled with cookies *yummie* |
| `Cookie.expiryDays` | Is the amount of days the cookie shall live for (no validation for ints) |
| `Cookie.overwriteIfExists` | Is a boolean value if the cookie shall be overwritten if it exists or the data shall be appended (no validation for bools) |
| **_Methods_** |
| `Cookie.load()` | Loads the cookies out of document.cookie and fills the cookie object with it's data |
| `Cookie.set(name, content, path = /, overwrite = null)` | Sets or Edits the cookie, path is by default set to /, if a boolean is given for overwrite, it uses this value else it uses overwriteIfExists property |
| `Cookie.get(name)` | Receives the cookie from the cookieList object, when it does not exists, it will return undefined |
| `Cookie.remove(name)` | Removes the cookie out of the cookieList object and out of document.cookie (expiry set to yesterday) | 
