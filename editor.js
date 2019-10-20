let boldBtn = document.getElementById('bold-btn');
let boldClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let final = `<span class="text-bold">${selection.toString()}</span>`;
    // let abc= `${selection.getRangeAt(0).startContainer}</span>`;
    // document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace("<span","</span><span");
    if(selection.anchorNode.parentElement.classList.contains("text-bold"))
    selection.anchorNode.parentElement.classList.remove("text-bold");
    else
    document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
};

// let boldClickListener = (event) => {
//     event.preventDefault();
//     let selection = document.getSelection();
//     if(selection.focusNode.parentElement.classList.contains("text-italic")) {
//         let abc = `<span class="text-bold">${selection.getRangeAt(0).startContainer.data}</span><span class="text-bold text-italic">${selection.getRangeAt(0).endContainer.data}</span>`;
//         selection.anchorNode.parentElement.innerHTML = abc;
//     }
// };

boldBtn.addEventListener('click',boldClickListener);

let italicBtn = document.getElementById('italic-btn');
let italicClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let final = `<span class="text-italic">${selection.toString()}</span>`;
    if(selection.anchorNode.parentElement.classList.contains("text-italic"))
    selection.anchorNode.parentElement.classList.remove("text-italic");
    else
    document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
};
italicBtn.addEventListener('click',italicClickListener);

let underlineBtn = document.getElementById('underline-btn');
let underlineClickListener = (event) => {
    event.preventDefault();
    let selection = window.getSelection();
    let final = `<span class="text-underline">${selection.toString()}</span>`;
    if(selection.anchorNode.parentElement.classList.contains("text-underline"))
    selection.anchorNode.parentElement.classList.remove("text-underline");
    else
    document.getSelection().anchorNode.parentElement.innerHTML = document.getSelection().anchorNode.parentElement.innerHTML.replace(document.getSelection().toString(),final);
};
underlineBtn.addEventListener('click',underlineClickListener);