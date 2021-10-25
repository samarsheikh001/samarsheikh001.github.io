window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:575535,title:"MongoDB Animated 🍩: Adding and removing elements from arrays",description:"An animated guide on how to add and remove elements from embedded arrays in MongoDB",readable_publish_date:"Jan 19",slug:"mongodb-animated-adding-and-removing-elements-from-arrays-50cl",path:"\u002Fpaulasantamaria\u002Fmongodb-animated-adding-and-removing-elements-from-arrays-50cl",url:b,comments_count:c,public_reactions_count:d,collection_id:10846,published_timestamp:e,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--S19qtP1M--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fi.imgur.com\u002FPXY3KWT.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--sKZTkPZj--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fi.imgur.com\u002FPXY3KWT.png",canonical_url:b,created_at:"2021-01-19T01:29:33Z",edited_at:"2021-01-21T23:19:40Z",crossposted_at:a,published_at:e,last_comment_at:"2021-01-27T22:38:22Z",reading_time_minutes:c,tag_list:"mongodb, database, array",tags:["mongodb","database","array"],body_html:"\u003Cp\u003ELast week I had to work on an old project with MongoDB. A few documents with \u003Cem\u003E\u003Cstrong\u003Eembedded arrays\u003C\u002Fstrong\u003E\u003C\u002Fem\u003E needed to be updated, and I realized that every time I have to do this sort of operations, I end up googling a lot to re-learn things I forgot.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo this time I decided to take thorough notes of everything I learn and write an article with examples so future Paula can go directly to the examples instead of googling everything all over again. And hey! Maybe someone else finds it useful as well.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI also included short animations illustrating each example 🤓\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"#introduction\"\u003EIntroduction\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ca href=\"#adding-new-elements-into-the-array\"\u003EAdding new elements into the array\u003C\u002Fa\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"#adding-a-single-element-at-the-end\"\u003EAdding a single element at the end\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#adding-a-single-element-into-a-specific-position\"\u003EAdding a single element into a specific position\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#adding-multiple-elements\"\u003EAdding multiple elements\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#removing-an-element-from-the-array\"\u003ERemoving an element from the array\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#try-it-yourself\"\u003ETry it yourself\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#resources\"\u003EResources\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"introduction\" href=\"#introduction\"\u003E\n  \u003C\u002Fa\u003E\n  Introduction\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EIn this article I'm only going to talk about \u003Cstrong\u003Eadding\u003C\u002Fstrong\u003E and \u003Cstrong\u003Eremoving\u003C\u002Fstrong\u003E elements from documents with embedded arrays. I will be posting a new article next week about how to update the contents of elements in the array.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe example DB we are going to use consists of a simple \u003Cem\u003Ecollection\u003C\u002Fem\u003E of \"donut combos\" from a donut shop. Each combo has a \u003Cem\u003Ename\u003C\u002Fem\u003E and an \u003Cem\u003Earray of donuts\u003C\u002Fem\u003E that will be included if the customer chooses that combo. Here's the complete schema:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"c1\"\u003E\u002F\u002F donutCombo Schema\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nl\"\u003Ename\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Etype\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Erequired\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Eactive\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"nl\"\u003Etype\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EBoolean\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequired\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Edonuts\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Etype\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Eglazing\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Etype\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EBoolean\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}]\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"adding-new-elements-into-the-array\" href=\"#adding-new-elements-into-the-array\"\u003E\n  \u003C\u002Fa\u003E\n  Adding new elements into the array\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EWe can add a new element to an array using the \u003Ccode\u003E$push\u003C\u002Fcode\u003E operator. By default, the new element will be added at the end of the array.\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"adding-a-single-element-at-the-end\" href=\"#adding-a-single-element-at-the-end\"\u003E\n  \u003C\u002Fa\u003E\n  Adding a single element at the end\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIn the following example, we will add a pink donut to the first document found with \u003Ccode\u003Ename\u003C\u002Fcode\u003E \"No Choco\".\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EdonutCombos\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EupdateOne\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ename\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003ENo Choco\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003E$push\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Edonuts\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Epink\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003Eglazing\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--EFs0NMtq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FWiskZLy.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--EFs0NMtq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FWiskZLy.gif\" alt='MongoDB finds the document where the name is \"No Choco\" and adds a pink donut at the end of the donuts array' loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"adding-a-single-element-into-a-specific-position\" href=\"#adding-a-single-element-into-a-specific-position\"\u003E\n  \u003C\u002Fa\u003E\n  Adding a single element into a specific position\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EUsing the \u003Ccode\u003E$position\u003C\u002Fcode\u003E modifier, we can specify where in the array we want our new elements to be positioned. In order to use the \u003Ccode\u003E$position\u003C\u002Fcode\u003E modifier, we also need to use the \u003Ccode\u003E$each\u003C\u002Fcode\u003E modifier, even though we are only adding a single element.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn the following example, we will add a pink donut to the first document found with \u003Ccode\u003Ename\u003C\u002Fcode\u003E \"No Choco\", in the *2nd position *of the array.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EdonutCombos\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EupdateOne\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ename\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003ENo Choco\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003E$push\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Edonuts\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003E$position\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E2\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003E$each\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[{\u003C\u002Fspan\u003E\n                \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Epink\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n                \u003Cspan class=\"na\"\u003Eglazing\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\n            \u003Cspan class=\"p\"\u003E}]\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LZd56PBg--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002Frir1Aaq.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LZd56PBg--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002Frir1Aaq.gif\" alt='MongoDB finds the document where the name is \"No Choco\" and adds a pink donut at position 2 of the array' loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"adding-multiple-elements\" href=\"#adding-multiple-elements\"\u003E\n  \u003C\u002Fa\u003E\n  Adding multiple elements\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EUsing the modifier \u003Ccode\u003E$each\u003C\u002Fcode\u003E we can push more than one element into our array.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn the following example, we will add two donuts (white and chocolate) at the end of the array in the first document with name \"B&amp;W\".\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EdonutCombos\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EupdateOne\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ename\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EB&amp;W\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003E$push\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Edonuts\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n            \u003Cspan class=\"na\"\u003E$each\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\n                \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eglazing\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n                \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Echocolate\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eglazing\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n            \u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qnguzVJ0--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FWsjeU4e.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qnguzVJ0--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FWsjeU4e.gif\" alt='MongoDB finds the document where the name is \"B&amp;W\" and adds a white donut and a chocolate donut at the end of the array' loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"removing-an-element-from-the-array\" href=\"#removing-an-element-from-the-array\"\u003E\n  \u003C\u002Fa\u003E\n  Removing an element from the array\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ETo remove an element from the array we use the operator \u003Ccode\u003E$pull\u003C\u002Fcode\u003E. Inside the $pull object we must specify a key-value pair: the key is the name of the array property from our document and the value is the filter we want to apply to define which elements should be removed.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn the following example, we will remove all \u003Cem\u003Ewhite\u003C\u002Fem\u003E donuts from the \u003Cem\u003Eactive\u003C\u002Fem\u003E documents in the \u003Cem\u003EdonutCombos\u003C\u002Fem\u003E collection.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EdonutCombos\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EupdateMany\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eactive\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003E$pull\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Edonuts\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--gZ0q99lv--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FQkLvWUG.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--gZ0q99lv--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002FQkLvWUG.gif\" alt=\"MongoDB finds all active documents removes all the white donuts\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"try-it-yourself\" href=\"#try-it-yourself\"\u003E\n  \u003C\u002Fa\u003E\n  Try it yourself\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EI created a repo to try MongoDB queries in memory using Node.js with Jest and MongoDB Node driver. I use tests to execute the query and verify if everything was correctly updated. I also included a logger that prints the updated documents in the console displaying the changes that were applied using diff highlight syntax:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WNwB37WQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002F8yGmVkY.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WNwB37WQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi.imgur.com\u002F8yGmVkY.png\" alt=\"The difference of a MongoDB document after being updated\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can find the examples I included in this article in the \u003Ccode\u003Etests\u003C\u002Fcode\u003E folder:\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"ltag-github-readme-tag\"\u003E\n  \u003Cdiv class=\"readme-overview\"\u003E\n    \u003Ch2\u003E\n      \u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--i3JOwpme--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev.to\u002Fassets\u002Fgithub-logo-ba8488d21cd8ee1fee097b8410db9deaa41d0ca30b004c0c63de0a479114156f.svg\" alt=\"GitHub logo\" loading=\"lazy\"\u003E\n      \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpawap90\"\u003E\n        pawap90\n      \u003C\u002Fa\u003E \u002F \u003Ca style=\"font-weight: 600;\" href=\"https:\u002F\u002Fgithub.com\u002Fpawap90\u002Ftry-mongodb-queries\"\u003E\n        try-mongodb-queries\n      \u003C\u002Fa\u003E\n    \u003C\u002Fh2\u003E\n    \u003Ch3\u003E\n      A simple sample project to try MongoDB queries in memory using Jest\n    \u003C\u002Fh3\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"ltag-github-body\"\u003E\n    \n\u003Cdiv id=\"readme\" class=\"md\" data-path=\"README.md\"\u003E\u003Carticle class=\"markdown-body entry-content container-lg\" itemprop=\"text\"\u003E\u003Ch1\u003E\ntry-mongodb-queries\u003C\u002Fh1\u003E\n\u003Cp\u003EA simple project to try MongoDB queries in memory using Jest.\nIncludes a logger that logs the difference between the original test data and the data after the update using diff syntax highlight:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ca target=\"_blank\" rel=\"noopener noreferrer\" href=\"https:\u002F\u002Fcamo.githubusercontent.com\u002F08d3a2b8bce2a3b330b2edbbc120bb0d23c2c2f39f43a9ecc4a4d58b7a791e9e\u002F68747470733a2f2f692e696d6775722e636f6d2f3879476d566b592e706e67\"\u003E\u003Cimg src=\"https:\u002F\u002Fcamo.githubusercontent.com\u002F08d3a2b8bce2a3b330b2edbbc120bb0d23c2c2f39f43a9ecc4a4d58b7a791e9e\u002F68747470733a2f2f692e696d6775722e636f6d2f3879476d566b592e706e67\" alt=\"The difference of a MongoDB document after being updated\" data-canonical-src=\"https:\u002F\u002Fi.imgur.com\u002F8yGmVkY.png\" style=\"max-width:100%;\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch1\u003E\nDependencies\u003C\u002Fh1\u003E\n\u003Cp\u003EWhat you need to run this project:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ENode.js\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E(MongoDB is not required because it'll run in memory, handled by the package \u003Ccode\u003Emongodb-memory-server-core\u003C\u002Fcode\u003E).\u003C\u002Fp\u003E\n\u003Ch1\u003E\nTry it out\u003C\u002Fh1\u003E\n\u003Ch2\u003E\n1. Install dependencies\u003C\u002Fh2\u003E\n\u003Cdiv class=\"snippet-clipboard-content position-relative\" data-snippet-clipboard-copy-content=\"npm install\n\"\u003E\u003Cpre\u003E\u003Ccode\u003Enpm install\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\n\u003Ch2\u003E\n2. Run tests\u003C\u002Fh2\u003E\n\u003Cdiv class=\"snippet-clipboard-content position-relative\" data-snippet-clipboard-copy-content=\"npm test\n\"\u003E\u003Cpre\u003E\u003Ccode\u003Enpm test\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E\n\u003Ch1\u003E\nTools\u003C\u002Fh1\u003E\n\u003Cp\u003EMain tools used in this project:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.mongodb.com\u002Fdrivers\u002Fnode\u002F\" rel=\"nofollow\"\u003EMongoDB Node driver\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fjestjs.io\u002F\" rel=\"nofollow\"\u003EJest\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnodkz\u002Fmongodb-memory-server\"\u003Emongodb-memory-server package by @nodkz\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Farticle\u003E\u003C\u002Fdiv\u003E\n\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"gh-btn-container\"\u003E\u003Ca class=\"gh-btn\" href=\"https:\u002F\u002Fgithub.com\u002Fpawap90\u002Ftry-mongodb-queries\"\u003EView on GitHub\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"resources\" href=\"#resources\"\u003E\n  \u003C\u002Fa\u003E\n  Resources\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EFor more info about updating arrays here are a few resources from MongoDB's official docs:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.mongodb.com\u002Fmanual\u002Freference\u002Foperator\u002Fupdate-array\u002F\"\u003EArray Update Operators (docs.mongodb.com)\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdocs.mongodb.com\u002Fdrivers\u002Fnode\u002Ffundamentals\u002Fcrud\u002Fwrite-operations\u002Fembedded-arrays\"\u003EUpdate Arrays in a Document (docs.mongodb.com)\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n",body_markdown:"---\ntitle: MongoDB Animated 🍩: Adding and removing elements from arrays\npublished: true\ndescription: An animated guide on how to add and remove elements from embedded arrays in MongoDB\ntags: mongodb, database, array\ncover_image: https:\u002F\u002Fi.imgur.com\u002FPXY3KWT.png\nseries: mongodb-animated\n---\n\nLast week I had to work on an old project with MongoDB. A few documents with _**embedded arrays**_ needed to be updated, and I realized that every time I have to do this sort of operations, I end up googling a lot to re-learn things I forgot.\n\nSo this time I decided to take thorough notes of everything I learn and write an article with examples so future Paula can go directly to the examples instead of googling everything all over again. And hey! Maybe someone else finds it useful as well.\n\nI also included short animations illustrating each example 🤓\n\n- [Introduction](#introduction)\n- [Adding new elements into the array](#adding-new-elements-into-the-array)\n    - [Adding a single element at the end](#adding-a-single-element-at-the-end)\n    - [Adding a single element into a specific position](#adding-a-single-element-into-a-specific-position)\n    - [Adding multiple elements](#adding-multiple-elements)\n- [Removing an element from the array](#removing-an-element-from-the-array)\n- [Try it yourself](#try-it-yourself)\n- [Resources](#resources)\n\n# Introduction \n\nIn this article I'm only going to talk about **adding** and **removing** elements from documents with embedded arrays. I will be posting a new article next week about how to update the contents of elements in the array.\n\nThe example DB we are going to use consists of a simple *collection* of \"donut combos\" from a donut shop. Each combo has a *name* and an *array of donuts* that will be included if the customer chooses that combo. Here's the complete schema:\n\n```js\n\u002F\u002F donutCombo Schema\n{\n    name: { type: String, required: true },\n    active: { type: Boolean, required: true },\n    donuts: [{\n        color: { type: String },\n        glazing: { type: Boolean }\n    }]\n}\n```\n\n# Adding new elements into the array\n\nWe can add a new element to an array using the `$push` operator. By default, the new element will be added at the end of the array.\n\n### Adding a single element at the end\n\nIn the following example, we will add a pink donut to the first document found with `name` \"No Choco\".\n\n```js\ndb.donutCombos.updateOne({ name: \"No Choco\" }, {\n    $push: {\n        donuts: {\n            color: \"pink\",\n            glazing: true\n        }\n    }\n});\n```\n\n![MongoDB finds the document where the name is \"No Choco\" and adds a pink donut at the end of the donuts array](https:\u002F\u002Fi.imgur.com\u002FWiskZLy.gif)\n\n### Adding a single element into a specific position\n\nUsing the `$position` modifier, we can specify where in the array we want our new elements to be positioned. In order to use the `$position` modifier, we also need to use the `$each` modifier, even though we are only adding a single element.\n\nIn the following example, we will add a pink donut to the first document found with `name` \"No Choco\", in the *2nd position *of the array.\n\n```js\ndb.donutCombos.updateOne({ name: \"No Choco\" }, {\n    $push: {\n        donuts: {\n            $position: 2,\n            $each: [{\n                color: \"pink\",\n                glazing: true\n            }]\n        }\n    }\n});\n```\n\n![MongoDB finds the document where the name is \"No Choco\" and adds a pink donut at position 2 of the array](https:\u002F\u002Fi.imgur.com\u002Frir1Aaq.gif)\n\n### Adding multiple elements\n\nUsing the modifier `$each` we can push more than one element into our array.\n\nIn the following example, we will add two donuts (white and chocolate) at the end of the array in the first document with name \"B&W\".\n\n```js\ndb.donutCombos.updateOne({ name: \"B&W\" }, {\n    $push: {\n        donuts: {\n            $each: [\n                { color: \"white\", glazing: true },\n                { color: \"chocolate\", glazing: true }\n            ]\n        }\n    }\n});\n```\n\n![MongoDB finds the document where the name is \"B&W\" and adds a white donut and a chocolate donut at the end of the array](https:\u002F\u002Fi.imgur.com\u002FWsjeU4e.gif)\n\n# Removing an element from the array\n\nTo remove an element from the array we use the operator `$pull`. Inside the $pull object we must specify a key-value pair: the key is the name of the array property from our document and the value is the filter we want to apply to define which elements should be removed.\n\nIn the following example, we will remove all *white* donuts from the *active* documents in the *donutCombos* collection.\n\n```js\ndb.donutCombos.updateMany({ active: true }, {\n    $pull: {\n        donuts: { color: \"white\" }\n    }\n});\n```\n![MongoDB finds all active documents removes all the white donuts](https:\u002F\u002Fi.imgur.com\u002FQkLvWUG.gif)\n\n# Try it yourself\n\nI created a repo to try MongoDB queries in memory using Node.js with Jest and MongoDB Node driver. I use tests to execute the query and verify if everything was correctly updated. I also included a logger that prints the updated documents in the console displaying the changes that were applied using diff highlight syntax:\n\n![The difference of a MongoDB document after being updated](https:\u002F\u002Fi.imgur.com\u002F8yGmVkY.png)\n\nYou can find the examples I included in this article in the `tests` folder:\n\n{% github pawap90\u002Ftry-mongodb-queries %}\n\n# Resources\nFor more info about updating arrays here are a few resources from MongoDB's official docs:\n\n- [Array Update Operators (docs.mongodb.com)](https:\u002F\u002Fdocs.mongodb.com\u002Fmanual\u002Freference\u002Foperator\u002Fupdate-array\u002F)\n\n- [Update Arrays in a Document (docs.mongodb.com)](https:\u002F\u002Fdocs.mongodb.com\u002Fdrivers\u002Fnode\u002Ffundamentals\u002Fcrud\u002Fwrite-operations\u002Fembedded-arrays)",user:{name:"Paula Santamaría",username:"paulasantamaria",twitter_username:"pauxdsantamaria",github_username:"pawap90",website_url:"https:\u002F\u002Fpaulasantamaria.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--0NxiFXoW--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F61042\u002F0a24f53f-aae9-4516-ac05-8f1cde9566db.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--2b-1ONXL--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F61042\u002F0a24f53f-aae9-4516-ac05-8f1cde9566db.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fpaulasantamaria\u002F575535",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"https:\u002F\u002Fdev.to\u002Fpaulasantamaria\u002Fmongodb-animated-adding-and-removing-elements-from-arrays-50cl",4,28,"2021-01-19T15:07:35Z"));