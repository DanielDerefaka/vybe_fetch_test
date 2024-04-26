"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataDisplay from './components/Display';

const TokenList = () => {
  const [tokenData, setTokenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await axios.get('https://api.vybenetwork.xyz/tokens', {
          headers: {
            accept: 'application/json',
            'X-API-KEY': '2pZP9P9fcMPSinV7KJYQJoGYnbvWUwY6RgRFApQoWUJ98q1v'
          }
        });
        setTokenData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching token data:', error);
        // setError("Error fetching token data. Please try again.");
        setLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {/* <h1>Token Names</h1> */}
          <div>

            <DataDisplay tokenData={tokenData}/>
           
        </div>
        </div>
      )}
    </div>
  );
};

export default TokenList;
