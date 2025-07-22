# Bhutan Mind Break - Premium Tourism Website

A comprehensive tourism website for Bhutan featuring modern React frontend, Express backend, PostgreSQL database, and Docker containerization. Built as "the best tourism agent website on earth" with premium features including live chat, advanced filtering, and authentic content.

## Features

### Core Functionality
- **Responsive Tourism Website** - Modern React frontend with Tailwind CSS
- **Tour Management** - Browse, filter, and book authentic Bhutan tours
- **Live Chat Support** - Intelligent chatbot with pre-programmed responses
- **Booking System** - Complete tour booking with form validation
- **Contact Management** - Inquiry forms and contact information
- **Blog & Gallery** - Travel content and photo galleries

### Premium Features
- **Advanced Tour Filtering** - Filter by price, duration, difficulty, season
- **Testimonial Carousel** - Auto-rotating customer reviews
- **Video Modal** - Immersive Bhutan travel videos
- **PostgreSQL Database** - Persistent data storage
- **Docker Containerization** - Easy deployment and scaling

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter Router
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Session-based with Passport.js
- **UI Components**: Radix UI, Shadcn/ui
- **Build Tools**: Vite, tsx
- **Containerization**: Docker & Docker Compose

## Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd bhutan-tourism
```

### 2. Start with Docker Compose
```bash
# Start PostgreSQL and the application
docker-compose up -d

# View logs
docker-compose logs -f
```

The application will be available at `http://localhost:5000`

### 3. Database Setup
The database is automatically created and seeded with authentic tour data when using Docker Compose.

## Manual Development Setup

### Prerequisites
- Node.js 20+
- PostgreSQL 15+

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/bhutan_tourism
NODE_ENV=development
PORT=5000
```

### 3. Database Setup
```bash
# Push schema to database
npm run db:push

# Seed with sample data
tsx server/seed.ts
```

### 4. Start Development Server
```bash
npm run dev
```

## Docker Commands

### Build and Deploy
```bash
# Build Docker image
docker build -t bhutan-tourism .

# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up --build
```

### Database Operations
```bash
# Access PostgreSQL container
docker-compose exec postgres psql -U postgres -d bhutan_tourism

# Backup database
docker-compose exec postgres pg_dump -U postgres bhutan_tourism > backup.sql

# Restore database
docker-compose exec -T postgres psql -U postgres bhutan_tourism < backup.sql
```

## Project Structure

```
bhutan-tourism/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
├── server/                # Express backend
│   ├── db.ts             # Database connection
│   ├── storage.ts        # Data access layer
│   ├── routes.ts         # API routes
│   └── seed.ts           # Database seeding
├── shared/               # Shared types and schemas
├── docker-compose.yml    # Docker services
├── Dockerfile           # Application container
└── drizzle.config.ts    # Database configuration
```

## API Endpoints

### Tours
- `GET /api/tours` - List all active tours
- `GET /api/tours/:id` - Get specific tour
- `POST /api/tours` - Create new tour (admin)

### Bookings
- `POST /api/bookings` - Create tour booking
- `GET /api/bookings` - List bookings (admin)

### Inquiries
- `POST /api/inquiries` - Submit inquiry
- `GET /api/inquiries` - List inquiries (admin)

### Content
- `GET /api/testimonials` - List testimonials
- `GET /api/blog` - List blog posts

## Database Schema

### Tours Table
- Tour information with pricing, duration, difficulty
- Includes/excludes arrays
- Category classification
- Group size and seasonal recommendations

### Bookings Table
- Customer booking details
- Tour selection and dates
- Contact information and special requests

### Testimonials Table
- Customer reviews and ratings
- Trip details and authenticity verification

## Environment Configuration

### Development
```env
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres123@localhost:5432/bhutan_tourism
PORT=5000
```

### Production (Docker)
```env
NODE_ENV=production
DATABASE_URL=postgresql://postgres:postgres123@postgres:5432/bhutan_tourism
PORT=5000
```

## Deployment

### Using Docker Compose (Recommended)
1. Ensure Docker and Docker Compose are installed
2. Clone the repository
3. Run `docker-compose up -d`
4. Access at `http://localhost:5000`

### Manual Deployment
1. Set up PostgreSQL database
2. Configure environment variables
3. Build the application: `npm run build`
4. Start production server: `npm start`

## Live Chat Features

The integrated live chat includes:
- Instant responses to common questions
- Quick reply buttons for frequent inquiries
- Information about tours, pricing, and travel tips
- Professional customer service experience

## Premium Tourism Features

### Advanced Tour Filtering
- Filter by category, duration, price range
- Difficulty level and group size options
- Seasonal recommendations
- Real-time results

### Authentic Content
- Genuine tour packages for Bhutan
- Real testimonials and reviews
- Professional travel photography
- Cultural insights and local expertise

## Support

For issues or questions:
1. Check the Docker logs: `docker-compose logs`
2. Verify database connection
3. Ensure all environment variables are set
4. Review the API documentation

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for authentic Bhutan travel experiences