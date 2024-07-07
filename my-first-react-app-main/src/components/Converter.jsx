import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Card, CardContent, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import exchangeRates from '../data/exchangeRates.json';

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    setResult(convertedAmount);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Currency Converter</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{margin:'-10px 0 20px'}}>From</InputLabel>
            <Select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{margin:'-10px 0 20px'}}>To</InputLabel>
            <Select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={handleConvert} variant="contained" style={{ marginTop: '10px' }}>
            Convert
          </Button>
          {result !== null && (
            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Result: {result.toFixed(2)} {toCurrency}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Converter;
