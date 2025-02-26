# Clone the repository
git clone https://github.com/utl-shadab/cover-letter-builder
cd cover-letter-builder-pro

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Update .env file with your database and API keys

# Push Prisma schema to the database
npx prisma migrate dev --name init

# Run the development server
npm run dev