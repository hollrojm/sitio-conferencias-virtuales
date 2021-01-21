(function(){
    /* "use strict"; */
    var regalo =document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){
        

    
        
        //CAMPOS DATOS DE USUARIO
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        
        //CAMPOS PASES
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //BOTONES Y DIVS
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //EXTRAS
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        //EVENTOS
    if(document.getElementById ('calcular')){
        calcular.addEventListener('click', calcularMontos);       
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);
        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
            
        ///VALIDAR CAMPOS DE REGISTRO----------
        function validarCampos(){         
             if (this.value == '') {
              errorDiv.style.display = 'block';
              errorDiv.innerHTML = "*Este campo es obligatorio";
              this.style.border = '1px solid red';
              errorDiv.style.border = '1px solid red';
            }else{
                errorDiv.style.display = 'none';    
                this.style.border = '1px solid #cccccc';
            } 
        }
        //VALIDAR MAIL
        function validarMail(){
            if(this.value.indexOf("@)") > -1){
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "*Campo Email es obligatorio y debe contener @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }


        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ''){
                alert("Debes elegir un regalo!!!")
                regalo.focus();
            }else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    canEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia * 30000) + (boletos2Dias * 45000) + (boletosCompleto * 60000) + ((cantCamisas * 10000) *.93) + (canEtiquetas * 2000);
                var listadoProductos = [];
                if(boletosDia >= 2 ){
                    listadoProductos.push(boletosDia + ' Pases por dia');
                } if (boletosDia === 1){
                    listadoProductos.push(boletosDia + ' Pase por dia');
                }if (boletos2Dias >= 2) {
                    listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
                }if (boletos2Dias === 1) {
                  listadoProductos.push(boletos2Dias + ' Pase por 2 dias');
                }if (boletosCompleto >= 2) {
                  listadoProductos.push(boletosCompleto + ' Pases completos');
                }if (boletosCompleto === 1) {
                  listadoProductos.push(boletosCompleto + ' Pase completo');
                }if (cantCamisas >= 2) {
                  listadoProductos.push(cantCamisas + ' Camisas');
                }if (cantCamisas === 1) {
                  listadoProductos.push(cantCamisas + ' Camisa');
                }if (canEtiquetas >= 2) {
                  listadoProductos.push(canEtiquetas + ' Etiquetas');
                }if (canEtiquetas === 1) {
                  listadoProductos.push(canEtiquetas + ' Etiqueta');
                }
                lista_productos.style.display = "block"
                lista_productos.innerHTML = '';

                for(var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br>';
                }
                suma.innerHTML = "$ " + totalPagar.toFixed(2);
               
            }
        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletosCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];
            if (boletosDia > 0 ){
                diasElegidos.push('viernes')
            }
            else {
                document.getElementById('viernes').style.display = 'none';

            }
            if(boletos2Dias > 0){
                diasElegidos.push('viernes', 'sabado')
            }else {
              document.getElementById('viernes').style.display = 'none';
              document.getElementById('sabado').style.display = 'none';
            }
            if(boletosCompleto > 0){
                diasElegidos.push('viernes', 'sabado', 'domingo')
                
            }else {
              document.getElementById('viernes' ).style.display = 'none';
              document.getElementById('sabado').style.display = 'none';
              document.getElementById('domingo').style.display = 'none';
              
            }
            for(var i = 0; i < diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
      
        }

        
    }
    

    });// DOM CONTENT LOADED

})();

$(function(){

    //EFECTOS LETRAS CON LETTERING

    $('.nombre-sitio').lettering();

    //MENU FIJO
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop(); //IMPORTANTE
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura +'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top':'0px'});
        }
        
    });

    //MENU RESPONSIVE
    $('.menu-movil').click(function(){
        
        $('.navegacion-principal').slideToggle();
    });

    //PROGRAMA DE CONFERENCIAS
    $('.programa-evento .info-curso:first').show();
    $('menu-programa a:first').addClass('activo');
  $('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo');
      $(this).addClass('activo');
      $('.ocultar').hide();

      var enlace = $(this).attr('href');
      $(enlace).fadeIn(1000);

      return false;
  });

    //ANIMACIONES PARA LOS NUMEROS
    var resumenLista = $('.resumen-evento');
    if(resumenLista.length > 0){
        $('.resumen-evento').waypoint(function () {
            $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);

        }, {
            offset: '40%'
        });
    }
    

    //CUENTA REGRESIVA

    $('.cuenta-regresiva').countdown('2020/09/26 24:00:00', function(event){
        $('#dias').html(event.strftime ('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));


    })
    

});