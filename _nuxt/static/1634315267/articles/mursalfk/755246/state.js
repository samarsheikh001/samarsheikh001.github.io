window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634315267",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:755246,title:"JavaScript .map() Method 📍",description:"Hello Everyone. Hope you all are safe and wearing masks😷.  So today, as promised, we shall be...",readable_publish_date:"Jul 10",slug:"javascript-map-method-1456",path:"\u002Fmursalfk\u002Fjavascript-map-method-1456",url:c,comments_count:0,public_reactions_count:d,collection_id:13488,published_timestamp:b,positive_reactions_count:d,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--1FvUv6rl--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F77c8gzzgumoha4r5tmii.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--T6eQVY8e--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F77c8gzzgumoha4r5tmii.png",canonical_url:c,created_at:b,edited_at:a,crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:2,tag_list:"javascript, webdev, beginners, functional",tags:["javascript","webdev","beginners","functional"],body_html:"\u003Cp\u003EHello Everyone. Hope you all are safe and wearing masks😷. \u003Cbr\u003E\nSo today, as promised, we shall be discussing about .map() method in JavaScript.\u003C\u002Fp\u003E\n\u003Ch1\u003E\n  \u003Ca name=\"the-map-method\" href=\"#the-map-method\"\u003E\n  \u003C\u002Fa\u003E\n  The Map Method\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EThe Array.map() method allows us to iterate over an array and modify its elements using a callback function. In other words, the map() method creates a new array with the results of calling a function for every array element. It calls the provided function once for each element in an array, in order. Do keep in mind, that does not execute the function for empty elements. Hence, when using it, make sure, the array you are mapping over, exists. Else your code may stop running. And, the most incredible feature about map(), it does not change the original array. You get a new result, with the original array still intact.\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"syntax\" href=\"#syntax\"\u003E\n  \u003C\u002Fa\u003E\n  Syntax\n\u003C\u002Fh2\u003E\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emap\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eindex\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E),\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003EThe callback function() is called on each array element, and the map method always passes the current element, the index of the current element, and the whole array object to it.\u003Cbr\u003E\nThe this argument will be used inside the callback function. By default, its value is undefined. Using this, is completely optional. A value to be passed to the function to be used as its \"this\" value. If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value.\u003C\u002Fp\u003E\n\u003Ch2\u003E\n  \u003Ca name=\"examples\" href=\"#examples\"\u003E\n  \u003C\u002Fa\u003E\n  Examples\n\u003C\u002Fh2\u003E\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E4\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E5\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E6\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E];\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EmodifiedArr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emap\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E){\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E*\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EmodifiedArr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002F [9, 12, 15, 18]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"map-over-an-array-of-objects\" href=\"#map-over-an-array-of-objects\"\u003E\n  \u003C\u002Fa\u003E\n  Map over an array of objects\n\u003C\u002Fh3\u003E\n\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eusers\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EfirstName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EMursal\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003ElastName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EFurqan\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EfirstName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EMuhammad\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003ElastName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EAli\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"na\"\u003EfirstName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EVedant\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"na\"\u003ElastName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003EKhairnar\u003C\u002Fspan\u003E\u003Cspan class=\"dl\"\u003E\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E];\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EuserFullnames\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eusers\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emap\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E){\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"s2\"\u003E`\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E${\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EfirstName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E${\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003ElastName\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E`\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E});\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EuserFullnames\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002F [\"Mursal Furqan\", \"Muhammad Ali\", \"Vedant Khairnar\"]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"changing-default-value-of-this\" href=\"#changing-default-value-of-this\"\u003E\n  \u003C\u002Fa\u003E\n  Changing default value of this\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EHere's how to change the \"this\" value to the number 06:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E2\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E3\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E5\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E7\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Earr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emap\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"kd\"\u003Efunction\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Eelement\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Eindex\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Earray\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E){\u003C\u002Fspan\u003E\n    \u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"k\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"c1\"\u003E\u002F\u002F 06\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E06\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E);\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EYou can also use predefined methods in a lot simpler fashion. In the next example, we shall show how you can take square root of an entire Array, in two lines using map().\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight javascript\"\u003E\u003Ccode\u003E\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Enumbers\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E16\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E81\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E4\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"mi\"\u003E25\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E];\u003C\u002Fspan\u003E\n\u003Cspan class=\"kd\"\u003Econst\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003EnewArr\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"nx\"\u003Enumbers\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Emap\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nb\"\u003EMath\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Esqrt\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002F And we are done with taking square root of our array. Let's see it in console\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"nx\"\u003Econsole\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003Elog\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"nx\"\u003EnewArr\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"c1\"\u003E\u002F\u002F [4, 9, 2, 5]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIn our next article, we shall discuss something even cooler 😎\u003Cbr\u003E\nOr, you can suggest in the comments 🧧 below what should we write on next. 🎆\u003C\u002Fp\u003E\n\n",body_markdown:"Hello Everyone. Hope you all are safe and wearing masks😷. \nSo today, as promised, we shall be discussing about .map() method in JavaScript.\n\n# The Map Method\nThe Array.map() method allows us to iterate over an array and modify its elements using a callback function. In other words, the map() method creates a new array with the results of calling a function for every array element. It calls the provided function once for each element in an array, in order. Do keep in mind, that does not execute the function for empty elements. Hence, when using it, make sure, the array you are mapping over, exists. Else your code may stop running. And, the most incredible feature about map(), it does not change the original array. You get a new result, with the original array still intact.\n\n## Syntax\n```javascript\narray.map(function(element, index, array), this)\n```\nThe callback function() is called on each array element, and the map method always passes the current element, the index of the current element, and the whole array object to it.\nThe this argument will be used inside the callback function. By default, its value is undefined. Using this, is completely optional. A value to be passed to the function to be used as its \"this\" value. If this parameter is empty, the value \"undefined\" will be passed as its \"this\" value.\n\n## Examples\n```javascript\nlet arr = [3, 4, 5, 6];\n\nlet modifiedArr = arr.map(function(element){\n    return element *3;\n});\n\nconsole.log(modifiedArr);\n\u002F\u002F [9, 12, 15, 18]\n```\n\n### Map over an array of objects\n```javascript\nlet users = [\n    {firstName: \"Mursal\", lastName: \"Furqan\"}\n    {firstName: \"Muhammad\", lastName: \"Ali\"}\n    {firstName: \"Vedant\", lastName: \"Khairnar\"}\n];\n\nlet userFullnames = users.map(function(element){\n    return `${element.firstName} ${element.lastName}`;\n});\n\nconsole.log(userFullnames);\n\u002F\u002F [\"Mursal Furqan\", \"Muhammad Ali\", \"Vedant Khairnar\"]\n```\n\n## Changing default value of this\nHere's how to change the \"this\" value to the number 06:\n\n```javascript\nlet arr = [2, 3, 5, 7]\n\narr.map(function(element, index, array){\n    console.log(this) \u002F\u002F 06\n}, 06);\n```\n\nYou can also use predefined methods in a lot simpler fashion. In the next example, we shall show how you can take square root of an entire Array, in two lines using map().\n\n```javascript\nconst numbers = [16, 81, 4, 25];\nconst newArr = numbers.map(Math.sqrt)\n\u002F\u002F And we are done with taking square root of our array. Let's see it in console\n\nconsole.log(newArr)\n\u002F\u002F [4, 9, 2, 5]\n```\n\n\nIn our next article, we shall discuss something even cooler 😎\nOr, you can suggest in the comments 🧧 below what should we write on next. 🎆\n\n",user:{name:"Mursal Furqan",username:e,twitter_username:"mursalfurqan",github_username:e,website_url:"https:\u002F\u002Fmursalfk.github.io\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--3a6FO0yU--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F202358\u002F529ab73d-8c96-4570-bf98-7a64a7a687e9.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--J7TcGltE--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F202358\u002F529ab73d-8c96-4570-bf98-7a64a7a687e9.jpeg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fmursalfk\u002F755246",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-07-10T04:53:17Z","https:\u002F\u002Fdev.to\u002Fmursalfk\u002Fjavascript-map-method-1456",109,"mursalfk"));