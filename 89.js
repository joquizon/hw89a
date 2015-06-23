
var usernames = ["chico","dude",];

function push(){var b = document.getElementById("namepush");
    					usernames.push(document.getElementById("namepush").value)};

function login(){var x = document.getElementById("namelog").value;
    				  for (var i = 0; i < usernames.length; i++)
    				  console.log(Boolean(x === usernames[i] ));

    				  for (var i = 0; i < usernames.length; i++)
					  if (usernames[i] === x){alert("you are in");
											  window.location = "incomplete.html"};
					
				};



// function myFunction(){
// 	var x = document.getElementById("myText").value;
//     var y = document.getElementById("box").value;

// 	if (x == y) 
// 		{alert("presto")}
// 	else 
// 		{alert("nahdude")}
// 		};

function punchit(){
	var t = document.getElementById("myText2").value;
	var y = "<!DOCTYPE html><html><head><script type='text/javascript' 'src='89.js'></script><link rel='stylesheet' href='89.css'><script>"
	document.write(y + t)

};


