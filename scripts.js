$(document).ready(function () {
    var clockArea = $('main')
    var segments = 7
    var seven = ['top', 'topLeft', 'topRight', 'centre', 'bottomLeft', 'bottomRight', 'bottom']
    var time = 24
    var size = 1


    setInterval(() => {
        for (let i = 1; i < 5; i++) {
            resetter(i);
        }
        if (time == 24) {
            var hour = moment().format('HH');
        } else {
            var hour = moment().format('hh');
        }
        var minute = moment().format('mm');
        if (hour.length > 1) {
            var first = hour.split('')[0];
            var second = hour.split('')[1];
            eval(`n${segments + first}(1)`);
        } else {
            var second = hour
        }
        var third = minute.split('')[0];
        var forth = minute.split('')[1];
        eval(`n${segments + second}(2)`);
        eval(`n${segments + third}(3)`);
        eval(`n${segments + forth}(4)`);
        // flash();
    }, 1000);

    $('#options').click(function (e) {
        e.preventDefault();
        if ($('nav')[0].children.length > 1) {
            for (let i = 1; i <= $('nav')[0].children.length + 1; i++) {
                let nav = document.getElementById('nav')
                nav.removeChild(nav.childNodes[2])
                
            }
        } else {
            var shrink = document.createElement('button')
            $(shrink).text('shrink');
            $('nav').append(shrink);
            $(shrink).click(function (e) {
                e.preventDefault();
                if (size < 4) {
                    changeSize()
                    size++
                    changeSize()
                }
            });
            var grow = document.createElement('button')
            $(grow).text('grow');
            $('nav').append(grow);
            $(grow).click(function (e) {
                e.preventDefault();
                if (size > 1) {
                    changeSize()
                    size--
                    changeSize()
                }
            });
        }
    });
    function resetter(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            let newClasses = existingClasses.replace(' lit', '');
            $(element).attr('class', newClasses)
        }
    }

    function changeSize() {
        $(clockArea[0].children).animate({
            // scale: '0.1',
            // opacity: '0'
        }, 1000)
        $(clockArea).toggleClass(`animate${size}`);
    }



    for (var n = 1; n < 5; n++) {
        if (segments == 7) {
            sevenSegments()
        }
    }
    function unlitter(number) {
        for (let i = 0; i < number.childNodes.length; i++) {
            let div = $(number.childNodes[i])
            let id = seven[i]
            $(div).attr('class', `unlit ${id}`);
        }
    }

    function sevenSegments() {
        let number = document.createElement('div')
        $(number).attr('id', 'number' + n);
        $(number).attr('class', 'number');
        let top = document.createElement('div')
        let topLeft = document.createElement('div')
        let topRight = document.createElement('div')
        let centre = document.createElement('div')
        let bottomLeft = document.createElement('div')
        let bottomRight = document.createElement('div')
        let bottom = document.createElement('div')
        $(top, topLeft, topRight, centre, bottomLeft, bottomRight, bottom).attr('class', 'unlit');
        $(number).append(top, topLeft, topRight, centre, bottomLeft, bottomRight, bottom);
        $(clockArea).append(number);
        unlitter(number)
    }



    function n70(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 3) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n71(placement) {
        for (let i = 2; i < 7; i += 3) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n72(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 1 || i == 5) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n73(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 1 || i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n74(placement) {
        for (let i = 1; i < 7; i++) {
            if (i == 4 || i == 6) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n75(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 2 || i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n76(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 2) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n77(placement) {
        for (let i = 0; i < 7; i += 2) {
            if (i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n78(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n79(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }


















});