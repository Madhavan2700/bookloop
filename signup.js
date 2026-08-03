document.getElementById("signupBtn").addEventListener("click", async function () {

    const username = document.getElementById("username").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const dob = document.getElementById("dob").value;

    if (!username || !regno || !dob) {
        alert("Please fill all fields");
        return;
    }

    // Check if Register Number already exists
    const { data: existingUser } = await supabase
        .from("profiles")
        .select("*")
        .eq("reg_no", regno);

    if (existingUser.length > 0) {
        alert("Register Number already exists!");
        return;
    }

    // Save new user
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
        alert("Signup Failed!");
    } else {
        alert("Account Created Successfully!");
        window.location.href = "login.html";
    }

});