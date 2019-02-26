function get(htmlElement) {
    if (htmlElement.id == "Go") {
        
        var request = new XMLHttpRequest();
        var doc = null;

        request.open(
            "GET", 
            "https://jsonplaceholder.typicode.com/todos/", 
            true);
        request.send("null");
        
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                console.log("State: " + request.readyState + " Status: " + request.status);
                doc = JSON.parse(request.response);
                console.log("Response: " + request.response);
                document.getElementById("response").innerHTML = "";
                doc.forEach(element => {
                    document.getElementById("response").innerHTML += element.id + ": " + element.title + "<br>";
                });
                htmlElement.id = "NoGo";
            }
            else{
                if (request.status != 200) {
                    document.getElementById("response").innerHTML = "Connection cannot be established. Please try again later.";
                    console.log("State: " + request.readyState + " Status: " + request.status);
                    request.onreadystatechange = null;
                }           
            }
        }

    } else {
        if (confirm("Are you sure?")) {
            htmlElement.id = "Go";
            document.getElementById("response").innerHTML = "Response goes here";
        }
    }
}
var AboutUs = function (a) {
    console.log(a.id);
    if (a.id == "Clicked") {
        var request = new XMLHttpRequest();
        var doc = null;

        request.open(
            "GET",
            "https://jsonplaceholder.typicode.com/todos/", 
            true
        );
        request.send("null");

        request.onreadystatechange = function(){ 
            console.log("State: " + request.readyState + " Status: " + request.status);

            if(request.readyState == 4 && request.status == 200){
                doc = JSON.parse(request.response);
                console.log("Response: " + request.response);
                document.getElementsByTagName("main")[0].scrollIntoView();
                var ps = document.getElementsByTagName("p");
                for (let index = 0; index < ps.length; index++) {
                    ps[index].innerHTML = "";    
                }
                document.getElementsByTagName("main")[0].innerHTML = "<div class='pannel'><h2></h2><p></p></div>";
                a.id = "Unclicked";
                doc.forEach(element => {
                    document.getElementsByTagName("h2")[0].innerHTML = "Lorem ipsum dolor";
                    document.getElementsByTagName("p")[0].innerHTML += element.id + ": " + element.title + "<br>";
                });
            }
            else{
                if (request.status != 200) {
                    alert("Connection cannot be established. Please try again later.");
                    console.log("State: " + request.readyState + " Status: " + request.status);
                    request.onreadystatechange = null;
                }
            }
        }
    } else {
        a.id = "Clicked";
    }
}

