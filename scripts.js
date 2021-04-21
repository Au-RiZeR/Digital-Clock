$(document).ready(function () {
    var clockArea = $('main')
    var segments = 7
    var seven = ['top','topLeft','topright','centre','bottomLeft','BottomRight','bottom']
    
for (var n = 1; n < 5; n++) {
    if (segments == 7) {
        sevenSegments()      
    }
}

function unlitter(number) {
    for (let i = 0; i < number.childNodes.length; i++) {
        let div = $(number.childNodes[i])
        let id = seven[i]
        $(div).attr('class', 'unlit');
        $(div).attr('id', n + id);
    }
}

function sevenSegments() {
    let number = document.createElement('div')
    let top = document.createElement('div')
    let topLeft = document.createElement('div')
    let topRight = document.createElement('div')
    let centre = document.createElement('div')
    let bottomLeft = document.createElement('div')
    let bottomRight = document.createElement('div')
    let bottom = document.createElement('div')
    $(top,topLeft, topRight, centre, bottomLeft, bottomRight, bottom).attr('class', 'unlit');
    $(number).append(top, topLeft, topRight, centre, bottomLeft, bottomRight, bottom);
    $(clockArea).append(number);
    unlitter(number)
}





















});