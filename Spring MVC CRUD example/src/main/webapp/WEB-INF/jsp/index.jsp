<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<html>
<head>
<title>Usuarios y Roles</title>
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

<link rel="stylesheet" href="${baseURL }/css/misEstilos.css">

</head>
<body>
	<header>
		<div class="logo">
			<img src="${baseURL}/img/usuarios.jpg" width="70"
				alt="Usuarios y Roles" title="Usuarios y Roles">
			<h2 class="text-center">Sistema de Roles y Usuarios</h2>
		</div>

	</header>
	<section class="wrapper">
		<br /> <br /> <br /> <br /> <br /> <br />
		<div class="main">
			<div class="container-fluid">
				<div class="row-fluid">
					<div class="col-md-offset-2 col-md-8">
						<div class="center-block">
							<a href="/usuarios" id="btnUsuarios"
								class="btn btn-warning btn-lg btn-block"><i
								class="glyphicon glyphicon-th"></i> USUARIOS CRUD</a> <br /> <br /> <br />
							<a href="/roles" id="btnRoles"
								class="btn btn-primary btn-lg btn-block"><i
								class="glyphicon glyphicon-th-large"></i> ROLES CRUD</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
		<br />
	</section>

	<footer>
		<p>Sistema de Usuario y Roles</p>
	</footer>
</body>
</html>
