const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_REAL_KEY";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase client ready");
