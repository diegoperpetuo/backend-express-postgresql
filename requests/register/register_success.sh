curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Diego Perpetuo",
    "email": "diego@example.com",
    "password": "senha123"
  }'