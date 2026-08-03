// supabase.js

const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EpTzM9oTx9IgXaGjNfvRVw_uw-BRLfv";

// Avoid name collision with window.supabase from CDN
if (typeof window.supabaseClient === "undefined") {
    if (typeof window.supabase !== "undefined" && typeof window.supabase.createClient === "function") {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
        console.log("Supabase Client initialized successfully.");
    } else {
        console.error("Supabase CDN script is missing or not loaded before supabase.js.");
    }
}
