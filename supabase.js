const SUPABASE_URL = "https://jaosqglajbjchrlfgixc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphb3NxZ2xhamJqY2hybGZnaXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3NDA2NTgsImV4cCI6MjEwMTMxNjY1OH0.TBOOLdFY-JdiIC-kUNJgZ6vMnx_dMV24WhswsOdWVM8";


if (window.supabase && window.supabase.createClient) {

    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("Supabase connected");

} else {

    console.error("Supabase CDN not loaded");

}console.log(window.supabaseClient);
