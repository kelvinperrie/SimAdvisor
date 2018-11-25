
function ShowAdvisor(type,message) {
    // in case it is already shown then hide existing
    RemoveAdvisor();

    // create the element that will display the advisor message
    var div = document.createElement('div');
    div.textContent = message;
    div.setAttribute('class', 'advisor-'+type);
    div.setAttribute('id', 'advisor-container');
    // create the button to hide the adivsor message
    var button = document.createElement('button');
    button.setAttribute('id', 'close-advisor-container');
    button.setAttribute('onclick', 'RemoveAdvisor()');
    button.textContent = 'OK';
    // stick the button in the message and the message in the body
    div.appendChild(button);
    document.body.appendChild(div);
}

function RemoveAdvisor() {
    var element = document.getElementById("advisor-container");
    if(element) {
        element.parentNode.removeChild(element);
    }
}