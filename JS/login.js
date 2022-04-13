function registration()
	{
		var email= document.getElementById("t2").value;
		var pwd= document.getElementById("t4").value;			

        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(pwd=='')
		{
			alert('Please enter your Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password field!');
		}
		else if(document.getElementById("t4").value.length < 8)
		{
			alert ('Password minimum length is 8');
		}
		else if(document.getElementById("t4").value.length > 15)
		{
			alert ('Password max length is 15');
		}
		else
		{				                            
               alert('Welcome! You have been successfully logged in to your Kerala Tourism Web Account.');
			   // Redirecting to other page or webste code. 
			   window.location = "index.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("t2").value="";
		document.getElementById("t4").value="";
	}
   