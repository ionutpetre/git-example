var helloMessage = 'Hello World, from Itzaru',
    helloEmoticon = ' :)',
    promptMessage = 'Please enter your name',
    //Change this line of code, by adding your name
    defaultName = 'John Doe';

function setHeading1(name) {
    var h1Elem = document.getElementsByTagName('h1')[0];
    h1Elem.innerHTML = helloMessage + name + helloEmoticon;
}

function bodyLoadHandler() {
    setHeading1(defaultName);
}

function btnClickHandler() {
    yourName = prompt(promptMessage, defaultName);
    if (yourName != null) {
        setHeading1(yourName);
    }
}
