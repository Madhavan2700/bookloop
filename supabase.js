const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase client ready");
