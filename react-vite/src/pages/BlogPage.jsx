import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from '../components/iconify/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import POSTS from '../_mock/blog';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const BlogPage = () => (
  <Container>
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
        New Post
      </Button>
    </Stack>

    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
      <BlogPostsSearch posts={POSTS} />
      <BlogPostsSort options={SORT_OPTIONS} />
    </Stack>

    <Grid container spacing={3}>
      {POSTS.map((post, index) => (
        <BlogPostCard key={post.id} post={post} index={index} />
      ))}
    </Grid>
  </Container>
);

export default BlogPage;
