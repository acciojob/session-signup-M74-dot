//your JS code here. If required.
document.getElementById('signup-form').addEventListener('submit',function(event){
	event.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const cpassword = document.querySelector('#confirm-password').value;

	if(password!==cpassword){
		alert('Passwords do not match!');
	}else{
		sessionStorage.setItem('name',name);
		sessionStorage.setItem('email',email);
		sessionStorage.setItem('password',password);
		alert('Sign up successful!');
	}
});