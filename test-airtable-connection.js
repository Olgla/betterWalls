// Test script to verify Airtable connection with your actual credentials
import { readFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

// Load environment variables from .env.local
const envPath = join(cwd(), ".env.local");
let envVars = {};

try {
  const envContent = readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
} catch {
  console.log("❌ Could not read .env.local file");
  console.log("Make sure .env.local exists in your project root");
  throw new Error("Environment file not found");
}

const testAirtableConnection = async () => {
  const baseId = envVars.VITE_AIRTABLE_BASE_ID;
  const pat = envVars.VITE_PAT;
  const tableName = envVars.VITE_TABLE_NAME || "Contacts";

  console.log("🔍 Testing Airtable connection with your credentials...");
  console.log(`Base ID: ${baseId}`);
  console.log(`Table Name: ${tableName}`);
  console.log(`PAT: ${pat ? pat.substring(0, 8) + "..." : "Not found"}`);

  if (!baseId || !pat) {
    console.log("❌ Missing credentials in .env.local file");
    console.log("Required: VITE_AIRTABLE_BASE_ID, VITE_PAT");
    return;
  }

  try {
    // Test 1: Try to list existing records (GET request)
    console.log("\n📋 Testing GET request (list records)...");
    const listUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    const listOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json",
      },
    };

    const listResponse = await fetch(listUrl, listOptions);
    console.log(`GET Response Status: ${listResponse.status}`);

    let availableFields = [];
    if (listResponse.ok) {
      const listData = await listResponse.json();
      console.log("✅ GET request successful!");
      console.log(`Found ${listData.records?.length || 0} existing records`);

      if (listData.records && listData.records.length > 0) {
        console.log("📋 Available fields in the table:");
        const firstRecord = listData.records[0];
        availableFields = Object.keys(firstRecord.fields);
        console.log("Field names:", availableFields);
      }
    } else {
      const errorData = await listResponse.text();
      console.log("❌ GET request failed:");
      console.log(errorData);
    }

    // Test 2: Try to create a new record (POST request)
    console.log("\n📝 Testing POST request (create record)...");

    // Use the actual field names from the table
    const testData = {
      fields: {},
    };

    // Use your exact field names from the table
    testData.fields = {
      Email: "test@example.com",
      Name: "Test User from Script",
      Phone: "555-123-4567",
      Message: "This is a test message from the connection test script",
      Date: new Date().toISOString(),
      IP_Address: "Test Script",
      User_Agent: "Node.js Test Script",
    };

    const createUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    const createOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(testData),
    };

    const createResponse = await fetch(createUrl, createOptions);

    console.log(`POST Response Status: ${createResponse.status}`);

    if (createResponse.ok) {
      const createResult = await createResponse.json();
      console.log("✅ POST request successful!");
      console.log("Created record:", createResult);
      console.log("\n🎉 Airtable integration is working correctly!");
    } else {
      const errorData = await createResponse.text();
      console.log("❌ POST request failed:");
      console.log(errorData);

      // Provide specific error guidance
      if (createResponse.status === 403) {
        console.log("\n💡 403 Error Solutions:");
        console.log("1. Check your Personal Access Token permissions");
        console.log('2. Make sure the token has "data.records:write" scope');
        console.log("3. Verify your Base ID is correct");
        console.log("4. Ensure the table name exists in your base");
      } else if (createResponse.status === 404) {
        console.log("\n💡 404 Error Solutions:");
        console.log("1. Check your Base ID is correct");
        console.log("2. Make sure the table name exists");
        console.log(
          "3. Verify the table name matches exactly (case-sensitive)"
        );
      }
    }
  } catch (error) {
    console.log("❌ Network error:", error.message);
  }
};

testAirtableConnection();
