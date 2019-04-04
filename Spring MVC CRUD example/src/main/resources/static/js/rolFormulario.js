$(document).ready(function() {
	
	if(rol_id != -1) {
		loadForm(rol_id);
	}
	$('.submit-button', $(this)).attr('disabled', true);
	
	$('#btnAgregar').click(function(event) {
		save();
		location.href = baseURL + "/roles";
	});

	$('#btnEditar').click(function(event) {
		update();
		location.href = baseURL + "/roles";
	});
	
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
	
	$('#formRol').on('status.field.bv', function(e, data) {
        formIsValid = true;
        $('.form-group', $(this)).each( function() {
            formIsValid = formIsValid && $(this).hasClass('has-success');
        });
        
        if(formIsValid) {
            $('.submit-button', $(this)).attr('disabled', false);
        } else {
            $('.submit-button', $(this)).attr('disabled', true);
        }
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
			console.log("Error al cargar el rol a editar: ", event);
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
		error : function(event){
			alert("Error al agregar rol");
			console.log("Error al agregar rol: ", event);
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
		error : function(event){
			alert("Error al actualizar rol");
			console.log("Error al actualizar rol: ", event);
		}
	});
}