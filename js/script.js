window.onload = ()=>{
    this.sessionStorage.setItem('username', 'alamin@gmail.com');
    this.sessionStorage.setItem('password', '123');
}



var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var login = document.getElementById('log-in');
var errEmail = document.getElementById('errEmail');
var errPassword = document.getElementById('errPassword');
var form = document.querySelector('form');

form.onsubmit = ()=>{return false;}

login.onclick = ()=>{
    if ((userEmail.value != "") && (userPassword.value != ""))
     {
         if ((userEmail.value == sessionStorage.getItem('username')) && (userPassword.value == sessionStorage.getItem('password')))

          {
              form.onsubmit = ()=>{return true;}
            //   document.cookie = "username="+userEmail.value;
            //   document.cookie = "password="+userPassword.value;
          }

          else
          {
              if ((userEmail.value != sessionStorage.getItem('username')) )
              {
                errEmail.textContent = "Username NOT match";
                setTimeout(()=>{
                    errEmail.textContent = "";
                }, 2000);
              }

              if ((userPassword.value != sessionStorage.getItem('password')) )

              {
                  errPassword.textContent = "Password NOT match";
                setTimeout(()=>{
                    userPassword.textContent = "";
                }, 2000);
              }
          }
     }

    else
     {
        if (userEmail.value == "")
        {
            errEmail.textContent = "Username is empty";
            setTimeout(()=>{
                errEmail.textContent = "";
            }, 2000);
        }
        if (userPassword.value == "")
        {
            errPassword.textContent = "Password is empty";
            setTimeout(()=>{
                errPassword.textContent = "";
            }, 2000);
        }

     }

}