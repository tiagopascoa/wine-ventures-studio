import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {withDocumentI18nPlugin} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'wine-ventures-studio',

  projectId: 'bnltpysf',
  dataset: 'production',

  plugins: withDocumentI18nPlugin([deskTool(), visionTool()], {
    // .. your i18n config, example:
    languages: ['pt', 'en'],
  }),

  schema: {
    types: schemaTypes,
  },
})
