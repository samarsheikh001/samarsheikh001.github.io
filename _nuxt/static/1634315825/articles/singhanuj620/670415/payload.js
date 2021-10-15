__NUXT_JSONP__("/articles/singhanuj620/670415", (function(a,b,c,d,e,f){c.type_of="article";c.id=670415;c.title="Mongoose \"Populate()\" in most simple way | How to import a collection into another schema in Mongodb";c.description="Hello everyone, I'm going to demenstrate and explain the confusing topic of Mongodb\u002FMongoose that is...";c.readable_publish_date="Apr 18";c.slug="mongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf";c.path="\u002Fsinghanuj620\u002Fmongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf";c.url=d;c.comments_count=1;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--shTyd8F7--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fdwcj63fdldqgmvtptoga.png";c.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--P2LgNuEs--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fdwcj63fdldqgmvtptoga.png";c.canonical_url=d;c.created_at=b;c.edited_at="2021-04-19T13:51:24Z";c.crossposted_at=a;c.published_at=b;c.last_comment_at="2021-08-28T18:06:17Z";c.reading_time_minutes=2;c.tag_list="mongodb, mongoose, node, javascript";c.tags=["mongodb","mongoose","node","javascript"];c.body_html="\u003Cp\u003EHello everyone, I'm going to demenstrate and explain the confusing topic of \u003Cstrong\u003EMongodb\u003C\u002Fstrong\u003E\u002F\u003Cstrong\u003EMongoose\u003C\u002Fstrong\u003E that is \u003Cstrong\u003E\"Populate( )\"\u003C\u002Fstrong\u003E function.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"problem-statement-\" href=\"#problem-statement-\"\u003E\n  \u003C\u002Fa\u003E\n  Problem Statement :\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESuppose you have 2 schema model named :\u003Cbr\u003E\n1 - Address Model\u003Cbr\u003E\n2 - User Model\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EAddress Model\u003C\u002Fstrong\u003E:\u003Cbr\u003E\nThere are 3 attributes in this i.e \u003Cem\u003Epincode\u003C\u002Fem\u003E, \u003Cem\u003Estate\u003C\u002Fem\u003E, \u003Cem\u003Eaddress\u003C\u002Fem\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EaddressSchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Estate\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Epincode\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003ENumber\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EAddress\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EaddressSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Emodule\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexports\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EAddress\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E:\u003Cbr\u003E\nThere are 3 attributes in this i.e \u003Cem\u003Ename\u003C\u002Fem\u003E, \u003Cstrong\u003Eaddress\u003C\u002Fstrong\u003E, and designation.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Erequire\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Enew\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Ename\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Edesignation\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nb\"\u003EString\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n    \u003Cspan class=\"na\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Etype\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n        \u003Cspan class=\"na\"\u003Eref\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EUser\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Euser\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"nx\"\u003Emodule\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexports\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EUser\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"solution-\" href=\"#solution-\"\u003E\n  \u003C\u002Fa\u003E\n  Solution :\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ECan you see the modification in \u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E ?\u003Cbr\u003E\nThe addition of :\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nl\"\u003Etype\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nx\"\u003Eref\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Emakes all the changes here. \u003C\u002Fp\u003E\n\n\u003Cp\u003EWe are here not making the entry in \u003Cem\u003EUser Model\u003C\u002Fem\u003E's \u003Cstrong\u003Eaddress\u003C\u002Fstrong\u003E section but instead using \u003Cstrong\u003Eaddress\u003C\u002Fstrong\u003E model to store the data and uses it's \u003Cem\u003E__id\u003C\u002Fem\u003E_ in \u003Cem\u003EUser Model\u003C\u002Fem\u003E. \u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd at time of fetching the data from \u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E we will \u003Cstrong\u003EPOPULATE\u003C\u002Fstrong\u003E the \u003Cem\u003Eaddress\u003C\u002Fem\u003E attribute from the \u003Cstrong\u003EAddress Model\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-is-object-id-\" href=\"#what-is-object-id-\"\u003E\n  \u003C\u002Fa\u003E\n  What is Object Id ?\n\u003C\u002Fh2\u003E\n\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ESchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Eand\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Etype\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThe \u003Cstrong\u003EObjectId\u003C\u002Fstrong\u003E is the one of the \u003Cem\u003Edata types\u003C\u002Fem\u003E of Mongoose, that tells the mongoose that this \u003Cstrong\u003Eis referenced\u003C\u002Fstrong\u003E to another \u003Cstrong\u003Ecollection\u003C\u002Fstrong\u003E in \u003Cem\u003EMongoDb Database\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAfter \u003Cstrong\u003Eimporting\u003C\u002Fstrong\u003E, it is used along with \u003Cstrong\u003Eref\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-is-ref-\" href=\"#what-is-ref-\"\u003E\n  \u003C\u002Fa\u003E\n  What is ref  ?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ENow, \u003Cstrong\u003EObjectId\u003C\u002Fstrong\u003E is used along with \u003Cstrong\u003Eref\u003C\u002Fstrong\u003E. \u003Cbr\u003E\n\u003Cstrong\u003ERef\u003C\u002Fstrong\u003E tells the \u003Cem\u003EMongoose\u003C\u002Fem\u003E that in which \u003Cstrong\u003ECollection\u003C\u002Fstrong\u003E the importing data is \u003Cstrong\u003Epresent\u003C\u002Fstrong\u003E. In our case, it's the \u003Cem\u003EAddress Model\u003C\u002Fem\u003E_ that is being imported and used in the \u003Cem\u003EUser Model\u003C\u002Fem\u003E. So,\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nl\"\u003Etype\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EObjectId\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n        \u003Cspan class=\"nx\"\u003Eref\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ENOTE\u003C\u002Fstrong\u003E : The \u003Cstrong\u003Evalue\u003C\u002Fstrong\u003E in \u003Cem\u003Eref\u003C\u002Fem\u003E the same as the\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003EAddress\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Emongoose\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emodel\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EaddressSchema\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Ein \u003Cem\u003EAddress Model\u003C\u002Fem\u003E_.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"at-last-using-populate-\" href=\"#at-last-using-populate-\"\u003E\n  \u003C\u002Fa\u003E\n  At last using POPULATE ( )\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESo, now it's time to fetch the data from the \u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E and at time of fetching, filling the \u003Cstrong\u003Eaddress\u003C\u002Fstrong\u003E attribute of \u003Cem\u003EUser Model\u003C\u002Fem\u003E with data from the \u003Cem\u003EAddress Model\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet's suppose, \u003Cbr\u003E\nthe \u003Cem\u003E__id\u003C\u002Fem\u003E_ of data in \u003Cstrong\u003Eaddress model\u003C\u002Fstrong\u003E is \u003Cstrong\u003E100\u003C\u002Fstrong\u003E.\u003Cbr\u003E\nSo, at \u003Cstrong\u003Etime of entering\u003C\u002Fstrong\u003E data into \u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E, pass the \u003Cem\u003E__id\u003C\u002Fem\u003E_ i.e \u003Cem\u003E100\u003C\u002Fem\u003E to the \u003Cstrong\u003Eaddress attribute\u003C\u002Fstrong\u003E of \u003Cem\u003EUser Model\u003C\u002Fem\u003E.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003EUser\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Efind\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({}).\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Epopulate\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eaddress\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E).\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eexec\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E((\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Eif\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eerr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E){\u003C\u002Fspan\u003E\n        \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003Eres\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ejson\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003Eerror\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003Eerr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E})\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Eres\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Ejson\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E({\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003Eresult\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E  \u003Cspan class=\"nx\"\u003Eresult\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E})\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--rYP2HOUu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fozxvr1f8bby3un9t9xch.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--rYP2HOUu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fozxvr1f8bby3un9t9xch.png\" alt=\"Mongoose Populate\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003E.populate(\"address\")\u003C\u002Fstrong\u003E will fill the data coming from \u003Cstrong\u003EUser.find({})\u003C\u002Fstrong\u003E and find the \u003Cem\u003E__id\u003C\u002Fem\u003E_ present in (in our case \u003Cem\u003E__id\u003C\u002Fem\u003E_ is 100), and find that in \u003Cstrong\u003EAddress Model\u003C\u002Fstrong\u003E and take that data and fill into \u003Cstrong\u003EUser Model\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"thank-you\" href=\"#thank-you\"\u003E\n  \u003C\u002Fa\u003E\n  Thank You\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThank you, for being patient and reading till last, Hope you find it usefull. 🙂🙂🙂\u003C\u002Fp\u003E\n\n\u003Cp\u003EMy \u003Cstrong\u003EPortfolio\u003C\u002Fstrong\u003E : \u003Ca href=\"https:\u002F\u002Fanujportfolio.herokuapp.com\u002F\"\u003Ehttps:\u002F\u002Fanujportfolio.herokuapp.com\u002F\u003C\u002Fa\u003E\u003Cbr\u003E\nMy \u003Cstrong\u003EGithub\u003C\u002Fstrong\u003E : \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fsinghanuj620\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fsinghanuj620\u003C\u002Fa\u003E\u003Cbr\u003E\nMy \u003Cstrong\u003ELinkedin\u003C\u002Fstrong\u003E : \u003Ca href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fanuj-singh-007\u002F\"\u003Ehttps:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fanuj-singh-007\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EFeedback is always welcomed. 🤗🤗\u003C\u002Fp\u003E\n\n";c.body_markdown="Hello everyone, I'm going to demenstrate and explain the confusing topic of **Mongodb**\u002F**Mongoose** that is **\"Populate( )\"** function.\n\n## Problem Statement :\nSuppose you have 2 schema model named :\n1 - Address Model\n2 - User Model\n\n__Address Model__:\nThere are 3 attributes in this i.e _pincode_, _state_, _address_\n\n``` javascript\nconst  mongoose = require(\"mongoose\");\nconst  Schema = mongoose.Schema;\n\nconst  addressSchema = new  Schema({\n\taddress:  String,\n\tstate:  String,\n\tpincode : Number\n});\n\nconst  Address= mongoose.model(\"address\", addressSchema);\nmodule.exports = Address;\n```\n\n**User Model**:\nThere are 3 attributes in this i.e _name_, __address__, and designation.\n\n``` javascript\nconst  mongoose = require(\"mongoose\");\nconst  Schema = mongoose.Schema;\nconst {ObjectId} = mongoose.Schema; \n\nconst  userSchema = new  Schema({\n\tname:  String,\n\tdesignation:  String,\n\taddress: {\n\t\ttype :  ObjectId,\n\t\tref :  \"address\"\n\t}\n});\n\nconst  User = mongoose.model(\"user\", userSchema);\nmodule.exports = User;\n```\n\n## Solution :\nCan you see the modification in __User Model__ ?\nThe addition of :\n\n``` javascript\naddress: {\n\t\ttype :  ObjectId,\n\t\tref :  \"address\"\n\t}\n```\n\nmakes all the changes here. \n\nWe are here not making the entry in _User Model_'s __address__ section but instead using __address__ model to store the data and uses it's ___id__ in _User Model_. \n\nAnd at time of fetching the data from __User Model__ we will __POPULATE__ the _address_ attribute from the __Address Model__.\n\n## What is Object Id ?\n\n``` javascript\nconst {ObjectId} = mongoose.Schema; \n```\nand\n\n``` javascript\ntype :  ObjectId,\n```\n\nThe __ObjectId__ is the one of the _data types_ of Mongoose, that tells the mongoose that this __is referenced__ to another __collection__ in _MongoDb Database_.\n\nAfter __importing__, it is used along with __ref__.\n\n## What is ref  ?\n\nNow, __ObjectId__ is used along with __ref__. \n__Ref__ tells the _Mongoose_ that in which __Collection__ the importing data is __present__. In our case, it's the _Address Model__ that is being imported and used in the _User Model_. So,\n\n``` javascript\naddress: {\n\t\ttype :  ObjectId,\n\t\tref :  \"address\"\n\t}\n```\n\n__NOTE__ : The __value__ in _ref_ the same as the \n``` javascript\nconst  Address= mongoose.model(\"address\", addressSchema);\n```\nin _Address Model__.\n\n## At last using POPULATE ( )\n\nSo, now it's time to fetch the data from the __User Model__ and at time of fetching, filling the __address__ attribute of _User Model_ with data from the _Address Model_.\n\nLet's suppose, \nthe ___id__ of data in __address model__ is __100__.\nSo, at __time of entering__ data into __User Model__, pass the ___id__ i.e _100_ to the __address attribute__ of _User Model_.\n\n``` javascript\nUser.find({}).populate(\"address\").exec((err, result) =\u003E {\n\tif(err){\n\t\treturn  res.json({error :  err})\n\t}\n\tres.json({result :  result})\n\t});\n```\n\n![Mongoose Populate](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fozxvr1f8bby3un9t9xch.png)\n\n__.populate(\"address\")__ will fill the data coming from __User.find({})__ and find the ___id__ present in (in our case ___id__ is 100), and find that in __Address Model__ and take that data and fill into __User Model__.\n\n\n## Thank You\nThank you, for being patient and reading till last, Hope you find it usefull. 🙂🙂🙂\n\nMy __Portfolio__ : https:\u002F\u002Fanujportfolio.herokuapp.com\u002F\nMy __Github__ : https:\u002F\u002Fgithub.com\u002Fsinghanuj620\nMy __Linkedin__ : https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fanuj-singh-007\u002F\n\nFeedback is always welcomed. 🤗🤗";c.user={name:"Anuj Singh",username:f,twitter_username:a,github_username:f,website_url:"https:\u002F\u002Fanujportfolio.herokuapp.com\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--6-KT6Nia--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F317284\u002F9dabb0fc-1eec-4772-ab2c-f4cf71abe632.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--9DpXV_PD--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F317284\u002F9dabb0fc-1eec-4772-ab2c-f4cf71abe632.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-04-18T10:55:37Z",{},"https:\u002F\u002Fdev.to\u002Fsinghanuj620\u002Fmongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf",8,"singhanuj620")));