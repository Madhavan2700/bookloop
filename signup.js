// signup.js

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    if (!signupForm) {
        console.error("Error: Element with ID 'signupForm' not found.");
        return;
    }

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const regnoInput = document.getElementById("regno");
        const dobInput = document.getElementById("dob");

        if (!usernameInput || !regnoInput || !dobInput) {
            console.error("Error: One or more input elements (username, regno, dob) were not found in the DOM.");
            alert("Form configuration error. Please check HTML IDs.");
            return;
        }

        const username = usernameInput.value.trim();
        const regno = regnoInput.value.trim();
        const dob = dobInput.value;

        if (!username || !regno || !dob) {
            alert("Please fill all fields.");
            return;
        }

        if (typeof window.supabaseClient === "undefined") {
            console.error("Error: Supabase client is not initialized.");
            alert("Database connection error. Please try again.");
            return;
        }

        console.log("Checking if register number already exists:", regno);

        // Check if register number already exists
        const { data: existingUser, error: checkError } = await window.supabaseClient
            .from("profiles")
            .select("reg_no")
            .eq("reg_no", regno);

        if (checkError) {
            console.error("Database check error:", checkError);
            alert("Database Error: " + checkError.message);
            return;
        }

        if (existingUser && existingUser.length > 0) {
            console.warn("Register Number already exists:", regno);
            alert("Register Number already exists.");
            return;
        }

        console.log("Inserting new user record...");

        // Insert new user record
        const { data, error: insertError } = await window.supabaseClient
            .from("profiles")
            .insert([
                {
                    username: username,
                    reg_no: regno,
                    dob: dob
                }
            ]);

        if (insertError) {
            console.error("Insert error:", insertError);
            alert("Signup Failed: " + insertError.message);
        } else {
            console.log("Account created successfully for:", regno);
            alert("Account Created Successfully!");
            window.location.href = "login.html";
        }
    });
});
