import { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Box,
  IconButton,
  CircularProgress,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const API_BASE = 'https://pikmi-landing-page-backend-production.up.railway.app/api';

function AdminManagement() {
  const theme = useTheme();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '' });
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchAdmins();
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/me`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setCurrentUserId(data.user.id);
      }
    } catch (err) {
      console.error('Error fetching current user:', err);
    }
  };

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/admin/admins`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setAdmins(data.data || []);
      } else {
        setError('Failed to load admins');
      }
    } catch (err) {
      setError('Failed to load admins');
      console.error('Error fetching admins:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    if (!newAdmin.username || !newAdmin.password) {
      setError('Username and password are required');
      return;
    }

    if (newAdmin.username.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }

    if (newAdmin.password.length < 3) {
      setError('Password must be at least 3 characters');
      return;
    }

    try {
      setCreating(true);
      setError('');
      const response = await fetch(`${API_BASE}/admin/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(newAdmin)
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Admin created successfully!');
        setShowCreateModal(false);
        setNewAdmin({ username: '', password: '' });
        fetchAdmins();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message || 'Failed to create admin');
      }
    } catch (err) {
      setError('Failed to create admin');
      console.error('Error creating admin:', err);
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (id === currentUserId) {
      setError('You cannot delete your own account');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this admin?')) return;

    try {
      const response = await fetch(`${API_BASE}/admin/admins/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Admin deleted successfully!');
        fetchAdmins();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message || 'Failed to delete admin');
      }
    } catch (err) {
      setError('Failed to delete admin');
      console.error('Error deleting admin:', err);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            Admin Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowCreateModal(true)}
            size="large"
            sx={{
              px: 3,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              '&:hover': {
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                  : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s',
            }}
          >
            Add Admin
          </Button>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Manage admin users and permissions
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" onClose={() => setError('')} sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" onClose={() => setSuccess('')} sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Box
          sx={{
            p: 3,
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary.main, 0.1)
              : alpha(theme.palette.primary.main, 0.05),
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            All Admins
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {admins.length} admin user(s)
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: theme.palette.mode === 'dark'
                    ? alpha(theme.palette.background.paper, 0.5)
                    : alpha(theme.palette.grey[50], 0.5),
                }}
              >
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Username</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  key={admin.id}
                  hover
                  sx={{
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.05)
                        : alpha(theme.palette.primary.main, 0.02),
                    },
                  }}
                >
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {admin.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <PersonIcon fontSize="small" color="action" />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {admin.username}
                      </Typography>
                      {admin.id === currentUserId && (
                        <Chip label="You" size="small" color="primary" sx={{ height: 24 }} />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(admin.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteAdmin(admin.id)}
                      disabled={admin.id === currentUserId}
                      title={admin.id === currentUserId ? 'Cannot delete your own account' : 'Delete admin'}
                      sx={{
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.error.main, 0.1),
                        },
                        '&.Mui-disabled': {
                          opacity: 0.3,
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Create Admin Dialog */}
      <Dialog open={showCreateModal} onClose={() => setShowCreateModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Admin</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
            fullWidth
            margin="normal"
            required
            helperText="Minimum 3 characters"
          />
          <TextField
            label="Password"
            type="password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            fullWidth
            margin="normal"
            required
            helperText="Minimum 3 characters (plain text for uni project)"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setShowCreateModal(false);
            setNewAdmin({ username: '', password: '' });
            setError('');
          }}>
            Cancel
          </Button>
          <Button
            onClick={handleCreateAdmin}
            variant="contained"
            disabled={creating || !newAdmin.username || !newAdmin.password}
            startIcon={creating ? <CircularProgress size={20} /> : <AddIcon />}
          >
            {creating ? 'Creating...' : 'Create Admin'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminManagement;

