const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EpTzM9oTx9IgXaGjNfvRVw_uw-BRLfv";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connected");
