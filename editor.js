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

let alignCenterBtn = document.getElementById('align-center-btn');
let alignCenterClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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

let alignLeftBtn = document.getElementById('align-left-btn');
let alignLeftClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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

let alignRightBtn = document.getElementById('align-right-btn');
let alignRightClickListener = (event) => {
    event.preventDefault();
    let classList = document.getElementById('container').classList;
        if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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

window.onbeforeunload = function() {
    boldBtn.removeEventListener("click", boldClickListener);
    italicBtn.removeEventListener("click", italicClickListener);
    underlineBtn.removeEventListener("click", underlineClickListener);
    alignCenterBtn.removeEventListener("click", alignCenterClickListener);
    alignLeftBtn.removeEventListener('click', alignLeftClickListener);
    alignRightBtn.removeEventListener('click', alignRightClickListener);
}