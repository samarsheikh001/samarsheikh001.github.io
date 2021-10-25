window.__NUXT__=(function(a,b,c,d,e){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:561657,title:"Writing an API in Django (Class Based)",description:"Rest API solve the problem of writing specific codes for different platform. Django is a Python frame...",readable_publish_date:"Jan 5",slug:"writing-and-api-in-django-class-based-a30",path:"\u002Ftobiadiks\u002Fwriting-and-api-in-django-class-based-a30",url:d,comments_count:0,public_reactions_count:e,collection_id:10558,published_timestamp:b,positive_reactions_count:e,cover_image:a,social_image:"https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F561657.png",canonical_url:d,created_at:"2021-01-05T07:27:52Z",edited_at:"2021-01-05T08:22:36Z",crossposted_at:a,published_at:b,last_comment_at:b,reading_time_minutes:1,tag_list:"django, restapi, webdev",tags:["django","restapi","webdev"],body_html:"\u003Cp\u003ERest API solve the problem of writing specific codes for different platform.\u003Cbr\u003E\nDjango is a Python framework that supports the MVT and follows the DRY principle for writing codes.\u003Cbr\u003E\nTo write API for your Django web app, here is how to go about it.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight python\"\u003E\u003Ccode\u003E\u003Cspan class=\"n\"\u003Epip\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Einstall\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Edjango\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E-\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Erest\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E-\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eframework\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EGo to your project \u003Cstrong\u003Esetting.py\u003C\u002Fstrong\u003E and add rest_framework as an \u003Cstrong\u003Einstalled app\u003C\u002Fstrong\u003E.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight python\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E[...\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n\u003Cspan class=\"n\"\u003Erest_framework\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E...\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Enow we will create a new script called \u003Cstrong\u003Eserializer.py\u003C\u002Fstrong\u003E in our app folder.\u003Cbr\u003E\nOpen and add the following code\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight python\"\u003E\u003Ccode\u003E\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003Erest_framework\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eserializers\u003C\u002Fspan\u003E\n\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003E.models\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emodel_name\u003C\u002Fspan\u003E\n\n\n\u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003EmySerializer\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eserializers\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EModelSerializer\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E):\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003EMeta\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\n        \u003Cspan class=\"n\"\u003Emodel\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emodel_name\u003C\u002Fspan\u003E\n        \u003Cspan class=\"n\"\u003Efields\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E'__all__'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EBrace up 😁, you are almost done with your API.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENext up,\u003Cbr\u003E\nIn \u003Cstrong\u003Eviews.py\u003C\u002Fstrong\u003E write the code below\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight python\"\u003E\u003Ccode\u003E\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003Erest_framework.generics\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EListCreateAPIView\u003C\u002Fspan\u003E\n\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003E.serializer\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EmySerializer\u003C\u002Fspan\u003E\n\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003E.models\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emodel_name\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003ElistApi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EListCreateAPIView\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E):\u003C\u002Fspan\u003E\n    \u003Cspan class=\"n\"\u003Equeryset\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Emodel_name\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eobjects\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nb\"\u003Eall\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n    \u003Cspan class=\"n\"\u003Eserializer_class\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EmySerializer\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ELastly we are going to assign a URL to our API\u003Cbr\u003E\nopen \u003Cstrong\u003Eurls.py\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight python\"\u003E\u003Ccode\u003E\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003Edjango.urls\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Epath\u003C\u002Fspan\u003E\n\u003Cspan class=\"kn\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"nn\"\u003E.views\u003C\u002Fspan\u003E \u003Cspan class=\"kn\"\u003Eimport\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003ElistApi\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"n\"\u003Eurlpatterns\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Epath\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E'api\u002Flist'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003ElistApi\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Eas_view\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E),\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Eopen browser  \u003Ca href=\"\u002F\u002F127.0.0.1:8000\"\u003E127.0.0.1:8000\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E🎉🎉🎉\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cem\u003EYou just made a Class Based API view\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\n",body_markdown:"Rest API solve the problem of writing specific codes for different platform.\nDjango is a Python framework that supports the MVT and follows the DRY principle for writing codes.\nTo write API for your Django web app, here is how to go about it.\n\n```python\npip install django-rest-framework\n```\n\n\n\nGo to your project **setting.py** and add rest_framework as an **installed app**.\n```python\n[... ,\n... ,\nrest_framework,\n... ,\n]\n```\n\nnow we will create a new script called **serializer.py** in our app folder.\nOpen and add the following code\n\n```python\nfrom rest_framework import serializers\nfrom .models import model_name\n\n\nclass mySerializer(serializers.ModelSerializer):\n    class Meta:\n        model = model_name\n        fields = ['__all__']\n```\n\nBrace up 😁, you are almost done with your API.\n\nNext up,\nIn **views.py** write the code below\n\n```python\nfrom rest_framework.generics import ListCreateAPIView\nfrom .serializer import mySerializer\nfrom .models import model_name\n\nclass listApi(ListCreateAPIView):\n    queryset = model_name.objects.all()\n    serializer_class = mySerializer\n```\nLastly we are going to assign a URL to our API\nopen **urls.py**\n\n```python\nfrom django.urls import path\nfrom .views import listApi\n\nurlpatterns = [path('api\u002Flist', listApi.as_view),\n]\n```\n\nopen browser  [127.0.0.1:8000](127.0.0.1:8000)\n\n🎉🎉🎉\n\n*You just made a Class Based API view*.\n\n",user:{name:c,username:c,twitter_username:"the_tobiadiks",github_username:c,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--dkVcuqqY--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F308198\u002Fb096a154-a485-4332-b55d-3dc796c60198.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--c6M4ewGO--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F308198\u002Fb096a154-a485-4332-b55d-3dc796c60198.png"}}},serverRendered:true,routePath:"\u002Farticles\u002Ftobiadiks\u002F561657",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"2021-01-05T08:09:28Z","tobiadiks","https:\u002F\u002Fdev.to\u002Ftobiadiks\u002Fwriting-and-api-in-django-class-based-a30",6));