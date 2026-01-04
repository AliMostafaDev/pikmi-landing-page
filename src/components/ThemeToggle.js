import { IconButton, Tooltip, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from './ThemeProvider';

function ThemeToggle() {
  const theme = useTheme();
  const { toggleTheme } = useThemeMode();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;


