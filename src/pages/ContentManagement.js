import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Alert,
  Box,
  Chip,
  CircularProgress,
  useTheme,
  alpha
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
  Image as ImageIcon
} from '@mui/icons-material';

const API_BASE = 'http://localhost:5000/api';

function ContentManagement() {
  const theme = useTheme();
  const [content, setContent] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingContent, setEditingContent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageForm, setImageForm] = useState({ 
    section_key: 'hero_image', 
    alt_text: '', 
    files: [] 
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [contentRes, imagesRes] = await Promise.all([
        fetch(`${API_BASE}/admin/content`, { credentials: 'include' }),
        fetch(`${API_BASE}/admin/images`, { credentials: 'include' })
      ]);

      if (contentRes.ok) {
        const contentData = await contentRes.json();
        setContent(contentData.data || []);
      }

      if (imagesRes.ok) {
        const imagesData = await imagesRes.json();
        setImages(imagesData.data || []);
      }
    } catch (err) {
      setError('Failed to load data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingContent({ ...item });
    setShowEditModal(true);
  };

  const handleSaveContent = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/content/${editingContent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: editingContent.content })
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Content updated successfully!');
        setShowEditModal(false);
        fetchData();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message || 'Failed to update content');
      }
    } catch (err) {
      setError('Failed to update content');
      console.error('Error updating content:', err);
    }
  };

  const onDrop = (acceptedFiles) => {
    setImageForm({ ...imageForm, files: acceptedFiles });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: imageForm.section_key === 'screenshot'
  });

  const handleImageUpload = async () => {
    if (imageForm.files.length === 0) {
      setError('Please select at least one image');
      return;
    }

    try {
      setUploading(true);
      setError('');
      const formData = new FormData();
      
      if (imageForm.section_key === 'screenshot' && imageForm.files.length > 1) {
        // Multiple files for screenshots
        imageForm.files.forEach((file) => {
          formData.append('images', file);
        });
      } else {
        // Single file for hero_image or solution_image
        formData.append('image', imageForm.files[0]);
      }
      
      formData.append('section_key', imageForm.section_key);
      formData.append('alt_text', imageForm.alt_text);

      const response = await fetch(`${API_BASE}/admin/images/upload`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(`${data.data.length || 1} image(s) uploaded successfully!`);
        setShowImageModal(false);
        setImageForm({ section_key: 'hero_image', alt_text: '', files: [] });
        fetchData();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message || 'Failed to upload image');
      }
    } catch (err) {
      setError('Failed to upload image');
      console.error('Error uploading image:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`${API_BASE}/admin/images/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Image deleted successfully!');
        fetchData();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.message || 'Failed to delete image');
      }
    } catch (err) {
      setError('Failed to delete image');
      console.error('Error deleting image:', err);
    }
  };

  const getImagesBySection = (sectionKey) => {
    return images.filter(img => img.section_key === sectionKey);
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
            Content Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            onClick={() => setShowImageModal(true)}
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
            Upload Images
          </Button>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Manage your landing page content and images
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

      <Grid container spacing={3}>
        {/* Content Table */}
        <Grid item xs={12} md={8}>
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
                Landing Page Content
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {content.length} content sections
              </Typography>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Section Key</strong></TableCell>
                    <TableCell><strong>Content</strong></TableCell>
                    <TableCell align="right"><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {content.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>
                        <Chip label={item.section_key} size="small" color="primary" variant="outlined" />
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 400,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                          title={item.content}
                        >
                          {item.content}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => handleEdit(item)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Images Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Uploaded Images
            </Typography>
            
            {/* Hero Image */}
            <Box mb={3}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                Hero Image
              </Typography>
              {getImagesBySection('hero_image').map((img) => (
                <Card key={img.id} elevation={2} sx={{ mb: 1.5, borderRadius: 2, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={`http://localhost:5000${img.image_url}`}
                    alt={img.alt_text}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box display="flex" justifyContent="space-between" alignItems="center" p={1.5}>
                    <Typography variant="caption" color="text.secondary" sx={{ flex: 1 }}>
                      {img.alt_text || 'No description'}
                    </Typography>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteImage(img.id)}
                      sx={{
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.error.main, 0.1),
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Card>
              ))}
            </Box>

            {/* Solution Image */}
            <Box mb={3}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                Solution Image
              </Typography>
              {getImagesBySection('solution_image').map((img) => (
                <Card key={img.id} elevation={2} sx={{ mb: 1.5, borderRadius: 2, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={`http://localhost:5000${img.image_url}`}
                    alt={img.alt_text}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box display="flex" justifyContent="space-between" alignItems="center" p={1.5}>
                    <Typography variant="caption" color="text.secondary" sx={{ flex: 1 }}>
                      {img.alt_text || 'No description'}
                    </Typography>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDeleteImage(img.id)}
                      sx={{
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.error.main, 0.1),
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Card>
              ))}
            </Box>

            {/* Screenshots */}
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                Screenshots ({getImagesBySection('screenshot').length})
              </Typography>
              <Grid container spacing={1.5}>
                {getImagesBySection('screenshot').map((img) => (
                  <Grid item xs={6} key={img.id}>
                    <Card elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={`http://localhost:5000${img.image_url}`}
                        alt={img.alt_text}
                        sx={{ objectFit: 'cover' }}
                      />
                      <Box display="flex" justifyContent="center" p={0.5}>
                        <IconButton
                          color="error"
                          size="small"
                          onClick={() => handleDeleteImage(img.id)}
                          sx={{
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.error.main, 0.1),
                            },
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Edit Content Dialog */}
      <Dialog open={showEditModal} onClose={() => setShowEditModal(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit Content</DialogTitle>
        <DialogContent>
          <TextField
            label="Section Key"
            value={editingContent?.section_key || ''}
            disabled
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            value={editingContent?.content || ''}
            onChange={(e) => setEditingContent({ ...editingContent, content: e.target.value })}
            fullWidth
            multiline
            rows={6}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button onClick={handleSaveContent} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Upload Image Dialog */}
      <Dialog open={showImageModal} onClose={() => setShowImageModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Upload Image(s)</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Image Type</InputLabel>
            <Select
              value={imageForm.section_key}
              label="Image Type"
              onChange={(e) => setImageForm({ ...imageForm, section_key: e.target.value, files: [] })}
            >
              <MenuItem value="hero_image">Hero Image</MenuItem>
              <MenuItem value="solution_image">Solution Image</MenuItem>
              <MenuItem value="screenshot">Screenshots (Multiple)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Alt Text / Description"
            value={imageForm.alt_text}
            onChange={(e) => setImageForm({ ...imageForm, alt_text: e.target.value })}
            fullWidth
            margin="normal"
            placeholder="Image description"
          />

          <Box
            {...getRootProps()}
            sx={{
              border: '2px dashed',
              borderColor: isDragActive ? 'primary.main' : 'grey.300',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              bgcolor: isDragActive ? 'action.hover' : 'background.paper',
              mt: 2,
              transition: 'all 0.2s'
            }}
          >
            <input {...getInputProps()} />
            <ImageIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              {isDragActive
                ? 'Drop the image(s) here'
                : imageForm.section_key === 'screenshot'
                ? 'Drag & drop multiple images here, or click to select'
                : 'Drag & drop an image here, or click to select'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {imageForm.section_key === 'screenshot'
                ? 'You can select multiple images for screenshots'
                : 'Single image only'}
            </Typography>
            {imageForm.files.length > 0 && (
              <Box mt={2}>
                <Typography variant="body2" color="primary">
                  {imageForm.files.length} file(s) selected
                </Typography>
                {imageForm.files.map((file, idx) => (
                  <Chip
                    key={idx}
                    label={file.name}
                    size="small"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setShowImageModal(false);
            setImageForm({ section_key: 'hero_image', alt_text: '', files: [] });
          }}>
            Cancel
          </Button>
          <Button
            onClick={handleImageUpload}
            variant="contained"
            disabled={uploading || imageForm.files.length === 0}
            startIcon={uploading ? <CircularProgress size={20} /> : <CloudUploadIcon />}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ContentManagement;
