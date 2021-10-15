window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634315825",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:692493,title:"GraphQL Unions – Customize your results!",description:"What's not to love about GraphQL? It's got your back when it comes to returning predictable results -...",readable_publish_date:"May 9",slug:"graphql-unions-customize-your-results-54h5",path:"\u002Frohinivsenthil\u002Fgraphql-unions-customize-your-results-54h5",url:c,comments_count:0,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--p3PZp-fJ--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Febdcjym9tvwv92jkhdwa.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QPllaUb4--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Febdcjym9tvwv92jkhdwa.png",canonical_url:c,created_at:"2021-05-09T05:40:16Z",edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:4,tag_list:"graphql, unions, apollo",tags:["graphql","unions","apollo"],body_html:"\u003Cp\u003EWhat's not to love about \u003Ca href=\"https:\u002F\u002Fgraphql.org\u002F\"\u003EGraphQL\u003C\u002Fa\u003E? It's got your back when it comes to returning predictable results - the data you get is exactly what you need, nothing more and nothing less.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you’ve worked with GraphQL, then you’re probably familiar with query and mutation types — so what exactly is a GraphQL union? 🤔\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EUnions are abstract GraphQL types that enable a schema field to return one of multiple object types.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003ENot really sure what that means? Don't worry! I got you. In this tutorial, I will be walking you through the concept of GraphQL \u003Cstrong\u003Eunions\u003C\u002Fstrong\u003E by addressing the two important questions below:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWhy do I need GraphQL unions?\u003C\u002Fli\u003E\n\u003Cli\u003EHow do I implement GraphQL unions?\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"why-do-i-need-graphql%C2%A0unions\" href=\"#why-do-i-need-graphql%C2%A0unions\"\u003E\n  \u003C\u002Fa\u003E\n  Why do I need GraphQL unions?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ELet's consider a simple scenario: You own a small candy shop and the website is using GraphQL APIs. Each candy is associated with a unique identifier, it's name and price.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--2mNE5r5L--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmsk0cw8h6an3lpdm5x06.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--2mNE5r5L--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmsk0cw8h6an3lpdm5x06.png\" alt=\"Object type for candy\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow, let's have a basic query in place to retrieve the details of the candy when passed the unique identifier. Here's how that's gonna look:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--NrQmDDGD--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkk12ipgcxylzbjbaqzwy.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--NrQmDDGD--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkk12ipgcxylzbjbaqzwy.png\" alt=\"GraphQL query for candy\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EBuilding on this scenario, let's assume that it's also possible for a queried candy to either be out of stock or unavailable for shipping in the region. We can visualize this as three three states of a candy:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ocU9uU2T--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fdmtyeyzo8wo5sholzzih.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ocU9uU2T--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fdmtyeyzo8wo5sholzzih.png\" alt=\"States of a candy – In Stock, Out of Stock and Region Unavailability\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe will consider all three states as valid responses and hence, instead of throwing an error when a candy is out of stock or unavailable for shipping, we provide the user with additional information like when a candy would be restocked if out of stock and an array of regions where it is available if unavailable for shipping.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow, if we add all these new fields on our existing type: Candy, then we would have to over-fetch data to determine the state of a candy. And if we create separate queries for the different states, we would be under-fetching data.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn essence, what we're itching for is a way to somehow define 'out of stock' and 'region unavailability' as separate types (say,  \u003Ccode\u003EOutOfStock\u003C\u002Fcode\u003E and \u003Ccode\u003ERegionUnavailability\u003C\u002Fcode\u003E ) along with the existing type: \u003Ccode\u003ECandy\u003C\u002Fcode\u003E under the same query to ensure we're only getting the data we need.\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"ltag_gist-liquid-tag\"\u003E\n  \u003Cscript id=\"gist-ltag\" src=\"https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002Fc1b9d67fbfe4263f568b97cfaa3407f1.js\"\u003E\u003C\u002Fscript\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003EHow do we do this? That's right, this is where GraphQL unions steps in. We model the identified \"states\" as separate types and use unions to enable a query to return one of the multiple types defined.\u003C\u002Fp\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"how-do-i-implement-graphql%C2%A0unions\" href=\"#how-do-i-implement-graphql%C2%A0unions\"\u003E\n  \u003C\u002Fa\u003E\n  How do I implement GraphQL unions?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ENow that we have our states as object types. Let's understand unions: \u003Cstrong\u003EUnions\u003C\u002Fstrong\u003E are abstract schema types. To define a union type, we declare which object types are included in the union.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eunion\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ECandyResult\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ECandy\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E|\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EOutOfStock\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E|\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ERegionUnavailability\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003EIt's important to understand here that all of a union's included types \u003Cem\u003Emust\u003C\u002Fem\u003E be object types (not scalars, input types, etc.) and that the included types do \u003Cem\u003Enot\u003C\u002Fem\u003E need to share any fields.\u003C\u002Fp\u003E\n\u003Ch4\u003E\n  \u003Ca name=\"resolving-a-graphql-union-serverside\" href=\"#resolving-a-graphql-union-serverside\"\u003E\n  \u003C\u002Fa\u003E\n  Resolving a GraphQL union (server-side):\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EAfter adding the union type to our schema file, it's going to be looking something like this:\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"ltag_gist-liquid-tag\"\u003E\n  \u003Cscript id=\"gist-ltag\" src=\"https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002F20367c3d77d952eac2650975dca2ed5a.js\"\u003E\u003C\u002Fscript\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ETo resolve a union, we are required to specify which of the union’s type is being returned. To achieve this, we define a \u003Ccode\u003E__resolveType\u003C\u002Fcode\u003E function for the union.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe \u003Ccode\u003E__resolveType\u003C\u002Fcode\u003E function uses a returned object's unique field to determine its type. It then returns the name of that type as a string.\u003C\u002Fp\u003E\n\n\u003Cp\u003EHere’s how we would use the \u003Ccode\u003E__resolveType\u003C\u002Fcode\u003E function for the CandyResult union we’ve defined in the schema:\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"ltag_gist-liquid-tag\"\u003E\n  \u003Cscript id=\"gist-ltag\" src=\"https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002F19de2c167e317861b194a4a5df65b33e.js\"\u003E\u003C\u002Fscript\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Ch4\u003E\n  \u003Ca name=\"querying-for-a-graphql-union-clientside\" href=\"#querying-for-a-graphql-union-clientside\"\u003E\n  \u003C\u002Fa\u003E\n  Querying for a GraphQL union (client-side):\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EWhen the return type of a query is a union, the GraphQL client doesn’t know which object type a field will return. To account for this, a query can include the subfields of multiple possible types.\u003C\u002Fp\u003E\n\n\u003Cp\u003EHere’s how our query going to be looking:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Equery\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nx\"\u003Ecandy\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003E$id\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eon\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ECandy\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nx\"\u003Ename\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nx\"\u003Eprice\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eon\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EOutOfStock\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nx\"\u003ErestockDate\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eon\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003ERegionUnavailability\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"nx\"\u003EavailableRegions\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ELet’s add a candy to our data dump that’s out of stock with a \u003Ccode\u003ErestockDate\u003C\u002Fcode\u003E key. When we use the query above to retrieve data for the candy, we can now expect to see the results tailored to exactly what we need.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PtRZccEF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fslhglrfrzsrnnkg85vfz.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PtRZccEF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fslhglrfrzsrnnkg85vfz.png\" alt=\"Out of Stock Query\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd that’s it! — we’ve made a query that supports multiple object types with the help of unions.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can find the entire code as a Github repository \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Frohinivsenthil\u002Fgraphql-unions\"\u003Ehere\u003C\u002Fa\u003E 🚀\u003C\u002Fp\u003E\n\n\u003Cp\u003EShare if you found this useful 😄\u003C\u002Fp\u003E\n\n",body_markdown:"What's not to love about [GraphQL](https:\u002F\u002Fgraphql.org\u002F)? It's got your back when it comes to returning predictable results - the data you get is exactly what you need, nothing more and nothing less.\n\nIf you’ve worked with GraphQL, then you’re probably familiar with query and mutation types — so what exactly is a GraphQL union? 🤔\n\n\u003E Unions are abstract GraphQL types that enable a schema field to return one of multiple object types.\n\nNot really sure what that means? Don't worry! I got you. In this tutorial, I will be walking you through the concept of GraphQL **unions** by addressing the two important questions below:\n\n- Why do I need GraphQL unions?\n- How do I implement GraphQL unions?  \n\n\u003Cbr\u003E\n\n## Why do I need GraphQL unions?\n\nLet's consider a simple scenario: You own a small candy shop and the website is using GraphQL APIs. Each candy is associated with a unique identifier, it's name and price.\n\n![Object type for candy](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmsk0cw8h6an3lpdm5x06.png)\n\nNow, let's have a basic query in place to retrieve the details of the candy when passed the unique identifier. Here's how that's gonna look:\n\n![GraphQL query for candy](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkk12ipgcxylzbjbaqzwy.png)\n\nBuilding on this scenario, let's assume that it's also possible for a queried candy to either be out of stock or unavailable for shipping in the region. We can visualize this as three three states of a candy:\n\n![States of a candy – In Stock, Out of Stock and Region Unavailability](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fdmtyeyzo8wo5sholzzih.png)\n\nWe will consider all three states as valid responses and hence, instead of throwing an error when a candy is out of stock or unavailable for shipping, we provide the user with additional information like when a candy would be restocked if out of stock and an array of regions where it is available if unavailable for shipping.\n\nNow, if we add all these new fields on our existing type: Candy, then we would have to over-fetch data to determine the state of a candy. And if we create separate queries for the different states, we would be under-fetching data.\n\nIn essence, what we're itching for is a way to somehow define 'out of stock' and 'region unavailability' as separate types (say,  `OutOfStock` and `RegionUnavailability` ) along with the existing type: `Candy` under the same query to ensure we're only getting the data we need.\n\n{% gist https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002Fc1b9d67fbfe4263f568b97cfaa3407f1 %}\n\nHow do we do this? That's right, this is where GraphQL unions steps in. We model the identified \"states\" as separate types and use unions to enable a query to return one of the multiple types defined.\n\n\u003Cbr\u003E\n\n## How do I implement GraphQL unions?\n\nNow that we have our states as object types. Let's understand unions: **Unions** are abstract schema types. To define a union type, we declare which object types are included in the union.\n```javascript\nunion CandyResult = Candy | OutOfStock | RegionUnavailability\n```\n\nIt's important to understand here that all of a union's included types *must* be object types (not scalars, input types, etc.) and that the included types do *not* need to share any fields.\n\n#### Resolving a GraphQL union (server-side):\n\nAfter adding the union type to our schema file, it's going to be looking something like this:\n\n{% gist https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002F20367c3d77d952eac2650975dca2ed5a %}\n\nTo resolve a union, we are required to specify which of the union’s type is being returned. To achieve this, we define a `__resolveType` function for the union.\n\nThe `__resolveType` function uses a returned object's unique field to determine its type. It then returns the name of that type as a string.\n\nHere’s how we would use the `__resolveType` function for the CandyResult union we’ve defined in the schema:\n\n{% gist https:\u002F\u002Fgist.github.com\u002Frohinivsenthil\u002F19de2c167e317861b194a4a5df65b33e %}\n\n#### Querying for a GraphQL union (client-side):\n\nWhen the return type of a query is a union, the GraphQL client doesn’t know which object type a field will return. To account for this, a query can include the subfields of multiple possible types.\n\nHere’s how our query going to be looking:\n```javascript\nquery {\n  candy(id: $id) {\n    ... on Candy {\n      name\n      price\n    }\n    ... on OutOfStock {\n      restockDate\n    }\n    ... on RegionUnavailability {\n      availableRegions\n    }\n  }\n}\n```\n\nLet’s add a candy to our data dump that’s out of stock with a `restockDate` key. When we use the query above to retrieve data for the candy, we can now expect to see the results tailored to exactly what we need.\n\n![Out of Stock Query](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fslhglrfrzsrnnkg85vfz.png)\n\nAnd that’s it! — we’ve made a query that supports multiple object types with the help of unions.\n\nYou can find the entire code as a Github repository [here](https:\u002F\u002Fgithub.com\u002Frohinivsenthil\u002Fgraphql-unions) 🚀\n\nShare if you found this useful 😄",user:{name:"Rohini Senthil",username:e,twitter_username:a,github_username:e,website_url:"https:\u002F\u002Frohinivsenthil.github.io",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--zkPSiZki--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F481293\u002F21749fec-7db8-438b-a2f1-9a176cad9a9e.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ysEge3Gq--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F481293\u002F21749fec-7db8-438b-a2f1-9a176cad9a9e.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Frohinivsenthil\u002F692493",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-05-09T20:43:19Z","https:\u002F\u002Fdev.to\u002Frohinivsenthil\u002Fgraphql-unions-customize-your-results-54h5",16,"rohinivsenthil"));