$(document).ready(function() {
	$('#btnAgregar').click(function(event) {
		event.preventDefault();
		save();
	});

	$('#btnEditar').click(function(event) {
		event.preventDefault();
		update();
	});
	
	function save() {
		var rol = {
			id : $("#id").val(),
			nombre : $("#nombre").val(),
			descripcion : $("#descripcion").val(),
			fechaCreacion : $("#fechaCreacion").val(),
			estado : $("#estado").val(),
			usuarios : $("#usuarios").val()
		};
		
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./api/roles",
			data : JSON.stringify(rol),
			dataType : "json",
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
			url : "./api/roles/{id}",
			data : JSON.stringify(rol),
			dataType : "json",
			success : function(result){
				console.log("Rol actualizado");
			},
			error : function(event){
				alert("Error al actualizar rol");
				console.log("Error al actualizar rol: ", event);
			}
		});
	}

});

