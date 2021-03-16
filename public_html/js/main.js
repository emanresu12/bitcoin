$(document).ready(function () {


    if ($('.lead-section').length > 0) {
        $('.lead-section').owlCarousel({
            items: 1,
            loop: true,
        });
    }

    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2
                }
            }
        });
    }


    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });





    if ($('.price').length > 0) {
        $('.price').counterUp({
            delay: 3,
            time: 1000
        });
    }



// validacija forme

    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true,
                        rangelength: [2, 20]
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6,
                        checklower: true,
                        checkupper: true,
                        checkdigit: true
                                //passwordCheck: true
                    },
                    re_password: {
                        required: true,
                        equalTo: '#password'
                    },
                    course: {
                        required: true
                    },
                    message: {
                        required: true,
                        maxlength: 255
                    }


                },
                messages: {
                    name: {
                        required: 'Ime je obavezno polje',
                        rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                    },
                    email: {
                        required: 'Email je obavezno polje',
                        email: 'Unesite validan email'
                    },
                    password: {
                        required: 'Lozinka je obavezno polje',
                        minlength: 'Lozinka mora imati min 6 karaktera',
                        checklower: 'Malo slovo nema',
                        checkupper: 'Veliko slovo nema',
                        checkdigit: 'Broj nema',
                        passwordCheck: 'Lozinka mora imate bar jedno veliko slovo, bar jedno malo slovo i bar jedan broj'
                    },
                    repassword: {
                        required: ' Ponovi Lozinku je obavezno polje',
                        minlength: 'Ponovi Lozinku mora imati min 6 karaktera',
                        equalTo: 'Lozinke se ne poklapaju',
                    },
                    course: {
                        required: 'Kurs je obavezno polje'
                    },
                    message: {
                        required: 'Poruka je obavezno polje',
                        maxlength: 'Poruka ne sme imati vise od 255 karaktera'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }

}
);







//Form Validation

        