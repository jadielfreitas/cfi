'use strict';

import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// User login function
export const login = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
        console.error('Login failed:', error.message);
        throw error;
    }
    return user;
};

// User signup function
export const signup = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.error('Signup failed:', error.message);
        throw error;
    }
    return user;
};

// Session management function
export const getSession = () => {
    return supabase.auth.session();
};

// Auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth event:', event, 'Session:', session);
});
