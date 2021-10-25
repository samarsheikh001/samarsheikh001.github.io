__NUXT_JSONP__("/articles/maniowy/676832", (function(a,b,c,d,e){d.type_of="article";d.id=676832;d.title="Setting up VIM for blogging";d.description="VIM is the editor I use for programming. It is known for it's power at writing code thanks to it's bu...";d.readable_publish_date="Apr 24";d.slug="setting-up-vim-for-blogging-37oa";d.path="\u002Fmaniowy\u002Fsetting-up-vim-for-blogging-37oa";d.url="https:\u002F\u002Fdev.to\u002Fmaniowy\u002Fsetting-up-vim-for-blogging-37oa";d.comments_count=0;d.public_reactions_count=e;d.collection_id=a;d.published_timestamp=b;d.positive_reactions_count=e;d.cover_image=a;d.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F676832.png";d.canonical_url="https:\u002F\u002Fburnicki.pl\u002Fen\u002F2021\u002F04\u002F23\u002Fsetting-up-vim-for-blogging.html";d.created_at=b;d.edited_at="2021-05-04T11:31:44Z";d.crossposted_at=a;d.published_at=b;d.last_comment_at=b;d.reading_time_minutes=4;d.tag_list="vim, 5days5blogposts";d.tags=["vim","5days5blogposts"];d.body_html="\u003Cp\u003EVIM is the editor I use for programming. It is known for it's power at writing code thanks to it's built in features and numerous plugins, but how does it serve for blogging? Let's investigate on how to improve it's default behavior.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"spellcheck\" href=\"#spellcheck\"\u003E\n  \u003C\u002Fa\u003E\n  Spellcheck\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ESpell checking is built in feature of VIM, but it is disabled by default. I've enabled it with:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight viml\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003Espell\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003Espelllang\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003Een_us\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThat made VIM highlight my spelling errors. I can jump between misspelled words with \u003Ccode\u003E]s\u003C\u002Fcode\u003E and \u003Ccode\u003E[s\u003C\u002Fcode\u003E. With the cursor located on a misspelled word I can type \u003Ccode\u003Ez=\u003C\u002Fcode\u003E to get a list of possible fixes. When VIM is wrong I can tell it to accept a word with \u003Ccode\u003Ezg\u003C\u002Fcode\u003E (undo with \u003Ccode\u003Ezw\u003C\u002Fcode\u003E).\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"abbreviations\" href=\"#abbreviations\"\u003E\n  \u003C\u002Fa\u003E\n  Abbreviations\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EVIM supports expansion of user defined abbreviations. For instance, if you define \"utl\" as an abbreviation of \"utility\", VIM automatically replaces \"utl\" with \"utility\" when typing. This feature can be used for auto correction. Just define:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight viml\"\u003E\u003Ccode\u003E\u003Cspan class=\"p\"\u003E:\u003C\u002Fspan\u003Eiabbrev veiw \u003Cspan class=\"k\"\u003Eview\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Eto make VIM replace each \"veiw\" with \"view\" on the fly (in insert mode). \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpanozzaj\u002Fvim-autocorrect\"\u003EVim-autocorrect\u003C\u002Fa\u003E is one of the plugins that come with predefined useful abbreviations.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"dictionary\" href=\"#dictionary\"\u003E\n  \u003C\u002Fa\u003E\n  Dictionary\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ENext feature is auto completion. It is also supported by default but you may need to provide the dictionary and that was my case. Check if you have \u003Ccode\u003E\u002Fusr\u002Fshare\u002Fdict\u002Fwords\u003C\u002Fcode\u003E. I use Slackware and Ubuntu on daily basis; Slackware happened to have the dictionary installed, but on Ubuntu it was not there. Managed to provide the dict with \u003Ccode\u003Esudo apt install wamerican\u003C\u002Fcode\u003E. That tells VIM to use the dictionary file:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight viml\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Eset\u003C\u002Fspan\u003E \u003Cspan class=\"nb\"\u003Edictionary\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E\u003Cspan class=\"sr\"\u003E\u002Fusr\u002F\u003C\u002Fspan\u003Eshare\u003Cspan class=\"sr\"\u003E\u002Fdict\u002F\u003C\u002Fspan\u003Ewords\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ENow that the dictionary is set up, it can be used with \u003Ccode\u003E&lt;C-x&gt;&lt;C-k&gt;\u003C\u002Fcode\u003E in insert mode.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"thesaurus\" href=\"#thesaurus\"\u003E\n  \u003C\u002Fa\u003E\n  Thesaurus\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ELooking for synonyms? VIM supports thesaurus, however it has to be configured. I was able to configure the built in feature but it needed a hack to handle multi word synonyms and I didn't like that. I've decided to install \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-lexical\"\u003Evim-lexical\u003C\u002Fa\u003E plugin. Just as the built in feature, the plugin needs a synonyms file to work: grabbed one from \u003Ca href=\"https:\u002F\u002Fwww.gutenberg.org\u002Febooks\u002F3200\"\u003EProject Gutenberg\u003C\u002Fa\u003E. Tell vim-lexical where the file is and initialize the plugin:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight viml\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#\u003Cspan class=\"nb\"\u003Ethesaurus\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E'~\u002F.vim\u002Fmthesaur.txt'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Ecall\u003C\u002Fspan\u003E lexical#init\u003Cspan class=\"p\"\u003E()\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThis plugin also handles dictionary and spell check features, I gave it a try. Here are some settings to set it up:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight viml\"\u003E\u003Ccode\u003E\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#\u003Cspan class=\"nb\"\u003Espelllang\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E'en_us'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#\u003Cspan class=\"nb\"\u003Edictionary\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"p\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"s1\"\u003E'\u002Fusr\u002Fshare\u002Fdict\u002Fwords'\u003C\u002Fspan\u003E\u003Cspan class=\"p\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"c\"\u003E\" normal mode key mappings:\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#spell_key \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"s1\"\u003E'&lt;leader&gt;s'\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#thesaurus_key \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"s1\"\u003E'&lt;leader&gt;th'\u003C\u002Fspan\u003E\n\u003Cspan class=\"k\"\u003Elet\u003C\u002Fspan\u003E \u003Cspan class=\"nv\"\u003Eg:lexical\u003C\u002Fspan\u003E#dictionary_key \u003Cspan class=\"p\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"s1\"\u003E'&lt;leader&gt;k'\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIn insert mode, we can use \u003Ccode\u003E&lt;C-x&gt;&lt;C-t&gt;\u003C\u002Fcode\u003E for thesaurus.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"other-plugins\" href=\"#other-plugins\"\u003E\n  \u003C\u002Fa\u003E\n  Other plugins\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EThere are more plugins that support the writers work, I present few that I have found particularly useful.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"textobjsentence\" href=\"#textobjsentence\"\u003E\n  \u003C\u002Fa\u003E\n  textobj-sentence\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-textobj-sentence\"\u003EThis plugin\u003C\u002Fa\u003E provides motion commands based on full sentence detection. You can switch around sentences with \u003Ccode\u003E(\u003C\u002Fcode\u003E and \u003Ccode\u003E)\u003C\u002Fcode\u003E and use it just as any other motion commands. Depends on \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fkana\u002Fvim-textobj-user\"\u003Evim-textobj-user\u003C\u002Fa\u003E plugin.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"wordy\" href=\"#wordy\"\u003E\n  \u003C\u002Fa\u003E\n  wordy\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-wordy\"\u003EWordy\u003C\u002Fa\u003E lets you identify phrases that are overused, misused, abused, colloquial, idiomatic etc. It's a nice lightweight tool that operates on higher level than just single words. Definitely worth checking out.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"ditto\" href=\"#ditto\"\u003E\n  \u003C\u002Fa\u003E\n  ditto\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003EStruggling with word repetitions? \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fdbmrq\u002Fvim-ditto\"\u003EDitto\u003C\u002Fa\u003E is there to localize &amp; highlight them for you.\u003C\u002Fp\u003E\n\n\u003Ch1\u003E\n  \u003Ca name=\"lsp-proselint\" href=\"#lsp-proselint\"\u003E\n  \u003C\u002Fa\u003E\n  LSP + proselint\n\u003C\u002Fh1\u003E\n\n\u003Cp\u003E\u003Ca href=\"http:\u002F\u002Fproselint.com\u002F\"\u003EProselint\u003C\u002Fa\u003E is not a VIM plugin. It is a separate tool described as a linter of English prose. Here are some of its features:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EAvoiding archaic forms\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding needless backformations\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding redundant currency symbols\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding false plurals\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding illogical forms\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding the word suddenly\u003C\u002Fli\u003E\n\u003Cli\u003EAvoiding oxymorons\u003C\u002Fli\u003E\n\u003Cli\u003ECalling jobs by the right name\u003C\u002Fli\u003E\n\u003Cli\u003ENot comparing uncomparables\u003C\u002Fli\u003E\n\u003Cli\u003EUsing dïacríticâl marks\u003C\u002Fli\u003E\n\u003Cli\u003ELinking only to existing sites\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Famperser\u002Fproselint#checks\"\u003EFull list here\u003C\u002Fa\u003E. Since the tool is a linter, it sounds like it should work with \u003Ca href=\"https:\u002F\u002Flangserver.org\u002F\"\u003Elanguage servers\u003C\u002Fa\u003E. I use \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fneoclide\u002Fcoc.nvim\"\u003ECoC.nvim\u003C\u002Fa\u003E for LSP features. Thankfully some smart guys have figured out how to make proselint work with coc.nvim &amp; \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fiamcco\u002Fcoc-diagnostic\"\u003Ecoc-diagnostic\u003C\u002Fa\u003E (\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fneoclide\u002Fcoc.nvim\u002Fdiscussions\u002F2028\"\u003Esee here\u003C\u002Fa\u003E). Now it works for my blog posts just like \u003Ca href=\"https:\u002F\u002Fclangd.llvm.org\u002F\"\u003Eclangd\u003C\u002Fa\u003E does for my C++ code.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"lets-see-how-it-works\" href=\"#lets-see-how-it-works\"\u003E\n  \u003C\u002Fa\u003E\n  Let's see how it works\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EAll these solutions look promising. I've already benefited from including them in my VIM configuration while writing this blog post. Will do further testing and investigation in next days. Haven't yet tried plugins like \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-pencil\"\u003Evim-pencil\u003C\u002Fa\u003E or \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Ftpope\u002Fvim-abolish\"\u003Evim-abolish\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EFurther reading:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.linux.com\u002Ftraining-tutorials\u002Fusing-spell-checking-vim\u002F\"\u003EUsing spell checking in VIM\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fthesynack.com\u002Fposts\u002Fvim-thesaurus\u002F\"\u003EUsing a Thesaurus File in VIM\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Flinuxhint.com\u002Fvim_spell_check\u002F\"\u003EVIM Spell Check\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n";d.body_markdown="VIM is the editor I use for programming. It is known for it's power at writing code thanks to it's built in features and numerous plugins, but how does it serve for blogging? Let's investigate on how to improve it's default behavior.\n\n## Spellcheck\n\nSpell checking is built in feature of VIM, but it is disabled by default. I've enabled it with:\n\n```vim\nset spell spelllang=en_us\n```\n\nThat made VIM highlight my spelling errors. I can jump between misspelled words with `]s` and `[s`. With the cursor located on a misspelled word I can type `z=` to get a list of possible fixes. When VIM is wrong I can tell it to accept a word with `zg` (undo with `zw`).\n\n## Abbreviations\n\nVIM supports expansion of user defined abbreviations. For instance, if you define \"utl\" as an abbreviation of \"utility\", VIM automatically replaces \"utl\" with \"utility\" when typing. This feature can be used for auto correction. Just define:\n\n```vim\n:iabbrev veiw view\n```\n\nto make VIM replace each \"veiw\" with \"view\" on the fly (in insert mode). [Vim-autocorrect](https:\u002F\u002Fgithub.com\u002Fpanozzaj\u002Fvim-autocorrect) is one of the plugins that come with predefined useful abbreviations.\n\n## Dictionary\n\nNext feature is auto completion. It is also supported by default but you may need to provide the dictionary and that was my case. Check if you have `\u002Fusr\u002Fshare\u002Fdict\u002Fwords`. I use Slackware and Ubuntu on daily basis; Slackware happened to have the dictionary installed, but on Ubuntu it was not there. Managed to provide the dict with `sudo apt install wamerican`. That tells VIM to use the dictionary file:\n\n```vim\nset dictionary=\u002Fusr\u002Fshare\u002Fdict\u002Fwords\n```\n\nNow that the dictionary is set up, it can be used with `\u003CC-x\u003E\u003CC-k\u003E` in insert mode.\n\n## Thesaurus\n\nLooking for synonyms? VIM supports thesaurus, however it has to be configured. I was able to configure the built in feature but it needed a hack to handle multi word synonyms and I didn't like that. I've decided to install [vim-lexical](https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-lexical) plugin. Just as the built in feature, the plugin needs a synonyms file to work: grabbed one from [Project Gutenberg](https:\u002F\u002Fwww.gutenberg.org\u002Febooks\u002F3200). Tell vim-lexical where the file is and initialize the plugin:\n\n\n```vim\nlet g:lexical#thesaurus = ['~\u002F.vim\u002Fmthesaur.txt']\ncall lexical#init()\n```\n\nThis plugin also handles dictionary and spell check features, I gave it a try. Here are some settings to set it up:\n\n```vim\nlet g:lexical#spelllang = ['en_us']\nlet g:lexical#dictionary = ['\u002Fusr\u002Fshare\u002Fdict\u002Fwords']\n\" normal mode key mappings:\nlet g:lexical#spell_key = '\u003Cleader\u003Es'\nlet g:lexical#thesaurus_key = '\u003Cleader\u003Eth'\nlet g:lexical#dictionary_key = '\u003Cleader\u003Ek'\n```\n\nIn insert mode, we can use `\u003CC-x\u003E\u003CC-t\u003E` for thesaurus.\n\n## Other plugins\n\nThere are more plugins that support the writers work, I present few that I have found particularly useful.\n\n# textobj-sentence\n\n[This plugin](https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-textobj-sentence) provides motion commands based on full sentence detection. You can switch around sentences with `(` and `)` and use it just as any other motion commands. Depends on [vim-textobj-user](https:\u002F\u002Fgithub.com\u002Fkana\u002Fvim-textobj-user) plugin.\n\n# wordy\n\n[Wordy](https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-wordy) lets you identify phrases that are overused, misused, abused, colloquial, idiomatic etc. It's a nice lightweight tool that operates on higher level than just single words. Definitely worth checking out.\n\n# ditto\n\nStruggling with word repetitions? [Ditto](https:\u002F\u002Fgithub.com\u002Fdbmrq\u002Fvim-ditto) is there to localize & highlight them for you.\n\n# LSP + proselint\n\n[Proselint](http:\u002F\u002Fproselint.com\u002F) is not a VIM plugin. It is a separate tool described as a linter of English prose. Here are some of its features:\n\n- Avoiding archaic forms\n- Avoiding needless backformations\n- Avoiding redundant currency symbols\n- Avoiding false plurals\n- Avoiding illogical forms\n- Avoiding the word suddenly\n- Avoiding oxymorons\n- Calling jobs by the right name\n- Not comparing uncomparables\n- Using dïacríticâl marks\n- Linking only to existing sites\n\n[Full list here](https:\u002F\u002Fgithub.com\u002Famperser\u002Fproselint#checks). Since the tool is a linter, it sounds like it should work with [language servers](https:\u002F\u002Flangserver.org\u002F). I use [CoC.nvim](https:\u002F\u002Fgithub.com\u002Fneoclide\u002Fcoc.nvim) for LSP features. Thankfully some smart guys have figured out how to make proselint work with coc.nvim & [coc-diagnostic](https:\u002F\u002Fgithub.com\u002Fiamcco\u002Fcoc-diagnostic) ([see here](https:\u002F\u002Fgithub.com\u002Fneoclide\u002Fcoc.nvim\u002Fdiscussions\u002F2028)). Now it works for my blog posts just like [clangd](https:\u002F\u002Fclangd.llvm.org\u002F) does for my C++ code.\n\n## Let's see how it works\n\nAll these solutions look promising. I've already benefited from including them in my VIM configuration while writing this blog post. Will do further testing and investigation in next days. Haven't yet tried plugins like [vim-pencil](https:\u002F\u002Fgithub.com\u002Fpreservim\u002Fvim-pencil) or [vim-abolish](https:\u002F\u002Fgithub.com\u002Ftpope\u002Fvim-abolish).\n\n\nFurther reading:\n- [Using spell checking in VIM](https:\u002F\u002Fwww.linux.com\u002Ftraining-tutorials\u002Fusing-spell-checking-vim\u002F)\n- [Using a Thesaurus File in VIM](https:\u002F\u002Fthesynack.com\u002Fposts\u002Fvim-thesaurus\u002F)\n- [VIM Spell Check](https:\u002F\u002Flinuxhint.com\u002Fvim_spell_check\u002F)";d.user={name:c,username:c,twitter_username:a,github_username:c,website_url:a,profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--puWZR0NS--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F615051\u002F2fc5da43-1bd0-441f-8e4d-cc3eb9752197.png",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--rdY1NUiJ--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F615051\u002F2fc5da43-1bd0-441f-8e4d-cc3eb9752197.png"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:d}},mutations:[["SET_CURRENT_ARTICLE",d]]}}(null,"2021-04-24T01:46:06Z","maniowy",{},6)));