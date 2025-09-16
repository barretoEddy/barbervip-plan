-- Allow Supabase Auth service to insert rows during signup triggers
CREATE POLICY IF NOT EXISTS "Service can insert profiles"
ON public.profiles
FOR INSERT
TO supabase_auth_admin
WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Service can insert accounts"
ON public.accounts
FOR INSERT
TO supabase_auth_admin
WITH CHECK (true);

-- Optional: ensure select/update remain restricted to the user only (already created earlier)
-- No changes to existing user policies