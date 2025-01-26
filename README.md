# CRUDify

CRUDify is a React Native application designed to demonstrate CRUD operations (Create, Read, Update, Delete) using a REST API. With a simple and user-friendly interface, CRUDify makes interacting with API endpoints seamless.

## Features

- **Fetch Data**: Retrieve and display data from the API using `GET` requests.
- **Add Data**: Add new records to the API using `POST` requests.
- **Update Data**: Modify existing records with `PUT` and `PATCH` requests.
- **Delete Data**: Remove specific records using `DELETE` requests.

## Prerequisites

To run CRUDify, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- React Native CLI or Expo CLI
- A backend server exposing these REST API endpoints:
  - `GET /profile`
  - `POST /profile`
  - `PUT /profile/:id`
  - `PATCH /profile/:id`
  - `DELETE /profile/:id`

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/CRUDify.git
   cd CRUDify
