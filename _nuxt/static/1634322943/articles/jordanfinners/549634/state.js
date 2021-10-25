window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:549634,title:"How I improved my code by returning early, returning often!",description:"Contents    Intro Return Single Purpose Functions Summary            Intro    I've been a de...",readable_publish_date:"Dec 22 '20",slug:"how-i-improved-my-code-by-returning-early-returning-often-e8k",path:"\u002Fjordanfinners\u002Fhow-i-improved-my-code-by-returning-early-returning-often-e8k",url:"https:\u002F\u002Fdev.to\u002Fjordanfinners\u002Fhow-i-improved-my-code-by-returning-early-returning-often-e8k",comments_count:10,public_reactions_count:b,collection_id:a,published_timestamp:c,positive_reactions_count:b,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--mqflh2O1--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fon4kra7528wlukl78acg.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7M2SYnxe--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fon4kra7528wlukl78acg.png",canonical_url:"https:\u002F\u002Fjordanfinners.dev\u002Fblogs\u002Fhow-i-improved-my-code-by-returning-early-returning-often",created_at:"2020-12-22T11:21:02Z",edited_at:"2021-03-13T16:47:13Z",crossposted_at:a,published_at:c,last_comment_at:"2020-12-28T18:48:07Z",reading_time_minutes:3,tag_list:"javascript, go, beginners, functional",tags:["javascript","go","beginners","functional"],body_html:"\u003Ch1\u003E\n  \u003Ca name=\"contents\" href=\"#contents\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Contents\n\u003C\u002Fh1\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\u003Ca href=\"#intro\"\u003EIntro\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#return\"\u003EReturn\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#single-purpose-functions\"\u003ESingle Purpose Functions\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"#summary\"\u003ESummary\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"intro\" href=\"#intro\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Intro \u003Ca name=\"intro\"\u003E\u003C\u002Fa\u003E\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EI've been a developer for over 5 years now and one of the best things that I've learned is functional programming. Which gets a lot of hype and can be a bit daunting but I've broken down into a few simple ideas:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EReturning early and often\u003C\u002Fli\u003E\n\u003Cli\u003ESingle purpose functions\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThese are pretty tightly coupled and inspired by my friends post (which you should definitely \u003Ca href=\"https:\u002F\u002Fdev.to\u002Fdglsparsons\u002Fwrite-better-code-and-be-a-better-programmer-by-never-using-else-statements-4dbl\"\u003Echeck out\u003C\u002Fa\u003E) about NEVER using ELSE.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"return\" href=\"#return\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Return \u003Ca name=\"return\"\u003E\u003C\u002Fa\u003E\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EHere's an example in Go. We'll load some data, do some work on the data and return the result. Loading data and doing some calculation could both return an error as well as the actual thing we want.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight go\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Efunc\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"n\"\u003Edata\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E:=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EloadData\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"n\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E:=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EsomeCalculation\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Edata\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ENow that code will run fine, however if there is an error from load data and doing the calculation, we'll only ever see the second error as it will override the original error. \u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EA nightmare to debug!\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003ENot only that but we'll also be doing extra computation we don't need!\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe can fix it up by checking for error and returning that early.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight go\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Efunc\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"n\"\u003Edata\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E:=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EloadData\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E!=\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Enil\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Enil\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"n\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E:=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EsomeCalculation\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Edata\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E!=\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Enil\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Enil\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eerr\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Enil\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThis will save us doing any extra computation unnecessarily and gives us context if any error happens.\u003Cbr\u003E\nThis second code block could be improved further with proper logging too.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIt'll be much easier to debug when something goes wrong too!\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"single-purpose-functions\" href=\"#single-purpose-functions\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Single Purpose Functions \u003Ca name=\"single-purpose-functions\"\u003E\u003C\u002Fa\u003E\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EReturning early and often also helps lead us to functions with only a single purpose.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet's take the following example of some routing in JavaScript. \u003Cbr\u003E\nImagine we're parsing the URL e.g. \u003Ccode\u003E\u002F:page\u003C\u002Fcode\u003E\u003Cbr\u003E\nBased on the page import some code. We also could have no page value set if someone goes to just \u003Ccode\u003E\u002F\u003C\u002Fcode\u003E. We also only want to load the profile code if a user is authenticated.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can see its pretty complex to read and already wrong as it is missing an else and we're not returning anything so could lead to some mutations.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E!\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E||\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ehome\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fhome.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eelse\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eblog\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fblog.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eelse\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Elogin\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Flogin.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \n\u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eprofile\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&amp;&amp;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EisUserAuthenticated\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fprofile.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eelse\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Flost.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ELet's break it out into single purpose functions!\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe'll start by checking if the page is known to us.\u003Cbr\u003E\nThen check if the page needs authentication and if the user is logged in.\u003Cbr\u003E\nFinally, we'll import the write code depending on the page.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F**\n * Check if the page is a known page\n * Default to home page if route is just \u002F\n * Otherwise show lost page\n * @param {String} page the page parsed from the url\n * @returns {String} validated page to go to\n *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EvalidatePage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E!\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ehome\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E([\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eprofile\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eblog\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Elogin\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E].\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eincludes\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E))\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Elost\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F**\n * Check if the page is authorised and we have a user logged in\n * Otherwise, they need to login\n * @param {String} page the validated page\n * @param {Boolean} isUserAuthenticated if the user is logged in\n * @returns {String} the page to go to \n *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EvalidateAuthorisedPage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EisUserAuthenticated\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EauthenticatedPages\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eprofile\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EauthenticatedPages\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eincludes\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E&amp;&amp;\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EisUserAuthenticated\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Elogin\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F**\n * Import the right code for each page\n * @param {String} page to load\n * @returns {Promise} the pending import\n *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EimportPage\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Easync\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eswitch\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epage\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ecase\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Ehome\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fhome.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ecase\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eblog\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fblog.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ecase\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Eprofile\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Fprofile.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ecase\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Elogin\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Flogin.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Edefault\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n      \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eimport\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E.\u002Flost.js\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EYou can see that each of these is only responsible for doing one thing! It also takes advantage of returning early and often too.\u003Cbr\u003E\nThis makes it easier to read, understand, and makes testing a breeze!\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"summary\" href=\"#summary\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Summary \u003Ca name=\"summary\"\u003E\u003C\u002Fa\u003E\n\u003C\u002Fh1\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EIn summary, mutation is the enemy!\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EThinking about returning as early as possible helps keep our code simple, leads to easier error handling and less likely for side effects to occur!\u003C\u002Fp\u003E\n\n\u003Cp\u003EWhat do you think? Any other tips for simpler code?\u003C\u002Fp\u003E\n\n",body_markdown:"# Contents \n1. [Intro](#intro)\n2. [Return](#return)\n3. [Single Purpose Functions](#single-purpose-functions)\n4. [Summary](#summary)\n\n\n# Intro \u003Ca name=\"intro\"\u003E\u003C\u002Fa\u003E\n\nI've been a developer for over 5 years now and one of the best things that I've learned is functional programming. Which gets a lot of hype and can be a bit daunting but I've broken down into a few simple ideas:\n* Returning early and often\n* Single purpose functions\n\nThese are pretty tightly coupled and inspired by my friends post (which you should definitely [check out](https:\u002F\u002Fdev.to\u002Fdglsparsons\u002Fwrite-better-code-and-be-a-better-programmer-by-never-using-else-statements-4dbl)) about NEVER using ELSE.\n\n# Return \u003Ca name=\"return\"\u003E\u003C\u002Fa\u003E\n\nHere's an example in Go. We'll load some data, do some work on the data and return the result. Loading data and doing some calculation could both return an error as well as the actual thing we want.\n```golang\nfunc main() {\n\tdata, err := loadData()\n\n\tresult, err := someCalculation(data)\n\n\treturn result, err\n}\n```\nNow that code will run fine, however if there is an error from load data and doing the calculation, we'll only ever see the second error as it will override the original error. \n\n\u003E A nightmare to debug!\n\nNot only that but we'll also be doing extra computation we don't need!\n\nWe can fix it up by checking for error and returning that early.\n```golang\nfunc main() {\n\tdata, err := loadData()\n\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\tresult, err := someCalculation(data)\n\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\treturn result, nil\n}\n```\nThis will save us doing any extra computation unnecessarily and gives us context if any error happens.\nThis second code block could be improved further with proper logging too.\n\nIt'll be much easier to debug when something goes wrong too!\n\n# Single Purpose Functions \u003Ca name=\"single-purpose-functions\"\u003E\u003C\u002Fa\u003E\n\nReturning early and often also helps lead us to functions with only a single purpose.\n\nLet's take the following example of some routing in JavaScript. \nImagine we're parsing the URL e.g. `\u002F:page`\nBased on the page import some code. We also could have no page value set if someone goes to just `\u002F`. We also only want to load the profile code if a user is authenticated.\n\nYou can see its pretty complex to read and already wrong as it is missing an else and we're not returning anything so could lead to some mutations.\n```javascript\nif (!page || page === 'home') {\n  import('.\u002Fhome.js')\n} else if (page === 'blog') {\n  import('.\u002Fblog.js')\n} else if (page === 'login') {\n  import('.\u002Flogin.js')\n} \nif (page === 'profile' && isUserAuthenticated) {\n  import('.\u002Fprofile.js')\n} else {\n  import('.\u002Flost.js')\n}\n```\nLet's break it out into single purpose functions!\n\nWe'll start by checking if the page is known to us.\nThen check if the page needs authentication and if the user is logged in.\nFinally, we'll import the write code depending on the page.\n```javascript\n\u002F**\n * Check if the page is a known page\n * Default to home page if route is just \u002F\n * Otherwise show lost page\n * @param {String} page the page parsed from the url\n * @returns {String} validated page to go to\n *\u002F\nconst validatePage = (page) =\u003E {\n  if (!page) {\n    return 'home'\n  }\n  if (['profile', 'blog', 'login'].includes(page)) {\n    return page\n  }\n  return 'lost'\n}\n\n\u002F**\n * Check if the page is authorised and we have a user logged in\n * Otherwise, they need to login\n * @param {String} page the validated page\n * @param {Boolean} isUserAuthenticated if the user is logged in\n * @returns {String} the page to go to \n *\u002F\nconst validateAuthorisedPage = (page, isUserAuthenticated) =\u003E {\n  const authenticatedPages = ['profile']\n  if (authenticatedPages.includes(page) && isUserAuthenticated) {\n    return page\n  }\n  return 'login'\n}\n\n\u002F**\n * Import the right code for each page\n * @param {String} page to load\n * @returns {Promise} the pending import\n *\u002F\nconst importPage = async (page) =\u003E {\n  switch (page) {\n    case 'home':\n      return import('.\u002Fhome.js')\n    case 'blog':\n      return import('.\u002Fblog.js')\n    case 'profile':\n      return import('.\u002Fprofile.js')\n    case 'login':\n      return import('.\u002Flogin.js')\n    default:\n      return import('.\u002Flost.js')\n  }\n}\n```\nYou can see that each of these is only responsible for doing one thing! It also takes advantage of returning early and often too.\nThis makes it easier to read, understand, and makes testing a breeze!\n\n# Summary \u003Ca name=\"summary\"\u003E\u003C\u002Fa\u003E\n\n\u003EIn summary, mutation is the enemy!\n\nThinking about returning as early as possible helps keep our code simple, leads to easier error handling and less likely for side effects to occur!\n\nWhat do you think? Any other tips for simpler code?\n",user:{name:"Jordan Finneran",username:d,twitter_username:"JordanFinners",github_username:d,website_url:"https:\u002F\u002Fjordanfinners.dev",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--o19w6rUc--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F159833\u002F2c60ae3e-d259-4e13-917e-f393c0e60aa5.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--UQ3fL0kc--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F159833\u002F2c60ae3e-d259-4e13-917e-f393c0e60aa5.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fjordanfinners\u002F549634",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,56,"2020-12-22T12:05:16Z","jordanfinners"));