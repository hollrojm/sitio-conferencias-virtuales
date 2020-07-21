(function(){
    "use strict";
    var regalo =document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){

        var map = L.map('mapa').setView([4.723728, -73.973651], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([4.723728, -73.973651]).addTo(map)
          .bindPopup('La Calera,  Cundinamarca.<br> Colombia.')
          .openPopup();
        
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


    

    });// DOM CONTENT LOADED

})();