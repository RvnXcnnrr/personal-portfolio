import React from 'react';
import useCurrency from '../../hooks/useCurrency';
import { CURRENCIES } from '../../utils/currencyUtils';
import './Price.css';

const Price = ({ 
  amount, 
  baseCurrency = 'USD',
  showCurrencySelector = false, 
  className = '',
  size = 'medium',
  showCountryFlag = true
}) => {
  const { currency, loading, changeCurrency, isPhilippines, formatPrice } = useCurrency();

  if (loading) {
    return <span className={`price-loading ${className}`}>Loading...</span>;
  }

  const displayPrice = formatPrice(amount, baseCurrency);

  return (
    <div className={`price-container ${size} ${className}`}>
      <span className={`price-amount ${size}`}>
        {displayPrice}
      </span>
      
      {showCountryFlag && isPhilippines && (
        <span className="country-flag" title="Philippine Peso">
          🇵🇭
        </span>
      )}
      
      {showCurrencySelector && (
        <div className="currency-selector">
          <select 
            value={currency.code} 
            onChange={(e) => changeCurrency(CURRENCIES[e.target.value])}
            className="currency-select"
            title="Change currency"
          >
            {Object.entries(CURRENCIES).map(([code, curr]) => (
              <option key={code} value={code}>
                {curr.symbol} {curr.code}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Price;
