const textAreaOption = document.getElementById('textArea-option'),
    
boldOption = document.getElementById('bold-option'),
italicOption = document.getElementById('italic-option'),
underlineOption = document.getElementById('underline-option'),

leftOption = document.getElementById('left-option'),
centerOption = document.getElementById('center-option'),
rightOption = document.getElementById('right-option'),

colorOption = document.getElementById('color-option'),
fontSizeOption = document.getElementById('fontSize-option');



boldOption.addEventListener('click', function () {
    textAreaOption.style.fontWeight = "900";
})
italicOption.addEventListener('click', function () {
    textAreaOption.style.fontStyle = "italic";
})
underlineOption.addEventListener('click', function () {
    textAreaOption.style.textDecoration = "underline";
})


leftOption.addEventListener('click', function () {
    textAreaOption.style.textAlign = "left";
})
centerOption.addEventListener('click', function () {
    textAreaOption.style.textAlign = "center";
})
rightOption.addEventListener('click', function () {
    textAreaOption.style.textAlign = "right";
})


colorOption.addEventListener('blur', function () {
    textAreaOption.style.color = colorOption.value;
})
fontSizeOption.addEventListener('mousedown', function () {
    textAreaOption.style.fontSize = `${fontSizeOption.value}px`;
})
