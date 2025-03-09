import { createClient } from '@supabase/supabase-js'

const URL = 'https://avjtdnpbqicpmgozwunr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2anRkbnBicWljcG1nb3p3dW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NzQyOTMsImV4cCI6MjA0NjI1MDI5M30.Lg3T8ObkV6rCTo99xbRGan_rpjSSMDE0S0vEfiEWblw';


export const supabase = createClient(URL, API_KEY);