
var mouseEvent = "empty";

canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{


    color = document.getElementById("input_Color").value;
    width_of_the_line = document.getElementById("input_Width_of_the_line").value;
    radius= document.getElementById("input_radius").value;
    Clear_area= document.getElementById("Clear_area_button").value;
    mouseEvent = "mouseDown";
}

function Clear(){
 mouseEvent = "empty";

}

canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    function my_mousemove(e)
    {
     current_position_of_mouse_x = e.clientX - canvas.offsetleft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown") {
         console.log("Current position of x and y coordinates = ");
         console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_the_line;
         ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
         ctx.stroke();
     }
    }

