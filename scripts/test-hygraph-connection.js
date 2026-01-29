const fs = require('fs');
const path = require('path');
const { GraphQLClient, gql } = require('graphql-request');

// 1. Load Environment Variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
console.log(`Reading env from: ${envPath}`);

if (!fs.existsSync(envPath)) {
  console.error('.env.local file not found!');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    // Remove quotes if present
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    envVars[key] = value;
  }
});

const endpoint = envVars.HYGRAPH_ENDPOINT;
const token = envVars.HYGRAPH_TOKEN;

console.log('--- Config Check ---');
console.log(`Endpoint: ${endpoint ? 'Found' : 'Missing'}`);
console.log(`Token: ${token ? 'Found' : 'Missing'}`);
if (token) console.log(`Token start: ${token.substring(0, 10)}...`);

if (!endpoint) {
  console.error('HYGRAPH_ENDPOINT is missing in .env.local');
  process.exit(1);
}

// 2. Test Connection
const client = new GraphQLClient(endpoint, {
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

const query = gql`
  query GetPosts {
    blogPosts(first: 1) {
      id
      title
    }
  }
`;

console.log('\nTesting connection...');

client.request(query)
  .then(data => {
    console.log('✅ Connection successful!');
    console.log('Data received:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('❌ Connection failed!');
    if (error.response) {
        console.error('Error details:', JSON.stringify(error.response, null, 2));
    } else {
        console.error(error.message);
    }
  });
