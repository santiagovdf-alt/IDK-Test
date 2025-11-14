// Test script to verify form submission to Supabase
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yrowavgjlucjmutqcwab.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwdmp2bWR1ZnJjZWdkbXlhc3VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjExNjYsImV4cCI6MjA3NzkzNzE2Nn0.qMpDxqxArB76FjUwwNDmkZBrozzdKkVGLsuQltWDvMo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testFormSubmission() {
  console.log('🧪 Testing form submission to Supabase...\n');

  // Test data matching form structure
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    city: 'London',
    project_type: 'Residential',
    services_interested: `Services: Interior Design, 3D Visualization
Project Type: Residential
Space Size: 100-200 sqm
Budget: £15-30k
Timeline: 1-3 months
Message: This is a test submission from the form`
  };

  console.log('📋 Test Data:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('\n📤 Submitting to Supabase...');

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Error submitting data:', error);
      console.error('\nError details:', JSON.stringify(error, null, 2));
      process.exit(1);
    }

    console.log('✅ Success! Data inserted into Supabase');
    console.log('\n📊 Inserted Record:');
    console.log(JSON.stringify(data, null, 2));

    // Now verify by fetching the latest records
    console.log('\n🔍 Verifying by fetching latest records...');
    const { data: allLeads, error: fetchError } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    if (fetchError) {
      console.error('❌ Error fetching data:', fetchError);
    } else {
      console.log(`\n📈 Total records fetched: ${allLeads.length}`);
      console.log('\nLatest 5 leads:');
      allLeads.forEach((lead, index) => {
        console.log(`\n${index + 1}. ${lead.name} (${lead.email})`);
        console.log(`   City: ${lead.city}`);
        console.log(`   Project: ${lead.project_type}`);
        console.log(`   Created: ${lead.created_at}`);
      });
    }

    console.log('\n✅ Form submission test completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    console.error('\nError stack:', err.stack);
    process.exit(1);
  }
}

testFormSubmission();
