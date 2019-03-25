$(document).ready(function() {
	
	loadTable();	

	$('#btnEliminar').click(function(event) {
//		event.preventDefault();
		remove();
	});
	
	function loadTable() {
		var usuario = {
				id : $("#id").val(),
				nombre : $("#nombre").val(),
				apellido : $("#apellido").val(),
				email : $("#email").val(),
				password : $("#password").val(),
				roles : $("#roles").val()
			};
		
		$.ajax({
			type : "GET",
			contentType : "application/json",
			url :  "./api/usuarios",
			data : usuario,
			dataType : "json",
			success: function(result) {
				var html = "";
				$.each(result, function(index, item) {
					html += "<tr>";
					html += "<td>" + item.nombre + "</td>";
					html += "<td>" + item.apellido + "</td>";
					html += "<td>" + item.email + "</td>";
					html += "<td>";
					for (var i = 0; i < item.roles.length; i++) {
						if (i != 0) {
							html += ", "
						}
						html +=  item.roles[i].nombre;
					}
					html += "</td>";
					html += "<td>" + "<a href = \"/usuarios/" + item.id + "\" id = \"btnEditar\" class = \"btn btn-info center-block\"><i class = \"glyphicon glyphicon-edit\"></i>Editar</a></td>";
					html += "<td>" + "<a href = \"/usuarios/" + item.id + "\" id = \"btnEliminar\" class = \"btn btn-danger center-block\"><i class = \"glyphicon glyphicon-trash\"></i>Eliminar</a></td>";
					html += "</tr>";
				})
				$("#tbodyContent").append(html);
				console.log("Usuarios cargados");
			},
			error : function(event) {
				alert("Error al cargar los usuarios");
				console.log("Error al cargar los usuarios: ", event);
			}
			
		})
	}
		
	function remove(id) {
		$.ajax({
			type : "DELETE",
			url : "./api/usuarios/" + id,
			success : function(result){
				debugger;
				console.log("Usuario eliminado");
			},
			error : function(event){
				alert("Error al eliminar usuario");
				console.log("Error al eliminar usuario: ", event);
			}
		});
	}

});


