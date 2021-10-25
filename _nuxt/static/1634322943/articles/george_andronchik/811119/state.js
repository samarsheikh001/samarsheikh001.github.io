window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:811119,title:"Clean architecture of Flutter application. Part 1 - Theory",description:"Flutter is a rapidly developing cross-platform framework. It is really perspective technology, the...",readable_publish_date:"Sep 2",slug:"clean-architecture-of-flutter-application-part-1-theory-3b6p",path:"\u002Fgeorge_andronchik\u002Fclean-architecture-of-flutter-application-part-1-theory-3b6p",url:c,comments_count:0,public_reactions_count:d,collection_id:a,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--j3UxnaEG--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fgz9l9ryunzn6qi712b8o.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5rtiei1_--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fgz9l9ryunzn6qi712b8o.png",canonical_url:c,created_at:b,edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:3,tag_list:"flutter, architecture, dart",tags:["flutter","architecture","dart"],body_html:"\u003Cp\u003EFlutter is a rapidly developing cross-platform framework. It is really perspective technology, the state of the art of cross-platform tech. So, let's figure out how to build a good supportable architecture of Flutter application.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThis is the first part of a two-part article dedicated to flutter clean architecture. Today I would like to tell you CA theory. This knowledge will help you to deeply understand the second part, where you will implement a CA example.\u003C\u002Fp\u003E\n\n\u003Cp\u003EClean architecture is the concept by Robert Martin whose main idea is to separate architecture into loosely coupled layers. Thereby we have a good supportable, readable, and testable project.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EUsually 3 layers are defined:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EData Layer: Includes logic of communication with the - database, network apis, etc.\u003C\u002Fli\u003E\n\u003Cli\u003EDomain Layer: business logic layer.\u003C\u002Fli\u003E\n\u003Cli\u003EPresentation Layer: UI.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EData Layer\u003C\u002Fstrong\u003E \u003Ccode\u003Eincludes Repositories and Data Sources.\u003C\u002Fcode\u003E Data sources implement logic of data access from different sources (such as network, database, disk etc). Repositories contain queries and mutations for a specific data model and can decide from which data source gets data (request it from network or get from cache for example).\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EDomain Layer\u003C\u002Fstrong\u003E \u003Ccode\u003Econtains Models and Use Cases.\u003C\u002Fcode\u003E Models declare data format. Use cases combine data from one or multiple repositories. The Use case is a class where you extract the business logic out of your Presenter\u002FViewModel. This makes the Presenter\u002FViewModel simpler because it only coordinates the view and calls Use case. This approach helps to write testable, supportable code.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EPresentation Layer\u003C\u002Fstrong\u003E \u003Ccode\u003Econtains Views and Presenters \u002F ViewModels\u003C\u002Fcode\u003E (sometimes routers. It depends on the presentation layer architecture you choose). View is what users interact with and coordinated by Presenter \u002F ViewModel which executes one or more Use Cases.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe Presentation Layer always depends on the Domain Layer. Data and Domain can depend on each other and it depends on the variant of implementation.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThere are two variants of implementation - \u003Cstrong\u003EData Flow\u003C\u002Fstrong\u003E and \u003Cstrong\u003EDependency Rule\u003C\u002Fstrong\u003E. The main difference between them - \u003Ccode\u003Edata flow’s domain layer depends on data layer while dependency rule’s data layer depends on domain.\u003C\u002Fcode\u003E I prefer Dependency Rule and have a couple of reasons for it.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wd11pAQf--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9rmi33eu68mia9phvswj.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wd11pAQf--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9rmi33eu68mia9phvswj.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe first reason is that it works with \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FEvent_storming\"\u003EEvent Storming\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FDomain-driven_design\"\u003EDDD\u003C\u002Fa\u003E (Domain Driven Design) principles. I mean it is easier to design software driving by domain. Because domain defines business processes and is the most important part of the software.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe second reason is that flutter is cross-platform technology and it is very important to keep the freedom to use different storages (not only presentations) for different platforms (such as mobile and frontend and desktop in the near future). It is important for any long-term projects, not only cross-platform. But for cross-platform, it is required.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf we designed everything correctly, Domain doesn’t have any dependency on any other layer. Also, a good practice is not to use any external dependencies and frameworks. Try to use clean Dart.\u003C\u002Fp\u003E\n\n\u003Cp\u003ETo keep the domain independent from data, there is some approach for that. Domain Layer includes protocols of repositories, so data layer only implements it. And we just inject it by DI.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat's it. I hope you like this article. If this part looks difficult, don’t worry, you will understand these conceptions when you see how it to realize. In the second part, we will implement everything you have just read. See you there.\u003C\u002Fp\u003E\n\n",body_markdown:"Flutter is a rapidly developing cross-platform framework. It is really perspective technology, the state of the art of cross-platform tech. So, let's figure out how to build a good supportable architecture of Flutter application.\n\nThis is the first part of a two-part article dedicated to flutter clean architecture. Today I would like to tell you CA theory. This knowledge will help you to deeply understand the second part, where you will implement a CA example.\n\nClean architecture is the concept by Robert Martin whose main idea is to separate architecture into loosely coupled layers. Thereby we have a good supportable, readable, and testable project.\n\n**Usually 3 layers are defined:**\n* Data Layer: Includes logic of communication with the - database, network apis, etc.\n* Domain Layer: business logic layer.\n* Presentation Layer: UI.\n\n**Data Layer** `includes Repositories and Data Sources.` Data sources implement logic of data access from different sources (such as network, database, disk etc). Repositories contain queries and mutations for a specific data model and can decide from which data source gets data (request it from network or get from cache for example).\n\n**Domain Layer** `contains Models and Use Cases.` Models declare data format. Use cases combine data from one or multiple repositories. The Use case is a class where you extract the business logic out of your Presenter\u002FViewModel. This makes the Presenter\u002FViewModel simpler because it only coordinates the view and calls Use case. This approach helps to write testable, supportable code.\n\n**Presentation Layer** `contains Views and Presenters \u002F ViewModels` (sometimes routers. It depends on the presentation layer architecture you choose). View is what users interact with and coordinated by Presenter \u002F ViewModel which executes one or more Use Cases.\n\nThe Presentation Layer always depends on the Domain Layer. Data and Domain can depend on each other and it depends on the variant of implementation.\n\nThere are two variants of implementation - **Data Flow** and **Dependency Rule**. The main difference between them - `data flow’s domain layer depends on data layer while dependency rule’s data layer depends on domain.` I prefer Dependency Rule and have a couple of reasons for it.\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9rmi33eu68mia9phvswj.png)\n\nThe first reason is that it works with [Event Storming](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FEvent_storming) and [DDD](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FDomain-driven_design) (Domain Driven Design) principles. I mean it is easier to design software driving by domain. Because domain defines business processes and is the most important part of the software.\n\nThe second reason is that flutter is cross-platform technology and it is very important to keep the freedom to use different storages (not only presentations) for different platforms (such as mobile and frontend and desktop in the near future). It is important for any long-term projects, not only cross-platform. But for cross-platform, it is required.\n\nIf we designed everything correctly, Domain doesn’t have any dependency on any other layer. Also, a good practice is not to use any external dependencies and frameworks. Try to use clean Dart.\n\nTo keep the domain independent from data, there is some approach for that. Domain Layer includes protocols of repositories, so data layer only implements it. And we just inject it by DI.\n\t\nThat's it. I hope you like this article. If this part looks difficult, don’t worry, you will understand these conceptions when you see how it to realize. In the second part, we will implement everything you have just read. See you there.\n\n",user:{name:e,username:"george_andronchik",twitter_username:a,github_username:e,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--WRJQkhaS--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F697730\u002Fee794e4d-128e-40da-a1e1-a6621cd2c478.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--p5Agh-AY--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F697730\u002Fee794e4d-128e-40da-a1e1-a6621cd2c478.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Fgeorge_andronchik\u002F811119",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-09-02T07:14:37Z","https:\u002F\u002Fdev.to\u002Fgeorge_andronchik\u002Fclean-architecture-of-flutter-application-part-1-theory-3b6p",49,"gandronchik"));