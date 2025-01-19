$(document).ready(function () {
  $(".navbar").on("click", ".limenu", function () {
    $(this).parent().find(".dropdown").slideToggle(500);
    $(this).find(".fa-angle-right").toggleClass("rotate");
    $(".limenu").removeClass("active");
    $(this).addClass("active");
  });

  $("#activate").show();
  $("#fastacc").hide();
  $("#changeaccname").hide();
  $("#Qr").hide();
  $("#artcard").hide();
  $("#plastic").hide();
  $("#movieticket").hide();
  $("#transfermoney").hide();
  $("#receivemoney").hide();
  $("#chatfunction").hide();
  $("#actacc").click(function () {
    $("#activate").fadeIn();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#fastac").click(function () {
    $("#activate").hide();
    $("#fastacc").fadeIn();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#changename").click(function () {
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").fadeIn();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#QR").click(function () {
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").fadeIn();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#artificCard").click(function () {
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").fadeIn();
    $("#plastic").hide();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#plasticcd").click(function () {
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").fadeIn();
    $("#movieticket").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#buyticket").click(function () {
    $("#movieticket").fadeIn();
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#transfermoney").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#transfer").click(function () {
    $("#transfermoney").fadeIn();
    $("#movieticket").hide();
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#receivemoney").hide();
    $("#chatfunction").hide();
  });
  $("#receive").click(function () {
    $("#receivemoney").fadeIn();
    $("#transfermoney").hide();
    $("#movieticket").hide();
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
    $("#chatfunction").hide();
  });
  $("#chat").click(function () {
    $("#chatfunction").fadeIn();
    $("#receivemoney").hide();
    $("#transfermoney").hide();
    $("#movieticket").hide();
    $("#activate").hide();
    $("#fastacc").hide();
    $("#changeaccname").hide();
    $("#Qr").hide();
    $("#artcard").hide();
    $("#plastic").hide();
  });
});
/**
 * YouTube Tutorial:
 * https://youtu.be/wG_5453Vq98
 */

console.clear();

// Select the circle element
const circleElement = document.querySelector(".circle");

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
};

// Start the animation loop
tick();
