__NUXT_JSONP__("/articles/pragativerma18/776026", (function(a,b,c,d,e){b.type_of="article";b.id=776026;b.title="A Guide to Git Stash";b.description="Git is an amazingly vast tool for developers to manage development workflows, and it goes without...";b.readable_publish_date="Jul 31";b.slug="a-guide-to-git-stash-2h5d";b.path="\u002Fpragativerma18\u002Fa-guide-to-git-stash-2h5d";b.url=c;b.comments_count=9;b.public_reactions_count=d;b.collection_id=a;b.published_timestamp=e;b.positive_reactions_count=d;b.cover_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--t_eLuQWY--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Feh3vmevuzy8i4ce1eaie.png";b.social_image="https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--KMJb--A0--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002Feh3vmevuzy8i4ce1eaie.png";b.canonical_url=c;b.created_at="2021-07-30T05:23:08Z";b.edited_at=a;b.crossposted_at=a;b.published_at=e;b.last_comment_at="2021-09-01T03:49:19Z";b.reading_time_minutes=4;b.tag_list="computerscience, webdev, github, codenewbie";b.tags=["computerscience","webdev","github","codenewbie"];b.body_html="\u003Cp\u003EGit is an amazingly vast tool for developers to manage development workflows, and it goes without saying that there's more to git than the basic commands that we use generally to collaborate on or contribute to team projects. \u003C\u002Fp\u003E\n\n\u003Cp\u003EFor instance, there might be a situation where you are mid-way in implementing a new feature for your product and suddenly a severe bug report pops in. Because of this, you have to keep aside your feature and focus on resolving the bug, but you can't commit the partial code and also can't throw away the progress until now. This highlights the need for a temporary space where you can store your partial changes and later on commit them. Well, guess what - git already has it solved for you via \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vd34tt1F--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627713009770\u002FNlBMsjnM2.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--vd34tt1F--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627713009770\u002FNlBMsjnM2.png\" alt=\"index.png\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EThis article requires basic knowledge of git.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"what-is-a-stash\" href=\"#what-is-a-stash\"\u003E\n  \u003C\u002Fa\u003E\n  What is a stash?\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EGit has an area called the \u003Cstrong\u003Estash\u003C\u002Fstrong\u003E where you can temporarily store a snapshot of your changes without committing them to the repository. It’s separate from the working directory, the staging area, or the repository. Furthermore, there can be more than one stash. The stashes could be understood as temporary shelves to put your data in until you're sure where to put it.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--GGGo2Mdu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715936825\u002F8wY1J1rsB.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--GGGo2Mdu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715936825\u002F8wY1J1rsB.png\" alt=\"git-stash-stack\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Cstrong\u003ENote:\u003C\u002Fstrong\u003E The stash is local to your Git repository; stashes are not transferred to the server when you push.\u003C\u002Fp\u003E\n\n\u003Cp\u003ELearn more about what is stash \u003Ca href=\"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F11260981\u002Fwhat-is-a-stash\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EThis functionality is useful when you’ve made changes to a branch that you aren’t ready to commit to, but you need to switch to another branch without losing those changes.\u003C\u002Fp\u003E\n\n\u003Cp\u003ENow, that we know what is a stash, let's see how to stash your work. \u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"stashing-changes\" href=\"#stashing-changes\"\u003E\n  \u003C\u002Fa\u003E\n  Stashing changes\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo save your changes in the stash, you can use:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003Eor\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash save \"optional message for yourself\"\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThis will take your changes, record them internally, then clear the working directory. This allows you to switch to a new branch and develop other features without worrying about your partial commit messing anything up. \u003C\u002Fp\u003E\n\n\u003Cp\u003EBy default, running \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E will stash:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Echanges that have been added to your index (staged changes)\u003C\u002Fli\u003E\n\u003Cli\u003Echanges made to files that are currently tracked by Git (unstaged changes)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003EBut it will not stash:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003Enew files in your working copy that have not yet been staged\u003C\u002Fli\u003E\n\u003Cli\u003Efiles that have been ignored\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003ESo the changes you want to stash need to be on tracked files. If you created a new file and try to stash your changes, you may get the error \u003Ccode\u003ENo local changes to save\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EHowever, adding the \u003Ccode\u003E-u\u003C\u002Fcode\u003E option (or \u003Ccode\u003E--include-untracked\u003C\u002Fcode\u003E) tells \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E to also stash your untracked files, and you can include changes to ignored files as well by passing the \u003Ccode\u003E-a\u003C\u002Fcode\u003E option (or \u003Ccode\u003E--all\u003C\u002Fcode\u003E) when running \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7ize17Yb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627714474196\u002FKg1Q0nZr0.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--7ize17Yb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627714474196\u002FKg1Q0nZr0.png\" alt=\"Git Stash\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"view-stashed-changes\" href=\"#view-stashed-changes\"\u003E\n  \u003C\u002Fa\u003E\n  View Stashed Changes\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo see what is in your stash, run the command:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash list\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThis returns a list of your saved snapshots in the format \u003Ccode\u003Estash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE.\u003C\u002Fcode\u003E The \u003Ccode\u003Estash@{0}\u003C\u002Fcode\u003E part is the name of the stash, and the number in the curly braces (\u003Ccode\u003E{ }\u003C\u002Fcode\u003E) is the index of that stash. If you have multiple changesets stashed, each one will have a different index. For example -\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003E$ git stash list\nstash@{0}: On main: add style to our site\nstash@{1}: WIP on main: 5002d47 our new homepage\nstash@{2}: WIP on main: 5002d47 our new homepage\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--bhLCXRZ---\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715861410\u002F-FUus5Tm5.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--bhLCXRZ---\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715861410\u002F-FUus5Tm5.jpeg\" alt=\"Stash list\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EBy default, stashes are identified simply as a \u003Cstrong\u003EWIP\u003C\u002Fstrong\u003E – work in progress – on top of the branch and commit that you created the stash from.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"applying-stashed-changes\" href=\"#applying-stashed-changes\"\u003E\n  \u003C\u002Fa\u003E\n  Applying Stashed Changes\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003ETo retrieve and apply the changes out of the stash to the current branch, there are two options:\u003C\u002Fp\u003E\n\n\u003Cp\u003E-\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash apply STASH-NAME\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThe above command applies the changes and leaves a copy in the stash. This is useful if you want to apply the same stashed changes to multiple branches.\u003C\u002Fp\u003E\n\n\u003Cp\u003E-\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash pop STASH-NAME\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EThe above command applies the changes and removes the files from the stash.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Cstrong\u003ENote:\u003C\u002Fstrong\u003E If you skip the STASH_NAME in the above commands, git will basically perform the asked action with the latest stashed change.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"delete-stashed-changes\" href=\"#delete-stashed-changes\"\u003E\n  \u003C\u002Fa\u003E\n  Delete Stashed Changes\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIf you want to remove stashed changes without applying them, run the command:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash drop STASH-NAME\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003ETo clear the entire stash, run the command:\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight plaintext\"\u003E\u003Ccode\u003Egit stash clear\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch2\u003E\n  \u003Ca name=\"conclusion\" href=\"#conclusion\"\u003E\n  \u003C\u002Fa\u003E\n  Conclusion\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EWhile \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E isn't exactly a common command, it can be a useful tool for making meaningful commits. Keep this in mind the next time you wish you could put something on hold and return to it later.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--3t69Xtt3--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715825347\u002FXrFbRAkLq.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--3t69Xtt3--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715825347\u002FXrFbRAkLq.png\" alt=\"keep calm\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThat’s all for this article. I hope that it would have helped you understand the basics of \u003Ccode\u003Egit stash\u003C\u002Fcode\u003E. Please comment with your valuable suggestions and feedback.\u003Cbr\u003E\nIn case you want to connect with me, follow the links below:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fpragativerma18\u002F\"\u003ELinkedIn\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FPragatiVerma18\u002F\"\u003EGitHub\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fpragati_verma18\"\u003ETwitter\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@itispragativerma\"\u003EMedium\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n";b.body_markdown="Git is an amazingly vast tool for developers to manage development workflows, and it goes without saying that there's more to git than the basic commands that we use generally to collaborate on or contribute to team projects. \n\nFor instance, there might be a situation where you are mid-way in implementing a new feature for your product and suddenly a severe bug report pops in. Because of this, you have to keep aside your feature and focus on resolving the bug, but you can't commit the partial code and also can't throw away the progress until now. This highlights the need for a temporary space where you can store your partial changes and later on commit them. Well, guess what - git already has it solved for you via `git stash`.\n\n\n![index.png](https:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627713009770\u002FNlBMsjnM2.png)\n\n\u003E This article requires basic knowledge of git.\n\n## What is a stash?\n\nGit has an area called the **stash** where you can temporarily store a snapshot of your changes without committing them to the repository. It’s separate from the working directory, the staging area, or the repository. Furthermore, there can be more than one stash. The stashes could be understood as temporary shelves to put your data in until you're sure where to put it.\n\n\n![git-stash-stack](https:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715936825\u002F8wY1J1rsB.png)\n\n\u003E **Note:** The stash is local to your Git repository; stashes are not transferred to the server when you push.\n\n\u003E Learn more about what is stash [here](https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F11260981\u002Fwhat-is-a-stash).\n\nThis functionality is useful when you’ve made changes to a branch that you aren’t ready to commit to, but you need to switch to another branch without losing those changes.\n\nNow, that we know what is a stash, let's see how to stash your work. \n\n## Stashing changes\n\nTo save your changes in the stash, you can use:\n\n```\ngit stash \n```\nor\n```\ngit stash save \"optional message for yourself\"\n```\nThis will take your changes, record them internally, then clear the working directory. This allows you to switch to a new branch and develop other features without worrying about your partial commit messing anything up. \n\nBy default, running `git stash` will stash:\n\n- changes that have been added to your index (staged changes)\n- changes made to files that are currently tracked by Git (unstaged changes)\n\nBut it will not stash:\n\n- new files in your working copy that have not yet been staged\n- files that have been ignored\n\nSo the changes you want to stash need to be on tracked files. If you created a new file and try to stash your changes, you may get the error `No local changes to save`.\n\nHowever, adding the `-u` option (or `--include-untracked`) tells `git stash` to also stash your untracked files, and you can include changes to ignored files as well by passing the `-a` option (or `--all`) when running `git stash`.\n\n\n![Git Stash](https:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627714474196\u002FKg1Q0nZr0.png)\n\n## View Stashed Changes\n\nTo see what is in your stash, run the command:\n\n```\ngit stash list\n```\nThis returns a list of your saved snapshots in the format `stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE.` The `stash@{0}` part is the name of the stash, and the number in the curly braces (`{ }`) is the index of that stash. If you have multiple changesets stashed, each one will have a different index. For example - \n\n```\n$ git stash list\nstash@{0}: On main: add style to our site\nstash@{1}: WIP on main: 5002d47 our new homepage\nstash@{2}: WIP on main: 5002d47 our new homepage\n```\n\n![Stash list](https:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715861410\u002F-FUus5Tm5.jpeg)\n\n\u003E By default, stashes are identified simply as a **WIP** – work in progress – on top of the branch and commit that you created the stash from.\n\n## Applying Stashed Changes\n\nTo retrieve and apply the changes out of the stash to the current branch, there are two options:\n\n- \n```\ngit stash apply STASH-NAME\n```\nThe above command applies the changes and leaves a copy in the stash. This is useful if you want to apply the same stashed changes to multiple branches.\n\n- \n```\ngit stash pop STASH-NAME\n``` \nThe above command applies the changes and removes the files from the stash.\n\n\u003E **Note:** If you skip the STASH_NAME in the above commands, git will basically perform the asked action with the latest stashed change.\n\n## Delete Stashed Changes\nIf you want to remove stashed changes without applying them, run the command:\n\n```\ngit stash drop STASH-NAME\n```\n\nTo clear the entire stash, run the command:\n\n```\ngit stash clear\n```\n\n## Conclusion\n\nWhile `git stash` isn't exactly a common command, it can be a useful tool for making meaningful commits. Keep this in mind the next time you wish you could put something on hold and return to it later.\n\n\n![keep calm](https:\u002F\u002Fcdn.hashnode.com\u002Fres\u002Fhashnode\u002Fimage\u002Fupload\u002Fv1627715825347\u002FXrFbRAkLq.png)\n\nThat’s all for this article. I hope that it would have helped you understand the basics of `git stash`. Please comment with your valuable suggestions and feedback.\nIn case you want to connect with me, follow the links below:\n\n[LinkedIn](https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fpragativerma18\u002F) | [GitHub](https:\u002F\u002Fgithub.com\u002FPragatiVerma18\u002F) | [Twitter](https:\u002F\u002Ftwitter.com\u002Fpragati_verma18) | [Medium](https:\u002F\u002Fmedium.com\u002F@itispragativerma)\n";b.user={name:"Pragati Verma",username:"pragativerma18",twitter_username:"pragati_verma18",github_username:"PragatiVerma18",website_url:"https:\u002F\u002Fgithub.com\u002FPragatiVerma18",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YSpx6zuX--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F242611\u002F68277387-0fa0-4c79-ad6f-4be3ddc940b7.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--li1xF_dl--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F242611\u002F68277387-0fa0-4c79-ad6f-4be3ddc940b7.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:b}},mutations:[["SET_CURRENT_ARTICLE",b]]}}(null,{},"https:\u002F\u002Fdev.to\u002Fpragativerma18\u002Fa-guide-to-git-stash-2h5d",203,"2021-07-31T07:34:22Z")));