__NUXT_JSONP__("/articles/hussainabid/775694", (function(a,b,c,d,e){d.type_of="article";d.id=775694;d.title="How to get current user location, city, country in laravel";d.description="In this tutorial, we will see how you can get the current user location, city, country, country code,...";d.readable_publish_date="Jul 29";d.slug="how-to-get-current-user-location-city-country-in-laravel-dec";d.path="\u002Fhussainabid\u002Fhow-to-get-current-user-location-city-country-in-laravel-dec";d.url=e;d.comments_count=0;d.public_reactions_count=b;d.collection_id=c;d.published_timestamp=a;d.positive_reactions_count=b;d.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Feo3-RT2--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fqgmr006xjozhx1owlpro.png";d.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--mvG3Hfua--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fqgmr006xjozhx1owlpro.png";d.canonical_url=e;d.created_at=a;d.edited_at="2021-07-30T09:48:09Z";d.crossposted_at=c;d.published_at=a;d.last_comment_at=a;d.reading_time_minutes=b;d.tag_list="laravel, geolocation, programming, php";d.tags=["laravel","geolocation","programming","php"];d.body_html="\u003Cp\u003EIn this tutorial, we will see how you can get the current user location, city, country, country code, postal code, zip code, region, longitude and latitude using IP Address in laravel.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo we will be using stevebauman\u002Flocation package in order to get that information.\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo let’s get started.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"step-1-install-laravel\" href=\"#step-1-install-laravel\"\u003E\n  \u003C\u002Fa\u003E\n  Step 1: Install Laravel\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EFirst, we will install laravel into the project. I am installing it in user_location folder.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Ecomposer create-project --prefer-dist laravel\u002Flaravel user_location\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"step-2-install-stevebaumanlocation-package\" href=\"#step-2-install-stevebaumanlocation-package\"\u003E\n  \u003C\u002Fa\u003E\n  Step 2: Install stevebauman\u002Flocation package\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EThen we need to install the stevebauman\u002Flocation package.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Ecomposer require stevebauman\u002Flocation\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch1\u003E\n  \u003Ca name=\"step-3-add-the-service-provider-and-alias\" href=\"#step-3-add-the-service-provider-and-alias\"\u003E\n  \u003C\u002Fa\u003E\n  Step 3: Add the Service Provider and Alias\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EThen we need to add the service provider in config\u002Fapp.php in providers array:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003EStevebauman\\Location\\LocationServiceProvider::class,\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EAnd also add following alias in aliases in config\u002Fapp.php:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E'Location' =&gt; Stevebauman\\Location\\Facades\\Location,\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ESo your final providers array will look like this:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VRBWN1y5--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F0vadhopzw0riuyv3n7qc.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VRBWN1y5--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F0vadhopzw0riuyv3n7qc.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd aliases array will look like this:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YQnL5hoV--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9sjktzzhgus3edtaobp9.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YQnL5hoV--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9sjktzzhgus3edtaobp9.png\" alt=\"Alt Text\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fimpulsivecode.com\u002Fget-current-user-location-city-country-in-laravel\u002F\"\u003ERead Complete Blog Post Here\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n";d.body_markdown="In this tutorial, we will see how you can get the current user location, city, country, country code, postal code, zip code, region, longitude and latitude using IP Address in laravel.\n\nSo we will be using stevebauman\u002Flocation package in order to get that information.\n\nSo let’s get started.\n\n# Step 1: Install Laravel\n\nFirst, we will install laravel into the project. I am installing it in user_location folder.\n\n```\ncomposer create-project --prefer-dist laravel\u002Flaravel user_location\n```\n\n#Step 2: Install stevebauman\u002Flocation package\nThen we need to install the stevebauman\u002Flocation package.\n```\ncomposer require stevebauman\u002Flocation\n```\n\n#Step 3: Add the Service Provider and Alias\nThen we need to add the service provider in config\u002Fapp.php in providers array:\n```\nStevebauman\\Location\\LocationServiceProvider::class,\n```\n\nAnd also add following alias in aliases in config\u002Fapp.php:\n\n```\n'Location' =\u003E Stevebauman\\Location\\Facades\\Location,\n```\nSo your final providers array will look like this:\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F0vadhopzw0riuyv3n7qc.png)\n\nAnd aliases array will look like this:\n\n![Alt Text](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F9sjktzzhgus3edtaobp9.png)\n\n[Read Complete Blog Post Here](https:\u002F\u002Fimpulsivecode.com\u002Fget-current-user-location-city-country-in-laravel\u002F)\n\n";d.user={name:"Hussain Abid",username:"hussainabid",twitter_username:c,github_username:"hussainabidbest",website_url:"https:\u002F\u002Fimpulsivecode.com",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--xbGthAGf--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F297991\u002Fda1386bd-e4ec-45a9-bca0-5597cbabfd1c.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Z-S9x7lk--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F297991\u002Fda1386bd-e4ec-45a9-bca0-5597cbabfd1c.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:d}},mutations:[["SET_CURRENT_ARTICLE",d]]}}("2021-07-29T19:26:59Z",1,null,{},"https:\u002F\u002Fdev.to\u002Fhussainabid\u002Fhow-to-get-current-user-location-city-country-in-laravel-dec")));