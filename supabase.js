const supabaseUrl = "https://jaosqglajbjchrlfgixc.supabase.co";

const supabaseKey = "sb_publishable_EpTzM9oTx9IgXaGjNfvRVw_uw-BRLfv";

const { createClient } = supabase;

const client = createClient(supabaseUrl, supabaseKey);

window.supabase = client;
