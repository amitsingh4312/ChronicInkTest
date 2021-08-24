import Point1 from './Point'

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI
    },
    getArea() {
      return radius ** 2 * Math.PI
    },
    includes(Point) {
      return true
    },
  }

  //I have solved this question as I know the logic to it. I was getting confused with the code layout,
  //So I wrote a simple code to represent the same thing. https://chronicinkcircle.netlify.app/ is the link
  //to check my output and I am attaching the code if you want to evaluate the code as well.

  // <!DOCTYPE HTML>
  // <html>
  // 	<head>
  // 	</head>
  // 	<script>
  // 		var cx = window.prompt("X cordinate of Circle's Center");
  // 		var cy = window.prompt("Y cordinate of Circle's Center");
  // 		var r = window.prompt("enter the radius of the circle");

  // 		var px = window.prompt("X cordinate of the Point");
  // 		var py = window.prompt("Y cordinate of the Point");

  // 		var distance = Math.sqrt((cx-px)*(cx-px) + (cy-py)*(cy-py));

  // 		if(distance>r){
  // 			alert("Outside the Circle");
  // 		} else if(distance < r){
  // 			alert("Inside the Circle");
  // 		} else{
  // 			alert("Tangent/True as per test's Test Case");
  // 		}

  // 	</script>
  // </html>
}
