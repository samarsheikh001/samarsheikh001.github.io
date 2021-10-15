window.__NUXT__=(function(a,b,c,d,e,f){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634315825",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:583001,title:"Work on your Lambda functions live",description:"AWS CDK has been great for us and our readers over on Serverless Stack. But the local development exp...",readable_publish_date:"Jan 26",slug:"work-on-your-lambda-functions-live-51cp",path:"\u002Faws-builders\u002Fwork-on-your-lambda-functions-live-51cp",url:b,comments_count:3,public_reactions_count:c,collection_id:a,published_timestamp:d,positive_reactions_count:c,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--yIpLwIuB--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Firyz7lvob2dpqkfih8o0.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--hOVMjDnY--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Firyz7lvob2dpqkfih8o0.png",canonical_url:b,created_at:"2021-01-26T09:16:15Z",edited_at:"2021-01-26T15:44:41Z",crossposted_at:a,published_at:d,last_comment_at:"2021-05-19T02:57:57Z",reading_time_minutes:4,tag_list:"aws, cdk, serverless, sst",tags:["aws","cdk","serverless","sst"],body_html:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Faws.amazon.com\u002Fcdk\u002F\"\u003EAWS CDK\u003C\u002Fa\u003E has been great for us and our readers over on \u003Ca href=\"https:\u002F\u002Fserverless-stack.com\"\u003EServerless Stack\u003C\u002Fa\u003E. But the local development experience for Lambda isn't great. To fix this we created a \u003Cstrong\u003ELive Lambda Development\u003C\u002Fstrong\u003E environment in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\"\u003ESST\u003C\u002Fa\u003E. SST makes it easier to build serverless apps by allowing you to work on your Lambda functions locally while connecting to your deployed resources.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ciframe width=\"710\" height=\"399\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FhnTSTm5n11g\" allowfullscreen loading=\"lazy\"\u003E\n\u003C\u002Fiframe\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp\u003EBefore we look at how it works, let's look at what the local development environment for serverless is usually like.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"background\" href=\"#background\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Background\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWorking on Lambda functions locally can be painful. You have to either:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003E\n\u003Cp\u003ELocally mock all the services that your Lambda function uses\u003C\u002Fp\u003E\n\n\u003Cp\u003ELike API Gateway, SNS, SQS, etc. This is hard to do. If you are using a tool that mocks a specific service (like API Gateway), you won't be able to test a Lambda that's invoked by a different service (like SNS). On the other hand a service like LocalStack, that tries to mock a whole suite of services, is slow and the mocked services can be out of date.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\n\u003Cp\u003EOr, you'll need to deploy your changes to test them\u003C\u002Fp\u003E\n\n\u003Cp\u003EEach deployment can take at least a minute. And repeatedly deploying to test a change really slows down the feedback loop.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"introducing-raw-sst-start-endraw-\" href=\"#introducing-raw-sst-start-endraw-\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Introducing \u003Ccode\u003Esst start\u003C\u002Fcode\u003E\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo fix this we added the \u003Ccode\u003Esst start\u003C\u002Fcode\u003E command to the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\"\u003EServerless Stack Toolkit (SST)\u003C\u002Fa\u003E. It's an extension to AWS CDK that makes it easier to build serverless apps using CDK.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis command does a couple of things:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EIt deploys a debug stack with a WebSocket API to the same AWS account and region as your app.\u003C\u002Fli\u003E\n\u003Cli\u003EIt deploys your app and replaces the Lambda functions with a stub Lambda.\u003C\u002Fli\u003E\n\u003Cli\u003EStarts up a local WebSocket client to connect to the debug stack.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003EThe debug stack contains a serverless WebSocket API and a DynamoDB table. The stub Lambda when invoked, sends a message to the WebSocket API, which in turn sends a message to the local client connected to it. The client then executes the local version of the Lambda function and sends back the results to the WebSocket API. Which then responds to the stub Lambda. And finally the stub Lambda responds back with the results.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"an-example\" href=\"#an-example\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  An Example\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ELet's look at an example.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--d9S1ul8q--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdocs.serverless-stack.com\u002Fimg\u002Fsst-start-demo-architecture.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--d9S1ul8q--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdocs.serverless-stack.com\u002Fimg\u002Fsst-start-demo-architecture.png\" alt=\" sst-start-architecture \" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn this sample app we have:\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003EAn API Gateway endpoint\u003C\u002Fli\u003E\n\u003Cli\u003EAn SNS topic\u003C\u002Fli\u003E\n\u003Cli\u003EA Lambda function (api.js) that responds to the API and sends a message to the SNS topic\u003C\u002Fli\u003E\n\u003Cli\u003EA Lambda function (sns.js) that subscribes to the SNS topic\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\n\u003Cp\u003ESo when a request is made to the API endpoint, the stub version of api.js gets invoked and sends a message to the debug stack. This in turn gets streamed to the client. The client invokes the local version of api.js and returns the results to the debug stack. The local version also sends a message to the SNS topic. Meanwhile, the stub api.js responds to the API request with the results. Now the stub version of sns.js gets invoked as it is subscribed to the SNS topic. This gets sent to the debug stack which in turn gets streamed to the client to execute the local version of sns.js. The results of this are streamed back to stub sns.js that responds with the results.\u003C\u002Fp\u003E\n\n\u003Cp\u003EYou can \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fsst-start-demo\"\u003Etry out this sample repo here\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"advantages\" href=\"#advantages\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Advantages\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThis approach has a couple of advantages.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EYou can work on your Lambda functions locally\u003C\u002Fli\u003E\n\u003Cli\u003EWhile interacting with your entire deployed AWS infrastructure\u003C\u002Fli\u003E\n\u003Cli\u003EIt supports all Lambda triggers, so there's no need to mock API Gateway, SQS, SNS, etc.\u003C\u002Fli\u003E\n\u003Cli\u003EIt supports real Lambda environment variables\u003C\u002Fli\u003E\n\u003Cli\u003EAnd Lambda IAM permissions, so if a Lambda fails on AWS due to the lack of IAM permissions, it would fail locally as well.\u003C\u002Fli\u003E\n\u003Cli\u003EAnd it's fast! There's nothing to deploy when you make a change!\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EA couple of things to note.\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EThe debug stack is completely serverless\n\n\u003Cul\u003E\n\u003Cli\u003ESo you don't get charged when it's not in use\u003C\u002Fli\u003E\n\u003Cli\u003EAnd it's very cheap per request, it'll be within the free tier limits\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003Cli\u003EAll the data stays between your local machine and your AWS account\n\n\u003Cul\u003E\n\u003Cli\u003EThere are no 3rd party services that are used\u003C\u002Fli\u003E\n\u003Cli\u003ESupport for connecting to AWS resources inside VPC is coming soon\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\" class=\"anchor\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThe \u003Ccode\u003Esst start\u003C\u002Fcode\u003E command in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\"\u003E\u003Cstrong\u003ESST\u003C\u002Fstrong\u003E\u003C\u002Fa\u003E creates a live lambda development environment. By extending AWS CDK, it allows you to build serverless applications in CDK while having a first-class local development environment.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAs one of our early users put it; \u003Cem\u003E\u003Ccode\u003Esst start\u003C\u002Fcode\u003E is the future of Lambda development\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you like the SST project, consider \u003Cstrong\u003Estarring our repo\u003C\u002Fstrong\u003E — \u003C\u002Fp\u003E\n\u003Cdiv class=\"ltag-github-readme-tag\"\u003E\n  \u003Cdiv class=\"readme-overview\"\u003E\n    \u003Ch2\u003E\n      \u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vJ70wriM--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fpracticaldev-herokuapp-com.freetls.fastly.net\u002Fassets\u002Fgithub-logo-ba8488d21cd8ee1fee097b8410db9deaa41d0ca30b004c0c63de0a479114156f.svg\" alt=\"GitHub logo\" loading=\"lazy\"\u003E\n      \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\"\u003E\n        serverless-stack\n      \u003C\u002Fa\u003E \u002F \u003Ca style=\"font-weight: 600;\" href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\"\u003E\n        serverless-stack\n      \u003C\u002Fa\u003E\n    \u003C\u002Fh2\u003E\n    \u003Ch3\u003E\n      Serverless Stack Toolkit allows you to build serverless apps using CDK.\n    \u003C\u002Fh3\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"ltag-github-body\"\u003E\n    \n\u003Cdiv id=\"readme\" class=\"md\" data-path=\"README.md\"\u003E\u003Carticle class=\"markdown-body entry-content container-lg\" itemprop=\"text\"\u003E\u003Cp align=\"center\"\u003E\n  \u003Ca href=\"https:\u002F\u002Fdocs.serverless-stack.com\u002F\" rel=\"nofollow\"\u003E\n    \u003Cimg alt=\"Serverless Stack Toolkit (SST)\" src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--tnfte2gU--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fraw.githubusercontent.com\u002Fserverless-stack\u002Fidentity\u002Fmain\u002Fsst.svg\" width=\"200\" style=\"max-width:100%;\" loading=\"lazy\"\u003E\n  \u003C\u002Fa\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp align=\"center\"\u003E\n  \u003Cb\u003EServerless Stack Toolkit (SST)\u003C\u002Fb\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp align=\"center\"\u003E\n  \u003Ca href=\"https:\u002F\u002Fjoin.slack.com\u002Ft\u002Fserverless-stack\u002Fshared_invite\u002Fzt-kqna615x-AFoTXvrglivZqJZcnTzKZA\" rel=\"nofollow\"\u003E\u003Cimg alt=\"Slack\" src=\"https:\u002F\u002Fcamo.githubusercontent.com\u002F100706eef60bf635120f21e1de6352a1e755f5009ad3e097947f9b30365257d1\u002F68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d636861742d626c75652e737667\" data-canonical-src=\"https:\u002F\u002Fimg.shields.io\u002Fbadge\u002FSlack-chat-blue.svg\" style=\"max-width:100%;\"\u003E\u003C\u002Fa\u003E\n  \u003Ca href=\"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002F@serverless-stack\u002Fcli\" rel=\"nofollow\"\u003E\u003Cimg alt=\"npm\" src=\"https:\u002F\u002Fcamo.githubusercontent.com\u002Fcad26dc37cdae1d51afb1068cf948ef9771100eed353ea192cab2f264ac6e756\u002F68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407365727665726c6573732d737461636b2f636c692e737667\" data-canonical-src=\"https:\u002F\u002Fimg.shields.io\u002Fnpm\u002Fv\u002F@serverless-stack\u002Fcli.svg\" style=\"max-width:100%;\"\u003E\u003C\u002Fa\u003E\n  \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\u002Factions\"\u003E\u003Cimg alt=\"Build status\" src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--aaLtbvhB--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\u002Fworkflows\u002FCI\u002Fbadge.svg\" style=\"max-width:100%;\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\n\u003C\u002Fp\u003E\n\n\n\u003Chr\u003E\n\n\u003Cp\u003EServerless Stack Toolkit (SST) is an extension of \u003Ca href=\"https:\u002F\u002Faws.amazon.com\u002Fcdk\u002F\" rel=\"nofollow\"\u003EAWS CDK\u003C\u002Fa\u003E that:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EIncludes a \u003Ca href=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fserverless-stack\u002Fserverless-stack\u002Fmaster\u002F#live-lambda-development\"\u003ELive Lambda Development environment\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EWith zero-config support for ES and TypeScript using \u003Ca href=\"https:\u002F\u002Fesbuild.github.io\" rel=\"nofollow\"\u003Eesbuild\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAllows you to use \u003Ca href=\"https:\u002F\u002Fserverless-stack.com\u002Fchapters\u002Fusing-aws-cdk-with-serverless-framework.html\" rel=\"nofollow\"\u003ECDK with Serverless Framework\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fd1ne2nltv07ycv.cloudfront.net\u002FSST\u002Fsst-start-demo\u002Fsst-start-demo-2.mp4\" rel=\"nofollow\"\u003E\u003Cimg src=\"https:\u002F\u002Fcamo.githubusercontent.com\u002F27200229c8374cc1b51ab286fd1ef0ae5eb7fdc04c8ff5bd133e3d4d9ca86639\u002F68747470733a2f2f64316e65326e6c747630377963762e636c6f756466726f6e742e6e65742f5353542f7373742d73746172742d64656d6f2f7373742d73746172742d64656d6f2d322e676966\" alt=\"sst start\" data-canonical-src=\"https:\u002F\u002Fd1ne2nltv07ycv.cloudfront.net\u002FSST\u002Fsst-start-demo\u002Fsst-start-demo-2.gif\" style=\"max-width:100%;\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ESST also supports deploying your CloudFormation stacks asynchronously. \u003Ca href=\"https:\u002F\u002Fseed.run\" rel=\"nofollow\"\u003ESeed\u003C\u002Fa\u003E natively supports concurrent asynchronous deployments for your SST apps. And SST deployments on Seed are free!\u003C\u002Fp\u003E\n\n\u003Cp\u003ESST also comes with a few other niceties:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAutomatically lints your code using \u003Ca href=\"https:\u002F\u002Feslint.org\u002F\" rel=\"nofollow\"\u003EESLint\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003ERuns your unit tests using \u003Ca href=\"https:\u002F\u002Fjestjs.io\u002F\" rel=\"nofollow\"\u003EJest\u003C\u002Fa\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EBehind the scenes, SST uses \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Faws-cdk\"\u003Ea lightweight fork of AWS CDK\u003C\u002Fa\u003E to programmatically invoke the various CDK commands.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\nQuick Start\u003C\u002Fh2\u003E\n\n\u003Cp\u003ECreate your first SST app.\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight highlight-source-shell js-code-highlight\"\u003E\n\u003Cpre\u003E$ npx create-serverless-stack@latest my-sst-app\n$ \u003Cspan class=\"pl-c1\"\u003Ecd\u003C\u002Fspan\u003E my-sst-app\n$ npx sst start\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch2\u003E\nLive Lambda Development\u003C\u002Fh2\u003E\n\u003Cp\u003EThe \u003Ccode\u003Esst start\u003C\u002Fcode\u003E command starts up a local development environment that opens a WebSocket connection to your deployed app and proxies any Lambda requests to your local machine…\u003C\u002Fp\u003E\u003C\u002Farticle\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"gh-btn-container\"\u003E\u003Ca class=\"gh-btn\" href=\"https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack\"\u003EView on GitHub\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n",body_markdown:"[AWS CDK](https:\u002F\u002Faws.amazon.com\u002Fcdk\u002F) has been great for us and our readers over on [Serverless Stack](https:\u002F\u002Fserverless-stack.com). But the local development experience for Lambda isn't great. To fix this we created a **Live Lambda Development** environment in [SST](https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack). SST makes it easier to build serverless apps by allowing you to work on your Lambda functions locally while connecting to your deployed resources.\n\n{% youtube hnTSTm5n11g %}\n\nBefore we look at how it works, let's look at what the local development environment for serverless is usually like.\n\n## Background\n\nWorking on Lambda functions locally can be painful. You have to either:\n\n1. Locally mock all the services that your Lambda function uses\n\n    Like API Gateway, SNS, SQS, etc. This is hard to do. If you are using a tool that mocks a specific service (like API Gateway), you won't be able to test a Lambda that's invoked by a different service (like SNS). On the other hand a service like LocalStack, that tries to mock a whole suite of services, is slow and the mocked services can be out of date.\n\n2. Or, you'll need to deploy your changes to test them\n\n    Each deployment can take at least a minute. And repeatedly deploying to test a change really slows down the feedback loop.\n\n## Introducing `sst start`\n\nTo fix this we added the `sst start` command to the [Serverless Stack Toolkit (SST)](https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack). It's an extension to AWS CDK that makes it easier to build serverless apps using CDK.\n\nThis command does a couple of things:\n\n1. It deploys a debug stack with a WebSocket API to the same AWS account and region as your app.\n2. It deploys your app and replaces the Lambda functions with a stub Lambda.\n3. Starts up a local WebSocket client to connect to the debug stack.\n\nThe debug stack contains a serverless WebSocket API and a DynamoDB table. The stub Lambda when invoked, sends a message to the WebSocket API, which in turn sends a message to the local client connected to it. The client then executes the local version of the Lambda function and sends back the results to the WebSocket API. Which then responds to the stub Lambda. And finally the stub Lambda responds back with the results.\n\n## An Example\n\nLet's look at an example.\n\n![ sst-start-architecture ](https:\u002F\u002Fdocs.serverless-stack.com\u002Fimg\u002Fsst-start-demo-architecture.png)\n\nIn this sample app we have:\n\n1. An API Gateway endpoint\n2. An SNS topic\n3. A Lambda function (api.js) that responds to the API and sends a message to the SNS topic\n4. A Lambda function (sns.js) that subscribes to the SNS topic\n\nSo when a request is made to the API endpoint, the stub version of api.js gets invoked and sends a message to the debug stack. This in turn gets streamed to the client. The client invokes the local version of api.js and returns the results to the debug stack. The local version also sends a message to the SNS topic. Meanwhile, the stub api.js responds to the API request with the results. Now the stub version of sns.js gets invoked as it is subscribed to the SNS topic. This gets sent to the debug stack which in turn gets streamed to the client to execute the local version of sns.js. The results of this are streamed back to stub sns.js that responds with the results.\n\nYou can [try out this sample repo here](https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fsst-start-demo).\n\n\n## Advantages\n\nThis approach has a couple of advantages.\n\n- You can work on your Lambda functions locally\n- While interacting with your entire deployed AWS infrastructure\n- It supports all Lambda triggers, so there's no need to mock API Gateway, SQS, SNS, etc.\n- It supports real Lambda environment variables\n- And Lambda IAM permissions, so if a Lambda fails on AWS due to the lack of IAM permissions, it would fail locally as well.\n- And it's fast! There's nothing to deploy when you make a change!\n\nA couple of things to note.\n\n- The debug stack is completely serverless\n  - So you don't get charged when it's not in use\n  - And it's very cheap per request, it'll be within the free tier limits\n- All the data stays between your local machine and your AWS account\n  - There are no 3rd party services that are used\n  - Support for connecting to AWS resources inside VPC is coming soon\n\n\n## Conclusion\n\nThe `sst start` command in [**SST**](https:\u002F\u002Fgithub.com\u002Fserverless-stack\u002Fserverless-stack) creates a live lambda development environment. By extending AWS CDK, it allows you to build serverless applications in CDK while having a first-class local development environment.\n\nAs one of our early users put it; _`sst start` is the future of Lambda development_\n\nIf you like the SST project, consider **starring our repo** — {% github serverless-stack\u002Fserverless-stack %}",user:{name:"Frank Wang",username:e,twitter_username:"fanjiewang",github_username:e,website_url:"https:\u002F\u002Fserverless-stack.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Ubd-uAo6--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F186138\u002F59f54086-fd9f-4baf-b47f-4e81aea79985.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--LlEY_d1M--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F186138\u002F59f54086-fd9f-4baf-b47f-4e81aea79985.jpeg"},organization:{name:"AWS Community Builders ",username:f,slug:f,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--zmOZQNzv--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2794\u002F88da75b6-aadd-4ea1-8083-ae2dfca8be94.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vWmcJ-ty--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Forganization\u002Fprofile_image\u002F2794\u002F88da75b6-aadd-4ea1-8083-ae2dfca8be94.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Ffwang\u002F583001",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"https:\u002F\u002Fdev.to\u002Faws-builders\u002Fwork-on-your-lambda-functions-live-51cp",59,"2021-01-26T15:32:57Z","fwang","aws-builders"));