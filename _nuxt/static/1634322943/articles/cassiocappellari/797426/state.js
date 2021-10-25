window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:797426,title:"Basic Concepts of Node.js",description:"🔶 Introduction   Imagine a web application which sends hundreds of requests per second to a...",readable_publish_date:"Aug 25",slug:"basic-concepts-of-node-js-pch",path:"\u002Fcassiocappellari\u002Fbasic-concepts-of-node-js-pch",url:b,comments_count:59,public_reactions_count:c,collection_id:a,published_timestamp:d,positive_reactions_count:c,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--szPE9hzn--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fqq1vs87b4gf7f3r3qjgp.jpg",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--SjUMdeBM--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fqq1vs87b4gf7f3r3qjgp.jpg",canonical_url:b,created_at:"2021-08-19T16:59:30Z",edited_at:"2021-08-29T19:54:18Z",crossposted_at:a,published_at:d,last_comment_at:"2021-09-09T23:50:15Z",reading_time_minutes:4,tag_list:"architecture, node, webdev, javascript",tags:["architecture","node","webdev","javascript"],body_html:"\u003Ch2\u003E\n  \u003Ca name=\"introduction\" href=\"#introduction\"\u003E\n  \u003C\u002Fa\u003E\n  🔶 Introduction\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EImagine a web application which sends hundreds of requests per second to a server that only processes one request per time before moving to another request. Probably you will have some performance problems and provide a bad experience for your users.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWith this context in mind, Node.js was created in 2009 by Ryan Dahl, a web developer, after he faced some difficult issues by developing features with intense input and output flow using synchronous programming and multi-threaded server-side platforms.\u003C\u002Fp\u003E\n\n\u003Cp\u003ETherefore, \u003Cstrong\u003ENode.js was a technology built to solve a specific problem: deal with intense asynchronous input and output events\u003C\u002Fstrong\u003E. And, which programming language has this capacity? The answer was: JavaScript.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo, in this article, I share my knowledge, experience and studies about this technology, with the goal to provide the basic concepts of Node.js, and help you to understand why it’s such an important player in a modern server-side world.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"1-what-is-nodejs\" href=\"#1-what-is-nodejs\"\u003E\n  \u003C\u002Fa\u003E\n  🔶 1 What is Node.js?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIn simple terms, \u003Cstrong\u003ENode.js is an open-source JavaScript based platform for server-side programming built on Chrome's V8 JavaScript engine\u003C\u002Fstrong\u003E, which means that the engine that compiles JavaScript in a web Browser it's the same engine that runs Node.js in it’s core, and this is what makes it so fast, especially for web applications.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"2-why-nodejs\" href=\"#2-why-nodejs\"\u003E\n  \u003C\u002Fa\u003E\n  🔶 2 Why Node.js?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENode.js is an extremely powerful server-side platform to develop modern, reliable and scalable web applications\u003C\u002Fstrong\u003E, trusted by global companies such as Netflix, Uber, LinkedIn and PayPal.\u003C\u002Fp\u003E\n\n\u003Cp\u003EDue to its single thread characteristics combined with a multi thread platform that runs in background, \u003Cstrong\u003Eit’s event driven architecture is perfect for applications with intense I\u002FO (Inputs and Outputs)\u003C\u002Fstrong\u003E, making it serve more clients with less hardware, which means more performance with less costs.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBesides that, this platform provides other amazing features for developers.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--P0sDn_o2--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx1km68oj19u8otbknnqk.jpg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--P0sDn_o2--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx1km68oj19u8otbknnqk.jpg\" alt=\"Node.js Advantages\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"21-nonblocking-io\" href=\"#21-nonblocking-io\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.1 Non-Blocking I\u002FO\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ENon-blocking method receives an input and returns the output asynchronously. In other words, \u003Cstrong\u003Eit makes it possible for a server to receive many requests without blocking the application while the response is being processed in the background\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"22-single-thread\" href=\"#22-single-thread\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.2 Single Thread\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENode.js can deal with many events at the same time with its single thread characteristic that delegates the asynchronous operations to a multi thread platform\u003C\u002Fstrong\u003E, which means that \u003Cstrong\u003Ejust one thread is able to handle inputs and outputs\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis feature makes it lightweight, scalable and efficient by consuming low memory and infrastructure capacity in order to process a huge number of requests.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"23-event-driven\" href=\"#23-event-driven\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.3 Event Driven\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ENode.js is an event driven technology, which means that \u003Cstrong\u003Ethe control flow of this server side platform is driven by the occurrence of events\u003C\u002Fstrong\u003E. So, at the moment that a Node application starts, an event listener called Event Loop begins to wait for events and doesn't stop until the application is shutted down.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn other words, it’s like having a really efficient waiter waiting for orders until the restaurant closes.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k77pp5Tr--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fezpocyug0okbj7dodf50.jpg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--k77pp5Tr--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fezpocyug0okbj7dodf50.jpg\" alt=\"Node.js Event Driven\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"24-node-package-manager\" href=\"#24-node-package-manager\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.4 Node Package Manager\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ENode Package Manager it’s \u003Cstrong\u003Ethe world's largest free and open source library of functionalities, and can be easily imported and used in any Node application\u003C\u002Fstrong\u003E. All this means that, regardless of the tools that an application needs, it will be found at Node Package Manager.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"25-no-buffering\" href=\"#25-no-buffering\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.5 No Buffering\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003ENode.js applications never buffer data, which dramatically reduces the processing time of uploading files, such as videos or audios. In other words, it \u003Cstrong\u003Esimply outputs data in chunks\u003C\u002Fstrong\u003E, meaning that, for example, a user can watch videos without any interruption.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"26-scalable\" href=\"#26-scalable\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 2.6 Scalable\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EScalability is a core Node characteristic, due to a \u003Cstrong\u003Ehigh capacity of handling large amounts of requests asynchronously with low infrastructure\u003C\u002Fstrong\u003E by it’s architecture that operates on single thread combined with multi thread platform, allowing it receives thousands of simultaneous events.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"3-nodejs-architecture\" href=\"#3-nodejs-architecture\"\u003E\n  \u003C\u002Fa\u003E\n  🔶 3 Node.js Architecture\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENode.js architecture has 3 key elements that work together like an event processing factory\u003C\u002Fstrong\u003E. So, in order to make it easier to understand how these elements interact with each other, I will give an example of a REST API developed in Node.js.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELet’s say that a Client sends several requests to this application:\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"31-event-queue\" href=\"#31-event-queue\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 3.1 Event Queue\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E1- As soon as these requests reach the application, they go to the Event Queue, which is a \u003Cstrong\u003Equeue where all the events that occur in the application goes first\u003C\u002Fstrong\u003E, and where they await to be sended to be processed in the main thread called Event Loop.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"32-event-loop\" href=\"#32-event-loop\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 3.2 Event Loop\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E2- When a request (Blocking Operation) enters in the Event Loop, which is a \u003Cstrong\u003Esingle thread platform that runs the V8 Engine in its core to compile JavaScript\u003C\u002Fstrong\u003E, it’s delegated to the Thread Pool platform to be processed in background. So, with this architectural flow, the main thread is available again to handle other events.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"33-thread-pool\" href=\"#33-thread-pool\"\u003E\n  \u003C\u002Fa\u003E\n  🔸 3.3 Thread Pool\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E3- In the Thread Pool, which is a \u003Cstrong\u003Emulti thread platform that runs a library called libuv and has C++ in its core\u003C\u002Fstrong\u003E, the request (Blocking Operation) is processed asynchronously in the background until it’s completed and ready to be returned.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--O77tpJdQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvkhqcx31nngbl2kfuj1s.jpg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--O77tpJdQ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvkhqcx31nngbl2kfuj1s.jpg\" alt=\"Node.js Architecture\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  🔶 Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EI hope that this brief article helped you to have a better understanding of not just how Node.js works, but also why it’s a platform that growed quickly and it's used in so many companies and startups nowadays.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIn a modern and ultra-connected world, a technology that is able to scale fast with low infrastructure for sure it’s an important player to pay attention to.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo, if you arrived here, \u003Cstrong\u003EI invite you to read my another article about the fundamentals of tools that are also essential in the web world that we live in: API, REST and HTTP Protocol.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fdev.to\u002Fcassiocappellari\u002Ffundamentals-of-rest-api-2nag\"\u003EFundamentals of REST API\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cem\u003EWritten with 💙 by Cássio Cappellari!\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n",body_markdown:"## 🔶 Introduction\n\nImagine a web application which sends hundreds of requests per second to a server that only processes one request per time before moving to another request. Probably you will have some performance problems and provide a bad experience for your users.\n\nWith this context in mind, Node.js was created in 2009 by Ryan Dahl, a web developer, after he faced some difficult issues by developing features with intense input and output flow using synchronous programming and multi-threaded server-side platforms.\n\nTherefore, **Node.js was a technology built to solve a specific problem: deal with intense asynchronous input and output events**. And, which programming language has this capacity? The answer was: JavaScript.\n\nSo, in this article, I share my knowledge, experience and studies about this technology, with the goal to provide the basic concepts of Node.js, and help you to understand why it’s such an important player in a modern server-side world.\n\n## 🔶 1 What is Node.js?\n\nIn simple terms, **Node.js is an open-source JavaScript based platform for server-side programming built on Chrome's V8 JavaScript engine**, which means that the engine that compiles JavaScript in a web Browser it's the same engine that runs Node.js in it’s core, and this is what makes it so fast, especially for web applications.\n\n## 🔶 2 Why Node.js?\n\n**Node.js is an extremely powerful server-side platform to develop modern, reliable and scalable web applications**, trusted by global companies such as Netflix, Uber, LinkedIn and PayPal.\n\nDue to its single thread characteristics combined with a multi thread platform that runs in background, **it’s event driven architecture is perfect for applications with intense I\u002FO (Inputs and Outputs)**, making it serve more clients with less hardware, which means more performance with less costs.\n\nBesides that, this platform provides other amazing features for developers.\n\n![Node.js Advantages](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fx1km68oj19u8otbknnqk.jpg)\n\n### 🔸 2.1 Non-Blocking I\u002FO\n\nNon-blocking method receives an input and returns the output asynchronously. In other words, **it makes it possible for a server to receive many requests without blocking the application while the response is being processed in the background**.\n\n### 🔸 2.2 Single Thread\n\n**Node.js can deal with many events at the same time with its single thread characteristic that delegates the asynchronous operations to a multi thread platform**, which means that **just one thread is able to handle inputs and outputs**.\n\nThis feature makes it lightweight, scalable and efficient by consuming low memory and infrastructure capacity in order to process a huge number of requests.\n\n### 🔸 2.3 Event Driven\n\nNode.js is an event driven technology, which means that **the control flow of this server side platform is driven by the occurrence of events**. So, at the moment that a Node application starts, an event listener called Event Loop begins to wait for events and doesn't stop until the application is shutted down.\n\nIn other words, it’s like having a really efficient waiter waiting for orders until the restaurant closes.\n\n![Node.js Event Driven](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fezpocyug0okbj7dodf50.jpg)\n\n### 🔸 2.4 Node Package Manager\n\nNode Package Manager it’s **the world's largest free and open source library of functionalities, and can be easily imported and used in any Node application**. All this means that, regardless of the tools that an application needs, it will be found at Node Package Manager.\n\n### 🔸 2.5 No Buffering\n\nNode.js applications never buffer data, which dramatically reduces the processing time of uploading files, such as videos or audios. In other words, it **simply outputs data in chunks**, meaning that, for example, a user can watch videos without any interruption.\n\n### 🔸 2.6 Scalable\n\nScalability is a core Node characteristic, due to a **high capacity of handling large amounts of requests asynchronously with low infrastructure** by it’s architecture that operates on single thread combined with multi thread platform, allowing it receives thousands of simultaneous events.\n\n## 🔶 3 Node.js Architecture\n\n**Node.js architecture has 3 key elements that work together like an event processing factory**. So, in order to make it easier to understand how these elements interact with each other, I will give an example of a REST API developed in Node.js.\n\nLet’s say that a Client sends several requests to this application:\n\n### 🔸 3.1 Event Queue\n\n1- As soon as these requests reach the application, they go to the Event Queue, which is a **queue where all the events that occur in the application goes first**, and where they await to be sended to be processed in the main thread called Event Loop.\n\n### 🔸 3.2 Event Loop\n\n2- When a request (Blocking Operation) enters in the Event Loop, which is a **single thread platform that runs the V8 Engine in its core to compile JavaScript**, it’s delegated to the Thread Pool platform to be processed in background. So, with this architectural flow, the main thread is available again to handle other events.\n\n### 🔸 3.3 Thread Pool\n\n3- In the Thread Pool, which is a **multi thread platform that runs a library called libuv and has C++ in its core**, the request (Blocking Operation) is processed asynchronously in the background until it’s completed and ready to be returned.\n\n![Node.js Architecture](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fvkhqcx31nngbl2kfuj1s.jpg)\n\n## 🔶 Conclusion\n\nI hope that this brief article helped you to have a better understanding of not just how Node.js works, but also why it’s a platform that growed quickly and it's used in so many companies and startups nowadays.\n\nIn a modern and ultra-connected world, a technology that is able to scale fast with low infrastructure for sure it’s an important player to pay attention to.\n\nSo, if you arrived here, **I invite you to read my another article about the fundamentals of tools that are also essential in the web world that we live in: API, REST and HTTP Protocol.**\n\n[Fundamentals of REST API](https:\u002F\u002Fdev.to\u002Fcassiocappellari\u002Ffundamentals-of-rest-api-2nag)\n\n*Written with 💙 by Cássio Cappellari!*",user:{name:"Cássio Cappellari",username:e,twitter_username:a,github_username:e,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--zu1xVv9v--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F565847\u002Fb0fbaa12-3bca-4788-b45d-f0700bb8845d.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--COj0c3hQ--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F565847\u002Fb0fbaa12-3bca-4788-b45d-f0700bb8845d.jpg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fcassiocappellari\u002F797426",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"https:\u002F\u002Fdev.to\u002Fcassiocappellari\u002Fbasic-concepts-of-node-js-pch",1401,"2021-08-25T11:50:42Z","cassiocappellari"));