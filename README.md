# News Feed Application

## Overview

This is a simple news feed application built with **Next.js** and **TypeScript** for the frontend and **Django REST Framework** for the backend. The application fetches articles from a REST API, displays them in a user-friendly format, and provides a summarized view of each article.

## Features

- Fetch articles from a Django REST API.
- Display article titles, categories, and summarized content.
- Responsive design using Tailwind CSS for styling.

## Technologies Used

- **Frontend**: Next.js, TypeScript, React, Tailwind CSS
- **Backend**: Django REST Framework
- **Database**: SQLite (or your preferred database)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Django (v3.2 or higher)
- Django REST Framework

### Clone the Repository

```bash
git clone https://github.com/Adrianm7777/personalized-news-aggregator.git
cd news-feed-app
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install django djangorestframework
   ```

4. Run the migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the Django server:

   ```bash
   python manage.py runserver
   ```

## Usage

- Once both the frontend and backend servers are running, you can access the news feed application in your web browser at `http://localhost:3000`.
- The application will fetch articles from the Django REST API and display them with a summary.

## API Endpoints

- **GET /api/article/**: Fetch all articles.

## Contribution

Contributions are welcome! If you want to add features or fix bugs, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and resources that helped in the development of this application.
