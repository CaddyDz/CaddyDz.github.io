var tomSmith = ["Tom Smith", "123 Main St", 120.50];

document.write("1st Index is ", tomSmith[0] + "<br>");

tomSmith[3] = "tomsmith@aol.com";

tomSmith.splice(2, 1, "Algeria", "Blida");
tomSmith.splice(4, 1);

document.write("Array: ", tomSmith.valueOf(), "<br>");
document.write("Array: ", tomSmith.join(", "), "<br>");
