import { useState, useEffect } from 'react';
import { getCurrencyByCountry, CURRENCIES, convertPrice } from '../utils/currencyUtils';

const useCurrency = () => {
  const [currency, setCurrency] = useState(CURRENCIES.USD); // Default to USD
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        setLoading(true);
        
        // Check if currency is already stored in localStorage
        const storedCurrency = localStorage.getItem('preferred-currency');
        const storedCountry = localStorage.getItem('user-country');
        
        if (storedCurrency && storedCountry) {
          try {
            const parsedCurrency = JSON.parse(storedCurrency);
            setCurrency(parsedCurrency);
            setUserCountry(storedCountry);
            setLoading(false);
            return;
          } catch (err) {
            // Invalid stored data, proceed with detection
            localStorage.removeItem('preferred-currency');
            localStorage.removeItem('user-country');
          }
        }

        // Try IP-based location detection first (faster)
        await detectByIP();
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const detectByIP = async () => {
      try {
        // Using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const detectedCurrency = getCurrencyByCountry(data.country_code);
          setCurrency(detectedCurrency);
          setUserCountry(data.country_code);
          
          // Store in localStorage for future visits
          localStorage.setItem('preferred-currency', JSON.stringify(detectedCurrency));
          localStorage.setItem('user-country', data.country_code);
        }
      } catch (err) {
        console.log('IP-based detection failed:', err);
        // Keep default USD currency
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('preferred-currency', JSON.stringify(newCurrency));
  };

  const formatPrice = (amount, baseCurrency = 'USD') => {
    const convertedAmount = convertPrice(amount, baseCurrency, currency.code);
    const { symbol } = currency;
    
    return `${symbol}${convertedAmount.toLocaleString('en-US', { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    })}`;
  };

  return {
    currency,
    loading,
    error,
    userCountry,
    changeCurrency,
    formatPrice,
    isPhilippines: currency?.code === 'PHP',
    isUSD: currency?.code === 'USD'
  };
};

export default useCurrency;
