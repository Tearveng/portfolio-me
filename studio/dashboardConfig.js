export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6266bf365d816d2b9eb3a07d',
                  title: 'Sanity Studio',
                  name: 'portfolio-me-studio',
                  apiId: '19ce6b92-a59e-4a2e-a811-666ced300d48'
                },
                {
                  buildHookId: '6266bf36ae12611d48f9079c',
                  title: 'Portfolio Website',
                  name: 'portfolio-me-web',
                  apiId: 'ed0a326d-f199-4a23-bba6-b822d8ab3aa9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tearveng/portfolio-me',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-me-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
