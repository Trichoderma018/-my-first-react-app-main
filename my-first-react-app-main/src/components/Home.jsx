import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Container, Box } from '@mui/material';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: 'Bienvenido a la Aplicación',
        description: 'Esta es una aplicación de ejemplo que incluye una barra lateral elegante, un convertidor de divisas y una calculadora.'
      });
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="200px">
              <img src="/loading.gif" alt="Loading" width="100%" height="100%" />
            </Box>
          ) : (
            <>
              <Typography variant="h5" align="center">{data.title}</Typography>
              <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
                {data.description}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
