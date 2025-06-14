# README.md for WebGIS App

# WebGIS Application

This project is a WebGIS application built using Python Flask for the backend and HTML with Leaflet.js for the frontend. It provides an interactive map interface for visualizing geospatial data.

## Project Structure

```
webgis-app
├── src
│   ├── static
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       └── map.js
│   ├── templates
│   │   ├── base.html
│   │   └── index.html
│   ├── app.py
│   └── config.py
├── requirements.txt
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd webgis-app
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python src/app.py
   ```

5. **Access the application:**
   Open your web browser and go to `http://127.0.0.1:5000`.

## Usage

- The application provides a map interface using Leaflet.js, allowing users to interact with geospatial data.
- Customize the `src/static/js/map.js` file to add layers and markers as needed.
- Modify the `src/templates/index.html` to change the homepage content.

## Database Setup

1. **Install PostgreSQL and PostGIS:**
   - Install PostgreSQL
   - Install PostGIS extension

2. **Create Database:**
   ```sql
   CREATE DATABASE webgis_db;
   \c webgis_db
   CREATE EXTENSION postgis;
   ```

3. **Configure Environment:**
   - Copy `.env.example` to `.env`
   - Update database credentials in `.env`

## License

This project is licensed under the MIT License. See the LICENSE file for details.