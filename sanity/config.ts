import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { apiVersion, dataset, projectId } from './env'

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Personal Info')
              .child(S.document().schemaType('personalInfo').documentId('personalInfo')),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('experience').title('Experience'),
            S.documentTypeListItem('certification').title('Certifications'),
            S.documentTypeListItem('speaking').title('Speaking'),
            S.divider(),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
})
