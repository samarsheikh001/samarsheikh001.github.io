__NUXT_JSONP__("/articles/ricardo_borges/710580", (function(a,b,c,d){a.type_of="article";a.id=710580;a.title="Best Practices for REST API interface design";a.description="Some notes about REST and best practices that I follow to design RESTful APIs";a.readable_publish_date="May 27";a.slug="some-practices-to-design-restful-apis-interfaces-5a5i";a.path="\u002Fricardo_borges\u002Fsome-practices-to-design-restful-apis-interfaces-5a5i";a.url="https:\u002F\u002Fdev.to\u002Fricardo_borges\u002Fsome-practices-to-design-restful-apis-interfaces-5a5i";a.comments_count=1;a.public_reactions_count=b;a.collection_id=c;a.published_timestamp=d;a.positive_reactions_count=b;a.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7iJN3u_6--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974478\u002Farticles%2520covers\u002Frest-api_k3s0fz.jpg";a.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VN432R2X--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974478\u002Farticles%2520covers\u002Frest-api_k3s0fz.jpg";a.canonical_url="https:\u002F\u002Fricardoborges.dev\u002Fbest-practices-for-rest-api-interface-design";a.created_at="2021-05-27T20:17:51Z";a.edited_at="2021-07-22T17:21:45Z";a.crossposted_at=c;a.published_at=d;a.last_comment_at="2021-05-30T01:47:54Z";a.reading_time_minutes=4;a.tag_list="rest, restful, api, tips";a.tags=["rest","restful","api","tips"];a.body_html="\u003Cp\u003EThis post contains some notes about REST and best practices that I follow to design RESTful APIs, it will focus mainly on Uniform interface constraint.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"rest\" href=\"#rest\"\u003E\n  \u003C\u002Fa\u003E\n  REST\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EREST (REpresentational State Transfer) is an architectural approach to design web services presented by Roy Fielding in 2000 in his \u003Ca href=\"https:\u002F\u002Fwww.ics.uci.edu\u002F~fielding\u002Fpubs\u002Fdissertation\u002Ffielding_dissertation.pdf\"\u003Edissertation\u003C\u002Fa\u003E. A RESTful API is an API that satisfies the REST constraints.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"constraints\" href=\"#constraints\"\u003E\n  \u003C\u002Fa\u003E\n  Constraints\n\u003C\u002Fh2\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003EClient-server -\u003C\u002Fstrong\u003E Separate client application and server application, It’s about separation of concerns, by doing this we improve portability and scalability because it allows those components to evolve independently.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003EStateless -\u003C\u002Fstrong\u003E Each request from a client to server must contain all necessary information, including authentication details, the server cannot store anything about requests, sessions, history, etc.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003ECache -\u003C\u002Fstrong\u003E When possible responses data have to be cacheable, clients have the right to reuse responses data later. This will improve efficiency and scalability, the trade-off, however, is that it can decrease reliability if the cached data differs significantly from the data in the server.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003EUniform interface -\u003C\u002Fstrong\u003E Define the standards of the API interface and follow it, for example, identification of resources and response messages. If it was decided to pluralize resources name on URI, follow this standard in all URIs, it will improve the readability and maintainability.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003ELayered system -\u003C\u002Fstrong\u003E The system has to be composed of components in hierarchical layers, each component is only aware of the immediate layer with which they are interacting. For example, a system can have a data layer, cache layer, security layer, etc. And all those layers should not affect the communication between the server and client.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Cstrong\u003ECode-on-demand -\u003C\u002Fstrong\u003E This is the only optional constraint, the server will provide static representations of resources, but when requested it can send executable code.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003EIn this post, I will show some best practices to achieve a uniform interface, the constraints 1 and 2 are pretty straightforward, while the other constraints have many ways to satisfy and cover them is out of the scope of this post. \u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"best-practices-to-design-an-api-uniform-interface\" href=\"#best-practices-to-design-an-api-uniform-interface\"\u003E\n  \u003C\u002Fa\u003E\n  Best practices to design an API uniform interface\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EREST is not limited to but is frequently applied on web applications and leverages HTTP protocol. A RESTful API will expose your system’s resources via a collection of Uniform Resource Identifiers (URIs). Responses will be in JSON or XML, you can provide both formats if you want, in that case, the client will choose using the content-type header. Once defined the system resources, it's time to choose a resource naming strategy and combine it with HTTP Methods to represent operations on those resources. \u003C\u002Fp\u003E\n\n\u003Cp\u003EMoreover is wise to define standards for responses: what will be the response body in case of failure? Will it have a message describing the error, only a code for reference, or both? And in case of success, what data of resources will be presented? What HTTP Response Codes will be used in each response? These questions have to be addressed in the API design phase.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet’s use a music streaming service as an example, among other resources it has Artists, Albums, and tracks, let’s see some practices to define the URIs:\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"use-nouns-to-represent-resource-not-actions\" href=\"#use-nouns-to-represent-resource-not-actions\"\u003E\n  \u003C\u002Fa\u003E\n  Use nouns to represent resource, not actions\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EHTTP Methods will indicate the action.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** Do **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Don't **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E-\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"pluralize-resources\" href=\"#pluralize-resources\"\u003E\n  \u003C\u002Fa\u003E\n  Pluralize resources\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThe rationale here is that we are dealing with collections of resources.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** Do **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ealbums\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Don't **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ealbum\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"demonstrate-the-hierarchical-relationship-between-resources\" href=\"#demonstrate-the-hierarchical-relationship-between-resources\"\u003E\n  \u003C\u002Fa\u003E\n  Demonstrate the hierarchical relationship between resources\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThis strategy improves comprehension.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbum\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003Es\n\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbums\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Ftrack\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003Es\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThose URIs indicate that artists have a collection of albums that in turn have a collection of tracks. This is not required, often you will find APIs that don’t use this format, for example:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ealbums\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ealbums\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Ftrack\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003Es\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EYou may find APIs that provide both formats. Also note that we are not using trailing forward slash, because it doesn’t add semantic value, for example:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbums\u002F\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"other-tips-to-improve-readability\" href=\"#other-tips-to-improve-readability\"\u003E\n  \u003C\u002Fa\u003E\n  Other tips to improve readability\n\u003C\u002Fh3\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EUse hyphens ( - ) instead of underscores ( _ )\u003C\u002Fli\u003E\n\u003Cli\u003EUse only lowercase letters\u003C\u002Fli\u003E\n\u003Cli\u003EDon’t use file extensions\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"use-http-methods-to-indicate-operations-on-resources\" href=\"#use-http-methods-to-indicate-operations-on-resources\"\u003E\n  \u003C\u002Fa\u003E\n  Use HTTP methods to indicate operations on resources\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EMost common HTTP Methods\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EPOST -\u003C\u002Fstrong\u003E Create resources\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EGET -\u003C\u002Fstrong\u003E Read resources\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EPUT -\u003C\u002Fstrong\u003E Update or replace resources\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EPATCH -\u003C\u002Fstrong\u003E Modify resources\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003EDELETE -\u003C\u002Fstrong\u003E Delete resource\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EExamples:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"cm\"\u003E\u002F** Get artists **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003EGET\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Get a particular artist **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003EGET\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Create a track **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003EPOST\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbums\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Ftrack\u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003Es\n\u003C\u002Fspan\u003E\n\u003Cspan class=\"cm\"\u003E\u002F** Update an album **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003EPUT\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbums\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"cm\"\u003E\u002F** Delete a track **\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003EDELETE\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eapi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexample\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ecom\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eartists\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Falbums\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Ftracks\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eid\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"use-appropriate-http-response-codes-on-responses\" href=\"#use-appropriate-http-response-codes-on-responses\"\u003E\n  \u003C\u002Fa\u003E\n  Use appropriate HTTP Response Codes on responses\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EMost common HTTP Response Codes\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E200 OK -\u003C\u002Fstrong\u003E Indicate success\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E201 Created -\u003C\u002Fstrong\u003E Successful creation occurred (via POST or PUT)\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E204 No Content -\u003C\u002Fstrong\u003E Indicate success without a response but, commonly used for DELETE and PUT requests\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E400 Bad Request -\u003C\u002Fstrong\u003E Indicate something is not right with the request, for example, missing information or invalid data.\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E401 Unauthorized -\u003C\u002Fstrong\u003E Indicates invalid authentication credentials.\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E403 Forbidden -\u003C\u002Fstrong\u003E User not authorized to perform the operation\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E404 Not found -\u003C\u002Fstrong\u003E Resource not found\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E405 Method not allowed -\u003C\u002Fstrong\u003E Indicates URL exists, but HTTP method is not applicable\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cstrong\u003E500 Internal error -\u003C\u002Fstrong\u003E Indicates the server encountered an error and don’t know how to handle\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EMany of those practices described here came from reading about, developing, integrating with, and reading APIs documentations. I think that following them is a good way to create a concise and coherent API interface.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis post just scratched the surface, there other related topics worth taking a look at, such as caching, compression, security, versioning, and a lot more. For a more in-depth study I recommend reading the following:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.ics.uci.edu\u002F~fielding\u002Fpubs\u002Fdissertation\u002Ffielding_dissertation.pdf\"\u003EArchitectural Styles and the Design of Network-based Software Architectures\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.restapitutorial.com\u002Findex.html\"\u003ELearn REST\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fazure\u002Farchitecture\u002Fbest-practices\u002Fapi-design\"\u003ERESTful web API design\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Frestfulapi.net\u002F\"\u003EREST API Tutorial\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EAlso is useful to look at how other APIs was designed, such as:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.github.com\u002Fen\u002Frest\u002Freference\"\u003EGitHub API\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdeveloper.spotify.com\u002Fdocumentation\u002Fweb-api\u002Freference\u002F\"\u003ESpotfy API\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.forem.com\u002Fapi\u002F\"\u003EDEV API\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n";a.body_markdown="---\ntitle: Best Practices for REST API interface design\npublished: true\ndescription: Some notes about REST and best practices that I follow to design RESTful APIs\ntags: rest, restful, api, tips\ncanonical_url: https:\u002F\u002Fricardoborges.dev\u002Fbest-practices-for-rest-api-interface-design\ncover_image: https:\u002F\u002Fres.cloudinary.com\u002Fdje4crtui\u002Fimage\u002Fupload\u002Fv1626974478\u002Farticles%20covers\u002Frest-api_k3s0fz.jpg\n---\n\nThis post contains some notes about REST and best practices that I follow to design RESTful APIs, it will focus mainly on Uniform interface constraint.\n\n## REST\n\nREST (REpresentational State Transfer) is an architectural approach to design web services presented by Roy Fielding in 2000 in his [dissertation](https:\u002F\u002Fwww.ics.uci.edu\u002F~fielding\u002Fpubs\u002Fdissertation\u002Ffielding_dissertation.pdf). A RESTful API is an API that satisfies the REST constraints.\n\n## Constraints\n\n1. **Client-server -** Separate client application and server application, It’s about separation of concerns, by doing this we improve portability and scalability because it allows those components to evolve independently.\n\n2. **Stateless -** Each request from a client to server must contain all necessary information, including authentication details, the server cannot store anything about requests, sessions, history, etc.\n\n3. **Cache -** When possible responses data have to be cacheable, clients have the right to reuse responses data later. This will improve efficiency and scalability, the trade-off, however, is that it can decrease reliability if the cached data differs significantly from the data in the server.\n\n4. **Uniform interface -** Define the standards of the API interface and follow it, for example, identification of resources and response messages. If it was decided to pluralize resources name on URI, follow this standard in all URIs, it will improve the readability and maintainability.\n\n5. **Layered system -** The system has to be composed of components in hierarchical layers, each component is only aware of the immediate layer with which they are interacting. For example, a system can have a data layer, cache layer, security layer, etc. And all those layers should not affect the communication between the server and client.\n\n6. **Code-on-demand -** This is the only optional constraint, the server will provide static representations of resources, but when requested it can send executable code.\n\nIn this post, I will show some best practices to achieve a uniform interface, the constraints 1 and 2 are pretty straightforward, while the other constraints have many ways to satisfy and cover them is out of the scope of this post. \n\n## Best practices to design an API uniform interface\n\nREST is not limited to but is frequently applied on web applications and leverages HTTP protocol. A RESTful API will expose your system’s resources via a collection of Uniform Resource Identifiers (URIs). Responses will be in JSON or XML, you can provide both formats if you want, in that case, the client will choose using the content-type header. Once defined the system resources, it's time to choose a resource naming strategy and combine it with HTTP Methods to represent operations on those resources. \n\nMoreover is wise to define standards for responses: what will be the response body in case of failure? Will it have a message describing the error, only a code for reference, or both? And in case of success, what data of resources will be presented? What HTTP Response Codes will be used in each response? These questions have to be addressed in the API design phase.\n\nLet’s use a music streaming service as an example, among other resources it has Artists, Albums, and tracks, let’s see some practices to define the URIs:\n\n### Use nouns to represent resource, not actions\n\t\nHTTP Methods will indicate the action.\n\n```js\n\u002F** Do **\u002F\napi.example.com\u002Fartists\n\n\u002F** Don't **\u002F\napi.example.com\u002Fget-artists\n```\n\n### Pluralize resources\n\nThe rationale here is that we are dealing with collections of resources.\n\n```js\n\u002F** Do **\u002F\napi.example.com\u002Falbums\n\n\u002F** Don't **\u002F\napi.example.com\u002Falbum\n```\n\n### Demonstrate the hierarchical relationship between resources\n\nThis strategy improves comprehension.\n\n```js\napi.example.com\u002Fartists\u002F{id}\u002Falbums\napi.example.com\u002Fartists\u002F{id}\u002Falbums\u002F{id}\u002Ftracks\n```\n\nThose URIs indicate that artists have a collection of albums that in turn have a collection of tracks. This is not required, often you will find APIs that don’t use this format, for example:\n\n```js\napi.example.com\u002Falbums\napi.example.com\u002Falbums\u002F{id}\u002Ftracks\n```\n\nYou may find APIs that provide both formats. Also note that we are not using trailing forward slash, because it doesn’t add semantic value, for example:\n\n```js\napi.example.com\u002Fartists\u002F{id}\u002Falbums\u002F\n```\n\n### Other tips to improve readability\n\n* Use hyphens ( - ) instead of underscores ( _ )\n* Use only lowercase letters\n* Don’t use file extensions\n\n### Use HTTP methods to indicate operations on resources\n\n**Most common HTTP Methods**\n\n* **POST -** Create resources\n* **GET -** Read resources\n* **PUT -** Update or replace resources\n* **PATCH -** Modify resources\n* **DELETE -** Delete resource\n\nExamples:\n\n```js\n\u002F** Get artists **\u002F\nGET api.example.com\u002Fartists\n\n\u002F** Get a particular artist **\u002F\nGET api.example.com\u002Fartists\u002F{id}\n\n\u002F** Create a track **\u002F\nPOST api.example.com\u002Fartists\u002F{id}\u002Falbums\u002F{id}\u002Ftracks\n\n\u002F** Update an album **\u002F\nPUT api.example.com\u002Fartists\u002F{id}\u002Falbums\u002F{id}\n\n\u002F** Delete a track **\u002F\nDELETE api.example.com\u002Fartists\u002F{id}\u002Falbums\u002F{id}\u002Ftracks\u002F{id}\n```\n\n### Use appropriate HTTP Response Codes on responses\n\n**Most common HTTP Response Codes**\n\n* **200 OK -** Indicate success\n* **201 Created -** Successful creation occurred (via POST or PUT)\n* **204 No Content -** Indicate success without a response but, commonly used for DELETE and PUT requests\n* **400 Bad Request -** Indicate something is not right with the request, for example, missing information or invalid data.\n* **401 Unauthorized -** Indicates invalid authentication credentials.\n* **403 Forbidden -** User not authorized to perform the operation\n* **404 Not found -** Resource not found\n* **405 Method not allowed -** Indicates URL exists, but HTTP method is not applicable\n* **500 Internal error -** Indicates the server encountered an error and don’t know how to handle\n\n\n## Conclusion\n\nMany of those practices described here came from reading about, developing, integrating with, and reading APIs documentations. I think that following them is a good way to create a concise and coherent API interface.\n\nThis post just scratched the surface, there other related topics worth taking a look at, such as caching, compression, security, versioning, and a lot more. For a more in-depth study I recommend reading the following:\n\t\n\n* [Architectural Styles and the Design of Network-based Software Architectures](https:\u002F\u002Fwww.ics.uci.edu\u002F~fielding\u002Fpubs\u002Fdissertation\u002Ffielding_dissertation.pdf)\n* [Learn REST](https:\u002F\u002Fwww.restapitutorial.com\u002Findex.html)\n* [RESTful web API design](https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fazure\u002Farchitecture\u002Fbest-practices\u002Fapi-design)\n* [REST API Tutorial](https:\u002F\u002Frestfulapi.net\u002F)\n\n\nAlso is useful to look at how other APIs was designed, such as:\n\n\n* [GitHub API](https:\u002F\u002Fdocs.github.com\u002Fen\u002Frest\u002Freference)\n* [Spotfy API](https:\u002F\u002Fdeveloper.spotify.com\u002Fdocumentation\u002Fweb-api\u002Freference\u002F)\n* [DEV API](https:\u002F\u002Fdocs.forem.com\u002Fapi\u002F)\n\n\n\n";a.user={name:"Ricardo Borges",username:"ricardo_borges",twitter_username:"Borges_rocks",github_username:"ricardo93borges",website_url:"https:\u002F\u002Fricardoborges.dev\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--nTYvVqbh--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F144411\u002F15a8a201-7cb3-4e3d-8624-1d7648e594f0.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--JDcMU_D_--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F144411\u002F15a8a201-7cb3-4e3d-8624-1d7648e594f0.jpg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:a}},mutations:[["SET_CURRENT_ARTICLE",a]]}}({},126,null,"2021-05-27T20:23:02Z")));