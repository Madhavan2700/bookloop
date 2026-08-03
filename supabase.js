const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_KEY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase ready");
