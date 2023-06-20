var x;
var colorRojo = "Coral";
var colorVerde = "Palegreen";
var validado;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  $( "#idFecha" ).datepicker({dateFormat: "dd/mm/yy"});
  $( "#idFecha" ).change(validarFecha);
  $( "select" ).change(validarSelect);
  $( "#idBoton" ).click(validarTodo);
  $( "input:radio[name=anio]" ).change(function(){validarRadio("anio")});
  $( "input:radio[name=cuatri]" ).change(function(){validarRadio("cuatri")});
  $( "input:radio[name=estado]" ).change(function(){validarRadio("estado")});
}

function validarRadio(n){
  var r=$("input:radio[name="+n+"]");
  if(r.is(":checked"))
  {
    r.parent().parent().css("border-bottom","1px solid "+colorVerde);
  }
  else
  {
    r.parent().parent().css("border-bottom","1px solid "+ colorRojo);
    validado = false;
  }
}

function validarFecha (){
  if($(this).val().trim()!="" && isValidDate($(this).val()))
  {
    $(this).css("border-color",colorVerde);
  }
  else
  {
    $(this).css("border-color",colorRojo);
    validado = false;
  }
}

function validarSelect  ()
  {
  if ($(this).val()!="0"){
    $(this).css("border-color", colorVerde);
  }
  else
  {
    $(this).css("border-color", colorRojo);
    validado = false;
  }
}

//----Funcion validacion conseguida en internet----//
function isValidDate(value) {
  var valid = false,
      info,
      real; 
  // Validar formato
  if (/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/.test(value)) {
    
    // Validar fecha
    info = value.split(/\//);
    real = (new Date(info[2], info[1] - 1, info[0])).toISOString().substr(0,10).split('-');
    if (info[0] === real[2] && info[1] === real[1] && info[2] === real[0]) {
      valid = true;
    }
  }
  return valid;
}
//----Fin de funcion validacion---//

function validarTodo(e){
  e.preventDefault();
  validado = true;
  $( "#idFecha" ).trigger( "change" );
  $( "select" ).trigger( "change" );
  $( "input:radio[name=anio]" ).trigger("change");
  $( "input:radio[name=cuatri]" ).trigger("change");
  $( "input:radio[name=estado]" ).trigger("change");
  enviar(validado);
}
function enviar(v){
  if (v){
    $( "#idForm" ).submit();
  }
  else  $( "#idBoton" ).val("Corregir errores");

}