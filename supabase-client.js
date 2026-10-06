import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/+esm";

const supabaseUrl = "https://tzhhsvwebdaqnlegrbxw.supabase.co";
const supabasePublishableKey = "sb_publishable_9rclsj5WmMLZo3ZgpSYNBw_OH4fy-Cs";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const productionUrl = "https://yslin365-wq.github.io/tainan-trip/";
