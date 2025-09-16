-- Ensure handle_new_user runs with elevated privileges and is attached to auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert profile using metadata if provided
  INSERT INTO public.profiles (user_id, email, full_name, barbershop_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data ->> 'full_name',
      NEW.raw_user_meta_data ->> 'name'
    ),
    NEW.raw_user_meta_data ->> 'barbershop_name'
  );

  -- Create an account record with default trial
  INSERT INTO public.accounts (user_id, subscription_status, current_plan)
  VALUES (
    NEW.id,
    'trial',
    'starter'
  );

  RETURN NEW;
END;
$$;

-- Recreate trigger to ensure it exists and points to the function above
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
