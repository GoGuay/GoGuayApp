import os
import cloudinary
import cloudinary.uploader

class Config:
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczOTAxNTQxNiwianRpIjoiOWY4N2ZhNTAtMmJlMC00ODVkLThjZWUtYzI1MmY1NTBlMjE0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzM5MDE1NDE2LCJjc3JmIjoiODYyZTMyNGItNTkxMC00YWZjLTk5YzItM2RlNWFhMjRlZWY5IiwiZXhwIjoxNzM5MDE5MDE2fQ.-ksq2iN0CRdR8hIC07W4jP6Vdn5ewXJvY18WDwbzzsU")
    JWT_ACCESS_TOKEN_EXPIRES = 3600
    JWT_TOKEN_LOCATION = ["headers"]
    JWT_HEADER_NAME = "Authorization"
    JWT_HEADER_TYPE = "Bearer"
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///prideride.db'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///backend/BBDD/prideride.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

