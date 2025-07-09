$(document).ready(function() {
    // AO CLICAR NO BOTÃO MOBILE BTN VAI ACONTECER UMA FUNÇÃO, VAI ABRIR O MOBILE MENU, OUTRA FUNÇÃO VAI SER TROCAR O BOTAO POR UM X
    $('#mobile_btn').on('click', function () {
            $('#mobile_menu').toggleClass('active');
            $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    // QUANDO SCROLAR A JANELA DA PAGINA,
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() + ($(window).height() / 2);

        let activeSectionIndex = 0;

        // SE MEU HEADER ESTIVER PARADA, NAO QUERO BOX-SHADOW. CASO CONTRARIO VAI TER A BOX-SHADOW
        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    // ********************
    // Seleciona todos os <a> (links) dentro dos menus:
    // #nav_list (menu normal de desktop)
    // #mobile_nav_list (menu para celular)

    $('#nav_list a, #mobile_nav_list a').on('click', function (e) {
    e.preventDefault(); // impede o comportamento padrão de pular direto

    const targetId = $(this).attr('href');
    const targetElement = $(targetId);

    if (targetElement.length) {
        $('html, body').animate({
            scrollTop: targetElement.offset().top - $('header').outerHeight()
        }, 500); // tempo em milissegundos (500ms = 0.5s)
    }
    });
});