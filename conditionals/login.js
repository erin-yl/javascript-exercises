let login = prompt("Who's there?", "");

if (login === "Admin") {

  let pwd = prompt("Password?", "");

  if (pwd === "TheMaster") {
    alert( "Welcome!" )
  } else if (pwd === "" || pwd === null) {
    alert( "Canceled" );
  } else {
    alert( "Wrong password" );
  }

} else if (login === "" || login === null) {
  alert( "Canceled" );
} else {
  alert ( "I don't know you" );
}