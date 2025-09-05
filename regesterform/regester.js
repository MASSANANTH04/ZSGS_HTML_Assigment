
    function showError(input, errorId, condition) {
      const error = document.getElementById(errorId);
      if (!condition) {
        error.style.display = "block";
        input.classList.add("error-border");
      } else {
        error.style.display = "none";
        input.classList.remove("error-border");
      }
    }

    // Personal Details
    document.getElementById("empId").addEventListener("input", function () {
      showError(this, "empIdError", /^[A-Za-z0-9]+$/.test(this.value));
    });
    document.getElementById("name").addEventListener("input", function () {
      showError(this, "nameError", /^[A-Za-z ]{3,}$/.test(this.value));
    });
    document.getElementById("age").addEventListener("input", function () {
      const age = parseInt(this.value, 10);
      showError(this, "ageError", age >= 18 && age <= 60);
    });
    document.getElementById("dob").addEventListener("change", function () {
      showError(this, "dobError", this.value !== "");
    });
    document.querySelectorAll("input[name='gender']").forEach(radio => {
      radio.addEventListener("change", function () {
        document.getElementById("genderError").style.display = "none";
      });
    });
    document.getElementById("email").addEventListener("input", function () {
      showError(this, "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value));
    });
    document.getElementById("phone").addEventListener("input", function () {
      showError(this, "phoneError", /^[0-9]{10}$/.test(this.value));
    });
    document.getElementById("aadhaar").addEventListener("input", function () {
      showError(this, "aadhaarError", /^[0-9]{12}$/.test(this.value));
    });
    document.getElementById("pan").addEventListener("input", function () {
      showError(this, "panError", /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(this.value));
    });
    document.getElementById("blood").addEventListener("input", function () {
      showError(this, "bloodError", /^(A|B|AB|O)[+-]$/.test(this.value.toUpperCase()));
    });
    document.getElementById("father").addEventListener("input", function () {
      showError(this, "fatherError", /^[A-Za-z ]{3,}$/.test(this.value));
    });
    document.getElementById("mother").addEventListener("input", function () {
      showError(this, "motherError", /^[A-Za-z ]{3,}$/.test(this.value));
    });

    // Address
    document.getElementById("street").addEventListener("input", function () {
      showError(this, "streetError", this.value.trim().length > 2);
    });
    document.getElementById("locality").addEventListener("input", function () {
      showError(this, "localityError", this.value.trim().length > 2);
    });
    document.getElementById("district").addEventListener("input", function () {
  showError(this, "districtError", /^[A-Za-z ]+$/.test(this.value));
});
    document.getElementById("pincode").addEventListener("input", function () {
      showError(this, "pincodeError", /^[0-9]{6}$/.test(this.value));
    });
    const sameAddress = document.getElementById("sameAddress");

  sameAddress.addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("per_street").value   = document.getElementById("street").value;
      document.getElementById("per_locality").value = document.getElementById("locality").value;
      document.getElementById("per_district").value = document.getElementById("district").value;
      document.getElementById("per_pincode").value  = document.getElementById("pincode").value;
      document.getElementById("per_country").value  = document.getElementById("country").value;
      document.getElementById("per_state").value    = document.getElementById("state").value;
    } else {
      document.getElementById("per_street").value   = "";
      document.getElementById("per_locality").value = "";
      document.getElementById("per_district").value = "";
      document.getElementById("per_pincode").value  = "";
      document.getElementById("per_country").value  = "";
      document.getElementById("per_state").value    = "";
    }
  });
  

    // Bank
    document.getElementById("bank").addEventListener("input", function () {
      showError(this, "bankError", /^[A-Za-z ]{3,}$/.test(this.value));
    });
    document.getElementById("account").addEventListener("input", function () {
      showError(this, "accountError", /^[0-9]{6,18}$/.test(this.value));
    });
    document.getElementById("ifsc").addEventListener("input", function () {
      showError(this, "ifscError", /^[A-Z]{4}0[0-9]{6}$/.test(this.value));
    });
    document.getElementById("passbook").addEventListener("change", function () {
      showError(this, "passbookError", this.files.length > 0);
    });

    // Documents
    document.getElementById("resume").addEventListener("change", function () {
      showError(this, "resumeError", this.files.length > 0);
    });
    document.getElementById("idproof").addEventListener("change", function () {
      showError(this, "idproofError", this.files.length > 0);
    });

    // Final Submit
    document.getElementById("fullForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let genderSelected = document.querySelector("input[name='gender']:checked");
      if (!genderSelected) {
        document.getElementById("genderError").style.display = "block";
        return;
      }
      alert("   All Fields Validated Successfully!");
    });
    
  