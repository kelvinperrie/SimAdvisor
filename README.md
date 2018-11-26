FOR DECADES MANKIND HAS YEARNED FOR A RETURN TO A SIMPLER TIME, WHERE THE ADVISORS FROM SIMCITY 2000 WERE AVAILABLE TO GUIDE US THROUGH THIS HELLSCAPE OF A WORLD. Well, yearn no more.

## Intro

This repo will allow you to show the simcity 2000 advisors on an html page. They look like this:

![Example 1](Example1.png?raw=true "Education example")

![Example 2](Example2.png?raw=true "Police example")

Demo: https://rawgit.com/kelvinperrie/simadvisor/master/demo.html

## Getting Started

* link the styles and js from your page
```
    <link href="advisors.css" rel="stylesheet">
    <script src="advisors.js"></script>
```
* call the ShowAdvisor function when you want to show an advisor, passing in the type of the advisor and the message to display
```
$("#yourElement").on("click", function() {
    var type = 'fire';
    var message = 'I have no advice at this time.';

    ShowAdvisor(type,message);
});
```

## Advisor types

The available types of advisors are: tax, ordance, finance, police, fire, health, education, transportation

## More examples

```
<div onclick="ShowAdvisor('police','Crime is at an all time low!')">Click to hear the police man</div>
```

```
var type = $('#advisorType').val();
var message = $('#advisorMessage').val();

ShowAdvisor(type,message);
```

