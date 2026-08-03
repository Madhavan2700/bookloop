document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");


    if (!loginForm) {
        console.error("Login form not found");
        return;
    }


    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const regno = document.getElementById("regno").value.trim();
        const dobInput = document.getElementById("dob").value;

const parts = dobInput.split("-");

const dob = `${parts[2]}-${parts[1]}-${parts[0]}`;

        if (!regno || !dob) {

            alert("Please enter Register Number and Date of Birth");
            return;

        }


        if (!window.supabaseClient) {

            alert("Database connection error");
            console.log("Supabase client missing");
            return;

        }



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



        if (data && data.length > 0) {

            alert("Login Successful");

            window.location.href = "home.html";

        }

        else {

            alert("Invalid Register Number or Date of Birth");

        }


    });


});
