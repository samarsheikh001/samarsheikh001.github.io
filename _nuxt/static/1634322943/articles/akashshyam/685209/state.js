window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:685209,title:"Selector Nesting Has Come to CSS 🤯🤯🤯 !!!",description:"First we had variables and now nesting in css! It seems that the functionality we get with pre-proces...",readable_publish_date:"May 2",slug:"selector-nesting-has-come-to-css-532i",path:"\u002Fakashshyam\u002Fselector-nesting-has-come-to-css-532i",url:c,comments_count:4,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F685209.png",canonical_url:c,created_at:b,edited_at:"2021-05-04T11:08:35Z",crossposted_at:a,published_at:b,last_comment_at:"2021-05-02T11:25:07Z",reading_time_minutes:3,tag_list:"css, html, scss, saas",tags:["css","html","scss","saas"],body_html:"\u003Cp\u003EFirst we had variables and now nesting in css! It seems that the functionality we get with pre-processors like Sass and Less are slowly being introduced in CSS. It's similar to what's happening between javascript and typescript. If you have noticed, a few years ago, some of the current javascript features did not exist in javascript but were implemented in typescript.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI'm not saying this is a bad thing, it's actually great! This decreases the need for pre-proccessors which need to be compiled into CSS\u002FJavascript\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat being said, selector nesting is still in the future. No browsers support it yet, but I expect this to improve. For more information, checkout the \u003Ca href=\"https:\u002F\u002Fdrafts.csswg.org\u002Fcss-nesting-1\u002F\"\u003Edraft\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"what-really-is-nesting\" href=\"#what-really-is-nesting\"\u003E\n  \u003C\u002Fa\u003E\n  What Really Is nesting???\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ETo explain this effectlively, I'm going to compare two code samples.\u003C\u002Fp\u003E\n\n\u003Ch5\u003E\n  \u003Ca name=\"without-nesting\" href=\"#without-nesting\"\u003E\n  \u003C\u002Fa\u003E\n  Without Nesting\n\u003C\u002Fh5\u003E\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight css\"\u003E\u003Ccode\u003E\u003Cspan class=\"nt\"\u003Ebutton\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.btn\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Eblue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Etransition\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E.2s\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eall\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eease-in\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"c\"\u003E\u002F* More styles for the button *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nt\"\u003Ebutton\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.btn\u003C\u002Fspan\u003E\u003Cspan class=\"nd\"\u003E:hover\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Eblue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nt\"\u003Ebutton\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.btn\u003C\u002Fspan\u003E\u003Cspan class=\"nd\"\u003E:focus\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n   \u003Cspan class=\"c\"\u003E\u002F* Add more styles *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nt\"\u003Ebutton\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.btn-group\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"c\"\u003E\u002F* Some styles *\u002F\u003C\u002Fspan\u003E \n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nt\"\u003Ebutton\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.btn-primary\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"c\"\u003E\u002F* I promise, this is the last. *\u002F\u003C\u002Fspan\u003E \n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ENow let me show the same code with nesting.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.btn\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Eblue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Etransition\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E.2s\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eall\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eease-in\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nd\"\u003E:hover\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Eblue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nd\"\u003E:focus\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n   \u003Cspan class=\"cm\"\u003E\u002F* Add more styles *\u002F\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E-group\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* Some styles *\u002F\u003C\u002Fspan\u003E \n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E-primary\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* You get the point right??? *\u002F\u003C\u002Fspan\u003E \n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EJust like in Sass, The \u003Ccode\u003E&amp;\u003C\u002Fcode\u003E is used to refer to the parent selector(in this case, \u003Ccode\u003E.btn\u003C\u002Fcode\u003E). That's not all, we can also nest multiple levels deep.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.btn\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ecyan\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E-container\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nl\"\u003Emargin\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E10px\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E20px\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nd\"\u003E:hover\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"cm\"\u003E\u002F* Some fancy animation *\u002F\u003C\u002Fspan\u003E \n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003E.overlay\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n       \u003Cspan class=\"cm\"\u003E\u002F* There should always be an \"&amp;\" in a nested selectors *\u002F\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"nest\" href=\"#nest\"\u003E\n  \u003C\u002Fa\u003E\n  @nest\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThis is a new \u003Ccode\u003Eat-rule\u003C\u002Fcode\u003E that helps us overcome some of the limitations of nesting using the \u003Ccode\u003E&amp;\u003C\u002Fcode\u003E. Look at the following code:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.section\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* etc ... *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nc\"\u003E.section\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* etc ... *\u002F\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"nc\"\u003E.blog\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"cm\"\u003E\u002F* We want to reference the blog container which is inside the .section. *\u002F\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EFor this, we can use the \u003Ccode\u003E@nest\u003C\u002Fcode\u003E rule. This rule shifts the reference of the \u003Ccode\u003E&amp;\u003C\u002Fcode\u003E to another selector we specify.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.main\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* etc ... *\u002F\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"nc\"\u003E.blog\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"k\"\u003E@nest\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003E.section\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n                        \u003Cspan class=\"cm\"\u003E\u002F* The \"&amp;\" refers to \".section\" *\u002F\u003C\u002Fspan\u003E\n            \u003Cspan class=\"nl\"\u003Ebackground\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ered\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"nesting-media-queries\" href=\"#nesting-media-queries\"\u003E\n  \u003C\u002Fa\u003E\n  Nesting Media Queries\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EFor people who are familiar with Sass, the \"normal\" code looks like this:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.section\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003E@media\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F*\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Esome\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emedia\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Equery\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E*\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* styles... *\u002F\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EHowever, this is slightly different. In css, the styles must be enclosed in \"&amp;\".\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E  \u003Cspan class=\"k\"\u003E@media\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F*\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Esome\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emedia\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Equery\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E*\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n      \u003Cspan class=\"cm\"\u003E\u002F* styles... *\u002F\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cul\u003E\n\u003Cli\u003ENormal code\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight css\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.table.xyz\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Eth\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.y\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Ep\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.abc\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Efont-size\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E1rem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nc\"\u003E.table.xyz\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Eth\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.y\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Ep\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.abc-primary\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Efont-size\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E1.4rem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cul\u003E\n\u003Cli\u003EThe Power of nesting 💪 💪 💪\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight css\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.table.xyz\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Eth\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.y\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003Ep\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003E.abc\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Efont-size\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E1rem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nl\"\u003Ecolor\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Ewhite\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"err\"\u003E&amp;-primary\u003C\u002Fspan\u003E \u003Cspan class=\"err\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nl\"\u003Efont-size\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"m\"\u003E1.4rem\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"err\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch4\u003E\n  \u003Ca name=\"makes-code-more-readable\" href=\"#makes-code-more-readable\"\u003E\n  \u003C\u002Fa\u003E\n  Makes code more readable\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EAs soon as you look the code, you can go \"Aha, anything between those outer curly braces is related to buttons or \u003Ccode\u003E.btn\u003C\u002Fcode\u003E! Not my business!\"\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"a-gotcha\" href=\"#a-gotcha\"\u003E\n  \u003C\u002Fa\u003E\n  A gotcha\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EOne thing to keep in mind is that any css which is after nested selectors is flat out ignored. However, any nesting that is followed is completely valid.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight scss\"\u003E\u003Ccode\u003E\u003Cspan class=\"nc\"\u003E.x\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E-y\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* styles... *\u002F\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"nt\"\u003Ea\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* invalid *\u002F\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"k\"\u003E&amp;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003E-z\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"cm\"\u003E\u002F* valid *\u002F\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThat's it guys! Thank you for reading this post. Please give it a like and follow me on dev.to for more content based on HTML &amp; CSS, Javascript, React and NodeJS. To my dear regular readers,  I'm sorry about not writing any articles in the past few weeks, I was quite busy. Bye guys 🤟\u003C\u002Fp\u003E\n\n",body_markdown:"First we had variables and now nesting in css! It seems that the functionality we get with pre-processors like Sass and Less are slowly being introduced in CSS. It's similar to what's happening between javascript and typescript. If you have noticed, a few years ago, some of the current javascript features did not exist in javascript but were implemented in typescript.\n\nI'm not saying this is a bad thing, it's actually great! This decreases the need for pre-proccessors which need to be compiled into CSS\u002FJavascript\n\nThat being said, selector nesting is still in the future. No browsers support it yet, but I expect this to improve. For more information, checkout the [draft] (https:\u002F\u002Fdrafts.csswg.org\u002Fcss-nesting-1\u002F).\n\n\n###What Really Is nesting???\nTo explain this effectlively, I'm going to compare two code samples.\n\n\n#####Without Nesting\n```css\nbutton.btn {\n  color: blue;\n  background: white;\n  transition: .2s all ease-in;\n  \u002F* More styles for the button *\u002F\n}\n\nbutton.btn:hover {\n  color: white;\n  background: blue;\n}\n\nbutton.btn:focus {\n   \u002F* Add more styles *\u002F\n}\n\nbutton.btn-group {\n  \u002F* Some styles *\u002F \n}\n\nbutton.btn-primary {\n  \u002F* I promise, this is the last. *\u002F \n}\n```\n\nNow let me show the same code with nesting.\n\n```scss\n.btn {\n  color: blue;\n  background: white;\n  transition: .2s all ease-in;\n  \n  &:hover {\n    color: white;\n    background: blue;\n  }\n\n  &:focus {\n   \u002F* Add more styles *\u002F\n  }\n\n  &-group {\n    \u002F* Some styles *\u002F \n  }\n\n  &-primary {\n    \u002F* You get the point right??? *\u002F \n  }\n}\n\n```\n\nJust like in Sass, The `&` is used to refer to the parent selector(in this case, `.btn`). That's not all, we can also nest multiple levels deep.\n\n```scss\n.btn {\n  color: white;\n  background: cyan;\n\n  &-container {\n    margin: 10px 20px;\n\n    &:hover {\n      \u002F* Some fancy animation *\u002F \n    }\n\n    & .overlay {\n       \u002F* There should always be an \"&\" in a nested selectors *\u002F\n    }\n  }\n}\n```\n\n###@nest\nThis is a new `at-rule` that helps us overcome some of the limitations of nesting using the `&`. Look at the following code:\n\n```scss\n.section {\n\t\u002F* etc ... *\u002F\n}\n\n.section {\n\t\u002F* etc ... *\u002F\n\n\t.blog {\n        \u002F* We want to reference the blog container which is inside the .section. *\u002F\n    }\n}\n```\n\nFor this, we can use the `@nest` rule. This rule shifts the reference of the `&` to another selector we specify.\n\n```scss\n.main {\n\t\u002F* etc ... *\u002F\n\n\t.blog {\n\t\t@nest .section & {\n                        \u002F* The \"&\" refers to \".section\" *\u002F\n\t\t\tbackground: red;\n\t\t}\n\t}\n}\n\n```\n\n\n###Nesting Media Queries\nFor people who are familiar with Sass, the \"normal\" code looks like this:\n\n```scss\n.section {\n  @media(\u002F* some media query *\u002F) {\n    \u002F* styles... *\u002F\n  }\n\n}\n```\n\nHowever, this is slightly different. In css, the styles must be enclosed in \"&\".\n\n```scss\n  @media(\u002F* some media query *\u002F) {\n    & {\n      \u002F* styles... *\u002F\n    }\n  }\n```\n\n* Normal code\n```css\n.table.xyz \u003E th.y \u003E p.abc {\n  font-size: 1rem;\n  color: white;\n}\n\n.table.xyz \u003E th.y \u003E p.abc-primary {\n  font-size: 1.4rem;\n}\n```\n\n* The Power of nesting 💪 💪 💪\n```css\n.table.xyz \u003E th.y \u003E p.abc {\n  font-size: 1rem;\n  color: white;\n\n  &-primary {\n    font-size: 1.4rem\n  }\n}\n```\n\n####Makes code more readable\n\nAs soon as you look the code, you can go \"Aha, anything between those outer curly braces is related to buttons or `.btn`! Not my business!\"\n\n\n###A gotcha\nOne thing to keep in mind is that any css which is after nested selectors is flat out ignored. However, any nesting that is followed is completely valid.\n\n```scss\n.x {\n  &-y {\n    \u002F* styles... *\u002F\n  }\n\n  a {\n    \u002F* invalid *\u002F\n  }\n\n  &-z {\n    \u002F* valid *\u002F\n  }\n}\n```\n\nThat's it guys! Thank you for reading this post. Please give it a like and follow me on dev.to for more content based on HTML & CSS, Javascript, React and NodeJS. To my dear regular readers,  I'm sorry about not writing any articles in the past few weeks, I was quite busy. Bye guys 🤟\n\n\n\n\n",user:{name:"Akash Shyam",username:"akashshyam",twitter_username:"AkashShyam11",github_username:"akashshyamdev",website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--HcFiU3xO--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F499259\u002F11ca155a-637a-49cc-ae2d-69df31f0e321.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--stiEpx70--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F499259\u002F11ca155a-637a-49cc-ae2d-69df31f0e321.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Fakashshyam\u002F685209",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-05-02T06:33:40Z","https:\u002F\u002Fdev.to\u002Fakashshyam\u002Fselector-nesting-has-come-to-css-532i",7));