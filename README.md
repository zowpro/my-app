# Cureety Tech Lead Test

This project is a test for Tech Lead Job for Cureety Company.

## Structure of reflexion

1- Verify LocalStorage isn't empty + Recognize compressed/decompressed Data from LocalStorage.<br/>
2- Load Data from LocalStorage and display it while load Data from server.<br/>
3- Fetch Data loaded from LocalStorage and store it in a Global Redux Store.<br/>
4- When the Data is fully loaded from server, store it in Global Redux, compress it and save it in LocalStorage.<br/>
5- If LocalStorage is out of space, delete first big size item comparing to new item and store it.<br/>

## Components hierarchy

Index.js    ====>    App(App.js)    ======>    dataload(dataload.js)    ======>    Table(table.js) 
<br/>

Store ===> reducer.js


## Difficulities 

1- Recognizing Compression/Decompression Data.<br/>
2- Verifying LocalStorage Size and deleting & deleting first item(I need more time to do it).<br/>
3- Some new notions and methods of ES6 and Redux.<br/>
4- Git & React software problems.<br/>

## Things to improve 

1- Better code in Redux and ES6 <br/>
2- Better incremental commits in Git.<br/>
3- Better use of LocalStorage and Data Compression.<br/>


### Notes

- I didn't work on the backend code because, I have to learn NodeJS.
- I already test the code. Screenshots will be shared.
