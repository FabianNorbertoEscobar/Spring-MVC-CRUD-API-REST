$(document).ready(function() {
	
	loadCheckboxes();
	
	if(usuario_id != -1) {
		loadForm(usuario_id);
		$('input[name="password"]', $(this)).attr('disabled', true);
	} else {
		//$('.submit-button', $(this)).attr('disabled', true);
	}

	$('#btnAgregar').click(function(event) {
		save();
		debugger;
		//location.href = baseURL + "/usuarios";
	});

	$('#btnEditar').click(function(event) {
		update();
		location.href = baseURL + "/usuarios";
	});
	
	$('#select-all').click(function(event) {   
	    if(this.checked) {
	        $(':checkbox').each(function() {
	            this.checked = true;                        
	        });
	    } else {
	        $(':checkbox').each(function() {
	            this.checked = false;                       
	        });
	    }
	});
	
//	$('#formUsuario').bootstrapValidator({
//		submitButtons: 'button[type="submit"]',
//		live : "enabled",
//		message : "Los valores ingresados no son v&aacute;lidos",
//		feedbackIcons : {
//			valid : "glyphicon glyphicon-ok",
//			invalid : "glyphicon glyphicon-remove",
//			validating : "glyphicon glyphicon-refresh"
//		},
//		fields : {
//			nombre : {
//				validators : {
//					notEmpty : {
//						message : "El nombre es requerido"
//					},
//					regexp : {
//						regexp : /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
//						message : "El nombre solo puede tener letras y espacios no consecutivos"
//					}
//				}
//			},
//			apellido : {
//				validators : {
//					notEmpty : {
//						message : "El apellido es requerido"
//					},
//					regexp : {
//						regexp : /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
//						message : "El apellido solo puede tener letras y espacios no consecutivos"
//					}
//				}
//			},
//			email : {
//				validators : {
//					notEmpty : {
//						message : "El email es requerido"
//					},
//					emailAddress : {
//						message : "La entrada no respeta el formato de un email"
//					}
//				}
//			},
//			password : {
//				validators : {
//					notEmpty : {
//						message : "El password es requerido"
//					}
//				}
//			},
//			nuevo : {
//				validators : {
//					identical : {
//						field : "confirmar",
//						message : "El nuevo password y su confirmaci&oacute;n deben coincidir"
//					}
//				}
//			},
//			confirmar : {
//				validators : {
//					identical : {
//						field : "nuevo",
//						message : "El nuevo password y su confirmaci&oacute;n deben coincidir"
//					}
//				}
//			}
//		}
//	});
//
//	$('#formUsuario').on('status.field.bv', function(e, data) {
//        formIsValid = true;
//        $('.form-group', $(this)).each( function() {
//            formIsValid = formIsValid && $(this).hasClass('has-success');
//        });
//        
//        if(formIsValid) {
//            $('.submit-button', $(this)).attr('disabled', false);
//        } else {
//            $('.submit-button', $(this)).attr('disabled', true);
//        }
//    });
//	
});

function loadCheckboxes() {
	var rol = {
		id : $("#id").val(),
		nombre : $("#nombre").val(),
		descripcion : $("#descripcion").val(),
		fechaCreacion : $("#fechaCreacion").val(),
		estado : $("#estado").val(),
	};
	
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : baseURL + "/api/roles",
		data : rol,
		dataType : "json",
		success : function(result) {
			var html = "";
			$.each(result, function(index, item){
				html += "<input type=\"checkbox\" path=\"roles\" value=\"" + item.id + "\" />" + item.nombre + "<br />";
			})	
			$("#listaRoles").append(html);
			console.log("Roles cargados en el formulario");
		},
		error : function(event) {
			alert("Error al cargar los roles en el formulario");
			console.log("Error al cargar los roles en el formulario");
		}
	});
}

function loadForm(idEdit) {
	var usuario = {
			id : $("#id").val(),
			nombre : $("#nombre").val(),
			apellido : $("#apellido").val(),
			email : $("#email").val(),
			password : $("#password").val(),
			roles : $("#roles").val()
		};
	
	$.ajax({
		type: "GET",
		contentType : "application/json",
		url : baseURL + "/api/usuarios/" + idEdit,
		data : usuario,
		dataType : "json",
		success : function(result) {
			$("#id").val(result.id);
			$("#nombre").val(result.nombre);
			$("#apellido").val(result.apellido);
			$("#email").val(result.email);
			$("#password").val(result.password);
			$("#roles").val(result.roles);
			for (var i = 0; i < result.roles.length; i++) {
				$(":checkbox[value=" + result.roles[i].id + "]").prop("checked", true);
			}
			console.log("Usuario a editar cargado");
		},
		error : function(event) {
			alert("Error al cargar el usuario a editar");
			console.log("Error al cargar el usuario a editar: ", event);
		}
	});
	
}

function save() {
	var usuario = {
		nombre : $("#nombre").val(),
		apellido : $("#apellido").val(),
		email : $("#email").val(),
		password : $("#password").val(),
		roles : new Array()
	};
	
	$(":checked").each(function() {
		var rol = { id : Number($(this).val()) };
		usuario.roles.push(rol);
	});
		
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : baseURL + "/api/usuarios",
		data : JSON.stringify(usuario),
		dataType : "text",
		success : function(result){
			console.log("Usuario agregado");
		},
		error : function(result) {
			alert("Error al agregar usuario: ", result.responseText);
			console.log("Error al agregar usuario: ", result.responseText);
		}
	});
	
}

function update() {
	var usuario = {
		id : $("#id").val(),
		nombre : $("#nombre").val(),
		apellido : $("#apellido").val(),
		email : $("#email").val(),
		password : $("#password").val(),
		roles : new Array()
	};
	
	if ($("#nuevo").val() != "") {
		usuario.password = $("#nuevo").val();
	} 
	
	$(":checked").each(function() {
		var rol = { id : Number($(this).val()) };
		usuario.roles.push(rol);
	});
		
	$.ajax({
		type : "PUT",
		contentType : "application/json",
		url : baseURL + "/api/usuarios/" + usuario.id,
		data : JSON.stringify(usuario),
		dataType : "text",
		success : function(result){
			console.log("Usuario actualizado");
		},
		error : function(result){
			alert("Error al actualizar usuario: ", result.responseText);
			console.log("Error al actualizar usuario: ", result.responseText);
		}
	});
}