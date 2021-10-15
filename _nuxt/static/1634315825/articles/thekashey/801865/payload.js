__NUXT_JSONP__("/articles/thekashey/801865", (function(a,b,c,d,e,f){c.type_of="article";c.id=801865;c.title="BEM vs CSS Grid";c.description="Everything you might like about Grids always has been a part of BEM";c.readable_publish_date="Aug 28";c.slug="bem-vs-css-grid-22e8";c.path="\u002Fthekashey\u002Fbem-vs-css-grid-22e8";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qWB5HG12--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnehq74qg1p9r3uhddejg.jpeg";c.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--8CgjodAf--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnehq74qg1p9r3uhddejg.jpeg";c.canonical_url=d;c.created_at="2021-08-24T10:53:58Z";c.edited_at="2021-09-12T07:13:03Z";c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=5;c.tag_list="bem, css, maintenance, webdev";c.tags=["bem","css","maintenance","webdev"];c.body_html="\u003Cp\u003E\u003Ccode\u003EBEM\u003C\u002Fcode\u003E is not a “naming convention”. It’s a separation between \u003Ccode\u003EBlocks\u003C\u002Fcode\u003E and \u003Ccode\u003EElements\u003C\u002Fcode\u003E. And \u003Ccode\u003EModifiers\u003C\u002Fcode\u003E... but let’s just forget about them for a while. \u003Cbr\u003E\nToday we better focus on something different.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo, I've written this article because people do not understand the core principles behind \u003Ccode\u003EBEM\u003C\u002Fcode\u003E, not to be able to see them behind other features. \u003Cbr\u003E\nThis is why let’s forget about \u003Ccode\u003EBEM\u003C\u002Fcode\u003E for a while as well.\u003C\u002Fp\u003E\n\n\u003Cp\u003ETo get things started we all can generally agree that…\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"css-grids-are-awesome\" href=\"#css-grids-are-awesome\"\u003E\n  \u003C\u002Fa\u003E\n  CSS Grids are awesome 🥳\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EThe main difference between \u003Ccode\u003Edisplay block\u003C\u002Fcode\u003E and \u003Ccode\u003Edisplay flex\u003C\u002Fcode\u003E is that the first one sees all children nodes as a separate elements, while they act like a Team🤜 within \u003Ccode\u003Eflex\u003C\u002Fcode\u003E – they can \u003Cem\u003Egrow\u003C\u002Fem\u003E and \u003Cem\u003Eshrink\u003C\u002Fem\u003E.\u003Cbr\u003E\nThey are connected.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qvG_7YPQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Foentles2l2rwn9cppfrq.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--qvG_7YPQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Foentles2l2rwn9cppfrq.png\" alt=\"Flex Grow\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003EGrid\u003C\u002Fcode\u003E fosters this connection, lets you handle bigger blocks, giving more power and more control.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBut there is one big difference, really \u003Cstrong\u003EBIG\u003C\u002Fstrong\u003E difference, - the majority of power and control is given to the “grid parent”, not “grid element”\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7m8FPFqW--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmny1ai5v9w4fg50ca6gn.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7m8FPFqW--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmny1ai5v9w4fg50ca6gn.png\" alt=\"Grid Areas\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet's imagine a conversation between Grid and Cell:\u003C\u002Fp\u003E\n\n\u003Cp\u003E🤖: Dear Grid-Item, I've prepared a place for you, where shall you stay according to my very plan 😈\u003Cbr\u003E\n📦: Can I have my own opinion?\u003Cbr\u003E\n🤖: Dear Grid-Item, well yes, some of you can move self to other places, but not particularly you 😅. Please stay within my template because I do have a plan for you 👮🏻‍♂️.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd like the \u003Ccode\u003EGrid\u003C\u002Fcode\u003E, which can use \u003Ccode\u003Egrid template\u003C\u002Fcode\u003E or \u003Ccode\u003Egrid areas\u003C\u002Fcode\u003E to control all direct children, BEM also has a plan...\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"bem-has-a-plan\" href=\"#bem-has-a-plan\"\u003E\n  \u003C\u002Fa\u003E\n  BEM has a Plan\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ETechnically speaking \u003Ccode\u003EBEM\u003C\u002Fcode\u003E works in the same way as \u003Ccode\u003EGrid\u003C\u002Fcode\u003E - they share the same ideology. \u003Ccode\u003EBEM\u003C\u002Fcode\u003E is just not bound to the \"2d grid\" and one level of children nodes.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIt can be easier to think about \u003Ccode\u003EBEM\u003C\u002Fcode\u003E from a \u003Ccode\u003EComponent Model\u003C\u002Fcode\u003E point of view:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Ethere is a \u003Ccode\u003EParent\u003C\u002Fcode\u003E component and a few \u003Ccode\u003EElements\u003C\u002Fcode\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cem\u003Eaccording to the plan\u003C\u002Fem\u003E \u003Ccode\u003EElements\u003C\u002Fcode\u003E has to be placed in some well known location.\u003C\u002Fli\u003E\n\u003Cli\u003Echildren \u003Ccode\u003EElements\u003C\u002Fcode\u003E should not think or even know about their placement.\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight tsx\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EParentTemplate\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Ehtml\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Ebody\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eheader\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eslot\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n           \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003EComponent1\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E\u002F&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003E---\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003EAnother\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eblock\u003C\u002Fspan\u003E\n        \u003Cspan class=\"err\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003Eslot\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eheader\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eslot\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n         \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003EComponent2\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E\u002F&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003E---\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003EAnother\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003Eblock\u003C\u002Fspan\u003E\n        \u003Cspan class=\"err\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003Eslot\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n      \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Ebody\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E \n  \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Ehtml\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Cb5OlT9O--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fn8bnhaoa7pgk0373a8ww.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Cb5OlT9O--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fn8bnhaoa7pgk0373a8ww.png\" alt=\"BEM Composition\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"a-few-rules\" href=\"#a-few-rules\"\u003E\n  \u003C\u002Fa\u003E\n  A few rules\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ELet me be honest - there are two major sites about BEM methodology, where you can read some information - \u003Ca href=\"http:\u002F\u002Fgetbem.com\u002F\"\u003Ehttp:\u002F\u002Fgetbem.com\u002F\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fen.bem.info\u002F\"\u003Ehttps:\u002F\u002Fen.bem.info\u002F\u003C\u002Fa\u003E. I hope you likely to see the key information hidden between the lines, but according to my experience no one has seen it yet.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EBEM is not about that-strange__naming--convention\u003Cbr\u003E\nBEM is about the Separation between \u003Ccode\u003EB\u003C\u002Fcode\u003E and \u003Ccode\u003EE\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EHere is what you might miss:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EElements do not lay themselves out\u003C\u002Fstrong\u003E. Parent \u003Ccode\u003EBlock\u003C\u002Fcode\u003E does\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EBlock style themselves and layout only their children\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EBlocks cannot be (visually) styled 🎨 outside\u003C\u002Fstrong\u003E, except via own known \u003Ccode\u003EModifiers\u003C\u002Fcode\u003E \u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003EEvery \u003Ccode\u003EElement\u003C\u002Fcode\u003E can be a \u003Ccode\u003EBlock\u003C\u002Fcode\u003E\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003ENote: \"Children\" is not an \"immediate DOM node\". Still easy to think in React terms - children is everything defined among component\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\n\u003C\u002Fblockquote\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight tsx\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EList\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\n \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eul\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E \u002F\u002F children\n  \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eli\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E \u002F\u002F also children\n   \u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"nc\"\u003ESomeItem\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E \u002F\u002F still children, but also a Block\n  \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eli\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n \u003Cspan class=\"p\"\u003E&lt;\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nt\"\u003Eul\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"rule-them-all\" href=\"#rule-them-all\"\u003E\n  \u003C\u002Fa\u003E\n  Rule them all\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EHow \u003Ccode\u003EBlock\u003C\u002Fcode\u003E can rule children? Usually (for the last 15 years? BEM was created back in 2006) by passing extra \u003Ccode\u003Eclassname\u003C\u002Fcode\u003E, which is expected to obey the principles above and cannot \u003Cem\u003Estyle\u003C\u002Fem\u003E \u003Ccode\u003Echildren\u003C\u002Fcode\u003E, except using \u003Ccode\u003Emodifiers\u003C\u002Fcode\u003E defined in the \u003Ccode\u003Echildren\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Emodifiers\u003C\u002Fcode\u003E are \u003Cem\u003Eequal\u003C\u002Fem\u003E to (React) \u003Ccode\u003Eprops\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003E\u003Ccode\u003EBlock\u003C\u002Fcode\u003E only can:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cem\u003Elay\u003C\u002Fem\u003E \u003Ccode\u003EElements\u003C\u002Fcode\u003E inside. In the same way \u003Ccode\u003EGrid\u003C\u002Fcode\u003E can \u003Cem\u003Elay\u003C\u002Fem\u003E \u003Ccode\u003EGrid-Items\u003C\u002Fcode\u003E inside.\u003C\u002Fli\u003E\n\u003Cli\u003Econfigure own children by picking\u002Fusing different modifiers\u002Fprops, but only among the explicitly supported by children Components. Well, you can do the same with \u003Ccode\u003EGrids\u003C\u002Fcode\u003E, not something particular bound to BEM.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ELook like there are at least something in common between BEM and Grid. Grids are just more about \"how\" to do something - they are providing a particular way to command a Browser Engine. While BEM 🤷‍♂️ it's just a way to keep things clear\u003C\u002Fp\u003E\n\n\u003Cp\u003EBoth Grid and BEM define layout for their children gently asking those children not to interfere.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EWhile this moment might sounds like NOT something really important - it is the core essence of both technologies\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EStep away from technical implementation. Try to understand the intent behind the actual approach and principles according to which both technologies ended like this.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"what-to-do\" href=\"#what-to-do\"\u003E\n  \u003C\u002Fa\u003E\n  What to do\n\u003C\u002Fh1\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E(dimension) do not let components define own dimensions - different Parents can have different Plans\n\n\u003Cul\u003E\n\u003Cli\u003Eand your parent will configure \"you\" one way or another - or by placing \"you\" in \u003Ccode\u003Egrid\u003C\u002Fcode\u003E (browser layout) or by giving you extra classname with \u003Ccode\u003Eflex\u003C\u002Fcode\u003E styles (explicit layout). That is not \"your\" problem.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003E(gaps) do not let components define margins - that gonna break any order anyone will try to establish\n\n\u003Cul\u003E\n\u003Cli\u003Emargins are still file, just define it \"inside\" block, the area under your control, not \"outside\", creating unexpected behaviour for consumers.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003E(isolation) do not style other components, tell them what they shall do\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"so-what\" href=\"#so-what\"\u003E\n  \u003C\u002Fa\u003E\n  So what?\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ESo please stop writing random code, which always ends in some messy, completely unmaintainable state, causing a lot of performance issues, especially if you overuse CSS-in-JS for no reason.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThink structurally. Think in relationships. Think about you styles in the same way you think about your code, files, function and packages - and I believe there are some rules you follow and some pain you've experienced due to bad habits.\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Cp\u003EWell, apart of Grids there is another concept which should explain you the main point behind separation of responsibilities and concerns - \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FOpen%E2%80%93closed_principle\"\u003EOpen Closed Principle\u003C\u002Fa\u003E, a part of \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSOLID\"\u003ESOLID pattern\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003Esoftware entities should be open for extension, but closed for modification\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EWhich, in this case, controls what Elements can be \u003Cem\u003Easked\u003C\u002Fem\u003E to do by Blocks(blocks are \"extension\"), and how Blocks could not affect Elements(which are \"closed for modification\")\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"see-also\" href=\"#see-also\"\u003E\n  \u003C\u002Fa\u003E\n  See also:\n\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnon-traditional.dev\u002Fencapsulated-css-the-key-to-composable-layouts-94f11c177cc1\"\u003Ehttps:\u002F\u002Fnon-traditional.dev\u002Fencapsulated-css-the-key-to-composable-layouts-94f11c177cc1\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.joshwcomeau.com\u002Fcss\u002Fstyled-components\u002F#isolated-css\"\u003Ehttps:\u002F\u002Fwww.joshwcomeau.com\u002Fcss\u002Fstyled-components\u002F#isolated-css\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fmxstbr.com\u002Fthoughts\u002Fmargin\u002F\"\u003Ehttps:\u002F\u002Fmxstbr.com\u002Fthoughts\u002Fmargin\u002F\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"wait\" href=\"#wait\"\u003E\n  \u003C\u002Fa\u003E\n  Wait!\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EShould you read anything about BEM methodology in particular?\u003C\u002Fp\u003E\n\n\u003Cp\u003ENo, because:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Eyou don't need naming pattern with CSSModules, and especially CSS-in-JS\u003C\u002Fli\u003E\n\u003Cli\u003Ethe main thing is a separation, and frankly speaking it does not have to be exactly the same separation\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EKeep the last point in mind. Remember how Grids work. Only then go and research information about BEM you can found in other places. \u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd keep in your mind one more thing - as I've mentioned above the vast majority of developers, including the ones who uses BEM, \"did not get the point\", something more than that_strange__naming--pattern.\u003Cbr\u003E\nI know this for sure. I was among them.\u003C\u002Fp\u003E\n\n";c.body_markdown="---\ntitle: BEM vs CSS Grid\npublished: true\ndescription: Everything you might like about Grids always has been a part of BEM\ntags: bem, css, maintenance, webdev\ncover_image: https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fnehq74qg1p9r3uhddejg.jpeg\n---\n`BEM` is not a “naming convention”. It’s a separation between `Blocks` and `Elements`. And `Modifiers`... but let’s just forget about them for a while. \nToday we better focus on something different.\n\nSo, I've written this article because people do not understand the core principles behind `BEM`, not to be able to see them behind other features. \nThis is why let’s forget about `BEM` for a while as well.\n\nTo get things started we all can generally agree that…\n\n# CSS Grids are awesome 🥳\nThe main difference between `display block` and `display flex` is that the first one sees all children nodes as a separate elements, while they act like a Team🤜 within `flex` – they can _grow_ and _shrink_.\nThey are connected.\n\n![Flex Grow](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Foentles2l2rwn9cppfrq.png)\n\n`Grid` fosters this connection, lets you handle bigger blocks, giving more power and more control.\n\nBut there is one big difference, really __BIG__ difference, - the majority of power and control is given to the “grid parent”, not “grid element”\n\n![Grid Areas](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmny1ai5v9w4fg50ca6gn.png)\n\nLet's imagine a conversation between Grid and Cell:\n\n🤖: Dear Grid-Item, I've prepared a place for you, where shall you stay according to my very plan 😈\n📦: Can I have my own opinion?\n🤖: Dear Grid-Item, well yes, some of you can move self to other places, but not particularly you 😅. Please stay within my template because I do have a plan for you 👮🏻‍♂️.\n\nAnd like the `Grid`, which can use `grid template` or `grid areas` to control all direct children, BEM also has a plan...\n\n# BEM has a Plan\nTechnically speaking `BEM` works in the same way as `Grid` - they share the same ideology. `BEM` is just not bound to the \"2d grid\" and one level of children nodes.\n\nIt can be easier to think about `BEM` from a `Component Model` point of view:\n- there is a `Parent` component and a few `Elements`\n- _according to the plan_ `Elements` has to be placed in some well known location.\n- children `Elements` should not think or even know about their placement.\n\n```tsx\nconst ParentTemplate = () =\u003E (\n  \u003Chtml\u003E\n    \u003Cbody\u003E\n      \u003Cheader\u003E\n        \u003Cslot\u003E\n           \u003CComponent1 \u002F\u003E \u003C--- Another block\n        \u003C\u002Fslot\u003E\n      \u003C\u002Fheader\u003E\n      \u003Cmain\u003E\n        \u003Cslot\u003E\n         \u003CComponent2 \u002F\u003E \u003C--- Another block\n        \u003C\u002Fslot\u003E\n      \u003C\u002Fmain\u003E\n    \u003C\u002Fbody\u003E \n  \u003C\u002Fhtml\u003E \n```\n\n![BEM Composition](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fn8bnhaoa7pgk0373a8ww.png)\n\n# A few rules\nLet me be honest - there are two major sites about BEM methodology, where you can read some information - http:\u002F\u002Fgetbem.com\u002F and https:\u002F\u002Fen.bem.info\u002F. I hope you likely to see the key information hidden between the lines, but according to my experience no one has seen it yet.\n\n\u003E BEM is not about that-strange__naming--convention\nBEM is about the Separation between `B` and `E`\n\nHere is what you might miss:\n- __Elements do not lay themselves out__. Parent `Block` does\n- __Block style themselves and layout only their children__.\n- __Blocks cannot be (visually) styled 🎨 outside__, except via own known `Modifiers` \n- __Every `Element` can be a `Block`__\n\n\u003E Note: \"Children\" is not an \"immediate DOM node\". Still easy to think in React terms - children is everything defined among component\n\n```tsx\nconst List = () =\u003E (\n \u003Cul\u003E \u002F\u002F children\n  \u003Cli\u003E \u002F\u002F also children\n   \u003CSomeItem\u003E \u002F\u002F still children, but also a Block\n  \u003C\u002Fli\u003E\n \u003C\u002Ful\u003E\n```\n\n# Rule them all\nHow `Block` can rule children? Usually (for the last 15 years? BEM was created back in 2006) by passing extra `classname`, which is expected to obey the principles above and cannot _style_ `children`, except using `modifiers` defined in the `children`.\n\u003E `modifiers` are _equal_ to (React) `props`\n\n`Block` only can:\n- _lay_ `Elements` inside. In the same way `Grid` can _lay_ `Grid-Items` inside.\n- configure own children by picking\u002Fusing different modifiers\u002Fprops, but only among the explicitly supported by children Components. Well, you can do the same with `Grids`, not something particular bound to BEM.\n\nLook like there are at least something in common between BEM and Grid. Grids are just more about \"how\" to do something - they are providing a particular way to command a Browser Engine. While BEM 🤷‍♂️ it's just a way to keep things clear\n\nBoth Grid and BEM define layout for their children gently asking those children not to interfere.\n\n\u003E While this moment might sounds like NOT something really important - it is the core essence of both technologies\n\nStep away from technical implementation. Try to understand the intent behind the actual approach and principles according to which both technologies ended like this.\n\n# What to do\n- (dimension) do not let components define own dimensions - different Parents can have different Plans\n  - and your parent will configure \"you\" one way or another - or by placing \"you\" in `grid` (browser layout) or by giving you extra classname with `flex` styles (explicit layout). That is not \"your\" problem.\n- (gaps) do not let components define margins - that gonna break any order anyone will try to establish\n  - margins are still file, just define it \"inside\" block, the area under your control, not \"outside\", creating unexpected behaviour for consumers.\n- (isolation) do not style other components, tell them what they shall do\n\n# So what?\nSo please stop writing random code, which always ends in some messy, completely unmaintainable state, causing a lot of performance issues, especially if you overuse CSS-in-JS for no reason.\n\nThink structurally. Think in relationships. Think about you styles in the same way you think about your code, files, function and packages - and I believe there are some rules you follow and some pain you've experienced due to bad habits.\n\n---\n\nWell, apart of Grids there is another concept which should explain you the main point behind separation of responsibilities and concerns - [Open Closed Principle](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FOpen%E2%80%93closed_principle), a part of [SOLID pattern](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSOLID)\n\n\u003E software entities should be open for extension, but closed for modification\n\nWhich, in this case, controls what Elements can be _asked_ to do by Blocks(blocks are \"extension\"), and how Blocks could not affect Elements(which are \"closed for modification\")\n\n## See also:\n- https:\u002F\u002Fnon-traditional.dev\u002Fencapsulated-css-the-key-to-composable-layouts-94f11c177cc1\n- https:\u002F\u002Fwww.joshwcomeau.com\u002Fcss\u002Fstyled-components\u002F#isolated-css\n- https:\u002F\u002Fmxstbr.com\u002Fthoughts\u002Fmargin\u002F\n\n### Wait!\nShould you read anything about BEM methodology in particular?\n\nNo, because:\n- you don't need naming pattern with CSSModules, and especially CSS-in-JS\n- the main thing is a separation, and frankly speaking it does not have to be exactly the same separation\n\nKeep the last point in mind. Remember how Grids work. Only then go and research information about BEM you can found in other places. \n\nAnd keep in your mind one more thing - as I've mentioned above the vast majority of developers, including the ones who uses BEM, \"did not get the point\", something more than that_strange__naming--pattern.\nI know this for sure. I was among them.";c.user={name:"Anton Korzunov",username:"thekashey",twitter_username:f,github_username:f,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--3Koo3QYC--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F113306\u002F18ae0122-205c-4952-8f73-240175b4ae1d.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--C_ofVwh3--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F113306\u002F18ae0122-205c-4952-8f73-240175b4ae1d.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-08-28T05:14:18Z",{},"https:\u002F\u002Fdev.to\u002Fthekashey\u002Fbem-vs-css-grid-22e8",7,"theKashey")));