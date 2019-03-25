$(document).ready(function() {
	
	$('#btnAgregar').click(function(event) {
		event.preventDefault();
		save();
	});

	$('#btnEditar').click(function(event) {
		event.preventDefault();
		update();
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
			url : ".api/roles/" + idEdit,
			data : rol,
			dataType : "json",
			success : function(result) {
				$.each(result, function(index, item){
					$("#id").val(item.id);
					$("#nombre").val(item.nombre);
					$("#descripcion").val(item.descripcion);
					$("#fechaCreacion").val(item.fechaCreacion);
					$("#estado").val(item.estado);
					$("#usuarios").val(item.usuarios);
									
				})
				console("Rol a editar cargado");
			},
			error : function(event) {
				alert("Error al cargar el rol a editar");
				console.log("Error al cargar el rol a editar: ", event);
			}
		});
		
	}
	
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
			url : "./api/roles/" + rol.id,
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

