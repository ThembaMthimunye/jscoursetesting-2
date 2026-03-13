let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;




if (userRole==="admin"){
    accessLevel="full access granted"
}else if(userRole==="manager"){
    accessLevel="limited acess granted"
}else {
    accessLevel="No access granted"
}

console.log("access level", accessLevel)

if (isLoggedIn){
    if(userRole==="admin")
    {
        userMessage="welcome admin"
    }
    else if(userRole==="manager"){
        userMessage="Welcome manager"
    }else{
        userMessage="welcome guest"
    }
}else{
    userMessage="Please log in to acess system"
}
console.log(userMessage)


switch(userType){
    case "admin":
        userCategory="admin";
        break;
    case "manager":
        userCategory="manager";
        break;
    case "subscriber":
        userCategory="subscriber";
        break;
    case "Themba":
        userCategory="God";
        break;

    default:
        userCategory="unknown";
}

console.log(userCategory)

let isAuthenticatedStatus=isAuthenticated ? "Authenticated" : "not Authenticated"
console.log (isAuthenticatedStatus)