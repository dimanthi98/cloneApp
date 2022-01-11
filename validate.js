function validateForm() {
    var x = document.forms["form"]["stdName"].value;
    var y = document.forms["form"]["stdRegNum"].value;
    if (x == "") {
      alert("Student Name is should not be empty");
      return false;
    }
    if (y == "") {
        alert("Student Reg Number is should not be empty");
        return false;
      }
  }