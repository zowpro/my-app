# Cureety Tech Lead Test

This project is a test for Tech Lead Job for Cureety Company.

## Structure of reflexion

1- Verify LocalStorage isn't empty + Recognize compressed/decompressed Data from LocalStorage.
2- Load Data from LocalStorage and display it while load Data from server.
3- Fetch Data loaded from LocalStorage and store it in a Global Redux Store.
4- When the Data is fully loaded from server, store it in Global Redux, compress it and save it in LocalStorage.
5- If LocalStorage is out of space, delete first big size item comparing to new item and store it.

## Components hierarchy

Index.js    ====>    App(App.js)    ======>    dataload(dataload.js)    ======>    patientList(patientlist.js)    &&    filterbycancerorigin(filterbycancerorigin.js)


Store ===> reducer.js


## Difficulities 

1- Compression/Decompression Data + Comparing size.
2- Some new notions and methods of ES6 and Redux.
3- Git & React software problems.

## Things to improve 

1- Better code in Redux and ES6 
2- Better incremental commits in Git.


### Notes

- I didn't work on the backend code because, I have to learn NodeJS.
- I already test the code. Screenshots will be shared.
