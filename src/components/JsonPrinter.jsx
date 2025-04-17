import React from 'react';

const JsonPrinter = ({ data }) => {
    const excludedKeys = ["id", "seriesId", "images", "short", "description"];
  
    return (
      <div className="json-printer">
        {Object.entries(data)
          .filter(([key, value]) => value !== null && !excludedKeys.includes(key))
          .map(([key, value]) => (
            <div key={key} className="json-item">
              <strong>{key.toUpperCase()}:</strong> {key === "rrp" ? `$${value}.00` : value.toString()}
            </div>
          ))}
      </div>
    );
  };

export default JsonPrinter;
