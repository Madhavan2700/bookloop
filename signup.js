document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.getElementById("signupForm");

    if (!signupForm) {
        console.error("Signup form not found");
        return;
    }


    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const username = document.getElementById("username").value.trim();
        const regno = document.getElementById("regno").value.trim();
        const dob = document.getElementById("dob").value;


        if (!username || !regno || !dob) {
            alert("Please fill all fields");
            return;
        }


        if (!window.supabaseClient) {
            alert("Database connection error");
            console.log("Supabase client missing");
            return;
        }


        // Check existing register number

        const { data: existingUser, error: checkError } =
            await window.supabaseClient
            .from("profiles")
            .select("reg_no")
            .eq("reg_no", regno);


        if (checkError) {

            console.log(checkError);
            alert("Database Error: " + checkError.message);
            return;

        }


        if (existingUser.length > 0) {

            alert("Register Number already exists");
            return;

        }


        // Create account

        const { error: insertError } =
            await window.supabaseClient
            .from("profiles")
            .insert([
                {
                    username: username,
                    reg_no: regno,
                    dob: dob
                }
            ]);


        if (insertError) {

            console.log(insertError);
            alert("Signup Failed: " + insertError.message);
            return;

        }


        alert("Account Created Successfully!");

        window.location.href = "login.html";


    });

});
