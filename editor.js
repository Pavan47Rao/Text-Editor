/**
 * Listen to bold button event and apply or remove bold style
 */
let boldBtn = document.getElementById('bold-btn');
let boldClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let range = window.getSelection().getRangeAt(0);
    if(!selection.anchorNode.parentElement.classList.contains("text-bold")) {
        let selectionContents = range.extractContents();
        let span = document.createElement("span");
        span.className = "text-bold";
        span.appendChild(selectionContents);
        range.insertNode(span);
    }
    else {
        selection.anchorNode.parentElement.classList.remove("text-bold");
    }
};
boldBtn.addEventListener('click',boldClickListener);

/**
 * Listen to italic button event and apply or remove italic style
 */
let italicBtn = document.getElementById('italic-btn');
let italicClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let range = window.getSelection().getRangeAt(0);
    if(!selection.anchorNode.parentElement.classList.contains("text-italic")) {
        let selectionContents = range.extractContents();
        let span = document.createElement("span");
        span.className = "text-italic";
        span.appendChild(selectionContents);
        range.insertNode(span);
    }
    else {
        selection.anchorNode.parentElement.classList.remove("text-italic");
    }
};
italicBtn.addEventListener('click',italicClickListener);

/**
 * Listen to underline button event and apply or remove underline decoration
 */
let underlineBtn = document.getElementById('underline-btn');
let underlineClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let range = window.getSelection().getRangeAt(0);
    if(!selection.anchorNode.parentElement.classList.contains("text-italic")) {
        let selectionContents = range.extractContents();
        let span = document.createElement("span");
        span.className = "text-underline";
        span.appendChild(selectionContents);
        range.insertNode(span);
    }
    else {
        selection.anchorNode.parentElement.classList.remove("text-italic");
    }
};
underlineBtn.addEventListener('click',underlineClickListener);

/**
 * Listen to align center button event and apply jsutification style
 */
let alignCenterBtn = document.getElementById('align-center-btn');
let alignCenterClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
            /**
             * Filter and remove the text-align related classes if already exists and add the align-center style
             */
            let classes = Array.from(document.getElementById('container').classList);
            let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });            
            document.getElementById('container').classList.remove(existingModifier);
            document.getElementById('container').classList.add("text-align-center");
        }
        else {
            document.getElementById('container').classList.add("text-align-center");
        }  
};
alignCenterBtn.addEventListener('click',alignCenterClickListener);

/**
 * Listen to align left button event and apply jsutification style
 */
let alignLeftBtn = document.getElementById('align-left-btn');
let alignLeftClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
            /**
             * Filter and remove the text-align related classes if already exists and add the align-left style
             */
            let classes = Array.from(document.getElementById('container').classList);
            let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });
            document.getElementById('container').classList.remove(existingModifier);
            document.getElementById('container').classList.add("text-align-left");
        }
        else {
            document.getElementById('container').classList.add("text-align-left");
        }  
};
alignLeftBtn.addEventListener('click',alignLeftClickListener);

/**
 * Listen to alight right button event and apply jsutification style
 */
let alignRightBtn = document.getElementById('align-right-btn');
let alignRightClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
   
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
            /**
            * Filter and remove the text-align related classes if already exists and add the align-right style
            */ 
            let classes = Array.from(document.getElementById('container').classList);
            let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });
            document.getElementById('container').classList.remove(existingModifier);
            document.getElementById('container').classList.add("text-align-right");
        }
        else {
            document.getElementById('container').classList.add("text-align-right");
        }   
};
alignRightBtn.addEventListener('click',alignRightClickListener);

/**
 * Remove the event listeners attached to buttons on close of the window
 */
window.onbeforeunload = function() {
    boldBtn.removeEventListener("click", boldClickListener);
    italicBtn.removeEventListener("click", italicClickListener);
    underlineBtn.removeEventListener("click", underlineClickListener);
    alignCenterBtn.removeEventListener("click", alignCenterClickListener);
    alignLeftBtn.removeEventListener('click', alignLeftClickListener);
    alignRightBtn.removeEventListener('click', alignRightClickListener);
}