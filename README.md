## Project Name:  Recipe Display Application

### Course Title:
Web Application Development

### Assignment Date:  
March 5, 2018

### Student Name:  
Jiri Stanc

### Project Description:
Using jQuery JavaScript library, the purpose of this assignment is to develop interactive web page by utilizing jQuery syntax to select DOM elements, create animations and handle event methods.

### View Project Online:
https://jirist.github.io/lesson7_jquery/

### Lessons Learned in the Assignment:
1. #### jQuery Selectors

Being one of the most important aspects of the jQuery library, jQuery selectors allow a developer to select specified HTML elements to operate upon. Using CSS syntax, the selecting criteria can be for example the element's id, class name, tag name, attribute or a combination of these. Some of the selectors are:

###### Basic selectors

* #id selector
* .class selector
* h1 element tag selector

###### Index selectors

* :first selector
* :last selector

###### Child selectors

* :first-of-type selector
* :last-of-type selector

###### Attribute selectors

* attribute='value' selector

###### Content selectors

* :contains(text) selector

###### Hierarchy selectors

* parrent > child selector

2. #### jQuery Traversing

jQuery selectors allow the developer to find elements down the DOM tree. To select elements based on their relation to other elements (child, parent or sibling), the developer can use jQuery DOM traversal methods to move up (ancestors), down (descendants) and sideways (siblings). The traversal methods do not modify the HTML element, these are used to filter out elements from a document. Some useful traversal methods are:

###### Traversing up (ancestors)

* parent() method
* parents() method

###### Traversing down (descendants)

* children() method
* find() method

###### Traversing sideways (siblings)

* next() method
* prev() method

###### Traversing using filtering

* first() method
* last() method

3. #### jQuery Event Methods

When a user interacts with an HTML document in a browser (for example, the user clicks on a button), the jQuery can respond to this event by triggering off some manipulation (such as changing the color of the button) that makes the website dynamic and interactive. These actions take effect by attaching an event handler function for selected elements (in this case click event and click event handler). Some most common events are any type of mouse movement, hover, clicks or keyboard activities. The syntax for using event method is $("Selector").EventMethod(). Below are some useful jQuery events:

###### Mouse Events

* click()
* hover()
* mouseenter()
* mouseleave()

###### Keyboard Events

* keypress()
* keydown()
* keyup()

###### Form Events

* submit()
* change()
* focus()

###### Document/Window Events

* ready()
* resize()
* scroll()

4. #### jQuery Effect Methods

The jQuery provides methods for adding simple animation and visual effects to a web page with a minimum configuration. These jQuery methods allow for example showing and hiding elements, fading elements in and out, and moving elements around. Some common visual effects are:

###### Showing and Hiding Elements

* show()
* hide()
* toggle()

###### Fading Elements In or Out

* fadeIn()
* fadeOut()
* fadeToggle()

###### Sliding Page Elements

* slideDown()
* slideUp()
* slideToggle()