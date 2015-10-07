module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
      var loginmails = [];
      var loginpwd = [];
   $.getJSON( "./../db.json", function( data ) {
      
      $.each( data, function( key, val ) {
        loginmails.push(val.email);
        loginpwd.push(val.pwd);
        //console.log(val.email,val.pwd);
        
      });
      
    });
  setTimeout(() => {
    if(loginmails.indexOf(email) && loginpwd.indexOf(pass)>=-1){
    //if (email === 'sathya@sapient.com' && pass === 'password') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
