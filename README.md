FOR DECADES MANKIND HAS YEARNED FOR A RETURN TO A SIMPLER TIME, WHERE THE ADVISORS FROM SIMCITY 2000 WERE AVAILABLE TO GUIDE US THROUGH THIS HELLSCAPE OF A WORLD. Well, yearn no more.

## Intro

This will allow you to show the simcity 2000 advisors.

Demo: https://rawgit.com/kelvinperrie/simadvisor/master/demo.html

## Getting Started

* put the images onto your file system at images/advisor. If you want to change the path you'll have to update it in the advisors.css file.
* link the styles and js from your page
```
    <link href="advisors.css" rel="stylesheet">
    <script src="advisors.js"></script>
```
* call the ShowAdvisor function when you want to show an advisor
```
$("#yourElement").on("click", function() {
    var type = 'fire';
    var message = 'I have no advice at this time.';

    ShowAdvisor(type,message);
});
```
* the options for the different advisors are: tax, ordance, finance, police, fire, health, education, transportation

## More examples

```
<div onclick="ShowAdvisor('police','Crime is at an all time low!')">Click to hear the police man</div>
```

```
var type = $('#advisorType').val();
var message = $('#advisorMessage').val();

ShowAdvisor(type,message);
```

