console.log("🚀 signup.js successfully loaded.");

// Ensure DOM is fully loaded before binding events
document.addEventListener("DOMContentLoaded", function () {
    console.log("📄 DOM fully loaded and parsed.");

    const signupForm = document.getElementById("signupForm");

    if (!signupForm) {
        console.error("❌ Critical Error: 'signupForm' element not found in DOM!");
        return;
    }

    signupForm.addEventListener("submit", async function (event) {
        console.log("📥 Form submission triggered.");
        event.preventDefault(); // Stop default browser page submit/refresh

        // Verify Supabase instance presence
        if (typeof supabase === "undefined" || !supabase) {
            console.error("❌ Critical Error: Supabase client is not defined. Check supabase.js and URL/Key configuration.");
            alert("Database client error! Check developer console.");
            return;
        }

        const usernameInput = document.getElementById("username");
        const regnoInput = document.getElementById("regno");
        const dobInput = document.getElementById("dob");

        const username = usernameInput ? usernameInput.value.trim() : "";
        const regno = regnoInput ? regnoInput.value.trim() : "";
        const dob = dobInput ? dobInput.value : "";

        console.log("📋 Extracted Form Inputs:", { username, regno, dob });

        // Step 1: Validate empty fields
        if (!username || !regno || !dob) {
            console.warn("⚠️ Validation Failed: One or more fields are empty.");
            alert("Please fill all fields");
            return;
        }

        try {
            console.log(`🔎 Checking if register number '${regno}' already exists...`);

            // Step 2: Check whether reg_no already exists in the Supabase "profiles" table
            const { data: existingUser, error: checkError } = await supabase
                .from("profiles")
                .select("reg_no")
                .eq("reg_no", regno);

            if (checkError) {
                console.error("❌ Supabase Select Query Error:", checkError);
                alert(`Database Error: ${checkError.message}`);
                return;
            }

            console.log("🔍 Check query result:", existingUser);

            // Step 3: Check if register number exists
            if (existingUser && existingUser.length > 0) {
                console.warn(`⚠️ Register Number '${regno}' already exists in database.`);
                alert("Register Number already exists!");
                return;
            }

            console.log("➕ Inserting new user profile into Supabase...");

            // Step 4: Insert username, reg_no, dob
            const { data, error: insertError } = await supabase
                .from("profiles")
                .insert([
                    {
                        username: username,
                        reg_no: regno,
                        dob: dob
                    }
                ]);

            if (insertError) {
                console.error("❌ Supabase Insert Error:", insertError);
                alert(`Signup Failed: ${insertError.message}`);
            } else {
                console.log("✅ Signup successful! Insert response:", data);
                alert("Account Created Successfully!");

                // Step 5: Redirect to login.html
                console.log("🔄 Redirecting to login.html...");
                window.location.href = "login.html";
            }

        } catch (err) {
            console.error("💥 Unexpected JavaScript exception during execution:", err);
            alert("An unexpected error occurred. Check browser console logs.");
        }
    });
});
