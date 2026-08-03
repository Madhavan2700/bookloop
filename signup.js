// supabase.js

const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_REAL_PUBLISHABLE_KEY";

if (typeof window.supabase !== "undefined" && typeof window.supabase.createClient === "function") {

    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("Supabase Client initialized successfully.");

} else {

    console.error("Supabase CDN script is missing or not loaded.");

}
