$(document).ready(function() {
	
	loadTable();	
	
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
		url : baseURL + "/api/usuarios",
		data : usuario,
		dataType : "json",
		success: function(result) {
			$.each(result, function(index, item) {
				var html = "";
				html += "<tr>";
				html += "<td>" + item.nombre + "</td>";
				html += "<td>" + item.apellido + "</td>";
				html += "<td>" + item.email + "</td>";
				html += "<td>";
				for (var i = 0; i < item.roles.length; i++) {
					if (i != 0) {
						html += ", ";
					}
					html +=  item.roles[i].nombre;
				}
				html += "</td>";
				html += "<td>" + "<a href = \"/usuarios/form/" + item.id + "\" id = \"btnEditar" + item.id + "\" class = \"btn btn-info center-block\"><i class = \"glyphicon glyphicon-edit\"></i>Editar</a></td>";
				html += "<td>" + "<a href = \"/usuarios/delete/" + item.id + "\" id = \"btnEliminar" + item.id + "\" class = \"btn btn-danger center-block\"><i class = \"glyphicon glyphicon-trash\"></i>Eliminar</a></td>";
				html += "</tr>";
				$("#tbodyContent").append(html);
				
				$('#btnEliminar' + item.id).click(function(event) {
					remove(item.id);
				});
			})
			console.log("Usuarios cargados");
		},
		error : function(event) {
			alert("Error al cargar los usuarios");
			console.log("Error al cargar los usuarios: ", event);
		}
		
	});
}
	
function remove(id) {
	$.ajax({
		type : "DELETE",
		url : baseURL + "/api/usuarios/" + id,
		success : function(result){
			console.log("Usuario eliminado");
		},
		error : function(event){
			alert("Error al eliminar usuario");
			console.log("Error al eliminar usuario: ", event);
		}
	});
}