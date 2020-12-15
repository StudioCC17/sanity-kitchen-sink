export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8da5e35b64a0160415449',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v8veabai',
                  apiId: 'ffe3d0e2-401c-4ba4-97f6-b87f6b464884'
                },
                {
                  buildHookId: '5fd8da5e15d0bb01165d624d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a6ormcg6',
                  apiId: '488bcaa6-204f-422f-b860-567de8a98928'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StudioCC17/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a6ormcg6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
