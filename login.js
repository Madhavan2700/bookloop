document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("Login form not found");
        return;
    }


    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const regno = document.getElementById("regno").value.trim();

        const dobInput = document.getElementById("dob").value.trim();


        if (!regno || !dobInput) {

            alert("Please enter Register Number and Date of Birth");
            return;

        }


        if (!window.supabaseClient) {

            alert("Database connection error");
            console.log("Supabase client missing");
            return;

        }


        // Convert DD-MM-YYYY to YYYY-MM-DD for Supabase date column

        const parts = dobInput.split("-");

        if (parts.length !== 3) {

            alert("Invalid Date Format");
            return;

        }


        const dob = `${parts[2]}-${parts[1]}-${parts[0]}`;


        console.log("Searching Reg No:", regno);
        console.log("Searching DOB:", dob);



        const { data, error } = await window.supabaseClient
            .from("profiles")
            .select("*")
            .eq("reg_no", regno)
            .eq("dob", dob);



        if (error) {

            console.log(error);
            alert("Database Error: " + error.message);
            return;

        }



        console.log("Database Result:", data);



        if (data && data.length > 0) {

    localStorage.setItem("student", JSON.stringify(data[0]));

    alert("Login Successful");

    window.location.href = "profile.html";

        }
        else {

            alert("Invalid Register Number or Date of Birth");

        }


    });

});
