import { createClient } from "@supabase/supabase-js";
import { Database } from "@recipesapp/shared";

if (
  !process.env.REACT_APP_API_URL ||
  !process.env.REACT_APP_SUPABASE_ANON_KEY
) {
  throw new Error(
    "REACT_APP_API_URL and REACT_APP_SUPABASE_ANON_KEY must be defined"
  );
}

export const supabase = createClient<Database>(
  process.env.REACT_APP_API_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
