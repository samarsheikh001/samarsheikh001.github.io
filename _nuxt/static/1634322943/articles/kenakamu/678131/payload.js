__NUXT_JSONP__("/articles/kenakamu/678131", (function(a,b,c,d,e,f){c.type_of="article";c.id=678131;c.title="Integration Test with Postman in Azure DevOps Pipeline: Part 2";c.description="In this article, I explain how to run postman tests in CUI so that we can run it in Azure DevOps pipe...";c.readable_publish_date="Apr 25";c.slug="integration-test-with-postman-in-azure-devops-pipeline-part-2-nfk";c.path="\u002Fkenakamu\u002Fintegration-test-with-postman-in-azure-devops-pipeline-part-2-nfk";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=a;c.published_timestamp=b;c.positive_reactions_count=e;c.cover_image=a;c.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F678131.png";c.canonical_url=d;c.created_at="2021-04-25T16:29:06Z";c.edited_at="2021-04-25T17:33:19Z";c.crossposted_at=a;c.published_at=b;c.last_comment_at=b;c.reading_time_minutes=3;c.tag_list="azure, postman, devops, pipeline";c.tags=["azure","postman","devops","pipeline"];c.body_html="\u003Cp\u003EIn this article, I explain how to run postman tests in CUI so that we can run it in Azure DevOps pipeline later.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"newman\" href=\"#newman\"\u003E\n  \u003C\u002Fa\u003E\n  newman\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnewman\"\u003Enewman\u003C\u002Fa\u003E is a npm package which is a command-line collection runner for Postman. \u003C\u002Fp\u003E\n\n\u003Cp\u003EAs we use this tool to run the postman collection test, let's install it locally. You can download \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fen\u002Fdownload\u002F\"\u003Enode.js\u003C\u002Fa\u003E if you don't have it yet. Once you installed node.js, then run the following command to install newman.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Enpm \u003Cspan class=\"nb\"\u003Einstall\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E-g\u003C\u002Fspan\u003E newman\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"export-collection\" href=\"#export-collection\"\u003E\n  \u003C\u002Fa\u003E\n  Export collection\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ENext, we need to export postman collection.\u003C\u002Fp\u003E\n\n\u003Cp\u003E1. Go to postman and open collection you want to run with newman. Click [...] and select \u003Cstrong\u003EExport\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--jp0no5SO--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffshs7jhba5ct8sjjal1r.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--jp0no5SO--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffshs7jhba5ct8sjjal1r.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E2. Select recommended version and click \u003Cstrong\u003EExport\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PaXEvVqN--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F8x2gj5xtoeez86ixmk4u.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PaXEvVqN--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F8x2gj5xtoeez86ixmk4u.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E3. Save the json file. I saved it in \u003Cstrong\u003Epostman_collection\u003C\u002Fstrong\u003E folder in the web api project.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--P2GFQ_n8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4ryu90xi4eegxta558d9.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--P2GFQ_n8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4ryu90xi4eegxta558d9.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"run-from-cui\" href=\"#run-from-cui\"\u003E\n  \u003C\u002Fa\u003E\n  Run from CUI\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E1. Open any shell you want to use. I use \u003Ca href=\"https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fterminal\u002F\"\u003EWindows 10 Terminal\u003C\u002Fa\u003E. Move to the project root.\u003C\u002Fp\u003E\n\n\u003Cp\u003E2. Run newman command by specifying collection. As I run the Web API locally with self-signed certificate, I added \u003Cstrong\u003E--insecure\u003C\u002Fstrong\u003E to ignore the cert error.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Enewman run .\u003Cspan class=\"se\"\u003E\\p\u003C\u002Fspan\u003Eostman_collection\u003Cspan class=\"se\"\u003E\\m\u003C\u002Fspan\u003Eywebapi.postman_collection.json \u003Cspan class=\"nt\"\u003E--insecure\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E3. Confirm the result.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--q72MLU7m--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcjqle8pv2avrjmqk94y6.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--q72MLU7m--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcjqle8pv2avrjmqk94y6.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"use-environment-variable\" href=\"#use-environment-variable\"\u003E\n  \u003C\u002Fa\u003E\n  Use Environment variable\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EThe script has fixed URL which is not good idea when we commit this code to Azure DevOps, as we may deploy the application to Azure Web Apps, rather than keep running in local.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo I update the script to use environment variable.\u003C\u002Fp\u003E\n\n\u003Cp\u003E1. Go back to postman and select \u003Cstrong\u003EEnvironments\u003C\u002Fstrong\u003E. Click \u003Cstrong\u003E+\u003C\u002Fstrong\u003E button.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--juoly_kh--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkgexuao7g1c0mr1lkecm.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--juoly_kh--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkgexuao7g1c0mr1lkecm.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E2. Update the environment name.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--S-LfbnDC--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F07v56matkaskpnuh9khj.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--S-LfbnDC--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F07v56matkaskpnuh9khj.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E3. Add one environment \u003Cstrong\u003EAddress\u003C\u002Fstrong\u003E and enter current value as \u003Cstrong\u003E\u003Ca href=\"https:\u002F\u002Flocalhost:5001\"\u003Ehttps:\u002F\u002Flocalhost:5001\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--BoP28Plo--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fljszgkx17az9nyn72oub.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--BoP28Plo--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fljszgkx17az9nyn72oub.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E4. Click \u003Cstrong\u003ESave\u003C\u002Fstrong\u003E button.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_gahYIW4--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Feqta8qeo8fxp8p6q27r5.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--_gahYIW4--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Feqta8qeo8fxp8p6q27r5.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E5. Go back to the collection and update the environment to use.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ZhsBNFcF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fj19svovq5o4q3z9i1yoh.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ZhsBNFcF--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fj19svovq5o4q3z9i1yoh.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E6. Update request address to use the variable.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003E\u003Cspan class=\"o\"\u003E{{\u003C\u002Fspan\u003EAddress\u003Cspan class=\"o\"\u003E}}\u003C\u002Fspan\u003E\u002Fodata\u002FWeatherForecast\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--llk1kFGo--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ff2qage9xanx35p5cukc3.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--llk1kFGo--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ff2qage9xanx35p5cukc3.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E7. Click \u003Cstrong\u003ESend\u003C\u002Fstrong\u003E to confirm it still works as it was. Make sure to \u003Cstrong\u003ESave\u003C\u002Fstrong\u003E it and do the same for other tests.\u003C\u002Fp\u003E\n\n\u003Cp\u003E8. Export the collection again.\u003C\u002Fp\u003E\n\n\u003Cp\u003E9. Run newman command by passing environment variable.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Enewman run .\u003Cspan class=\"se\"\u003E\\p\u003C\u002Fspan\u003Eostman_collection\u003Cspan class=\"se\"\u003E\\m\u003C\u002Fspan\u003Eywebapi.postman_collection.json \u003Cspan class=\"nt\"\u003E--insecure\u003C\u002Fspan\u003E \u003Cspan class=\"nt\"\u003E--env-var\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003EAddress\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003Ehttps:\u002F\u002Flocalhost:5001\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"use-exported-environment-variables\" href=\"#use-exported-environment-variables\"\u003E\n  \u003C\u002Fa\u003E\n  Use exported environment variables\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003ERather than specifying each variable values, we can also export environment as file.\u003C\u002Fp\u003E\n\n\u003Cp\u003E1. Go to \u003Cstrong\u003EEnvironments\u003C\u002Fstrong\u003E and click [...] in right upper corner , then click \u003Cstrong\u003EExport\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--e0NbW92b--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fexe8ydxzd1iwgsffd73w.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--e0NbW92b--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fexe8ydxzd1iwgsffd73w.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E2. Save the file. I saved it in the same directory as the collection. I also slightly changed the name so that it doesn't have space in it.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--iDVQmZEw--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fa5vvfytp72jz6d6hzhjo.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--iDVQmZEw--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fa5vvfytp72jz6d6hzhjo.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E3. Open the json via editor and update value.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YoqCQRp8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr3l2zc6djaufreg3t4ib.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YoqCQRp8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr3l2zc6djaufreg3t4ib.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E4. Save and run the newman by specifying the environment json file.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight shell\"\u003E\u003Ccode\u003Enewman run .\u003Cspan class=\"se\"\u003E\\p\u003C\u002Fspan\u003Eostman_collection\u003Cspan class=\"se\"\u003E\\m\u003C\u002Fspan\u003Eywebapi.postman_collection.json \u003Cspan class=\"nt\"\u003E-e\u003C\u002Fspan\u003E .\u003Cspan class=\"se\"\u003E\\p\u003C\u002Fspan\u003Eostman_collection\u003Cspan class=\"se\"\u003E\\m\u003C\u002Fspan\u003Eywebapi.postman_environment.json \u003Cspan class=\"nt\"\u003E--insecure\u003C\u002Fspan\u003E \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E5. Confirm the result.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wsP7BhaA--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4e6rh0t2i8zt3kycw03i.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wsP7BhaA--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4e6rh0t2i8zt3kycw03i.png\" alt=\"image\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"summary\" href=\"#summary\"\u003E\n  \u003C\u002Fa\u003E\n  Summary\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EIn this article, I use newman to run the postman collection by using environment. In the next article, I will check-in the code to Azure DevOps project and create pipeline.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdev.to\u002Fkenakamu\u002Fintegration-test-with-postman-in-azure-devops-pipeline-part-3-3m3j\"\u003ENext article\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n";c.body_markdown="In this article, I explain how to run postman tests in CUI so that we can run it in Azure DevOps pipeline later.\n\n# newman \n\n[newman](https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnewman) is a npm package which is a command-line collection runner for Postman. \n\nAs we use this tool to run the postman collection test, let's install it locally. You can download [node.js](https:\u002F\u002Fnodejs.org\u002Fen\u002Fdownload\u002F) if you don't have it yet. Once you installed node.js, then run the following command to install newman.\n\n```shell\nnpm install -g newman\n```\n\n# Export collection\n\nNext, we need to export postman collection.\n\n1\\. Go to postman and open collection you want to run with newman. Click [...] and select **Export**.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ffshs7jhba5ct8sjjal1r.png)\n\n2\\. Select recommended version and click **Export**.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F8x2gj5xtoeez86ixmk4u.png)\n\n3\\. Save the json file. I saved it in **postman_collection** folder in the web api project.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4ryu90xi4eegxta558d9.png)\n \n# Run from CUI\n\n1\\. Open any shell you want to use. I use [Windows 10 Terminal](https:\u002F\u002Fdocs.microsoft.com\u002Fen-us\u002Fwindows\u002Fterminal\u002F). Move to the project root.\n\n2\\. Run newman command by specifying collection. As I run the Web API locally with self-signed certificate, I added **--insecure** to ignore the cert error.\n\n```shell\nnewman run .\\postman_collection\\mywebapi.postman_collection.json --insecure\n```\n\n3\\. Confirm the result.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fcjqle8pv2avrjmqk94y6.png)\n\n# Use Environment variable\n\nThe script has fixed URL which is not good idea when we commit this code to Azure DevOps, as we may deploy the application to Azure Web Apps, rather than keep running in local.\n\nSo I update the script to use environment variable.\n\n1\\. Go back to postman and select **Environments**. Click **+** button.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fkgexuao7g1c0mr1lkecm.png)\n \n2\\. Update the environment name.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F07v56matkaskpnuh9khj.png)\n \n3\\. Add one environment **Address** and enter current value as **https:\u002F\u002Flocalhost:5001**.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fljszgkx17az9nyn72oub.png)\n\n4\\. Click **Save** button.\n \n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Feqta8qeo8fxp8p6q27r5.png)\n \n5\\. Go back to the collection and update the environment to use.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fj19svovq5o4q3z9i1yoh.png)\n\n6\\. Update request address to use the variable.\n\n```shell\n{{Address}}\u002Fodata\u002FWeatherForecast\n```\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Ff2qage9xanx35p5cukc3.png)\n \n7\\. Click **Send** to confirm it still works as it was. Make sure to **Save** it and do the same for other tests.\n\n8\\. Export the collection again.\n\n9\\. Run newman command by passing environment variable.\n\n```shell\nnewman run .\\postman_collection\\mywebapi.postman_collection.json --insecure --env-var Address=https:\u002F\u002Flocalhost:5001\n```\n\n# Use exported environment variables\n\nRather than specifying each variable values, we can also export environment as file.\n\n1\\. Go to **Environments** and click [...] in right upper corner , then click **Export**.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fexe8ydxzd1iwgsffd73w.png)\n \n2\\. Save the file. I saved it in the same directory as the collection. I also slightly changed the name so that it doesn't have space in it.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fa5vvfytp72jz6d6hzhjo.png)\n \n3\\. Open the json via editor and update value.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fr3l2zc6djaufreg3t4ib.png)\n\n4\\. Save and run the newman by specifying the environment json file.\n\n```shell\nnewman run .\\postman_collection\\mywebapi.postman_collection.json -e .\\postman_collection\\mywebapi.postman_environment.json --insecure \n```\n5\\. Confirm the result.\n\n![image](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F4e6rh0t2i8zt3kycw03i.png)\n \n# Summary\n\nIn this article, I use newman to run the postman collection by using environment. In the next article, I will check-in the code to Azure DevOps project and create pipeline.\n\n[Next article](https:\u002F\u002Fdev.to\u002Fkenakamu\u002Fintegration-test-with-postman-in-azure-devops-pipeline-part-3-3m3j)";c.user={name:"Kenichiro Nakamura",username:f,twitter_username:a,github_username:f,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--rek0f_tz--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F56333\u002Fa6fc479d-0325-4a0c-bf5c-723e035cce67.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--m72_2ujF--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F56333\u002Fa6fc479d-0325-4a0c-bf5c-723e035cce67.jpg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}(null,"2021-04-25T17:32:25Z",{},"https:\u002F\u002Fdev.to\u002Fkenakamu\u002Fintegration-test-with-postman-in-azure-devops-pipeline-part-2-nfk",10,"kenakamu")));