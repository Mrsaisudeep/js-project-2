function showConversionFields() {
    const conversionType = document.getElementById('conversionType').value;
  
    // Hide all conversion forms
    document.getElementById('lengthConversion').style.display = 'none';
    document.getElementById('weightConversion').style.display = 'none';
    document.getElementById('temperatureConversion').style.display = 'none';
    document.getElementById('currencyConversion').style.display = 'none';
  
    // Show the selected conversion type form
    if (conversionType === 'length') {
      document.getElementById('lengthConversion').style.display = 'block';
    } else if (conversionType === 'weight') {
      document.getElementById('weightConversion').style.display = 'block';
    } else if (conversionType === 'temperature') {
      document.getElementById('temperatureConversion').style.display = 'block';
    } else if (conversionType === 'currency') {
      document.getElementById('currencyConversion').style.display = 'block';
    }
  }
  
  function convertLength() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const fromUnit = document.getElementById('fromLength').value;
    const toUnit = document.getElementById('toLength').value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    let result;
    if (fromUnit === 'meters' && toUnit === 'kilometers') {
      result = value / 1000;
    } else if (fromUnit === 'meters' && toUnit === 'miles') {
      result = value / 1609.344;
    } else {
      result = value; // Default: meters to meters
    }
  
    document.getElementById('lengthResult').textContent = `Converted Value: ${result} ${toUnit}`;
  }
  
  function convertWeight() {
    const value = parseFloat(document.getElementById('weightValue').value);
    const fromUnit = document.getElementById('fromWeight').value;
    const toUnit = document.getElementById('toWeight').value;
  
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }
  
    let result;
    if (fromUnit === 'kilograms' && toUnit === 'pounds') {
      result = value * 2.20462;
    } else if (fromUnit === 'kilograms' && toUnit === 'grams') {
      result = value * 1000;
    } else {
      result = value; // Default: kilograms to kilograms
    }
  
    document.getElementById('weightResult').textContent = `Converted Value: ${result} ${toUnit}`;
  }
  function convertTemperature() {
    const value = parseFloat(document.getElementById('tempValue').value);
    const fromUnit = document.getElementById('fromTemp').value;
    const toUnit = document.getElementById('toTemp').value;
  
    let result;
  
    if (isNaN(value)) {
      document.getElementById('tempResult').innerHTML = "Please enter a valid number.";
      return;
    }
  
    // Celsius to other units
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (value * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        result = value + 273.15;
      } else {
        result = value; // Celsius to Celsius
      }
    }
    // Fahrenheit to other units
    else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (value - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        result = ((value - 32) * 5/9) + 273.15;
      } else {
        result = value; // Fahrenheit to Fahrenheit
      }
    }
    // Kelvin to other units
    else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = value - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = ((value - 273.15) * 9/5) + 32;
      } else {
        result = value; // Kelvin to Kelvin
      }
    }
  
    
  
    document.getElementById('tempResult').innerHTML = `${value} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
  }
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyValue').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    // Example exchange rates (Replace with live API calls for real exchange rates)
    const rates = {
      "USD": { "EUR": 0.94, "INR": 83.50 },
      "EUR": { "USD": 1.06, "INR": 89.00 },
      "INR": { "USD": 0.012, "EUR": 0.011 }
    };
    
    // Validate the amount entered
    if (isNaN(amount)) {
      document.getElementById('currencyResult').innerHTML = "Please enter a valid amount.";
      return;
    }
    
    // If from and to currency are the same
    if (fromCurrency === toCurrency) {
      document.getElementById('currencyResult').innerHTML = `Amount is the same: ${amount.toFixed(2)} ${fromCurrency}`;
      return;
    }
    
    // Check if rates are available for the selected currencies
    if (!rates[fromCurrency] || !rates[fromCurrency][toCurrency]) {
      document.getElementById('currencyResult').innerHTML = "Exchange rate not available for selected currencies.";
      return;
    }
    
    // Perform the conversion
    const result = amount * rates[fromCurrency][toCurrency];
    
    // Format the result with two decimal places and comma for thousands
    const formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // Display the result
    document.getElementById('currencyResult').innerHTML = `${amount.toFixed(2)} ${fromCurrency} is equal to ${formattedResult} ${toCurrency}`;

  }
  
 a = document.getElementsByClassName("result").innerHTML;
 a.style.color = "whitesmoke";
