$(document).ready(function() {
	
	if(rol_id != -1) {
		loadForm(rol_id);
	}
	
	$('#formRol').bootstrapValidator({
		submitButtons: 'button[type="submit"]',
		live : "enabled",
		message : "Los valores ingresados no son v&aacute;lidos",
		feedbackIcons : {
			valid : "glyphicon glyphicon-ok",
			invalid : "glyphicon glyphicon-remove",
			validating : "glyphicon glyphicon-refresh"
		},
		fields : {
			nombre : {
				validators : {
					notEmpty : {
						message : "El nombre es requerido"
					},
					regexp : {
						regexp : /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
						message : "El nombre solo puede tener letras y espacios no consecutivos"
					}
				}
			},
			descripcion : {
				validators : {
					notEmpty : {
						message : "La descripci&oacute;n es requerida"
					},
					regexp : {
						regexp : /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
						message : "La descripci&oacute;n solo puede tener letras y espacios no consecutivos"
					}
				}
			},
			fechaCreacion : {
				validators : {
					notEmpty : {
						message : "La fecha de creaci&oacute;n es requerida"
					}
				}
			},
			estado : {
				validators : {
					notEmpty : {
						message : "El estado es requerido"
					}
				}
			}
		}
	});

	$("#formRol").submit(function(ev){
		ev.preventDefault();
	});
	$(".submit-button").on("click", function(){
	   var bootstrapValidator = $("#formRol").data('bootstrapValidator');
	   bootstrapValidator.validate();
	   if(bootstrapValidator.isValid()){
		   if (rol_id != -1) {
			   update();
		   } else {
			   save();
		   }
		   $("#formRol").submit();
		   //location.href = baseURL + "/roles";
	   }
	   else return;
	});
	
});

function loadForm(idEdit) {
	var rol = {
			id : $("#id").val(),
			nombre : $("#nombre").val(),
			descripcion : $("#descripcion").val(),
			fechaCreacion : $("#fechaCreacion").val(),
			estado : $("#estado").val(),
			usuarios : $("#usuarios").val()
	};
	
	$.ajax({
		type: "GET",
		contentType : "application/json",
		url : baseURL + "/api/roles/" + idEdit,
		data : rol,
		dataType : "json",
		success : function(result) {
			$("#id").val(result.id);
			$("#nombre").val(result.nombre);
			$("#descripcion").val(result.descripcion);
			$("#fechaCreacion").val(result.fechaCreacion);
			$("#estado").val(result.estado);
			if (result.estado) {
				$(":radio[value=true]").prop("checked", true);
				$(":radio[value=false]").prop("checked", false);
			} else {
				$(":radio[value=true]").prop("checked", false);
				$(":radio[value=false]").prop("checked", true);
			}			
			console.log("Rol a editar cargado");
		},
		error : function(event) {
			alert("Error al cargar el rol a editar");
			console.log("Error al cargar el rol a editar");
		}
	});
	
}

function save() {
	var rol = {
		nombre : $("#nombre").val(),
		descripcion : $("#descripcion").val(),
		fechaCreacion : $("#fechaCreacion").val(),
		estado : $("#estado").val(),
		usuarios : $("#usuarios").val()
	};
	
	$(":checked").each(function() {
		if ($(this).val() == "true") {
			rol.estado = true;
		} else {
			rol.estado = false;
		}
	});
		
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : baseURL + "/api/roles",
		data : JSON.stringify(rol),
		dataType : "text",
		success : function(result){
			console.log("Rol agregado");
		},
		error:function(xhr, status, errorThrown){
	        alert("ERROR AL AGREGAR ROL:\n" + xhr.responseText);
	        console.log("ERROR AL AGREGAR ROL:\n" + xhr.responseText);
	    }
	});
}

function update() {
	var rol = {
		id : $("#id").val(),
		nombre : $("#nombre").val(),
		descripcion : $("#descripcion").val(),
		fechaCreacion : $("#fechaCreacion").val(),
		estado : $("#estado").val(),
		usuarios : $("#usuarios").val()
	};
	
	$(":checked").each(function() {
		if ($(this).val() == "true") {
			rol.estado = true;
		} else {
			rol.estado = false;
		}
	});
	
	$.ajax({
		type : "PUT",
		contentType : "application/json",
		url : baseURL + "/api/roles/" + rol.id,
		data : JSON.stringify(rol),
		dataType : "text",
		success : function(result){
			console.log("Rol actualizado");
		},
		error:function(xhr, status, errorThrown){
	        alert("ERROR AL ACTUALIZAR ROL:\n" + xhr.responseText);
	        console.log("ERROR AL ACTUALIZAR ROL:\n" + xhr.responseText);
	    }
	});
}