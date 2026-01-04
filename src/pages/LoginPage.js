import { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Lock as LockIcon } from '@mui/icons-material';

function LoginPage() {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://pikmi-landing-page-backend-production.up.railway.app/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Failed to connect to server. Make sure the backend is running.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card
          elevation={8}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              py: 4,
              textAlign: 'center',
            }}
          >
            <LockIcon sx={{ fontSize: 48, color: 'white', mb: 1 }} />
            <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 700 }}>
              Pikmi Admin
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mt: 1 }}>
              Sign in to your dashboard
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                margin="normal"
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                margin="normal"
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  mb: 2,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
              Default: admin 
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default LoginPage;
