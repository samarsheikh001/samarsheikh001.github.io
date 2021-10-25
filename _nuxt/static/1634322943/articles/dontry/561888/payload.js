__NUXT_JSONP__("/articles/dontry/561888", (function(a,b,c,d,e,f){c.type_of="article";c.id=561888;c.title="Using npm link in Angular9+";c.description="When building an Angular library, 'npm link' can shorten the feedback loop between the library and th...";c.readable_publish_date="Jan 5";c.slug="using-npm-link-in-angular9-11ie";c.path="\u002Fdontry\u002Fusing-npm-link-in-angular9-11ie";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F561888.png";c.canonical_url=d;c.created_at="2021-01-05T12:12:22Z";c.edited_at="2021-01-06T04:41:53Z";c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=1;c.tag_list="angular, npm, library";c.tags=["angular","npm","library"];c.body_html="\u003Cp\u003EWhen building an Angular library, 'npm link' can shorten the feedback loop between the library and the application. However, if you simply build the library and link it, it will throw errors when the project starts.This is  because the application is compiled in Ivy mode, so its dependencies i.e. the linked library, should be compiled in Ivy mode too.\u003C\u002Fp\u003E\n\n\u003Cp\u003EHere is a solution:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003ECreate a new \u003Ccode\u003Etsconfig.lib.ivy.json\u003C\u002Fcode\u003E in \u003Ccode\u003Eproject\u002FPROJECT_NAME\u003C\u002Fcode\u003E with the following setting. This ensures that Ivy view engine is used to compile the project whereas the library build does not use Ivy.\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eextends\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E.\u002Ftsconfig.lib.json\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EangularCompilerOptions\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EenableIvy\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Col\u003E\n\u003Cli\u003EIn the library's \u003Ccode\u003Eangular.json\u003C\u002Fcode\u003E, add a new configuration \u003Ccode\u003Eivy\u003C\u002Fcode\u003E under \u003Ccode\u003Eproject-&gt;PROJECT_NAME-&gt;architect-&gt;build\u003C\u002Fcode\u003E.\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E\n\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Econfigurations\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eproduction\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EtsConfig\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eprojects\u002FPROJECT_NAME\u002Ftsconfig.lib.prod.json\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\n  \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eivy\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EtsConfig\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003Eprojects\u002FPROJECT_NAME\u002Ftsconfig.lib.ivy.json\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\n  \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Col\u003E\n\u003Cli\u003EUpdate your package.json for easy access to the following commands:\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight json\"\u003E\u003Ccode\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"scripts\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"err\"\u003E...\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"build:ivy\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"ng build PROJECT_NAME --configuration=ivy\"\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n  \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewbox=\"0 0 448 512\" class=\"highlight-action highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath fill=\"#fff\" d=\"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003ERun npm run build:ivy. This will build an Ivy-compatible library.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ERun \u003Ccode\u003Ecd dist\u002FPROJECT_NAME\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003ERun \u003Ccode\u003Enpm link\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EIn the project, run \u003Ccode\u003Enpm link LIBRARY_NAME\u003C\u002Fcode\u003E to link to the library.\u003C\u002Fp\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003ENow the library is linked to the project.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EBonus tip\u003C\u002Fstrong\u003E: Run npm run \u003Ccode\u003Ebuild:ivy -- --watch\u003C\u002Fcode\u003E so that the library gets rebuilt on every code change.\u003C\u002Fp\u003E\n\n";c.body_markdown="---\ntitle: Using npm link in Angular9+\npublished: true\ndescription: \ntags: Angular, npm, library\n\u002F\u002Fcover_image: https:\u002F\u002Fdirect_url_to_image.jpg\n---\n\nWhen building an Angular library, 'npm link' can shorten the feedback loop between the library and the application. However, if you simply build the library and link it, it will throw errors when the project starts.This is  because the application is compiled in Ivy mode, so its dependencies i.e. the linked library, should be compiled in Ivy mode too.\n\nHere is a solution:\n1. Create a new `tsconfig.lib.ivy.json` in `project\u002FPROJECT_NAME` with the following setting. This ensures that Ivy view engine is used to compile the project whereas the library build does not use Ivy.\n```javascript\n{\n  \"extends\": \".\u002Ftsconfig.lib.json\",\n  \"angularCompilerOptions\": {\n    \"enableIvy\": true\n  }\n}\n```\n2. In the library's `angular.json`, add a new configuration `ivy` under `project-\u003EPROJECT_NAME-\u003Earchitect-\u003Ebuild`.\n```javascript\n...\n\"configurations\": {\n  \"production\": {\n    \"tsConfig\": \"projects\u002FPROJECT_NAME\u002Ftsconfig.lib.prod.json\"\n  },\n  \"ivy\": {\n    \"tsConfig\": \"projects\u002FPROJECT_NAME\u002Ftsconfig.lib.ivy.json\"\n  }\n}\n```\n\n3. Update your package.json for easy access to the following commands:\n\n```json\n \"scripts\": {\n    ...\n    \"build:ivy\": \"ng build PROJECT_NAME --configuration=ivy\"\n  }\n```\n\n4. Run npm run build:ivy. This will build an Ivy-compatible library.\n\n5. Run `cd dist\u002FPROJECT_NAME`\n\n6. Run `npm link`\n\n7. In the project, run `npm link LIBRARY_NAME` to link to the library.\n\nNow the library is linked to the project.\n\n**Bonus tip**: Run npm run `build:ivy -- --watch` so that the library gets rebuilt on every code change.";c.user={name:"Don",username:f,twitter_username:a,github_username:f,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--dJKrA3_f--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F110116\u002Facbb83e8-2bbd-4d86-bb4e-2be9a3193c8a.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--fLK1j5-U--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F110116\u002Facbb83e8-2bbd-4d86-bb4e-2be9a3193c8a.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-01-05T12:12:32Z",{},"https:\u002F\u002Fdev.to\u002Fdontry\u002Fusing-npm-link-in-angular9-11ie",7,"dontry")));