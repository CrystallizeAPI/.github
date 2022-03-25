import { CrystallizeClient } from '@crystallize/js-api-client';

export interface JobOffer {
    title: string;
    url: string;
}

export async function fetchJobOffers(limit: number): Promise<JobOffer[]> {
    const caller = CrystallizeClient.catalogueApi;
    const response = await caller(
        `query ($language: String!, $path: String!, $limit: Int!) {
            catalogue(language: $language, path: $path) {
              name
              path
              subtree(last: $limit) {
                edges {
                  node {
                    ... on Folder {
                      name
                      path
                      title: component(id: "title") {
                        content {
                          ... on SingleLineContent {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          `,
        {
            "language": "en",
            "path": "/careers",
            "limit": limit
        }
    );

    return response.catalogue.subtree.edges.map((child: any) => {
        const node = child.node;
        return {
            title: node.title.content.text,
            url: `https://crystallize.com/${node.path}`
        };
    });
}
