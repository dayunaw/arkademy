<script type= "text/javascript">
function PassReq(password) 
{ 
	var pass=  /^[A-Za-z]\w{8}$/;
		if(password.value.match(pass)) 
			{ 
				alert('PasswordValid')
				return true;
			}
		else
			{ 
				alert('TryAnotherPassword')	
				return false;
			}
}
</script>