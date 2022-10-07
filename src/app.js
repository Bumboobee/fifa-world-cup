function calcData() {        
    let cup_date = moment('20/11/2022 13:00:00', 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    let date_now = moment().format('DD/MM/YYYY HH:mm:ss');

    let milleseconds = moment(cup_date,"DD/MM/YYYY HH:mm:ss").diff(moment(date_now,"DD/MM/YYYY HH:mm:ss"));
    let duration = moment.duration(milleseconds);

    formatarData(duration);
}

function formatarData(milisegundos) {
    let minutes = moment.duration(milisegundos).minutes();
    let totalHours = Math.trunc(moment.duration(milisegundos).asHours());
    let hours = totalHours % 24; 
    let days = (totalHours - hours) / 24;
    let arrReturn = [];

    if (hours < 9) 
        hours =  `0${hours}`;
    if(days < 9) 
        days = `0${days}`;
    if(minutes < 9) 
        minutes = `0${minutes}`;

    if (parseInt(days) == 0) {            
        return arrReturn.push(hours, minutes);
    } else if (parseInt(days) >= 1) {
        arrReturn.push(days, hours, minutes);
        return $('#data_days').html(days), $('#data_hours').html(hours), $('#data_minutes').html(minutes);       
    }
}

function slideEstadio() {
    $('#stadyums').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        variableWidth: true,
        arrows: false,
        variableWidth: true
        });    
}

function bootstrapInit() {
    $('[data-toggle="tooltip"]').tooltip();
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
    });  
}

function mostraSwal() {
    Swal.fire({
        html: `<h5>BEM VINDO A</h5> 
                <h4>COPA MUNDIAL DO CATAR</h4>
                <br/>
                <span class="span-news">FIQUE POR DENTRO DAS ÚLTIMAS NOTÍCIAS</span>`, 
        input: 'email',
        padding: '2em',
        confirmButtonText: 'REGISTRAR',
        color: '#560519',
        confirmButtonColor: '#56042C',
        background: '#FFFFFF',
    }).then(function (result) {
        if (result.isConfirmed) {
        console.log('teste'); 
        
        console.log(result);  
            swal.fire({
                type: 'success',
                html: 'Email enviado para: ' + result.value,
                color: '#560519',
                background: '#FFFFFF',
                confirmButtonColor: '#56042C'
            });
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}

$(document).ready(function() {        
    slideEstadio();
    bootstrapInit();
    setInterval(function() { calcData(); }, 1000);
    mostraSwal(); 
    
})