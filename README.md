# 01_NodeJS

## Short introduction
For our first lab, I created a simple nodejs project where I created a HTTP server with local host. The server outputs a Hello world! text. to

## Explanation of the lab
I created two files: index.js and handles.js

index.js: Firstly, we import http and  Node url module with 'require', then we create the server with 'http.createServer' and we start it on the port 8080 with local host (localhost:8080)

handles.js: In the handles file, we define the server's callback function. Firstly, we take some html code for the text that is displayed on the web page.
Then we create a module where we write the html content and export it so the index.js file can take the text and display it on the page.

## Dependencies
Install dependencies with:
- npm i[nstall] [--save] [--save-dev] [-g] package_name

## Nodemon 
A nodemon is a simple utility which watches your development files. To install it, write:
npm i --save nodemon

## package.json
We also include a package.json file to showcase module information. 
Write npm init in your command prompt to create the package.json file. And then you should have the file which contains the information about the module.

## package-lock.json
In a project, we can have a really high number of dependencies installed, and they quite frequently require updates. So to avoid the depencedies hell and prevent the user to install the same module twice, we have a package-lock.json file which stores all your dependencies and their version.
