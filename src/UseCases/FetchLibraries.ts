export interface Libraries {
    name: string;
    github: string;
    package: string;
    doc: string;
}

export function fetchLibraries(): Libraries[] {
    return [
        {
            name: 'JS Api Client',
            github: 'https://github.com/CrystallizeAPI/js-api-client',
            package: '@crystallize/js-api-client',
            doc: 'https://crystallize.com/learn/open-source'
        },
        {
            name: 'ReactJS Components',
            github: 'https://github.com/CrystallizeAPI/reactjs-components',
            package: '@crystallize/reactjs-components',
            doc: 'https://crystallize.com/learn/open-source'
        },
        {
            name: 'ReactJS Hooks',
            github: 'https://github.com/CrystallizeAPI/reactjs-hooks',
            doc: 'https://crystallize.com/learn/open-source',
            package: '@crystallize/reactjs-hooks'
        },
        {
            name: 'Node Service API Router',
            github: 'https://github.com/CrystallizeAPI/node-service-api-router',
            doc: 'https://crystallize.com/learn/open-source',
            package: '@crystallize/node-service-api-router'
        },
        {
            name: 'Node Service API Request Handlers',
            github: 'https://github.com/CrystallizeAPI/node-service-api-request-handlers',
            doc: 'https://crystallize.com/learn/open-source',
            package: '@crystallize/node-service-api-request-handlers'
        }
    ];
}

