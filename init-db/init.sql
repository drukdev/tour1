-- Initialize database with required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create database if it doesn't exist
SELECT 'CREATE DATABASE bhutan_tourism'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'bhutan_tourism')\gexec

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE bhutan_tourism TO postgres;