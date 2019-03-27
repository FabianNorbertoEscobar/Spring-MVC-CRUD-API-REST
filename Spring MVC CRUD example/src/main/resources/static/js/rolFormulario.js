$(document).ready(function() {
	
	if(rol_id != -1) {
		loadForm(rol_id);
	}
	
	$('#btnAgregar').click(function(event) {
		save();
	});

	$('#btnEditar').click(function(event) {
		update();
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
			//esta linea
			$("#estado").val(result.estado);
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