# Theory Assignment : 01 Inception

# Q1. What is Emmet? 
Ans : Emmet is a web development toolkit that allows for the abbreviation of HTML and CSS code. It is designed to improve the efficiency of web developers by providing a set of shorthand syntax for writing commonly used HTML and CSS patterns. With Emmet, you can type short abbreviations and expand them into full HTML or CSS code snippets.



# Q2. Difference between a Library and Framework? 
Ans : Library: A library is a collection of pre-written code that you can use in your program. It typically consists of functions, classes, or modules that you can call from your code to perform specific tasks. The control flow remains with your program, and you decide when and how to use the library's functionality.

Framework: A framework, on the other hand, provides a structure for your application. It dictates the overall flow of control, and your code fills in the details. In a framework, the control flow is often inverted: instead of calling your code, the framework calls your code at certain points.




# Q3. What is CDN? Why do we use it? 
Ans: CDN stands for Content Delivery Network. It is a network of distributed servers strategically placed in multiple locations around the world to deliver web content more efficiently to users. The main purpose of using a CDN is to enhance the performance, reliability, and security of delivering content, such as images, stylesheets, scripts, and other resources, to end-users.




# Q4. Why is React known as React?
Ans: React, the JavaScript library for building user interfaces, is known as "React" because of its core concept and approach to handling UI updates. The name reflects its reactive programming paradigm. 





# Q5. What is crossorigin in script tag? 
Ans: The crossorigin attribute in the <script> tag is used when including external scripts, such as JavaScript files, from a different domain. It is a security feature designed to prevent certain types of security vulnerabilities, such as cross-site scripting (XSS).

When you include an external script in your HTML document using the <script> tag, the browser makes a request to the server of the external script's source to fetch the file. The crossorigin attribute can take two values:

🔻crossorigin="anonymous": This is the default value. When set to "anonymous," the browser includes the script without sending any credentials (such as cookies or HTTP authentication) to the server. This is suitable for scripts that are intended to be publicly accessible and don't require specific user authentication.

🔻crossorigin="use-credentials": When set to "use-credentials," the browser includes credentials (like cookies) when fetching the external script. This is useful when the server requires authentication, and the browser should send the necessary credentials for access.





# Q6. What is diference between React and ReactDOM 
Ans: React:
React is the core library for building user interfaces using a component-based architecture. It provides the essential functionality for defining and working with React components, managing the component lifecycle, and handling the state and props of components. It includes the basic APIs needed to create and render components, handle events, and manage the overall structure of a React application.

ReactDOM:
ReactDOM is a separate package that specifically deals with the DOM (Document Object Model) manipulation and rendering of React components into the actual HTML page. It provides methods for rendering React components into the DOM, updating them, and handling events. ReactDOM is specific to web development and is used when you want to integrate React with the browser's DOM.






# Q7. What is difference between react.development.js and react.production.js files via CDN? 
Ans: The differences between react.development.js and react.production.js files, when loaded via CDN (Content Delivery Network), are related to the development and production environments in React.

Development Version (react.development.js):
This file is intended for use during the development phase of a React application.
It includes additional warnings and error messages that are helpful for developers during debugging.
The code is not minified or optimized for size, making it easier to read and understand.
It may have extra debugging features and tools that can aid developers in identifying and resolving issues.

Production Version (react.production.js):
This file is optimized for production deployment and should be used when deploying React applications to a live environment.
It does not include the additional development warnings and error messages, resulting in a smaller file size and improved runtime performance.
The code is minified and often stripped of unnecessary comments and whitespace to reduce the file size.
It is suitable for use in production environments where code size and performance are critical.




# Q8. What is async and defer?
Ans: async and defer are attributes that can be used with the <script> tag in HTML to control how external scripts are loaded and executed. They both play a role in improving the loading and execution of scripts, but they have different behaviors.

async Attribute:
When you include the async attribute in a <script> tag, it indicates that the script should be executed asynchronously while the HTML parsing continues.
The script is fetched in the background and doesn't block the HTML parsing process. Once the script is downloaded, it is executed, potentially interrupting the HTML parsing.
Multiple scripts with the async attribute can be downloaded and executed concurrently. The order of execution may not be guaranteed.

defer Attribute:
The defer attribute also allows the script to be downloaded asynchronously, but it ensures that the script is executed in order after the HTML parsing is complete.
Multiple scripts with the defer attribute will be executed in the order they appear in the HTML document, after the HTML parsing is finished.
Unlike async, scripts with defer won't interrupt the HTML parsing; they are deferred until the parsing is complete.



