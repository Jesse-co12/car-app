canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
car_x = 10;
car_y = 10;
background_image = "racing.webp";
car_image = "car.jpg";
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadcar;
background_imgTag.src = car_image;

}
function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar(){
    ctx.drawImage(background_imgTag, car_x, car_y, canvas.width, canvas.height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up(); 
        console.log("up")
    }
    if(keyPressed == "40"){
        down(); 
        console.log("down");
    }
    if(keyPressed == "37"){
        left(); 
        console.log("left");
    }
    if(keyPressed == "39"){
        right(); 
        console.log("right");
    }
}
    function up(){
        if(car_y >=0){
            car_y = car_y - 10;
            console.log("When up arrow is pressed, x="+car_x +"| y="+car_y);
            uploadbackground();
            uploadrover();
     }
    }
        function down(){
            if(car_y <=500){
                car_y = car_y + 10;
                console.log("When down arrow is pressed, x="+rover_x +"| y="+rover_y);
                uploadbackground();
                uploadcar();
            }
        }
            function left(){
                if(car_x >=0){
                    car_x = car_x - 10;
                    console.log("When left arrow is pressed, x="+rover_x +"| y="+rover_y);
                    uploadbackground();
                    uploadcar();
                }
            }
                function right(){
                    if(car_x <=700){
                        car_x = car_x + 10;
                        console.log("When right arrow is pressed, x="+rover_x +"| y="+rover_y);
                        uploadbackground();
                        uploadcar();
            }
                }
                
    

     