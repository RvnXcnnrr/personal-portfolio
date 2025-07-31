import React from 'react';
import { Globe } from 'lucide-react';
import useCurrency from '../../hooks/useCurrency';
import './CurrencyIndicator.css';

const CurrencyIndicator = ({ 
  showLabel = true, 
  showFlag = true,
  className = '',
  compact = false 
}) => {
  const { currency, loading, isPhilippines, userCountry } = useCurrency();

  if (loading) return null;

  const getCountryFlag = (countryCode) => {
    const flags = {
      'PH': '🇵🇭',
      'US': '🇺🇸',
      'CA': '🇨🇦',
      'GB': '🇬🇧',
      'AU': '🇦🇺',
      'DE': '🇩🇪',
      'FR': '🇫🇷',
      'JP': '🇯🇵',
      'SG': '🇸🇬',
      'MY': '🇲🇾'
    };
    return flags[countryCode] || '🌍';
  };

  return (
    <div className={`currency-indicator ${compact ? 'compact' : ''} ${className}`}>
      <Globe size={compact ? 14 : 16} className="globe-icon" />
      
      {showFlag && userCountry && (
        <span className="country-flag">{getCountryFlag(userCountry)}</span>
      )}
      
      {showLabel && (
        <span className="currency-text">
          {currency.code}
        </span>
      )}
      
      {isPhilippines && !compact && (
        <span className="location-note" title="Prices shown in Philippine Peso">
          Local pricing
        </span>
      )}
    </div>
  );
};

export default CurrencyIndicator;
