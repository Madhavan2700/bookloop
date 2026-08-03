console.log("Signup JS connected");

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async function () {

    const username = document.getElementById("username").value;
    const regno = document.getElementById("regno").value;
    const dob = document.getElementById("dob").value;


    if (username === "" || regno === "" || dob === "") {
        alert("Please fill all fields");
        return;
    }


    const { data: existingUser, error: checkError } = await supabase
        .from("profiles")
        .select("*")
        .eq("reg_no", regno);


    if (checkError) {
        console.log(checkError);
        alert("Database error");
        return;
    }


    if (existingUser.length > 0) {
        alert("Register Number already exists");
        return;
    }


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
        alert("Signup failed");
    }
    else {
        alert("Account created successfully");
        window.location.href = "login.html";
    }

});
