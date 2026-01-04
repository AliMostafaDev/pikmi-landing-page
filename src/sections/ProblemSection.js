import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  useTheme
} from '@mui/material';
import { AttachMoney, DirectionsBus, People } from '@mui/icons-material';
import { fetchLandingContent, getContent } from '../utils/api';

function ProblemSection() {
  const theme = useTheme();
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await fetchLandingContent();
      setContent(contentData);
      setLoading(false);
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const problems = [
    {
      icon: <AttachMoney sx={{ fontSize: 48 }} />,
      color: 'error',
      titleKey: 'problem_1_title',
      descKey: 'problem_1_description',
    },
    {
      icon: <DirectionsBus sx={{ fontSize: 48 }} />,
      color: 'warning',
      titleKey: 'problem_2_title',
      descKey: 'problem_2_description',
    },
    {
      icon: <People sx={{ fontSize: 48 }} />,
      color: 'info',
      titleKey: 'problem_3_title',
      descKey: 'problem_3_description',
    },
  ];

  return (
    <Box
      id="problems"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
        >
          {getContent(content, 'problem_title', 'The Problems We Solve')}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {problems.map((problem, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: `${problem.color}.main`,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {problem.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {getContent(content, problem.titleKey, `Problem ${index + 1}`)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {getContent(content, problem.descKey, 'Problem description')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProblemSection;
