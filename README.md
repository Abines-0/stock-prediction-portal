Stock Market Prediction Portal

A full-stack web application that allows users to register, log in, and predict stock prices using a deep learning model (LSTM) trained on historical financial data. Built with React, Django REST Framework, and TensorFlow.

Demo

[Watch demo video](Internal storage/Movies/youcut/stock predicport.mp4)

Features

Authentication

User registration and login (JWT-based)
Protected API endpoints


Stock Price Prediction

Input stock ticker (e.g., AAPL)
Fetches 10 years of historical data via yfinance
Generates price predictions with a pre-trained LSTM model


Visualizations

Closing price plot
100 & 200-day moving averages
Predicted vs actual price comparison
Evaluation metrics: MSE, RMSE, R²


Machine Learning

LSTM-based model built with TensorFlow/Keras
Scaled and split data using MinMaxScaler
Evaluated performance with scikit-learn

Tech Stack

Frontend

React + Bootstrap
Axios (for API communication)

Backend

Django
Django REST Framework
JWT Auth (djangorestframework-simplejwt)
django-cors-headers


ML / Data

TensorFlow / Keras
pandas / numpy / matplotlib
scikit-learn
yfinance (data source)

How It Works

1. Frontend

Input a stock ticker and trigger /predict/ API
Display generated charts and metrics

2. Backend

Validate ticker and fetch data from yfinance
Preprocess and scale the data
Load LSTM model from .keras file
Make predictions and plot results
Return paths to generated plots and evaluation scores

Evaluation Metrics

MSE (Mean Squared Error)
RMSE (Root Mean Squared Error)
R² Score (Goodness of fit)
