var helloMessage = 'Hello World, from ',
    helloEmoticon = ' :)',
    promptMessage = 'Please enter your name',
    //Change this line of code, by adding your name
    defaultName = 'mateip92';

function setHeading1(name) {
    var h1Elem = document.getElementsByTagName('h1')[0];
    h1Elem.innerHTML = helloMessage + name + helloEmoticon;
}

function bodyLoadHandler() {
    setHeading1(defaultName);
}

function btnClickHandler() {
    yourName = prompt(promptMessage, GhitoiuR);
    if (yourName != null) {
        setHeading1(yourName);
    }
}
