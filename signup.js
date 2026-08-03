document.getElementById("signupForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const dob = document.getElementById("dob").value;

    if (!username || !regno || !dob) {
        alert("Please fill all fields.");
        return;
    }

    // Check whether register number already exists
    const { data: existingUser, error: checkError } = await supabase
        .from("profiles")
        .select("reg_no")
        .eq("reg_no", regno);

    if (checkError) {
        console.log(checkError);
        alert("Database Error");
        return;
    }

    if (existingUser.length > 0) {
        alert("Register Number already exists.");
        return;
    }

    // Insert new user
    const { error } = await supabase
        .from("profiles")
        .insert([
            {
                username: username,
                reg_no: regno,
                dob: dob
            }
        ]);

    if (error) {
        console.log(error);
        alert("Signup Failed");
    } else {
        alert("Account Created Successfully!");
        window.location.href = "login.html";
    }

});
