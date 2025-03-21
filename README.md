# cpts-489-hw2

# Install dependencies
npm install

# Run database migrations
npx sequelize-cli db:migrate

# Start the development server with automatic restarts
npx nodemon server.js

# Run the production server
node server.js

# Create a new Sequelize model (replace ModelName and attributes)
npx sequelize-cli model:generate --name ModelName --attributes field1:string,field2:integer

# Run database seeders (if applicable)
npx sequelize-cli db:seed:all

# Rollback last migration
npx sequelize-cli db:migrate:undo
