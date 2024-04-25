import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dhqnztxmteoptdxbvbbl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocW56dHhtdGVvcHRkeGJ2YmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzQ5OTcsImV4cCI6MjAyOTYxMDk5N30.wmlqFWzJzxbQYLH8Fcd4sy1zXwWZDe5uUkFRXGhBz3E";
export const supabase = createClient(supabaseUrl, supabaseKey);
