import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Container, Card, CardContent } from '@mui/material';

const Calculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (isNaN(num1) || isNaN(num2)) return;
    
    let res;
    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Calculator</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Value 1"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Value 2"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <div style={{ marginTop: '20px' }}>
            {['+', '-', '*', '/'].map((operator) => (
              <Button
                key={operator}
                onClick={() => calculate(operator)}
                variant="contained"
                style={{ marginRight: '10px' }}
              >
                {operator}
              </Button>
            ))}
          </div>
          {result !== null && (
            <Typography variant="h6" style={{ marginTop: '20px' }}>
              Result: {result}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Calculator;
