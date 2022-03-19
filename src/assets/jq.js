import $ from 'jquery'

$(document).ready(function () {
    // var a = null;
    // var val = [];
    // var val2 = [];
    // var bool = false;
    // var out = null;
    // var res = null;
    // var oper;
    // var item = 0;

    // $('.num-set').on('click', function () {
    //     if (bool === false) {
    //         a = $(this).val();
    //         val.push(a);
    //         out = parseInt(val.join(''));
    //         $('.result').val(out);
    //         console.log(out);
    //         console.log(val);
    //     } else {
    //         a = $(this).val();
    //         val2.push(a);
    //         out = parseInt(val2.join(''));
    //         $('.result').val(out);
    //         console.log(out);
    //         console.log(val2);
    //     }
    // });

    // $('c').on('click', function () {
    //     bool = false;
    //     $('.par-out').html('');
    //     $('.result').val('');
    //     val = [];
    //     val2 = [];
    // });

    // $('ce').on('click', function () {
    //     if (bool) {
    //         val2 = [];
    //         $('.result').val2('');
    //     } else {
    //         val = [];
    //         $('.result').val('');
    //     }
    // });

    // $('.plus').on('click', function () {
    //     bool = true;
    //     oper = 1
    //     item += 1;
    //     $('.result').val('');
    //     if (item === 1) {
    //         res = parseInt(val.join(''));
    //         $('.par-out').prepend(out);
    //     }
    //     if (item > 1) {
    //         res = res + parseInt(val2.join(''));
    //         val2 = [];
    //         $('.result').val(res);
    //         $('.par-out').prepend(out + "+");
    //     }
    // });

    // $('.minus').on('click', function () {
    //     bool = true;
    //     oper = 2;
    //     item += 1;
    //     $('.result').val('');
    //     if (item === 1) {
    //         res = parseInt(val.join(''));
    //         $('.par-out').prepend(out);
    //     }
    //     if (item > 1) {
    //         res = res - parseInt(val2.join(''));
    //         val2 = [];
    //         $('.result').val(res);
    //         $('.par-out').prepend(out + "-");
    //     }
    // });

    // $('.divide').on('click', function () {
    //     bool = true;
    //     oper = 3;
    //     item += 1;
    //     $('.result').val('');
    //     if (item === 1) {
    //         res = parseInt(val.join(''));
    //         $('.par-out').prepend(out);
    //     }
    //     if (item > 1) {
    //         res = res / parseInt(val2.join(''));
    //         val2 = [];
    //         $('.result').val(res);
    //         $('.par-out').prepend(out + "/")
    //     }
    // });

    // $('.times').on('click', function () {
    //     bool = true;
    //     oper = 4;
    //     item += 1;
    //     $('.result').val('');
    //     if (item === 1) {
    //         res = parseInt(val.join(''));
    //         $('.par-out').prepend(out);
    //     }
    //     if (item > 1) {
    //         res = res * parseInt(val2.join(''));
    //         val2 = [];
    //         $('.result').val(res);
    //         $('.par-out').prepend(out + "*");
    //     }
    // });

    // $('.eq').on('click', function () {
    //     if (oper == 1) {
    //         res = res + parseInt(val2.join(''));
    //         $('.par-out').append(out)
    //     } else if (oper == 2) {
    //         res = res + parseInt(val2.join(''));
    //         $('.par-out').append(out)
    //     } else if (oper == 4) {
    //         res = res + parseInt(val2.join(''));
    //         $('.par-out').append(out)
    //     } else if (oper == 3) {
    //         res = res + parseInt(val2.join(''));
    //         $('.par-out').append(out)
    //     }
    //     $('.result').val(res);
    //     bool = false
    //     val = [];
    //     val2 = [];
    // });

    var arr = [{
            "title": "Citizen Kane",
            "date": "September 4, 1941",
            "desc": "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/5/1c4da52a6f2335836a21271ec4a6f6b3-98.jpg",
            "mustsee": true
        },
        {
            "title": "The Godfather",
            "date": "March 11, 1972",
            "desc": "Francis Ford Coppola's epic features Marlon Brando in his Oscar-winning role as the patriarch of the Corleone family. Director Coppola paints a chilling portrait of the Sicilian clan's rise and near fall from power in America, masterfully balancing the story between the Corleone's family life and the ugly crime business in which they are engaged. Based on Mario Puzo's best-selling novel and featuring career-making performances by Al Pacino, James Caan and Robert Duvall, this searing and brilliant film garnered ten Academy Award nominations, and won three including Best Picture of 1972. [Paramount Pictures]",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/3/47c2b1f35087fc23c5ce261bbc3ad9e0-98.jpg",
            "mustsee": true
        },
        {
            "title": "Rear Window",
            "date": "September 1, 1954",
            "desc": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "rate": 100,
            "img": "https://static.metacritic.com/images/products/movies/9/0d63e9ade174d351943b09982a5022fe-98.jpg",
            "mustsee": false
        }
    ];
    console.log(arr);
    console.log(arr[0].title);

    $.each(arr, function (index, value) {
        //структура
        $('.home').append(
            '<div class="singleMovie movie-' + index + '">' +
            '<div class="images">' +
            '<img class="ava">' +
            '<img class="must-img">' +
            '</div>' +
            '<div class="info">' +
            '<h1></h1>' +
            '<small></small>' +
            '<p></p>' +
            '</div>' +
            '<p class="rate"></p>' +
            '</div>');
        //значения
        $('.home .movie-' + index + " h1").append(value.title);
        $('.home .movie-' + index + " small").append(value.date);
        $('.home .movie-' + index + " .rate").append(value.rate);
        $('.home .movie-' + index + " .info p").append(value.desc);
        $('.home .movie-' + index + " img.ava").attr("src", value.img);
        if (value.mustsee === true) {
            $('.home .movie-' + index + " img.must-img").attr("src", "https://www.metacritic.com/images/icons/mc-mustsee-sm.svg");
        } else {
            console.log("Фильм с индексом: " + index + ' не рекомендуется к просмотру')
        }
    });

    $.each(arr, function (index, value) {
        //структура
        $('.resultFilter').append(
            '<div class="singleMovie movie-' + index + '">' +
            '<div class="info">' +
            '<h1></h1>' +
            '<small></small>' +
            '</div>' +
            '<p class="rate"></p>' +
            '</div>');
        //значения
        $('.resultFilter .movie-' + index + " h1").append(value.title.toLowerCase());
        $('.resultFilter .movie-' + index + " small").append(value.date);
        $('.resultFilter .movie-' + index + " .rate").append(value.rate);
        $('.resultFilter .movie-' + index + " .info p").append(value.desc);
        $('.resultFilter .movie-' + index + " img.ava").attr("src", value.img);
    });

    var inp = '';

    $('.filter input').on('keyup', function () {
        inp = $(this).val().toLowerCase();
        $('.resultFilter .singleMovie .info h1').parent().parent().hide();
        $('.resultFilter .singleMovie .info h1:contains('+ inp +')').parent().parent().show();
        console.log(inp);
    });

    for(let i = 1; i <= 100; i++) {
        $('.addBlock select').append('<option value="' + i + '">' + i + '</option>')
    }

    var titl = '';
    var datepick = '';
    var select = '';
    var obj = {};

    $('.addBlock input:nth-child(1)').on('keyup', function() {
        titl = $(this).val();
        console.log(titl);
    });

    $('.addBlock input.datepick').on('click', function() {
        datepick = $('.addBlock input.datepick').val();
        console.log(datepick);
    });

    $('.addBlock select').on('click', function() {
        select = $(this).val();
        console.log(select);
    })

    $('.addBlock p').on('click', function() {
        obj.title = titl;
        obj.rate = select;
        obj.date = datepick;
        console.log(obj);
    })

});