-- Drop existing service policies if they exist and recreate them
DROP POLICY IF EXISTS "Service can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Service can insert accounts" ON public.accounts;

-- Allow Supabase Auth service to insert rows during signup triggers
CREATE POLICY "Service can insert profiles"
ON public.profiles
FOR INSERT
TO supabase_auth_admin
WITH CHECK (true);

CREATE POLICY "Service can insert accounts"
ON public.accounts
FOR INSERT
TO supabase_auth_admin
WITH CHECK (true);