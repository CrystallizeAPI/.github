import { CrystallizeClient } from '@crystallize/js-api-client';

export interface BlogPost {
    title: string;
    url: string;
    hero: string;
    intro: string;
}

export async function fetchBlogPosts(limit: number): Promise<BlogPost[]> {
    const caller = CrystallizeClient.catalogueApi;
    const response = await caller(
        `query ($language: String!, $path: String!, $limit: Int!) {
            catalogue(language: $language, path: $path) {
              name
              path
              subtree(last: $limit) {
                edges {
                  node {
                    ... on Document {
                      name
                      path
                      intro: component(id: "intro") {
                        content {
                          ... on RichTextContent {
                            html
                          }
                        }
                      }
                      hero: component(id: "hero") {
                        content {
                          ... on ImageContent {
                            firstImage {
                              url
                              variants {
                                url
                              }
                            }
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
            "path": "/blog",
            "limit": limit
        }
    );

    return response.catalogue.subtree.edges.map((child: any) => {
        const node = child.node;
        // const variants = node.stripe.content.firstImage.variants.filter((variant: any) => variant.height === 500);
        return {
            title: node.name,
            url: `https://crystallize.com/${node.path}`,
            // hero: variants[2]?.url || node.hero.content.firstImage.url
            hero: node.hero?.content?.firstImage.url,
            intro: node.intro?.content?.html,
        };
    });
}
