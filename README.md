# Leads-Tracker
It is an chrome extention in which you can save your leads (links) of any article or any other link which you want to use later. 

### Functionalities
There are three functionalities in this extension:
  1. You can input the link url in input box and save it.
  2. You can automatically fetch the url of current tab and save it.
  3. You can delete all the links that you saved.

### Steps Involed
  1. For storing the links, created the array.
  2. Whenever a **Save input** button clicked, the event listner push the link into array as well as store the link in local strorage.
  3. For rendering the links, simply iterate over the array and display it.
  4. Whenever a **Save Tab** button clicked,  event listner, fetch the link of current tab using goolge chrome API and push it into array as well as save the link in local strorage.
  5. **Deleting all** the links, set array is equal to empty.

![image](https://user-images.githubusercontent.com/75431265/125602663-aee35917-18c6-4b03-8cf6-f55bd1daa7d4.png)

