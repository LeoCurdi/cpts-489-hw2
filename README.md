# cpts-489-hw2

# Install dependencies
npm install

# Run database migrations
npx sequelize-cli db:migrate

# Start the development server with automatic restarts
npx nodemon server.js

# Run the production server
node server.js

# Create a new Sequelize model
npx sequelize-cli model:generate --name signature --attributes name:string,email:string,city:string,state:string

# Run database seeders (if applicable)
npx sequelize-cli db:seed:all

# Rollback last migration
npx sequelize-cli db:migrate:undo
