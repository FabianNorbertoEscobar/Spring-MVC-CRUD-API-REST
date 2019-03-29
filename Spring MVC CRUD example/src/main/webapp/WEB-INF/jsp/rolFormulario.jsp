<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html>
<head>
<title>Formulario rol</title>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<c:set var="baseURL"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}" />
<script type="text/javascript">
	var baseURL = '${baseURL}';
</script>

<script type="text/javascript">
	var rol_id = ${rol.id };
</script>
<script src="${baseURL}/js/rolFormulario.js"></script>

</head>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="col-md-offset-2 col-md-7">
				<c:choose>
					<c:when test="${rol.id != -1 }">
						<h1 class="text-center">Editar rol</h1>
					</c:when>
					<c:otherwise>
						<h1 class="text-center">Agregar rol</h1>
					</c:otherwise>
				</c:choose>
				<br /> <br />

				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="panel-title">Formulario</div>
					</div>

					<div class="panel-body">
						<c:choose>
							<c:when test="${rol.id != -1 }">
								<c:set var="methodForm" value="put" />
								<c:set var="actionForm" value="/roles/form/${rol.id }" />
							</c:when>
							<c:otherwise>
								<c:set var="methodForm" value="post" />
								<c:set var="actionForm" value="/roles/form/" />
							</c:otherwise>
						</c:choose>

						<form:form method="${methodForm }" action="${actionForm }"
							modelAttribute="rol">
							<form:hidden path="id" />
							<div class="form-group">
								<form:label path="nombre" class="col-md-3">Nombre:</form:label>
								<div class="col-md-9">
									<form:input path="nombre" placeholder="Ingrese nombre"
										class="form-control" required="required" />
								</div>
							</div>
							<br />
							<br />
							<br />
							<div class="form-group">
								<form:label path="descripcion" class="col-md-3">Descripción:</form:label>
								<div class="col-md-9">
									<form:input path="descripcion"
										placeholder="Ingrese descripcion" class="form-control"
										required="required" />
								</div>
							</div>
							<br />
							<br />
							<div class="form-group">
								<form:label path="fechaCreacion" class="col-md-3">Fecha de Creación:</form:label>
								<div class="col-md-9">
									<form:input type="date" path="fechaCreacion"
										class="date form-control" required="required" />
								</div>
							</div>
							<br />
							<br />
							<div class="form-group">
								<form:label path="estado" class="col-md-3">Estado:</form:label>
								<div class="col-md-9">
									<form:radiobutton path="estado" value="true" />
									Activo
									<form:radiobutton path="estado" value="false" />
									Inactivo
								</div>
							</div>
							<br />
							<br />
							<c:choose>
								<c:when test="${rol.id != -1 }">
									<a href="/roles" id="btnEditar" class="btn btn-success"><i
										class="glyphicon glyphicon-check"></i> Editar</a>
								</c:when>
								<c:otherwise>
									<a href="/roles" id="btnAgregar" class="btn btn-success"><i
										class="glyphicon glyphicon-check"></i> Agregar</a>
								</c:otherwise>
							</c:choose>
						</form:form>

					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
