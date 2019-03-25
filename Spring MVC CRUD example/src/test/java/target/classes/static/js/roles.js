$(document).ready(function() {
	
	loadTable();
	
	$('#btnEliminar').click(function(event) {
//		event.preventDefault();
		remove();
	});
	
	function loadTable() {
		var rol = {
				id : $("#id").val(),
				nombre : $("#nombre").val(),
				descripcion : $("#descripcion").val(),
				fechaCreacion : $("#fechaCreacion").val(),
				estado : $("#estado").val(),
				usuarios : $("#usuarios").val()
			};
		
		$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "./api/roles",
			data : rol,
			dataType : "json",
			success: function(result) {
				var html = "";
				$.each(result, function(index, item) {
					html += "<tr>";
					html += "<td>" + item.nombre + "</td>";
					html += "<td>" + item.descripcion + "</td>";
					html += "<td>" + item.fechaCreacion + "</td>";
					if (item.estado == true) {
						html += "<td>Activo</td>";
					} else {
						html += "<td>Inactivo</td>";
					}
					html += "<td>" + "<a href = \"/roles/" + item.id + "\" id = \"btnEditar\" class = \"btn btn-info center-block\"><i class = \"glyphicon glyphicon-edit\"></i>Editar</a></td>";
					html += "<td>" + "<a href = \"/roles/" + item.id + "\" id = \"btnEliminar\" class = \"btn btn-danger center-block\"><i class = \"glyphicon glyphicon-trash\"></i>Eliminar</a></td>";
					html += "</tr>";
				})
				$("#tbodyContent").append(html);
				console.log("Roles cargados");
			},
			error : function(event) {
				alert("Error al cargar los errores");
				console.log("Error al cargar los errores: ", event);
			}
			
		})
	}
		
	function remove() {
		$.ajax({
			type : "DELETE",
			url : "./api/roles/" + id,
			success : function(result){
				console.log("Rol eliminado");
			},
			error : function(event){
				alert("Error al eliminar rol");
				console.log("Error al eliminar rol:", event);
			}
		});
	}

});


