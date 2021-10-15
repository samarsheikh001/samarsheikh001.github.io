__NUXT_JSONP__("/articles/matteobortolazzo/791301", (function(a,b,c,d,e,f){c.type_of="article";c.id=791301;c.title="The C# Source Generators revolution";c.description="How C# Source Generators can help get rid of reflection";c.readable_publish_date="Aug 14";c.slug="the-c-source-generators-revolution-34k4";c.path="\u002Fmatteobortolazzo\u002Fthe-c-source-generators-revolution-34k4";c.url=d;c.comments_count=0;c.public_reactions_count=e;c.collection_id=b;c.published_timestamp=a;c.positive_reactions_count=e;c.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--f11sjopb--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png";c.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--XDR73zra--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png";c.canonical_url=d;c.created_at=a;c.edited_at="2021-08-14T00:08:50Z";c.crossposted_at=b;c.published_at=a;c.last_comment_at=a;c.reading_time_minutes=2;c.tag_list="csharp, sourcegenerator, preview";c.tags=["csharp","sourcegenerator","preview"];c.body_html="\u003Cp\u003EAlong with .NET 5, Microsoft released C# Source Generators. \u003C\u002Fp\u003E\n\n\u003Cp\u003EAnd after creating my first generator, I consider it one of the coolest features .NET developers can use.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"but-what-are-source-generators\" href=\"#but-what-are-source-generators\"\u003E\n  \u003C\u002Fa\u003E\n  But what are Source Generators?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThey are C# programs that can analyze code, dynamically generate files and inject them into the build pipeline.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QNOMwzGO--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--QNOMwzGO--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png\" alt=\"Source Generator Pipeline Diagram\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"use-cases\" href=\"#use-cases\"\u003E\n  \u003C\u002Fa\u003E\n  Use cases?!\n\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EGenerate C# classes from JSON\u003C\u002Fli\u003E\n\u003Cli\u003EExtend a POCO class with INotifyPropertyChanged \u003C\u002Fli\u003E\n\u003Cli\u003EGenerate builders from POCO classes\u003C\u002Fli\u003E\n\u003Cli\u003EGenerate mapping extension methods to replace AutoMapper\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"super-basic-example\" href=\"#super-basic-example\"\u003E\n  \u003C\u002Fa\u003E\n  Super basic example\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EEach generator has 2 methods: one to analyze the existing code and one to generate new code.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight csharp\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EGenerator\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003EMyGenerator\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EISourceGenerator\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Evoid\u003C\u002Fspan\u003E \u003Cspan class=\"nf\"\u003EInitialize\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EGeneratorInitializationContext\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Econtext\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Evoid\u003C\u002Fspan\u003E \u003Cspan class=\"nf\"\u003EExecute\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EGeneratorExecutionContext\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Econtext\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ETo generate a C# class:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight csharp\"\u003E\u003Ccode\u003E\u003Cspan class=\"kt\"\u003Evar\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Esource\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"s\"\u003E@\"\nnamespace Dev.To {{\n    public class Post {{\n        public string Title {{ get; set; }}\n    }}\n}}\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"n\"\u003Econtext\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nf\"\u003EAddSource\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"s\"\u003E\"Post.cs\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003ESourceText\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nf\"\u003EFrom\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003Esource\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EEncoding\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EUTF8\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E));\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIt might not seem much; however, think about what you can do with partial classes or extensions methods.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"how-i-tried-to-use-them\" href=\"#how-i-tried-to-use-them\"\u003E\n  \u003C\u002Fa\u003E\n  How I tried to use them\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIf you work with .NET Core you might be familiar with \u003Ccode\u003Eappsettings.json\u003C\u002Fcode\u003E.\u003Cbr\u003E\nWe often need to create POCO classes representing the JSON and then register them in Startup to be injected later with \u003Ccode\u003EIOptions&lt;&gt;\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWhy don't we let source generators do the heavy lifting for us?\u003C\u002Fp\u003E\n\n\u003Cp\u003ESo, I create a preview NuGet that does exactly that!\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EIt reads \u003Ccode\u003Eappsettings\u003C\u002Fcode\u003E content\u003C\u002Fli\u003E\n\u003Cli\u003EFor each object property it creates a new C# class\u003C\u002Fli\u003E\n\u003Cli\u003EIt creates a partial Startup class with a private \u003Ccode\u003ERegisterOptions\u003C\u002Fcode\u003E method that register the new classes with \u003Ccode\u003Eservices.Configure&lt;PropertyName&gt;(Configuration.GetSection(nameof(PropertyName)));\u003C\u002Fcode\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EThe only thing people need to do is making their \u003Ccode\u003EStartup\u003C\u002Fcode\u003E partial and call \u003Ccode\u003ERegisterOptions\u003C\u002Fcode\u003E in \u003Ccode\u003EConfigureServices\u003C\u002Fcode\u003E method.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EGiven this JSON:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight json\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n  \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyOtherOptions\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyString\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"any\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyInt\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"mi\"\u003E1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyDouble\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"mf\"\u003E1.1\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyBool\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"kc\"\u003Etrue\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E,\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyObject\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n      \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyObjectString\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"any\"\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E},\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n    \u003C\u002Fspan\u003E\u003Cspan class=\"nl\"\u003E\"MyArray\"\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"any\"\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n  \u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIt generates these classes:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ULI1pb3J--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fv8moq3ynjm2kfm6rl45d.PNG\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--ULI1pb3J--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fv8moq3ynjm2kfm6rl45d.PNG\" alt=\"Solution Tree Example\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EGenerated content:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight csharp\"\u003E\u003Ccode\u003E\u003Cspan class=\"c1\"\u003E\u002F\u002F MyOtherOptions.cs\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003EMyOtherOptions\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"kt\"\u003Estring\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyString\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"kt\"\u003Eint\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyInt\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"kt\"\u003Edouble\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyDouble\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"kt\"\u003Ebool\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyBool\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyObject\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyObject\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"kt\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E[]\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003EMyArray\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eget\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E;\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"c1\"\u003E\u002F\u002F Startup.Generated.cs\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Epartial\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"nc\"\u003EStartup\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n    \u003Cspan class=\"k\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"k\"\u003Evoid\u003C\u002Fspan\u003E \u003Cspan class=\"nf\"\u003ERegisterOptions\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EIServiceCollection\u003C\u002Fspan\u003E \u003Cspan class=\"n\"\u003Eservices\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E{\u003C\u002Fspan\u003E\n        \u003Cspan class=\"n\"\u003Eservices\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EConfigure\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EMyOtherOptions\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E&gt;(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EConfiguration\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"nf\"\u003EGetSection\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"k\"\u003Enameof\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"n\"\u003EMyOtherOptions\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E)));\u003C\u002Fspan\u003E\n    \u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003Cspan class=\"p\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"final-words\" href=\"#final-words\"\u003E\n  \u003C\u002Fa\u003E\n  Final words\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAs you can see, there's a lot of potential behind this new feature. \u003C\u002Fp\u003E\n\n\u003Cp\u003EIt will not replace Reflection completely but it can drastically improve performance for a lot of libraries!\u003C\u002Fp\u003E\n\n\u003Cp\u003EHowever, since it's in preview, there are limitations, and things might change, so keep that in mind!\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe code for my example can be found \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmatteobortolazzo\u002Fdotnet-options-generator\"\u003Ehere on GitHub\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"useful-links\" href=\"#useful-links\"\u003E\n  \u003C\u002Fa\u003E\n  Useful links\n\u003C\u002Fh2\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdevblogs.microsoft.com\u002Fdotnet\u002Fintroducing-c-source-generators\u002F\"\u003EIntroducing C# Source Generators\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fdotnet\u002Froslyn\u002Fblob\u002Fmain\u002Fdocs\u002Ffeatures\u002Fsource-generators.cookbook.md\"\u003ESource Generators Cookbook\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fturnerj.com\u002Fblog\u002Fthe-pain-points-of-csharp-source-generators\"\u003EThe pain points of C# source generators\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Famis92\u002Fcsharp-source-generators\"\u003ESource generators colletion\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n";c.body_markdown="---\ntitle: The C# Source Generators revolution\npublished: true\ndescription: How C# Source Generators can help get rid of reflection\ntags: csharp, sourcegenerator, preview\ncover_image: https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png\n---\n\nAlong with .NET 5, Microsoft released C# Source Generators. \n\nAnd after creating my first generator, I consider it one of the coolest features .NET developers can use.\n\n## But what are Source Generators?\n\nThey are C# programs that can analyze code, dynamically generate files and inject them into the build pipeline.\n\n![Source Generator Pipeline Diagram](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fmz8xzlhuzx1q6gtzsjla.png)\n\n## Use cases?!\n\n* Generate C# classes from JSON\n* Extend a POCO class with INotifyPropertyChanged \n* Generate builders from POCO classes\n* Generate mapping extension methods to replace AutoMapper\n\n## Super basic example\n\nEach generator has 2 methods: one to analyze the existing code and one to generate new code.\n\n```csharp\n[Generator]\npublic class MyGenerator : ISourceGenerator\n{\n    public void Initialize(GeneratorInitializationContext context) { }\n\n    public void Execute(GeneratorExecutionContext context) { }\n}\n```\n\nTo generate a C# class:\n```csharp\nvar source = @\"\nnamespace Dev.To {{\n    public class Post {{\n        public string Title {{ get; set; }}\n    }}\n}}\";\ncontext.AddSource(\"Post.cs\", SourceText.From(source, Encoding.UTF8));\n```\n\nIt might not seem much; however, think about what you can do with partial classes or extensions methods.\n\n## How I tried to use them\n\nIf you work with .NET Core you might be familiar with `appsettings.json`.\nWe often need to create POCO classes representing the JSON and then register them in Startup to be injected later with `IOptions\u003C\u003E`.\n\nWhy don't we let source generators do the heavy lifting for us?\n\nSo, I create a preview NuGet that does exactly that!\n\n* It reads `appsettings` content\n* For each object property it creates a new C# class\n* It creates a partial Startup class with a private `RegisterOptions` method that register the new classes with `services.Configure\u003CPropertyName\u003E(Configuration.GetSection(nameof(PropertyName)));`\n* The only thing people need to do is making their `Startup` partial and call `RegisterOptions` in `ConfigureServices` method.\n\nGiven this JSON:\n```json\n{\n  \"MyOtherOptions\": {\n    \"MyString\": \"any\",\n    \"MyInt\": 1,\n    \"MyDouble\": 1.1,\n    \"MyBool\": true,\n    \"MyObject\": {\n      \"MyObjectString\": \"any\"\n    },\n    \"MyArray\": [ \"any\" ]\n  }\n}\n```\n\nIt generates these classes:\n\n![Solution Tree Example](https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Fv8moq3ynjm2kfm6rl45d.PNG)\n\nGenerated content:\n```csharp\n\u002F\u002F MyOtherOptions.cs\npublic class MyOtherOptions\n{\n    public string MyString { get; set; }\n    public int MyInt { get; set; }\n    public double MyDouble { get; set; }\n    public bool MyBool { get; set; }\n    public MyObject MyObject { get; set; }\n    public string[] MyArray { get; set; }\n}\n\n\u002F\u002F Startup.Generated.cs\npublic partial class Startup\n{\n    private void RegisterOptions(IServiceCollection services)\n    {\n        services.Configure\u003CMyOtherOptions\u003E(Configuration.GetSection(nameof(MyOtherOptions)));\n    }\n}\n```\n\n## Final words\n\nAs you can see, there's a lot of potential behind this new feature. \n\nIt will not replace Reflection completely but it can drastically improve performance for a lot of libraries!\n\nHowever, since it's in preview, there are limitations, and things might change, so keep that in mind!\n\n\nThe code for my example can be found [here on GitHub](https:\u002F\u002Fgithub.com\u002Fmatteobortolazzo\u002Fdotnet-options-generator).\n\n## Useful links\n\n* [Introducing C# Source Generators](https:\u002F\u002Fdevblogs.microsoft.com\u002Fdotnet\u002Fintroducing-c-source-generators\u002F)\n* [Source Generators Cookbook](https:\u002F\u002Fgithub.com\u002Fdotnet\u002Froslyn\u002Fblob\u002Fmain\u002Fdocs\u002Ffeatures\u002Fsource-generators.cookbook.md)\n* [The pain points of C# source generators](https:\u002F\u002Fturnerj.com\u002Fblog\u002Fthe-pain-points-of-csharp-source-generators)\n* [Source generators colletion](https:\u002F\u002Fgithub.com\u002Famis92\u002Fcsharp-source-generators)";c.user={name:"Matteo Bortolazzo",username:f,twitter_username:b,github_username:f,website_url:"https:\u002F\u002Fgithub.com\u002Fmatteobortolazzo",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--xw0cctcD--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F158442\u002F443e9385-520b-42c1-bddc-a75436f39ad3.jpg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--PkVdDzKe--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F158442\u002F443e9385-520b-42c1-bddc-a75436f39ad3.jpg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:c}},mutations:[["SET_CURRENT_ARTICLE",c]]}}("2021-08-14T00:07:20Z",null,{},"https:\u002F\u002Fdev.to\u002Fmatteobortolazzo\u002Fthe-c-source-generators-revolution-34k4",14,"matteobortolazzo")));