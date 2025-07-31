export const CURRENCIES = {
  PHP: { symbol: '₱', code: 'PHP', name: 'Philippine Peso' },
  USD: { symbol: '$', code: 'USD', name: 'US Dollar' },
  EUR: { symbol: '€', code: 'EUR', name: 'Euro' },
  GBP: { symbol: '£', code: 'GBP', name: 'British Pound' },
  CAD: { symbol: 'C$', code: 'CAD', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', code: 'AUD', name: 'Australian Dollar' },
  JPY: { symbol: '¥', code: 'JPY', name: 'Japanese Yen' },
  SGD: { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar' },
  MYR: { symbol: 'RM', code: 'MYR', name: 'Malaysian Ringgit' }
};

export const COUNTRY_CURRENCY_MAP = {
  'PH': 'PHP', // Philippines
  'US': 'USD', // United States
  'CA': 'USD', // Canada (often uses USD for international services)
  'GB': 'GBP', // United Kingdom
  'AU': 'AUD', // Australia
  'DE': 'EUR', // Germany
  'FR': 'EUR', // France
  'IT': 'EUR', // Italy
  'ES': 'EUR', // Spain
  'NL': 'EUR', // Netherlands
  'JP': 'JPY', // Japan
  'SG': 'SGD', // Singapore
  'MY': 'MYR', // Malaysia
  'IN': 'USD', // India (USD for international freelance)
  'TH': 'USD', // Thailand
  'VN': 'USD', // Vietnam
  'ID': 'USD'  // Indonesia
};

export const getCurrencyByCountry = (countryCode) => {
  const currencyCode = COUNTRY_CURRENCY_MAP[countryCode] || 'USD';
  return CURRENCIES[currencyCode];
};

export const formatPrice = (amount, currency) => {
  const { symbol, code } = currency;
  
  // Special formatting for different currencies
  if (code === 'JPY') {
    // Japanese Yen doesn't use decimals
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  }
  
  return `${symbol}${amount.toLocaleString('en-US', { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  })}`;
};

// Conversion rates (approximate - you might want to use a real-time API)
export const CONVERSION_RATES = {
  USD: {
    PHP: 56, // 1 USD = 56 PHP (approximate)
    EUR: 0.85,
    GBP: 0.73,
    CAD: 1.25,
    AUD: 1.35,
    JPY: 110,
    SGD: 1.35,
    MYR: 4.2
  }
};

export const convertPrice = (amount, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert from USD base
  if (fromCurrency === 'USD') {
    const rate = CONVERSION_RATES.USD[toCurrency];
    return rate ? Math.round(amount * rate) : amount;
  }
  
  // For other conversions, convert to USD first then to target
  // This is simplified - in production you'd use proper exchange rates
  return amount;
};
