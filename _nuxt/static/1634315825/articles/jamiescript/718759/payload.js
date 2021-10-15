__NUXT_JSONP__("/articles/jamiescript/718759", (function(a,b,c,d,e){c.type_of="article";c.id=718759;c.title="MONGOOSE MULTIPLE CONNECTION";c.description="Mongoose connection is a class representing a collection of sockets that connects to one or more Mong...";c.readable_publish_date="Jun 5";c.slug="mongoose-multiple-connection-2n18";c.path="\u002Fjamiescript\u002Fmongoose-multiple-connection-2n18";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F718759.png";c.canonical_url=d;c.created_at="2021-06-05T05:50:57Z";c.edited_at=a;c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=2;c.tag_list="mongodb, mongoose, connection";c.tags=["mongodb","mongoose","connection"];c.body_html="\u003Cp\u003EMongoose connection is a class representing a collection of sockets that connects to one or more MongoDB server process.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E    \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n    \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Econn\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EcreateConnection\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003Emongodb:\u002F\u002Flocalhost:27017\u002Ftest\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EuseNewUrlParser\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003EpoolSize\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E10\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002Fcreate a model using the custom connection conn created\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Econn\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EmyModel\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({}));\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThe created connection object conn above uses a custom mongoose connection instead of the default one. From the sample connection above we pass a poolSize option, which is set to 10. The poolSize is the number of concurrent connection that can be made to the database server. The default mongoose connection has a poolSize of 5.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E    \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EmyModel\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({}));\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002Fthis default connection has a poolSize of 5. \u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"multiple-mongoose-connection\" href=\"#multiple-mongoose-connection\"\u003E\n  \u003C\u002Fa\u003E\n  Multiple Mongoose Connection\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EMongoose default connection works for most apps but there are instances when you will want to connect to more than databases in your application. At such times the default mongoose single connection no longer meets your needs.\u003Cbr\u003E\nSome instances why you might require multiple connections:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003Eyou have more than one databases to create models on and connect to\u003C\u002Fli\u003E\n\u003Cli\u003Eyour apps have to perform some aggregations or run some slow queries. To prevent slowing down your application data access, another connection can be created for that slow query or aggregation work so that one connection handles the slow query while another connection will be for the normal run of the application.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch3\u003E\n  \u003Ca name=\"setting-up-multiple-connections\" href=\"#setting-up-multiple-connections\"\u003E\n  \u003C\u002Fa\u003E\n  Setting Up Multiple Connections\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EAssuming we have the following folder structure in our application:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EConnection\n\n\u003Cul\u003E\n\u003Cli\u003Efast.js\u003C\u002Fli\u003E\n\u003Cli\u003Eslow.js\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003ESchema\n\n\u003Cul\u003E\n\u003Cli\u003EuserSchema.js\u003C\u002Fli\u003E\n\u003Cli\u003Eindex.js\nUsing the Schema export pattern where we export our Schema.\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E   \u003Cspan class=\"c1\"\u003E\u002F\u002Fcontent of the userSchema.js file\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eschema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\n     \u003Cspan class=\"na\"\u003Eusername\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n     \u003Cspan class=\"na\"\u003Epassword\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edefault\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E   \u003Cspan class=\"c1\"\u003E\u002F\u002Fcontent of the index.js file. \u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E.\u002FuserSchema\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n  \u003Cspan class=\"k\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edefault\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c1\"\u003E\u002F\u002Fdb here represents the connection object that will come \u003C\u002Fspan\u003E\n     \u003Cspan class=\"k\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eour\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Econnection\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Efile\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EUser\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c1\"\u003E\u002F\u002Fother file in our schema\u003C\u002Fspan\u003E\n    \u003Cspan class=\"c1\"\u003E\u002F\u002Fdb.model(\"model\", modelSchema) \u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Edb\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E   \u003Cspan class=\"c1\"\u003E\u002F\u002Fcontent of the fast.js file. \u003C\u002Fspan\u003E\n   \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EmodelSchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E..\u002FSchema\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n   \u003Cspan class=\"c1\"\u003E\u002F\u002FmodelSchema represents the schema which we exported from  the index.js file in the Schema folder\u003C\u002Fspan\u003E\n \u003Cspan class=\"k\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Edefault\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n   \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Econn\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EcreateConnection\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Euri\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EuseNewUrlParser\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003EpoolSize\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E10\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EmodelSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Econn\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003ETo make use of any of our connection object we just require the connection file\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EfastConnection\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E.\u002Fconnections\u002Ffast\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n  \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EslowConnection\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E.\u002Fconnections\u002Fslow\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n \u003Cspan class=\"c1\"\u003E\u002F\u002Fcreate our connection object using the connection.\u003C\u002Fspan\u003E\n \u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EfastConn\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EfastConnection\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E();\u003C\u002Fspan\u003E\n \u003Cspan class=\"c1\"\u003E\u002F\u002Fto make use of the fastConn\u003C\u002Fspan\u003E\n \u003Cspan class=\"nx\"\u003EfastConn\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodels\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EUser\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Efind\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({});\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002Fwe can now make use of any of the connections in our application here\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EHappy coding...\u003C\u002Fp\u003E\n\n";c.body_markdown="Mongoose connection is a class representing a collection of sockets that connects to one or more MongoDB server process.\n```javascript\n    const mongoose = require(\"mongoose\");\n    const conn = mongoose.createConnection('mongodb:\u002F\u002Flocalhost:27017\u002Ftest', {useNewUrlParser: true, poolSize: 10});\n\u002F\u002Fcreate a model using the custom connection conn created\nconn.model(\"myModel\", new mongoose.Schema({}));\n```\nThe created connection object conn above uses a custom mongoose connection instead of the default one. From the sample connection above we pass a poolSize option, which is set to 10. The poolSize is the number of concurrent connection that can be made to the database server. The default mongoose connection has a poolSize of 5.\n```javascript\n    const mongoose = require(\"mongoose\");\n    mongoose.model(\"myModel\", new mongoose.Schema({}));\n\u002F\u002Fthis default connection has a poolSize of 5. \n```\n### Multiple Mongoose Connection\nMongoose default connection works for most apps but there are instances when you will want to connect to more than databases in your application. At such times the default mongoose single connection no longer meets your needs.\nSome instances why you might require multiple connections:\n1. you have more than one databases to create models on and connect to\n2. your apps have to perform some aggregations or run some slow queries. To prevent slowing down your application data access, another connection can be created for that slow query or aggregation work so that one connection handles the slow query while another connection will be for the normal run of the application.\n\n### Setting Up Multiple Connections\nAssuming we have the following folder structure in our application:\n- Connection\n   - fast.js\n   - slow.js\n- Schema\n   - userSchema.js\n   - index.js\nUsing the Schema export pattern where we export our Schema.\n```javascript\n   \u002F\u002Fcontent of the userSchema.js file\n  const mongoose = require(\"mongoose\");\n  const schema = mongoose.Schema;\n  const userSchema = new mongoose.Schema({\n     username: String,\n     password: String\n});\nexport default userSchema;\n```\n\n```javascript\n   \u002F\u002Fcontent of the index.js file. \n  const userSchema from \".\u002FuserSchema\";\n  const mongoose = require(\"mongoose\");\n  export default (db) =\u003E {\n    \u002F\u002Fdb here represents the connection object that will come \n     from our connection file\n    db.model(\"User\", userSchema);\n    \u002F\u002Fother file in our schema\n    \u002F\u002Fdb.model(\"model\", modelSchema) \n   \n    return db;\n}\n  \n```\n\n\n```javascript\n   \u002F\u002Fcontent of the fast.js file. \n   const modelSchema = require(\"..\u002FSchema\");\nconst mongoose = require(\"mongoose\");\n   \u002F\u002FmodelSchema represents the schema which we exported from  the index.js file in the Schema folder\n export default () =\u003E {\n   const conn = mongoose.createConnection(uri, {useNewUrlParser: true, poolSize: 10 });\nreturn modelSchema(conn);\n}\n\n\n```\nTo make use of any of our connection object we just require the connection file\n```javascript\n  const fastConnection = require(\".\u002Fconnections\u002Ffast\");\n  const slowConnection = require(\".\u002Fconnections\u002Fslow\");\n \u002F\u002Fcreate our connection object using the connection.\n const fastConn = fastConnection();\n \u002F\u002Fto make use of the fastConn\n fastConn.models.User.find({});\n\u002F\u002Fwe can now make use of any of the connections in our application here\n```\nHappy coding...";c.user={name:"Jamiebones",username:"jamiescript",twitter_username:"Jamiescript",github_username:"jamiebones",website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--kUofCyIT--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F353932\u002F769950c3-6795-45bb-b2d3-159035ae9430.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--BlMY5cAh--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F353932\u002F769950c3-6795-45bb-b2d3-159035ae9430.jpg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-06-05T06:57:08Z",{},"https:\u002F\u002Fdev.to\u002Fjamiescript\u002Fmongoose-multiple-connection-2n18",4)));