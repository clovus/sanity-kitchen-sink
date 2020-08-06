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
                  buildHookId: '5f2bf41ab57e070134f31791',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-unjwbmr9',
                  apiId: 'fb114358-b8da-441b-909f-912499ef8bef'
                },
                {
                  buildHookId: '5f2bf41a84ff410131b483ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x7ovgpuq',
                  apiId: 'b44629c8-9060-49c0-a892-c422a8861071'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/clovus/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x7ovgpuq.netlify.app', category: 'apps'}
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
