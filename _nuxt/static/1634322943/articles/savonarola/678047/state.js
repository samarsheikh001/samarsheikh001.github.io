window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:678047,title:"Why SOLID may be useful for you in Elixir",description:"Intro   Software development is difficult. One of the ways to overcome difficulties of...",readable_publish_date:"Apr 26",slug:"why-solid-may-be-useful-for-you-in-elixir-58me",path:"\u002Fsavonarola\u002Fwhy-solid-may-be-useful-for-you-in-elixir-58me",url:c,comments_count:0,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F678047.png",canonical_url:c,created_at:"2021-04-25T13:39:43Z",edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:6,tag_list:"erlang, elixir, solid, patterns",tags:["erlang","elixir","solid","patterns"],body_html:"\u003Ch2\u003E\n  \u003Ca name=\"intro\" href=\"#intro\"\u003E\n  \u003C\u002Fa\u003E\n  Intro\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESoftware development is difficult. One of the ways to overcome difficulties of building software is to use so-called architectural patterns, for example well known \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSOLID\"\u003ESOLID\u003C\u002Fa\u003E principles.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBut trying to apply these principles in Elixir we often hesitate:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003ECould these principles be even applicable? Don't they refer to classical OOP languages, while Elixir is a functional language?\u003C\u002Fli\u003E\n\u003Cli\u003EAre these principles useful at all? Does this stuff even refer to programming practice and not only to \"clever\" books with fictional class hierarchies of rectangles and squares? This is even more disturbing when our everyday work consists mostly of putting code into predefined places provided by \"frameworks\": views, controllers, models, etc.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EThis article is a small attempt to illustrate positive answers to these questions with real issues of a real OSS Elixir library (\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\"\u003ESMPPEX\u003C\u002Fa\u003E).\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"smppex\" href=\"#smppex\"\u003E\n  \u003C\u002Fa\u003E\n  SMPPEX\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\"\u003ESMPPEX\u003C\u002Fa\u003E is an Elixir library for interacting via \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FShort_Message_Peer-to-Peer\"\u003ESMPP protocol\u003C\u002Fa\u003E. It is popular for interfaces of mobile operators.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe structure of this protocol is not very important, it's enough to say that it is an asynchronous binary protocol over TCP.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESMPPEX is based on \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fninenines\u002Franch\"\u003Eranch\u003C\u002Fa\u003E and handles TCP connections in the following way:\u003Cbr\u003E\n\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WGTX3Uoq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F5p4zhymxwvkvmy5kulef.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WGTX3Uoq--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F5p4zhymxwvkvmy5kulef.png\" alt=\"SMPPEX Scheme\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"behaviors\" href=\"#behaviors\"\u003E\n  \u003C\u002Fa\u003E\n  Behaviors\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EWe need to say a few words about \u003Cem\u003Ebehaviors\u003C\u002Fem\u003E. Behaviors is an Erlang way for specifying interfaces. Each Erlang (and Elixir) module can define so-called \u003Ccode\u003Ecallbacks\u003C\u002Fcode\u003E:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight elixir\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Edefmodule\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003EFoo\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edo\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nv\"\u003E@callback\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Ebar\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Ea\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E::\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Epos_integer\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(),\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eb\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E::\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Et\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E())\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E::\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Et\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Eend\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThen, any module can implement this behavior:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight elixir\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Edefmodule\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003EFooImpl\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edo\u003C\u002Fspan\u003E\n  \u003Cspan class=\"nv\"\u003E@behavior\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003EFoo\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"nv\"\u003E@impl\u003C\u002Fspan\u003E \u003Cspan class=\"no\"\u003Etrue\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Ebar\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Ea\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edo\u003C\u002Fspan\u003E\n    \u003Cspan class=\"no\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eduplicate\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Ea\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eend\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Eend\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EAfter that this module can be safely used whenever \u003Ccode\u003EFoo\u003C\u002Fcode\u003E beahaviour is required.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight elixir\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Edo_smth\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Efoo_impl_module\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edo\u003C\u002Fspan\u003E\n  \u003Cspan class=\"o\"\u003E...\u003C\u002Fspan\u003E\n  \u003Cspan class=\"n\"\u003Es\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Efoo_impl_module\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Ebar\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E5\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"s2\"\u003E\"abc\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n  \u003Cspan class=\"o\"\u003E...\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Eend\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"o\"\u003E...\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"n\"\u003Edo_smth\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"no\"\u003EFooImpl\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"behaviors-in-smppex\" href=\"#behaviors-in-smppex\"\u003E\n  \u003C\u002Fa\u003E\n  Behaviors in SMPPEX\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThere are two main modules for handling sessions (see picture).\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ccode\u003ESMPPEX.TransportSession\u003C\u002Fcode\u003E. It works directly with TCP socket, transforms binaries from socket to protocol structs (PDUs) and vice versa, sends PDUs and handles TCP errors. It also defines \u003Ccode\u003ESMPPEX.TransportSession\u003C\u002Fcode\u003E behavior: callbacks for more intellectual PDU handling.\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E. It implements \u003Ccode\u003ESMPPEX.TransportSession\u003C\u002Fcode\u003E behavior. Responsibility of \u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E is to make pings, handle timeouts, correlate request PDUs with response PDUs and so on. \u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E also defines its own behavior: callbacks for placing user defined logic.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ESo, when implementing an SMPP \"server\" or \"client\" (called MC and ESME respectively), one should implement \u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E behavior.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"answer-to-the-first-question\" href=\"#answer-to-the-first-question\"\u003E\n  \u003C\u002Fa\u003E\n  Answer to the first question\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWe see that Elixir allows to define interfaces and to provide polymorphic access to programming entities. That's a major part of OOP (if not the whole OOP according to some definitions). We also have a real example of using this mechanisms in practice.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis allows us to conclude that Elixir code \u003Cem\u003Ecan be a subject\u003C\u002Fem\u003E of analysis through SOLID principles.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBut is this practically useful?\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"history-of-a-very-small-pull-request\" href=\"#history-of-a-very-small-pull-request\"\u003E\n  \u003C\u002Fa\u003E\n  History of a (very) small Pull request\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESMPPEX is a library for quite a specific domain, that's why it is not super popular, but still has a worldwide user base. From time to time users submit their reports and improvement suggestions.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOnce I received a \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fpull\u002F69\u002Ffiles\"\u003EPR\u003C\u002Fa\u003E with a reasonable suggestion: add \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fbeam-telemetry\u002Ftelemetry\"\u003Etelemetry\u003C\u002Fa\u003E integration.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cBLpnfWR--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffd2tjfc1eek069vvsw2f.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cBLpnfWR--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffd2tjfc1eek069vvsw2f.png\" alt=\"PR\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ETelemetry is an Erlang library for tracing arbitrary system events and for handling them independently.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis functionality seemed to be quite useful, but the proposed solution made me think a bit. After some consideration I realized that I wanted to see another solution to problem.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"s-and-o-from-solid\" href=\"#s-and-o-from-solid\"\u003E\n  \u003C\u002Fa\u003E\n  S and O from SOLID\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EWhat made me think so? I think that was subconscious expectation of possible difficulties with supporting this code, but it were the SOLID principles which helped me to come to rational explanation of the feelings.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"s\" href=\"#s\"\u003E\n  \u003C\u002Fa\u003E\n  S\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003ES in SOLID stands for \u003Cem\u003EThe Single-responsibility principle\u003C\u002Fem\u003E:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EThere should never be more than one reason for a class to change.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EObviously we have no \u003Cem\u003Eclass\u003C\u002Fem\u003E, but have a module. It is often somewhat difficult to understand what does \"reason\" mean. That's why I often use another formula of this principle:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EThere should never be more than one party interested in modifying a unit of code.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EObviously, we were going to violate this principle: there were two apparent parties which wanted to share a single module (and even function): me as a supporter of the whole library and the team which needed this functionality and made the PR.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"o\" href=\"#o\"\u003E\n  \u003C\u002Fa\u003E\n  O\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EO in SOLID stands for \u003Cem\u003EThe Open-closed principle\u003C\u002Fem\u003E:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003ESoftware entities ... should be open for extension, but closed for modification.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EIn other words, if we want to add new functionality, our architecture should allow us not to put it into existing classes and functions, but to compose new entities and utilize them.\u003C\u002Fp\u003E\n\n\u003Cp\u003EObviously, we were going to violate this principle too: completely new and unrelated functionality was going to be added to an existing function.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"practical-issues\" href=\"#practical-issues\"\u003E\n  \u003C\u002Fa\u003E\n  Practical issues\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EProbably we shouldn't be strongly concerned if some theoretical constructions are wrecked. That's why we need to demonstrate real-life issues which arise when these principles are violated.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"code-ownership\" href=\"#code-ownership\"\u003E\n  \u003C\u002Fa\u003E\n  Code ownership\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EViolating S-principle and mixing concerns in a single function or module lead to inconveniences for all parties interested in the code.\u003C\u002Fp\u003E\n\n\u003Cp\u003EObviously, as a maintainer of the library, I want the core to be well documented, well tested, and so on. After receiving the new code it would have been harder for me to test code, to modify it and even understand.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOn the other hand, the team which needs this code would like to modify it as fast as is needed for their business and not to wait for my spare time.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"tiers-of-code\" href=\"#tiers-of-code\"\u003E\n  \u003C\u002Fa\u003E\n  Tiers of code\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EEven if this functionality is worth being included (and it actually is), we often want to have different \"tiers\" of support for our code. Our \"core\" code should be well tested, well documented and have wider compatibility (and in case of SMPPEX it really is: see \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\"\u003Edocumentation\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fblob\u002Fmaster\u002F.github\u002Fworkflows\u002Felixir.yml#L19\"\u003Ecompatibility matrix\u003C\u002Fa\u003E).\u003C\u002Fp\u003E\n\n\u003Cp\u003EAt the same time supplementary code may not be so well documented or may be compatible only with newer versions of tools.\u003C\u002Fp\u003E\n\n\u003Ch4\u003E\n  \u003Ca name=\"dependencies\" href=\"#dependencies\"\u003E\n  \u003C\u002Fa\u003E\n  Dependencies\n\u003C\u002Fh4\u003E\n\n\u003Cp\u003EAs can be seen, the proposed PR \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fpull\u002F69\u002Ffiles#diff-dfa6f4ed74c90e5d4fda283d547d366586e690387289bcfd473e3fa5f9ace308R44\"\u003Ebrings a new dependency\u003C\u002Fa\u003E: \u003Ccode\u003Etelemetry\u003C\u002Fcode\u003E. Although it is a useful library, additional dependencies often bring problems and conflicts. It an issue even in such a small library as SMPPEX (see, for example, this \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fissues\u002F83\"\u003Eissue\u003C\u002Fa\u003E), that's why it tries to depend only on Ranch.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe want to allow users of the library to resolve conflicts in minor functionality (even, for example, forking or reimplementing it) and still use the stable core.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAdditionally, \u003Ccode\u003Etelemetry\u003C\u002Fcode\u003E is still at \u003Ccode\u003E0.x\u003C\u002Fcode\u003E versions and one may just not want to depend on \u003Ccode\u003E0.x\u003C\u002Fcode\u003E libraries.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"solution\" href=\"#solution\"\u003E\n  \u003C\u002Fa\u003E\n  Solution\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ESo my proposed solution was:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EHello!\u003C\u002Fp\u003E\n\n\u003Cp\u003EThanks for the proposal.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBut as far as I can see, the proposed solution violates the Open-closed principle. We shouldn't add orthogonal functionality to existing modules and functions.\u003C\u002Fp\u003E\n\n\u003Cp\u003EOne may do the following not to violate the Open-closed principle. Since \u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E implements \u003Ccode\u003ESMPPEX.TransportSession\u003C\u002Fcode\u003E behavior, it is possible to create a \"proxy\" session which\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EImplements \u003Ccode\u003ESMPPEX.TransportSession\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003EContains only telemetry-sending logic.\u003C\u002Fli\u003E\n\u003Cli\u003EPasses all the handling to the encapsulated \u003Ccode\u003ESMPPEX.Session\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EMoreover, this can be probably implemented without changing original modules at all.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--OaIsKK3c--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fq2ds0fwcjz3gafvxprc6.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--OaIsKK3c--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fq2ds0fwcjz3gafvxprc6.png\" alt=\"SMPPEX New Scheme\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003ESMPPEX.TelemetrySession\u003C\u002Fcode\u003E is the mentioned \"proxy\" \u003Ccode\u003ETransportSession\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis complies with the mentioned SOLID principles.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EWe do not violate S adding new functionality into a new module.\u003C\u002Fli\u003E\n\u003Cli\u003EWe do not violate O because we extend functionality composing unchanged old entities and new ones.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"profits\" href=\"#profits\"\u003E\n  \u003C\u002Fa\u003E\n  Profits\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EA bit later I was glad to find out that the team tried and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fcaktus\u002Fvoomex\u002Fpull\u002F43\u002Ffiles#diff-3b74415873a3dd8769241d910c1fa0e3e40c310f30557a46e74e06331474d5d5\"\u003Esuccessfully implemented\u003C\u002Fa\u003E this approach!\u003C\u002Fp\u003E\n\n\u003Cp\u003EFollowing SOLID principles allowed them to avoid many inconveniences: not to wait for the maintainer (me), not to fork the project just to add some lines of code. I didn't even know that the work was in progress!\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"-raw-smppextelemetry-endraw-\" href=\"#-raw-smppextelemetry-endraw-\"\u003E\n  \u003C\u002Fa\u003E\n  \u003Ccode\u003Esmppex_telemetry\u003C\u002Fcode\u003E\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ELater I implemented the solution as \"batteries\": \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fsavonarola\u002Fsmppex_telemetry\"\u003Esavonarola\u002Fsmppex_telemetry\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can see that this is a standalone library, which has a smaller compatibility matrix and it is enough for it to have just a README. It also has a dependency which the core library doesn't have.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EI think this is a small but good example of how SOLID helps to build software and to make communications simpler. So we can frankly answer to the second question: yes, SOLID principle can be applied in practice and can help in better software building.\u003C\u002Fp\u003E\n\n",body_markdown:"---\ntitle: Why SOLID may be useful for you in Elixir\npublished: true\ndescription: \ntags: Erlang, Elixir, SOLID, Patterns\n\u002F\u002Fcover_image: https:\u002F\u002Fdirect_url_to_image.jpg\n---\n\n## Intro\n\nSoftware development is difficult. One of the ways to overcome difficulties of building software is to use so-called architectural patterns, for example well known [SOLID](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSOLID) principles.\n\nBut trying to apply these principles in Elixir we often hesitate:\n\n  * Could these principles be even applicable? Don't they refer to classical OOP languages, while Elixir is a functional language?\n  * Are these principles useful at all? Does this stuff even refer to programming practice and not only to \"clever\" books with fictional class hierarchies of rectangles and squares? This is even more disturbing when our everyday work consists mostly of putting code into predefined places provided by \"frameworks\": views, controllers, models, etc.\n\nThis article is a small attempt to illustrate positive answers to these questions with real issues of a real OSS Elixir library ([SMPPEX](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex)).\n\n## SMPPEX\n\n[SMPPEX](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex) is an Elixir library for interacting via [SMPP protocol](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FShort_Message_Peer-to-Peer). It is popular for interfaces of mobile operators.\n\nThe structure of this protocol is not very important, it's enough to say that it is an asynchronous binary protocol over TCP.\n\nSMPPEX is based on [ranch](https:\u002F\u002Fgithub.com\u002Fninenines\u002Franch) and handles TCP connections in the following way:\n![SMPPEX Scheme](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F5p4zhymxwvkvmy5kulef.png)\n\n### Behaviors\n\nWe need to say a few words about _behaviors_. Behaviors is an Erlang way for specifying interfaces. Each Erlang (and Elixir) module can define so-called `callbacks`:\n\n```elixir\ndefmodule Foo do\n  @callback bar(a :: pos_integer(), b :: String.t()) :: String.t()\nend\n```\n\nThen, any module can implement this behavior:\n\n```elixir\ndefmodule FooImpl do\n  @behavior Foo\n\n  @impl true\n  def bar(a, b) do\n    String.duplicate(b, a)\n  end\nend\n```\n\nAfter that this module can be safely used whenever `Foo` beahaviour is required.\n\n```elixir\ndef do_smth(foo_impl_module) do\n  ...\n  s = foo_impl_module.bar(5, \"abc\")\n  ...\nend\n\n...\n\ndo_smth(FooImpl)\n```\n\n### Behaviors in SMPPEX\n\nThere are two main modules for handling sessions (see picture).\n\n  * `SMPPEX.TransportSession`. It works directly with TCP socket, transforms binaries from socket to protocol structs (PDUs) and vice versa, sends PDUs and handles TCP errors. It also defines `SMPPEX.TransportSession` behavior: callbacks for more intellectual PDU handling.\n  * `SMPPEX.Session`. It implements `SMPPEX.TransportSession` behavior. Responsibility of `SMPPEX.Session` is to make pings, handle timeouts, correlate request PDUs with response PDUs and so on. `SMPPEX.Session` also defines its own behavior: callbacks for placing user defined logic.\n\nSo, when implementing an SMPP \"server\" or \"client\" (called MC and ESME respectively), one should implement `SMPPEX.Session` behavior.\n\n## Answer to the first question\n\nWe see that Elixir allows to define interfaces and to provide polymorphic access to programming entities. That's a major part of OOP (if not the whole OOP according to some definitions). We also have a real example of using this mechanisms in practice.\n\nThis allows us to conclude that Elixir code *can be a subject* of analysis through SOLID principles.\n\nBut is this practically useful?\n\n## History of a (very) small Pull request\n\nSMPPEX is a library for quite a specific domain, that's why it is not super popular, but still has a worldwide user base. From time to time users submit their reports and improvement suggestions.\n\nOnce I received a [PR](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fpull\u002F69\u002Ffiles) with a reasonable suggestion: add [telemetry](https:\u002F\u002Fgithub.com\u002Fbeam-telemetry\u002Ftelemetry) integration.\n\n![PR](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffd2tjfc1eek069vvsw2f.png)\n\nTelemetry is an Erlang library for tracing arbitrary system events and for handling them independently.\n\nThis functionality seemed to be quite useful, but the proposed solution made me think a bit. After some consideration I realized that I wanted to see another solution to problem.\n\n### S and O from SOLID\n\nWhat made me think so? I think that was subconscious expectation of possible difficulties with supporting this code, but it were the SOLID principles which helped me to come to rational explanation of the feelings.\n\n#### S\n\nS in SOLID stands for _The Single-responsibility principle_:\n\n\u003E There should never be more than one reason for a class to change.\n\nObviously we have no _class_, but have a module. It is often somewhat difficult to understand what does \"reason\" mean. That's why I often use another formula of this principle:\n\n\u003E There should never be more than one party interested in modifying a unit of code.\n\nObviously, we were going to violate this principle: there were two apparent parties which wanted to share a single module (and even function): me as a supporter of the whole library and the team which needed this functionality and made the PR.\n\n#### O\n\nO in SOLID stands for _The Open-closed principle_:\n\n\u003E Software entities ... should be open for extension, but closed for modification.\n\nIn other words, if we want to add new functionality, our architecture should allow us not to put it into existing classes and functions, but to compose new entities and utilize them.\n\nObviously, we were going to violate this principle too: completely new and unrelated functionality was going to be added to an existing function.\n\n### Practical issues\n\nProbably we shouldn't be strongly concerned if some theoretical constructions are wrecked. That's why we need to demonstrate real-life issues which arise when these principles are violated.\n\n#### Code ownership\n\nViolating S-principle and mixing concerns in a single function or module lead to inconveniences for all parties interested in the code.\n\nObviously, as a maintainer of the library, I want the core to be well documented, well tested, and so on. After receiving the new code it would have been harder for me to test code, to modify it and even understand.\n\nOn the other hand, the team which needs this code would like to modify it as fast as is needed for their business and not to wait for my spare time.\n\n#### Tiers of code\n\nEven if this functionality is worth being included (and it actually is), we often want to have different \"tiers\" of support for our code. Our \"core\" code should be well tested, well documented and have wider compatibility (and in case of SMPPEX it really is: see [documentation](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex) and [compatibility matrix](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fblob\u002Fmaster\u002F.github\u002Fworkflows\u002Felixir.yml#L19)).\n\nAt the same time supplementary code may not be so well documented or may be compatible only with newer versions of tools.\n\n#### Dependencies\n\nAs can be seen, the proposed PR [brings a new dependency](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fpull\u002F69\u002Ffiles#diff-dfa6f4ed74c90e5d4fda283d547d366586e690387289bcfd473e3fa5f9ace308R44): `telemetry`. Although it is a useful library, additional dependencies often bring problems and conflicts. It an issue even in such a small library as SMPPEX (see, for example, this [issue](https:\u002F\u002Fgithub.com\u002Ffunbox\u002Fsmppex\u002Fissues\u002F83)), that's why it tries to depend only on Ranch.\n\nWe want to allow users of the library to resolve conflicts in minor functionality (even, for example, forking or reimplementing it) and still use the stable core.\n\nAdditionally, `telemetry` is still at `0.x` versions and one may just not want to depend on `0.x` libraries.\n\n### Solution\n\nSo my proposed solution was:\n\n\u003E Hello!\n\u003E\n\u003E Thanks for the proposal.\n\u003E\n\u003E But as far as I can see, the proposed solution violates the Open-closed principle. We shouldn't add orthogonal functionality to existing modules and functions.\n\u003E\n\u003E One may do the following not to violate the Open-closed principle. Since `SMPPEX.Session` implements `SMPPEX.TransportSession` behavior, it is possible to create a \"proxy\" session which\n\u003E\n\u003E * Implements `SMPPEX.TransportSession`.\n\u003E * Contains only telemetry-sending logic.\n\u003E * Passes all the handling to the encapsulated `SMPPEX.Session`.\n\u003E\n\u003E Moreover, this can be probably implemented without changing original modules at all.\n\n![SMPPEX New Scheme](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fq2ds0fwcjz3gafvxprc6.png)\n\n`SMPPEX.TelemetrySession` is the mentioned \"proxy\" `TransportSession`.\n\nThis complies with the mentioned SOLID principles.\n\n  * We do not violate S adding new functionality into a new module.\n  * We do not violate O because we extend functionality composing unchanged old entities and new ones.\n\n### Profits\n\nA bit later I was glad to find out that the team tried and [successfully implemented](https:\u002F\u002Fgithub.com\u002Fcaktus\u002Fvoomex\u002Fpull\u002F43\u002Ffiles#diff-3b74415873a3dd8769241d910c1fa0e3e40c310f30557a46e74e06331474d5d5) this approach!\n\nFollowing SOLID principles allowed them to avoid many inconveniences: not to wait for the maintainer (me), not to fork the project just to add some lines of code. I didn't even know that the work was in progress!\n\n\n## `smppex_telemetry`\n\nLater I implemented the solution as \"batteries\": [savonarola\u002Fsmppex_telemetry](https:\u002F\u002Fgithub.com\u002Fsavonarola\u002Fsmppex_telemetry).\n\nYou can see that this is a standalone library, which has a smaller compatibility matrix and it is enough for it to have just a README. It also has a dependency which the core library doesn't have.\n\n## Conclusion\n\nI think this is a small but good example of how SOLID helps to build software and to make communications simpler. So we can frankly answer to the second question: yes, SOLID principle can be applied in practice and can help in better software building.\n",user:{name:"Ilya Averyanov",username:e,twitter_username:"motonarola",github_username:e,website_url:"https:\u002F\u002Fgithub.com\u002Fsavonarola",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--UjK2280f--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F52698\u002F2dc754d6-6a4b-4384-b77c-3f0f6dae5876.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_ahIcAYW--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F52698\u002F2dc754d6-6a4b-4384-b77c-3f0f6dae5876.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fsavonarola\u002F678047",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-04-26T07:51:59Z","https:\u002F\u002Fdev.to\u002Fsavonarola\u002Fwhy-solid-may-be-useful-for-you-in-elixir-58me",33,"savonarola"));