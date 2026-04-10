

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import workshop from './schemas/workshop'

export default defineConfig({
  name: 'artful-studio',
  title: 'Artful Studio',
  projectId: '2etdioi1',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [workshop],
  },
})