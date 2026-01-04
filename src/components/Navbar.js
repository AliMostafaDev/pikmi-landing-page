import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

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
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        backdropFilter: 'blur(10px)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            variant="h5"
            component="a"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            sx={{
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer',
              mr: 4,
            }}
          >
            Pikmi
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <ThemeToggle />
              <IconButton
                color="inherit"
                onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={() => setMobileMenuAnchor(null)}
                sx={{ mt: 1 }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <ThemeToggle />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
