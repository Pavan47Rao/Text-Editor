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
    if(!selection.anchorNode.parentElement.classList.contains("text-underline")) {
        let selectionContents = range.extractContents();
        let span = document.createElement("span");
        span.className = "text-underline";
        span.appendChild(selectionContents);
        range.insertNode(span);
    }
    else {
        selection.anchorNode.parentElement.classList.remove("text-underline");
    }
};
underlineBtn.addEventListener('click',underlineClickListener);

/**
 * Listen to align center button event and apply jsutification style
 */
let alignCenterBtn = document.getElementById('align-center-btn');
let alignCenterClickListener = (event) => {
    event.preventDefault();
    if(document.getSelection().toString().includes("\n")) {
        let classList = document.getElementById('container').classList;
        if(classList!=undefined) {
            if(classList.contains("container-box") && classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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
        }
    }
    else {
        let selection = document.getSelection();
        let classList = selection.anchorNode.classList;
        if(classList!=undefined) {
            if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
                let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });            
                document.getElementById('container').classList.remove(existingModifier);
                document.getElementById('container').classList.add("text-align-center");
            }
        }
        else {
            let final = `<div class="text-align-center">${selection.toString()}</div>`;
            document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
        }
    }
};
alignCenterBtn.addEventListener('click',alignCenterClickListener);

/**
 * Listen to align left button event and apply jsutification style
 */
let alignLeftBtn = document.getElementById('align-left-btn');
let alignLeftClickListener = (event) => {
    event.preventDefault();
    if(document.getSelection().toString().includes("\n")) {
        let classList = document.getElementById('container').classList;
        if(classList!=undefined) {
            if(classList.contains("container-box") && classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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
        }
    }
    else {
        let selection = document.getSelection();
        let classList = selection.anchorNode.classList;
        if(classList!=undefined) {
            if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
                let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });            
                document.getElementById('container').classList.remove(existingModifier);
                document.getElementById('container').classList.add("text-align-left");
            }
        }
        else {
            let final = `<div class="text-align-left">${selection.toString()}</div>`;
            document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
        }
    }
};
alignLeftBtn.addEventListener('click',alignLeftClickListener);

/**
 * Listen to alight right button event and apply jsutification style
 */
let alignRightBtn = document.getElementById('align-right-btn');
let alignRightClickListener = (event) => {
    event.preventDefault();
    if(document.getSelection().toString().includes("\n")) {
        let classList = document.getElementById('container').classList;
        if(classList!=undefined) {
            if(classList.contains("container-box") && classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
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
        }
    }
    else {
        let selection = document.getSelection();
        let classList = selection.anchorNode.classList;
        if(classList!=undefined) {
            if(classList.contains("text-align-center") || classList.contains("text-align-left") || classList.contains("text-align-right")) {
                let existingModifier = classes.filter(className => { return className.match(/^text-align-/) });            
                document.getElementById('container').classList.remove(existingModifier);
                document.getElementById('container').classList.add("text-align-right");
            }
        }
        else {
            let final = `<div class="text-align-right">${selection.toString()}</div>`;
            document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
        }
    } 
};
alignRightBtn.addEventListener('click',alignRightClickListener);

document.onselectionchange = () => {
    let classList = document.getSelection().anchorNode.parentElement.classList;
    if(classList != undefined) {
        if (classList.contains("text-bold")) {
            removeSelection();
            document.getElementById('bold').classList.add("active");
        }
        else if (classList.contains("text-italic")) {
            removeSelection();
            document.getElementById('italic').classList.add("active");
        }
        else if (classList.contains("text-underline")) {
            removeSelection();
            document.getElementById('underline').classList.add("active");
        }
        else {
            removeSelection();
        }
    }
    else {
        removeSelection();
    }
};

function removeSelection(){
    let class1 = Array.from(document.getElementById('bold').classList);
    let class2 = Array.from(document.getElementById('italic').classList);
    let class3 = Array.from(document.getElementById('underline').classList);

    let existingModifier1 = class1.filter(className => { return className.match(/active/) });
    let existingModifier2 = class2.filter(className => { return className.match(/active/) });
    let existingModifier3 = class3.filter(className => { return className.match(/active/) });

    if(existingModifier1!=null || existingModifier1!=undefined){
        document.getElementById('bold').classList.remove('active');
    }
    if(existingModifier2!=null || existingModifier2!=undefined){
        document.getElementById('italic').classList.remove('active');
    }
    if(existingModifier3!=null || existingModifier3!=undefined){
        document.getElementById('underline').classList.remove('active');
    }
}

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