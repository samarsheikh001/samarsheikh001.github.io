window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:b,state:{currentArticle:{type_of:"article",id:717120,title:"Data Structures in TypeScript - Array",description:"An array is a common data structure that holds items of the same type, in TypeScript, unlike other languages, an array doesn't have a fixed length.",readable_publish_date:"Jun 3",slug:"data-structures-in-typescript-array-23mo",path:"\u002Fricardo_borges\u002Fdata-structures-in-typescript-array-23mo",url:"https:\u002F\u002Fdev.to\u002Fricardo_borges\u002Fdata-structures-in-typescript-array-23mo",comments_count:0,public_reactions_count:c,collection_id:13370,published_timestamp:a,positive_reactions_count:c,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ivreXbDD--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974055\u002Farticles%2520covers\u002Fcover_wnn3mp.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--dzQy9tEB--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974055\u002Farticles%2520covers\u002Fcover_wnn3mp.png",canonical_url:"https:\u002F\u002Fricardoborges.dev\u002Fdata-structures-in-typescript-array",created_at:a,edited_at:"2021-07-27T16:44:30Z",crossposted_at:b,published_at:a,last_comment_at:a,reading_time_minutes:2,tag_list:"datastructures, typescript, array",tags:["datastructures","typescript","array"],body_html:"\u003Cp\u003EAn array is a common data structure that holds items of the same type, in TypeScript, unlike other languages, an array doesn't have a fixed length. Also, in TypeScript, you don't have to re-organize all elements of an array when makings operations like insert or delete.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"representation\" href=\"#representation\"\u003E\n  \u003C\u002Fa\u003E\n  Representation\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hD7cfGen--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1622593241\u002Farray-img_kn9hp3.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hD7cfGen--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1622593241\u002Farray-img_kn9hp3.png\" alt=\"array\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EElements\u003C\u002Fstrong\u003E are the items stored in an array\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EIndex\u003C\u002Fstrong\u003E is the location of an element in an array, it goes from 0 to (array length - 1)\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** An array can be written like this **\u002F\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Enumbers\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kr\"\u003Enumber\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[]\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E2\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E4\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Enames\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"kr\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[]\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003ESnake\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003EOcelot\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003EOtacon\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003ENaomi\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Also can be written using a generic array type, Array&lt;elemType&gt; **\u002F\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Elist\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EArray\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"kr\"\u003Enumber\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E2\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E4\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Elist\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EArray\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"kr\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003ESnake\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003EOcelot\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003EOtacon\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003ENaomi\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"basics-operations\" href=\"#basics-operations\"\u003E\n  \u003C\u002Fa\u003E\n  Basics operations\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ETraverse\u003C\u002Fstrong\u003E - Print all array items one by one\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** 3 ways to iterate an array **\u002F\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"k\"\u003Efor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E0\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elength\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E++\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E])\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"k\"\u003Efor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eof\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EforEach\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E})\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EInsertion\u003C\u002Fstrong\u003E - Add an item\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** add to the end **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epush\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E5\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** add to the beginning **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eunshift\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E0\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** add in a specific index position **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Esplice\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E0\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E8\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F add 8 in the index 3\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EDeletion\u003C\u002Fstrong\u003E - Remove an item\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** remove from the end **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epop\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** remove from the beginning **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eshift\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** remove from a specific index position **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Esplice\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E2\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F remove from index 2\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EUpdate\u003C\u002Fstrong\u003E - Update an item\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** update element in position 1 **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E7\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ESearch\u003C\u002Fstrong\u003E - Search by an item\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** you can traverse an array to find an element by its value, or simply use the .find() function **\u002F\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Efind\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eitem\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F search by an item with value 3\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"strings-are-arrays-of-characters\" href=\"#strings-are-arrays-of-characters\"\u003E\n  \u003C\u002Fa\u003E\n  Strings are arrays of characters\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EAll above operations can be performed on strings to solve problems like count the occurrences of a character in a string:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight typescript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Estr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaabbccdd\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eoccurrences\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E0\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"k\"\u003Efor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E0\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&lt;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Estr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elength\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E++\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Estr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ei\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Ec\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nx\"\u003Eoccurrences\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E++\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eoccurrences\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F prints 2\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n",body_markdown:"---\ntitle: Data Structures in TypeScript - Array\npublished: true\ndescription: An array is a common data structure that holds items of the same type, in TypeScript, unlike other languages, an array doesn't have a fixed length.\ntags: dataStructures,typescript,array\nseries: Data Structures in TypeScript\ncover_image: https:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974055\u002Farticles%20covers\u002Fcover_wnn3mp.png\ncanonical_url: https:\u002F\u002Fricardoborges.dev\u002Fdata-structures-in-typescript-array\n---\n\nAn array is a common data structure that holds items of the same type, in TypeScript, unlike other languages, an array doesn't have a fixed length. Also, in TypeScript, you don't have to re-organize all elements of an array when makings operations like insert or delete.\n\n### Representation\n\n![array](https:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1622593241\u002Farray-img_kn9hp3.png)\n\n* **Elements** are the items stored in an array\n* **Index** is the location of an element in an array, it goes from 0 to (array length - 1)\n\n\n```typescript\n\u002F** An array can be written like this **\u002F\n\nconst numbers: number[] = [1, 2, 3, 4]\nconst names = string[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']\n\n\u002F** Also can be written using a generic array type, Array\u003CelemType\u003E **\u002F\n\nlet list: Array\u003Cnumber\u003E = [1, 2, 3, 4]\nlet list: Array\u003Cstring\u003E = ['Snake', 'Ocelot', 'Otacon', 'Naomi']\n```\n\n### Basics operations\n\n**Traverse** - Print all array items one by one\n\n```typescript\n\u002F** 3 ways to iterate an array **\u002F\n\nfor(let i=0; i\u003Carray.length; i++) {\n    console.log(array[i])\n}\n\nfor(const item of array) {\n    console.log(item)\n}\n\narray.forEach(item =\u003E {\n    console.log(item)\n})\n```\n\n**Insertion** - Add an item\n\n```typescript\n\u002F** add to the end **\u002F\narray.push(5)\n\n\u002F** add to the beginning **\u002F\narray.unshift(0)\n\n\u002F** add in a specific index position **\u002F\narray.splice(3, 0, 8) \u002F\u002F add 8 in the index 3\n```\n\n**Deletion** - Remove an item\n\n```typescript\n\u002F** remove from the end **\u002F\narray.pop()\n\n\u002F** remove from the beginning **\u002F\narray.shift()\n\n\u002F** remove from a specific index position **\u002F\narray.splice(2, 1) \u002F\u002F remove from index 2\n```\n\n**Update** - Update an item\n\n```typescript\n\u002F** update element in position 1 **\u002F\narray[1] = 7\n```\n\n**Search** - Search by an item\n\n```typescript\n\u002F** you can traverse an array to find an element by its value, or simply use the .find() function **\u002F\n\nconst item = array.find(item =\u003E item === 3) \u002F\u002F search by an item with value 3\n```\n\n### Strings are arrays of characters\n\nAll above operations can be performed on strings to solve problems like count the occurrences of a character in a string:\n\n```typescript\nlet str = \"aabbccdd\"\nlet occurrences = 0\n\nfor(let i=0; i \u003C str.length; i++) {\n    if(str[i] === \"c\") {\n        occurrences++\n    }\n}\n\nconsole.log(occurrences) \u002F\u002F prints 2\n```",user:{name:"Ricardo Borges",username:"ricardo_borges",twitter_username:"Borges_rocks",github_username:"ricardo93borges",website_url:"https:\u002F\u002Fricardoborges.dev\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--nTYvVqbh--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F144411\u002F15a8a201-7cb3-4e3d-8624-1d7648e594f0.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--JDcMU_D_--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F144411\u002F15a8a201-7cb3-4e3d-8624-1d7648e594f0.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fricardo_borges\u002F717120",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:b}}}}("2021-06-03T15:43:00Z",null,8));