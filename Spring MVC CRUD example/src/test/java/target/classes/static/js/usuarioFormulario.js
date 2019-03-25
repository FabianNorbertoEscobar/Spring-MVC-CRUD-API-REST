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
		var usuario = {
			id : $("#id").val();
			nombre : $("#nombre").val(),
			apellido : $("#apellido").val(),
			email : $("#email").val(),
			password : $("#password").val(),
			roles : $("#roles").val()
		};
		
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./api/usuarios",
			data : JSON.stringify(usuario),
			dataType : "json",
			success : function(result){
				console.log("Usuario agregado");
			},
			error : function(event){
				alert("Error al agregar usuario");
				console.log("Error al agregar usuario: ", event);
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
			roles : $("#roles").val()
		};
		
		$.ajax({
			type : "PUT",
			contentType : "application/json",
			url : "./api/usuarios/{id}",
			data : JSON.stringify(usuario),
			dataType : "json",
			success : function(result){
				console.log("Usuario actualizado");
			},
			error : function(event){
				alert("Error al actualizar usuario");
				console.log("Error al actualizar usuario: ", event);
			}
		});
	}

});


