#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download hero image
curl -o public/images/hero-image.jpg https://images.unsplash.com/photo-1581017270496-5bcc47cf9edd 

# Download work sample images
curl -o public/images/work1.jpg https://images.unsplash.com/photo-1583248369069-9d91f1640fe6
curl -o public/images/work2.jpg https://images.unsplash.com/photo-1577138043155-7934dd897541
curl -o public/images/work3.jpg https://images.unsplash.com/photo-1581539250439-c96689b516dd
curl -o public/images/work4.jpg https://images.unsplash.com/photo-1541123437800-1bb1317badc2
curl -o public/images/work5.jpg https://images.unsplash.com/photo-1611323259213-82977957ae41
curl -o public/images/work6.jpg https://images.unsplash.com/photo-1560184616-da9446230a2e

echo "All images downloaded successfully!"
