<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html>
<head>
<title>Formulario rol</title>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script type="text/javascript"
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css">
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.min.js"></script>

<c:set var="baseURL"
	value="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}" />
<script type="text/javascript">
	var baseURL = '${baseURL}';
</script>

<script type="text/javascript">
	var rol_id = ${rol.id};
</script>
<script src="${baseURL}/js/rolFormulario.js"></script>

</head>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="col-md-offset-2 col-md-7">
				<c:choose>
					<c:when test="${rol.id != -1 }">
						<c:set var="modo" value="Editar" />
					</c:when>
					<c:otherwise>
						<c:set var="modo" value="Agregar" />
					</c:otherwise>
				</c:choose>
				<h1 class="text-center">${modo } rol</h1>
				<br /> <br />
				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="panel-title">Formulario</div>
					</div>
					<div class="panel-body">
						<form:form action="${baseURL }/roles" id="formRol" modelAttribute="rol">
							<form:hidden path="id" />
							<div class="form-group">
								<form:label path="nombre" class="col-md-3">Nombre:</form:label>
								<div class="col-md-9">
									<form:input path="nombre" name="nombre" placeholder="Ingrese nombre"
										class="form-control" required="required" />
									<form:errors path="nombre" class="has-error"></form:errors>
								</div>
							</div>
							<br />
							<br />
							<br />
							<div class="form-group">
								<form:label path="descripcion" class="col-md-3">Descripci�n:</form:label>
								<div class="col-md-9">
									<form:input path="descripcion" name="descripcion"
										placeholder="Ingrese descripcion" class="form-control"
										required="required" />
									<form:errors path="descripcion" class="has-error"></form:errors>
								</div>
							</div>
							<br />
							<br />
							<div class="form-group">
								<form:label path="fechaCreacion" class="col-md-3">Fecha de Creaci�n:</form:label>
								<div class="col-md-9">
									<form:input type="date" path="fechaCreacion" name="fechaCreacion"
										class="date form-control" required="required" />
									<form:errors path="fechaCreacion" class="has-error"></form:errors>
								</div>
							</div>
							<br />
							<br />
							<div class="form-group">
								<form:label path="estado" class="col-md-3">Estado:</form:label>
								<div class="col-md-9">
									<form:radiobutton path="estado" name="estado" value="true" />
									Activo
									<form:radiobutton path="estado" name="estado" value="false" />
									Inactivo
									<form:errors path="estado" class="has-error"></form:errors>
								</div>
							</div>
							<br />
							<br />
							<br />
							<form:button type="submit" id="btnSubmit" class="btn btn-success submit-button">
										<i class="glyphicon glyphicon-check"></i> ${modo }
									</form:button>
							<a href="/roles" id="btnVolver" class="btn btn-danger"><i
								class="glyphicon glyphicon-chevron-left"></i> Volver</a>
						</form:form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
