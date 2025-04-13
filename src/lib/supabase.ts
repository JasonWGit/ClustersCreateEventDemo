import { createClient } from '@supabase/supabase-js';
import { AppState } from 'react-native';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SUPABASE_URL = 'https://ckuoebtqlfviemhljzjq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrdW9lYnRxbGZ2aWVtaGxqempxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NTE3NzAsImV4cCI6MjA2MDAyNzc3MH0.L3ySF2LYUcOVdcpCUyM4ngFN7uFRWND1lR-51ebKkZ4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })