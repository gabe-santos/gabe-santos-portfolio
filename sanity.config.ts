import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'lo6he41g',
  dataset: 'production',
  title: 'Gabe Santos Portfolio',
  apiVersion: '2024-03-02',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
