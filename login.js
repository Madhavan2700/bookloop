console.log("Login JS loaded");

document.getElementById("loginForm").addEventListener("submit", async function(event){

    event.preventDefault();

    console.log("Login button clicked");

    const regno = document.getElementById("regno").value;
    const dob = document.getElementById("dob").value;


    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("reg_no", regno)
        .eq("dob", dob);


    if(error){
        alert("Database Error");
        console.log(error);
        return;
    }


    if(data.length > 0){

        alert("Login Successful");
        window.location.href="home.html";

    }
    else{

        alert("Invalid Register Number or Date of Birth");

    }

});
