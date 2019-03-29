$(document).ready(function() {
	
	loadCheckboxes();
	
	if(usuario_id != -1) {
		loadForm(usuario_id);
	}

	$('#btnAgregar').click(function(event) {
		save();
	});

	$('#btnEditar').click(function(event) {
		update();
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
		roles : new Array()
	};
	
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
		error : function(event){
			alert("Error al actualizar usuario");
			console.log("Error al actualizar usuario: ", event);
		}
	});
}