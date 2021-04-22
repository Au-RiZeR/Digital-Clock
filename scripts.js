$(document).ready(function () {
    var clockArea = $('#main')
    var segments = function () {
        if (localStorage.getItem('segments')) {
            return localStorage.getItem('segments')
        } else {
            localStorage.setItem('segments', 7)
            return 7
        }
    }
    var size = 1
    console.log(localStorage.getItem('size'))
    if (localStorage.getItem('size')) {
    size = localStorage.getItem('size')
    } else {
    localStorage.setItem('size', 1)
    size = localStorage.getItem('size')
    }
    console.log(size)
    var segmentAmounts = ['7', '9', '14']
    var seven = ['top', 'topLeft', 'topRight', 'centre', 'bottomLeft', 'bottomRight', 'bottom']
    var nine = ['top', 'topLeft', 'topRight', 'centre', 'bottomLeft', 'bottomRight', 'bottom', 'topCross', 'bottomCross']
    var fourteen = ['top', 'topLeft', 'topRight', 'centreLeft', 'centreRight', 'bottomLeftBig', 'bottomRightBig', 'bottomBig', 'topLeftCross', 'topCentre', 'topRightCross', 'bottomLeftCross', 'bottomCentre', 'bottomRightCross']
    var time = 24
    generate()
    changeSize()
    setTimeout(() => {
        document.getElementById(`main`).style.transitionDuration = "2s";  
    }, 1000);

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
            eval(`n${segments() + first}(1)`);
        } else {
            var second = hour
        }
        var third = minute.split('')[0];
        var forth = minute.split('')[1];
        eval(`n${segments() + second}(2)`);
        eval(`n${segments() + third}(3)`);
        eval(`n${segments() + forth}(4)`);
        // flash();
    }, 1000);

    $('#options').click(function (e) {
        e.preventDefault();
        if ($('nav')[0].children.length > 1) {
            for (let i = 1; i <= $('nav')[0].children.length + 3; i++) {
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
                    localStorage.setItem('size', size)
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
                    localStorage.setItem('size', size)
                }
            });
            var more = document.createElement('button')
            $(more).text('more');
            $('nav').append(more);
            $(more).click(function (e) {
                e.preventDefault();
                console.log(segmentAmounts.indexOf(segments()))
                if (segmentAmounts.indexOf(segments()) < 2) {
                    localStorage.setItem('segments', segmentAmounts[segmentAmounts.indexOf(segments()) + 1])
                    generate()
                }
            });
            var less = document.createElement('button')
            $(less).text('less');
            $('nav').append(less);
            $(less).click(function (e) {
                e.preventDefault();
                if (segmentAmounts.indexOf(segments()) > 0) {
                    localStorage.setItem('segments', segmentAmounts[segmentAmounts.indexOf(segments()) - 1])
                    generate()
                }
            });
        }
    });
    function resetter(placement) {
        for (let i = 0; i < segments(); i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            let newClasses = existingClasses.replace(' lit', '');
            $(element).attr('class', newClasses)
        }
    }

    function changeSize() {
        $(clockArea).toggleClass(`animate${size}`);
    }


    function generate() {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        for (var n = 1; n < 5; n++) {
            if (n == 3) {
                let divider1 = document.createElement('div')
                $(divider1).attr('id', 'd1');
                $(divider1).attr('class', 'unlit number animate');
                let divider2 = document.createElement('div')
                $(divider2).attr('id', 'd2');
                $(divider2).attr('class', 'unlit number animate');
                let div = document.createElement('div')
                $(div).attr('class', 'number animate');
                $(div).append(divider1, divider2);
                $(clockArea).append(div);
                $(div).attr('id', 'divider');
            }
            if (segments() == 7) {
                segmentLoad = seven
                sevenSegments(n)
            }
            if (segments() == 9) {
                segmentLoad = nine
                nineSegments(n)
            }
            if (segments() == 14) {
                segmentLoad = fourteen
                fourteenSegments(n)
            }
        }
    }

    function unlitter(number) {
        for (let i = 0; i < number.childNodes.length; i++) {
            let div = $(number.childNodes[i])
            let id = segmentLoad[i]
            $(div).attr('class', `unlit ${id}`);
        }
    }

    function sevenSegments(n) {
        let number = document.createElement('div')
        $(number).attr('id', 'number' + n);
        $(number).attr('class', 'number animate');
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

    function nineSegments(n) {
        let number = document.createElement('div')
        $(number).attr('id', 'number' + n);
        $(number).attr('class', 'number animate');
        let top = document.createElement('div')
        let topLeft = document.createElement('div')
        let topRight = document.createElement('div')
        let centre = document.createElement('div')
        let bottomLeft = document.createElement('div')
        let bottomRight = document.createElement('div')
        let bottom = document.createElement('div')
        let topCross = document.createElement('div')
        let bottomCross = document.createElement('div')
        $(top, topLeft, topRight, centre, bottomLeft, bottomRight, bottom, topCross, bottomCross).attr('class', 'unlit');
        $(number).append(top, topLeft, topRight, centre, bottomLeft, bottomRight, bottom, topCross, bottomCross);
        $(clockArea).append(number);
        unlitter(number)
    }

    function fourteenSegments(n) {
        let number = document.createElement('div')
        $(number).attr('id', 'number' + n);
        $(number).attr('class', 'number animate');
        let top = document.createElement('div')
        let topLeft = document.createElement('div')
        let topRight = document.createElement('div')
        let centreLeft = document.createElement('div')
        let centreRight = document.createElement('div')
        let bottomLeft = document.createElement('div')
        let bottomRight = document.createElement('div')
        let bottom = document.createElement('div')
        let topLeftCross = document.createElement('div')
        let topCentre = document.createElement('div')
        let topRightCross = document.createElement('div')
        let bottomLeftCross = document.createElement('div')
        let bottomCentre = document.createElement('div')
        let bottomRightCross = document.createElement('div')

        $(top, topLeft, topRight, centreLeft, centreRight, bottomLeft, bottomRight, bottom, topLeftCross, topCentre, topRightCross, bottomLeftCross, bottomCentre, bottomRightCross).attr('class', 'unlit');
        $(number).append(top, topLeft, topRight, centreLeft, centreRight, bottomLeft, bottomRight, bottom, topLeftCross, topCentre, topRightCross, bottomLeftCross, bottomCentre, bottomRightCross);
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
    function n90(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 3) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n91(placement) {
        for (let i = 2; i < 9; i++) {
            if (i == 2 || i == 5 || i == 7) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n92(placement) {
        for (let i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 6 || i == 8) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n93(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 0 || i == 3 || i == 6 || i == 7) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n94(placement) {
        for (let i = 1; i < 6; i++) {
            if (i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n95(placement) {
        for (let i = 0; i < 7; i++) {
            if (i == 2 || i == 4) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n96(placement) {
        for (let i = 3; i < 8; i++) {
            // if (i ==) {
            //     i++
            // }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n97(placement) {
        for (let i = 0; i < 8; i += 2) {
            if (i == 0 || i == 4 || i == 7) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n98(placement) {
        for (let i = 0; i < 7; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n99(placement) {
        for (let i = 0; i < 9; i++) {
            if (i == 0 || i == 1 || i == 2 || i == 3 || i == 8) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n140(placement) {
        for (let i = 0; i < 12; i++) {
            if (i == 0 || i == 1 || i == 2 || i == 5 || i == 6 || i == 7 || i == 10 || i == 11) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n141(placement) {
        for (let i = 2; i < 11; i++) {
            if (i == 2 || i == 6 || i == 10) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n142(placement) {
        for (let i = 0; i < 8; i++) {
            if (i == 0 || i == 2 || i == 3 || i == 4 || i == 5 || i == 7) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n143(placement) {
        for (let i = 0; i < 8; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 6 || i == 7) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n144(placement) {
        for (let i = 1; i < 7; i++) {
            if (i == 1 || i == 2 || i == 3 || i == 4 || i == 6) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n145(placement) {
        for (let i = 0; i < 8; i++) {
            if (i == 2 || i == 5) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n146(placement) {
        for (let i = 0; i < 8; i++) {
            if (i == 2) {
                i++
            }
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n147(placement) {
        for (let i = 0; i < 13; i += 2) {
            if (i == 0 || i == 10 || i == 12) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }
    function n148(placement) {
        for (let i = 0; i < 8; i++) {
            let element = $(`#number${placement} > div`)[i];
            let existingClasses = $(element).attr('class');
            $(element).attr('class', existingClasses + ' lit');
        }
    }
    function n149(placement) {
        for (let i = 0; i < 9; i++) {
            if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 6) {
                let element = $(`#number${placement} > div`)[i];
                let existingClasses = $(element).attr('class');
                $(element).attr('class', existingClasses + ' lit');
            }
        }
    }















});