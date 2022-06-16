var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{

    fabric.new_image.fromURL("BirtthdayImage.jpg",function(Img){
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeigth(510);
    block_image_object.set({
        top:0,
        lext:0
    });
    canvas.add(block_image_object);
});    
    }
	


function playSound(){
    x.play();
}    
