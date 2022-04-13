![Crystallize](https://github.com/CrystallizeAPI/.github/blob/main/images/header.jpeg?raw=true)

<p align="center">
    <a href="https://www.linkedin.com/company/crystallizeapi" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a>
    <a href="https://twitter.com/CrystallizeAPI" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=Twitter&logoColor=white"></a>
</p>

<table width="100%">
    <tr>
        <td width="50%" valign="top">
            <h2>📕 Blog Posts</h2>
           {{#mainBlogPosts}}
                <p><img src="{{{hero}}}" alt="{{{title}}}" width="100" align="left"></p>
                <h3><a href="{{{url}}}" target="_blank">{{title}}</a></h3>
                {{{intro}}}
            {{/mainBlogPosts}}
            <details>
                <summary>💡 More blog posts</summary><br />
                {{#secondaryBlogPosts}}
                    <p><img src="{{{hero}}}" alt="{{{title}}}" width="100" align="left"></p>
                    <h3><a href="{{{url}}}" target="_blank">{{title}}</a></h3>
                    {{{intro}}}
                {{/secondaryBlogPosts}}
            </details>
            <h2>👀 Job Offers</h2>
            <ul>
            {{#jobOffers}}
                <li><a href="{{{url}}}" target="_blank">{{title}}</a></li>
            {{/jobOffers}}
            </ul>
        </td>
        <td width="50%" valign="top" align="center">
            <h2>🤗 Random Comic</h2>
            <a href="{{{comic.url}}}" target="_blank"><img src="{{{comic.url}}}" height="250" alt="{{comic.title}}"/></a><br />
            <h2>🗿 Open Source Libraries</h2>

|  |  |  |
| ------------ | ---------- | ---------- |
{{#libraries}} 
| {{ name }} | <a href="{{ github }}" target="_blank"><img src="https://img.shields.io/badge/code-MIT-green?logo=github&style=flat-square&labelColor=black" alt="MIT Code on Github for {{ name }}" /></a> | <a href="{{ doc }}" target="_blank"><img src='https://img.shields.io/npm/v/{{ package }}?label=version&style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA0OCA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTAyXzEyNCkiPjxwYXRoIGQ9Ik0zOC4yMzkgMzEuMzE4TDI3Ljg2NSA3MS40NzZMMTQuNDcyIDYyLjkzMkwyNC44NDcgMEwzOS45ODMgMjQuNTg1TDM4LjIzOSAzMS4zMThaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik05LjU0MyAzMi41MzJMNS45NjkgNTcuNUwzLjk1NyA1Ni4yMTlMMCAyNy4xODFMOS41NDMgMzIuNTMyWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMjAuODc3IDE1LjkyN0wxMy4yNTggNjIuMTU0TDcuMTk2MDQgNTguMjg1TDE0LjYzMyA2LjMzMDk5TDIwLjg3NyAxNS45MjdaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik00OC4xNzA5IDI5LjUxNEwzOS41ODY5IDYyLjU5N0wzMy44OTk5IDY3LjMwNUwyOS4zNjY5IDcwLjk2NkwzOS4wNTc5IDMzLjQ1MUw0OC4xNzA5IDI5LjUxNFoiIGZpbGw9IndoaXRlIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDBfMTAyXzEyNCI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjcxIiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==&labelColor=black' alt="Documentation for {{ name }} on Crystallize.com"/></a> | 
 {{/libraries}}
 
<h2>🎁 Open Source Boilerplates</h2>

|  |  |  |  |
| ------------ | ---------- | ---------- | ---------- |
{{#boilerplates}}            
| {{ name }} | <a href="{{ github }}" target="_blank"><img src="https://img.shields.io/badge/code-MIT-green?logo=github&style=flat-square&labelColor=black" alt="MIT Code on Github for {{ name }}" /></a> | <a href="{{ doc }}" target="_blank"><img src='https://img.shields.io/badge/online-DOC-64EDD3?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA0OCA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTAyXzEyNCkiPjxwYXRoIGQ9Ik0zOC4yMzkgMzEuMzE4TDI3Ljg2NSA3MS40NzZMMTQuNDcyIDYyLjkzMkwyNC44NDcgMEwzOS45ODMgMjQuNTg1TDM4LjIzOSAzMS4zMThaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik05LjU0MyAzMi41MzJMNS45NjkgNTcuNUwzLjk1NyA1Ni4yMTlMMCAyNy4xODFMOS41NDMgMzIuNTMyWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMjAuODc3IDE1LjkyN0wxMy4yNTggNjIuMTU0TDcuMTk2MDQgNTguMjg1TDE0LjYzMyA2LjMzMDk5TDIwLjg3NyAxNS45MjdaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik00OC4xNzA5IDI5LjUxNEwzOS41ODY5IDYyLjU5N0wzMy44OTk5IDY3LjMwNUwyOS4zNjY5IDcwLjk2NkwzOS4wNTc5IDMzLjQ1MUw0OC4xNzA5IDI5LjUxNFoiIGZpbGw9IndoaXRlIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDBfMTAyXzEyNCI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjcxIiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==&labelColor=black' alt="Documentation for {{ name }} on Crystallize.com"/></a> | <a href="{{ live }}" target="_blank"><img src="https://img.shields.io/badge/live-DEMO-3E2869?style=flat-square&labelColor=black" alt="Live Demo of {{ name }}" /></a> |
 {{/boilerplates}}
 <hr />
        </td>
    </tr>
</table>
<img align="right" src='https://img.shields.io/badge/Updated on-{{ generatedAt }}-green?style=flat-square&labelColor=black' alt='Generated on {{ generatedAt }}'/>

