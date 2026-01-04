import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme
} from '@mui/material';
import { GitHub, Email, People } from '@mui/icons-material';

function Footer() {
  const theme = useTheme();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        backgroundColor: theme.palette.mode === 'dark'
          ? theme.palette.background.paper
          : 'linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)',
        borderTop: `2px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>
              Pikmi
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Community ride-sharing platform where neighbors help neighbors.
              Share rides, earn Pikmi Coins, and build stronger communities.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'How It Works', 'Features', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace(' ', '-')}`)}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#screenshots"
                onClick={(e) => handleNavClick(e, '#screenshots')}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                Screenshots
              </Link>
              <Typography variant="body2" color="text.secondary">
                Privacy Policy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Terms of Service
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link
                href="https://github.com/AliMostafaDev/pikmi-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                <GitHub />
                GitHub
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                <Email fontSize="small" />
                <Typography variant="body2">support@pikmi.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                <People fontSize="small" />
                <Typography variant="body2">Built with ❤️ by Pikmi Team</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Pikmi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
