const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_EpTzM9oTx9IgXaGjNfvRVw_uw-BRLfv";


if (window.supabase && window.supabase.createClient) {

    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("Supabase connected");

} else {

    console.error("Supabase CDN not loaded");

}console.log(window.supabaseClient);
