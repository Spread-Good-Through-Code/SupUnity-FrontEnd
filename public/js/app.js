let auth0 = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {   const response = await fetchAuthConfig();   const config = await response.json();    auth0 = await createAuth0Client({     domain: config.domain,     client_id: config.clientId   }); }; 


  window.onload = async () => {   await configureClient(); 
  updateUI(); 
  
  const isAuthenticated = await auth0.isAuthenticated(); 
  
  if(isAuthenticated) { 
  
  
  //show the gated content 
  
  return; 
  }
  
  
  //NEW - check for the code and state paramaters 
  
  const query = window.location.search; 
  if(query.includes("code=") && query.includes("state=")) {
     
     
     //Process the login state 
     
     await auth0.handleRedirectCallback(); 
     
     updateUI(); 
     
     //Use replaceState to redirect the user away and remove the querystring paramaters 
     
     window.history.replaceState({} , document.title, "/"); 
     
      
    }
  
  };
  
  const updateUI = async () => { 
  const isAuthenticated = await auth0.isAuthenticated(); 
  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated; 
  };
  
  const login = async() => { 
  await auth0.loginWithRedirect({ 
    redirect_uri: window.location.orgin }); }; 