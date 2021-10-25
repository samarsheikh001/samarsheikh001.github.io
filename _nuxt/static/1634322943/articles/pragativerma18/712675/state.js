window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634322943",layout:"default",error:a,state:{currentArticle:{type_of:"article",id:712675,title:"Confusing Terms in the Git Terminology",description:"Git and GitHub are at the core of open source in today’s programming world. However, there are a lot...",readable_publish_date:"May 30",slug:"confusing-terms-in-the-git-terminology-1578",path:"\u002Fpragativerma18\u002Fconfusing-terms-in-the-git-terminology-1578",url:b,comments_count:4,public_reactions_count:c,collection_id:a,published_timestamp:d,positive_reactions_count:c,cover_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--VTmlWHhQ--\u002Fc_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F1ipn9gw8zthdouyi8eaq.png",social_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--a1ClLl3N--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Farticles\u002F1ipn9gw8zthdouyi8eaq.png",canonical_url:b,created_at:"2021-05-30T08:34:04Z",edited_at:a,crossposted_at:a,published_at:d,last_comment_at:"2021-06-07T05:15:43Z",reading_time_minutes:6,tag_list:"opensource, github, codenewbie, computerscience",tags:["opensource","github","codenewbie","computerscience"],body_html:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002F\"\u003E\u003Cstrong\u003EGit\u003C\u002Fstrong\u003E\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002F\"\u003E\u003Cstrong\u003EGitHub\u003C\u002Fstrong\u003E\u003C\u002Fa\u003E are at the core of open source in today’s programming world. However, there are a lot of confusing terms that often seem similar yet can have conflicting meanings and uses. Let’s demystify these confusing terms by decoding their underlying meanings.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ENOTE:\u003C\u002Fstrong\u003E \u003Cem\u003EThis article expects some knowledge of Git and GitHub.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cVSSICDX--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1600\u002F1%2AZIrFsOM49UJ7dlmATwkzIg.gif\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--cVSSICDX--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1600\u002F1%2AZIrFsOM49UJ7dlmATwkzIg.gif\" alt=\"Octacat gif\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"origin-and-upstream\" href=\"#origin-and-upstream\"\u003E\n  \u003C\u002Fa\u003E\n  Origin and Upstream\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EFrom \u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fdoc\"\u003EGit Documentation\u003C\u002Fa\u003E:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EWhen you fork a repo and clone it locally, then there is a default remote called \u003Cstrong\u003Eorigin\u003C\u002Fstrong\u003E that points to your fork on GitHub, not the original repo it was forked from.\u003Cbr\u003E\nTo keep track of the original repo, you need to add another remote named \u003Cstrong\u003Eupstream\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EThis confusion arises when you are working on the clone of a forked repo. \u003Cstrong\u003EUpstream\u003C\u002Fstrong\u003E is what you would use to fetch from the original repo to keep your local copy in sync with the project you wanted to contribute to. Meanwhile, \u003Cstrong\u003Eorigin\u003C\u002Fstrong\u003E is what you would use to pull and push code to your fork, and thereafter you can contribute back to the upstream repo by making a pull request.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--oEi39Vsp--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A2VsgQel00bwqhvKN8qHNCA.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--oEi39Vsp--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A2VsgQel00bwqhvKN8qHNCA.png\" alt=\"Origin vs Upstream\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ERemember\u003C\u002Fstrong\u003E: Remotes like \u003Ccode\u003Eupstream\u003C\u002Fcode\u003E and \u003Ccode\u003Eorigin\u003C\u002Fcode\u003E are simply an alias that stores the URL of repositories. They can be named anything, but it’s a convention to set original repo’s remote as upstream.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"fetch-and-pull\" href=\"#fetch-and-pull\"\u003E\n  \u003C\u002Fa\u003E\n  Fetch and Pull\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EFrom \u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fdoc\"\u003EGit Documentation\u003C\u002Fa\u003E\u003C\u002Fstrong\u003E:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E can fetch from either a single named repository or URL or from several repositories at once.\u003Cbr\u003E\n\u003Ccode\u003Egit pull\u003C\u002Fcode\u003E incorporates changes from a remote repository into the current branch.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--l5cTI0Ww--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1224\u002F1%2Ab50bU2iCz4fCf3ZuOn-yfw.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--l5cTI0Ww--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1224\u002F1%2Ab50bU2iCz4fCf3ZuOn-yfw.jpeg\" alt=\"fetch vs pull\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E is the command that tells your local git to retrieve the latest meta-data info from the original yet doesn’t do any file transferring. It’s more like just checking to see if there are any changes available. \u003Ccode\u003Egit pull\u003C\u002Fcode\u003E, on the other hand, git fetch and applies the changes from the remote repository to the local repository.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003ERemember\u003C\u002Fstrong\u003E: \u003Ccode\u003Egit pull\u003C\u002Fcode\u003E is shorthand for \u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E followed by \u003Ccode\u003Egit merge FETCH_HEAD\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPutting it rather simply, \u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E can be used to know the changes done in the remote repo\u002Fbranch since your last pull. This is useful to allow for checking before doing a git pull, which could change files in your current branch and working copy and potentially lose your changes, etc.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--8m2KEOLt--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1216\u002F1%2AlIGZ2jFMwVcp0-q12Ba2FA.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--8m2KEOLt--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1216\u002F1%2AlIGZ2jFMwVcp0-q12Ba2FA.png\" alt=\"fetch vs pull\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E can be helpful in several scenarios, one of them being slightly optimizing your workflow to reduce network hits. Each git pull involves a \u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E, so if you want to get a pull on five different branches, you have four redundant extra \u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E calls.\u003Cbr\u003E\nAlso, \u003Ccode\u003Egit fetch\u003C\u002Fcode\u003E can often save you in situations you are working offline or working on the go, maybe on a train, but you want to make sure that you have all the changes from every branch available to you while working remotely. You can simply git fetch once while you’re on the network, and then leave. Later, without a network connection, you can manually \u003Ccode\u003Egit checkout branch\u003C\u002Fcode\u003E; \u003Ccode\u003Egit merge origin\u002Fbranch\u003C\u002Fcode\u003E to merge the changes you previously fetched.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"switch-and-checkout\" href=\"#switch-and-checkout\"\u003E\n  \u003C\u002Fa\u003E\n  Switch and Checkout\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EFrom \u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fdoc\"\u003EGit Documentation\u003C\u002Fa\u003E:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Egit switch\u003C\u002Fcode\u003E switches to a specified branch. The working tree and the index are updated to match the branch.\u003Cbr\u003E\n\u003Ccode\u003Egit checkout\u003C\u002Fcode\u003E updates files in the working tree to match the version in the index or the specified tree.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003E\u003Ccode\u003Egit switch\u003C\u002Fcode\u003E is not a new feature but an additional command to switch\u002Fchange branch feature which is already available in the overloaded git checkout command. Hence, to separate the functionalities, \u003Cstrong\u003EGit 2.23\u003C\u002Fstrong\u003E introduced the new \u003Ccode\u003Egit switch branch\u003C\u002Fcode\u003E command which is an attempt to start to scale back to the responsibilities without breaking backward compatibility.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5-EMDruh--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fbluecast.tech\u002Fwp-content\u002Fuploads\u002F2019\u002F09\u002Fgit_switch_branch_vs_git_Checkout_branch-1024x521.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--5-EMDruh--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fbluecast.tech\u002Fwp-content\u002Fuploads\u002F2019\u002F09\u002Fgit_switch_branch_vs_git_Checkout_branch-1024x521.png\" alt=\"Checkout vs Switch\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe \u003Ccode\u003Egit checkout\u003C\u002Fcode\u003E command operates upon three distinct entities: files, commits, and branches. To put it simply, if you modify a file but haven’t staged the changes, then \u003Ccode\u003Egit checkout &lt;filename&gt;\u003C\u002Fcode\u003E will discard the modifications and you would remain on the same branch, while \u003Ccode\u003Egit checkout &lt;commit hash&gt;\u003C\u002Fcode\u003E lets you roll back to an older commit, whereas \u003Ccode\u003Egit checkout &lt;branch&gt;\u003C\u002Fcode\u003E would switch the branches, hence, to avoid this confusion, \u003Ccode\u003Egit switch\u003C\u002Fcode\u003E was introduced.\u003C\u002Fp\u003E\n\n\u003Cp\u003EBelow are the three most common use cases of \u003Ccode\u003Egit checkout\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--J3ZblWe1--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AsHJdaHsRpAzCk_ib4x4gCA.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--J3ZblWe1--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AsHJdaHsRpAzCk_ib4x4gCA.jpeg\" alt=\"git checkout commit\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Y96kV12G--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AkODKf_nR0rwv3ZOr98cEhg.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Y96kV12G--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AkODKf_nR0rwv3ZOr98cEhg.jpeg\" alt=\"git checkout branch\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--d-cbkW_8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AJwsbBKmfqWuyadWCK275Ag.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--d-cbkW_8--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1%2AJwsbBKmfqWuyadWCK275Ag.jpeg\" alt=\"git checkout file\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"head-and-head\" href=\"#head-and-head\"\u003E\n  \u003C\u002Fa\u003E\n  HEAD~ and HEAD^\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EThe \u003Ccode\u003E~\u003C\u002Fcode\u003E(tilde) and \u003Ccode\u003E^\u003C\u002Fcode\u003E(caret) symbols are used to point to a position relative to a specific commit. The symbols are used together with a commit reference, typically \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E(represents the current snapshot of a branch) or a commit hash.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--jrMCbybJ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1200\u002F1%2AhxjscRxtC0YpXdNf-9YmoA.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--jrMCbybJ--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1200\u002F1%2AhxjscRxtC0YpXdNf-9YmoA.png\" alt=\"head terminology\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ccode\u003E~n\u003C\u002Fcode\u003E refers to the nth grandparent. \u003Ccode\u003EHEAD~1\u003C\u002Fcode\u003E refers to the commit’s first parent. \u003Ccode\u003EHEAD~2\u003C\u002Fcode\u003E refers to the first parent of the commit’s first parent.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cp\u003E-\u003Ccode\u003E^n\u003C\u002Fcode\u003E refers to the nth parent. \u003Ccode\u003EHEAD¹\u003C\u002Fcode\u003E refers to the commit’s first parent. \u003Ccode\u003EHEAD²\u003C\u002Fcode\u003E refers to the commit’s second parent. A commit can have two parents in a merge commit.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"revert-and-reset\" href=\"#revert-and-reset\"\u003E\n  \u003C\u002Fa\u003E\n  Revert and Reset\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EFrom \u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fdoc\"\u003EGit Documentation\u003C\u002Fa\u003E:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Egit revert\u003C\u002Fcode\u003E is used to record some new commits to reverse the effect of some earlier commits (often only a faulty one).\u003Cbr\u003E\n\u003Ccode\u003Egit reset\u003C\u002Fcode\u003E resets the current \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E to the specified state.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EThe \u003Ccode\u003Egit revert\u003C\u002Fcode\u003E command is used for undoing changes to a repository’s commit history. It is used to invert the changes introduced by a specific commit and append a new commit with the resulting inverse content. This can be useful for tracking down a bug introduced by a single commit so that it can be automatically fixed by a \u003Ccode\u003Egit revert\u003C\u002Fcode\u003E command.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs---vpPYyzu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1334\u002F1%2AgwwLoCvrGdTPk6QfX7PZfQ.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs---vpPYyzu--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1334\u002F1%2AgwwLoCvrGdTPk6QfX7PZfQ.jpeg\" alt=\"reset vs revert\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ccode\u003Egit reset\u003C\u002Fcode\u003E is another complex and versatile git command used for undoing changes, however, \u003Ccode\u003Egit reset\u003C\u002Fcode\u003E will move the \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E ref pointer and the current branch ref pointer whereas the \u003Ccode\u003Egit revert\u003C\u002Fcode\u003E command doesn’t move the \u003Ccode\u003EHEAD\u003C\u002Fcode\u003E ref pointer.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--8IMKOS4h--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi.stack.imgur.com\u002FUWGiw.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--8IMKOS4h--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fi.stack.imgur.com\u002FUWGiw.png\" alt=\"git reset\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EPutting it simply, if you have already pushed your branch somewhere or someone pulled from your branch, your only option is to \u003Ccode\u003Egit revert\u003C\u002Fcode\u003E to undo the changes. Meanwhile, if you have kept your commits entirely local and private, you can simply use \u003Ccode\u003Egit reset\u003C\u002Fcode\u003E to undo the changes.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--zhr-cYYE--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A8q5OTBysupIfkpROkbH_qg.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--zhr-cYYE--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A8q5OTBysupIfkpROkbH_qg.jpeg\" alt=\"reset vs revert\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"merge-and-rebase\" href=\"#merge-and-rebase\"\u003E\n  \u003C\u002Fa\u003E\n  Merge and Rebase\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EFrom \u003Ca href=\"https:\u002F\u002Fgit-scm.com\u002Fdoc\"\u003EGit Documentation\u003C\u002Fa\u003E:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003Egit merge\u003C\u002Fcode\u003E incorporates changes from the named commits (since the time their histories diverged from the current branch) into the current branch.\u003Cbr\u003E\n\u003Ccode\u003Egit rebase\u003C\u002Fcode\u003E reapplies commits on top of another base tip.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wAgKfpxb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A1C7Rysd6vNCq2DGXaR1zuw.jpeg\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--wAgKfpxb--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2A1C7Rysd6vNCq2DGXaR1zuw.jpeg\" alt=\"rebase vs merge\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EBoth of these commands are designed to integrate changes from one branch into another branch, the difference lies in the way they do it. \u003Cstrong\u003ERebasing\u003C\u002Fstrong\u003E is the process of moving or combining a sequence of commits to a new base commit while merging ties the histories of both branches and is always a forward-moving change record, hence, doesn’t change the existing branches in any way.\u003Cbr\u003E\nThe major benefit of rebasing is that you get a much cleaner project history as it eliminates the unnecessary merge commits required by git merge.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--UdyG4P_R--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2As9vhZ0Arc0ViAnl9ksy_Ew.png\" class=\"article-body-image-wrapper\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--UdyG4P_R--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1%2As9vhZ0Arc0ViAnl9ksy_Ew.png\" alt=\"rebase vs merge\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003ERebasing works by transferring each local commit to the updated master branch one at a time. This means that you catch merge conflicts on a commit-by-commit basis rather than resolving all of them in one massive merge commit.\u003Cbr\u003E\nMoreover, rebasing makes it easier to figure out where bugs were introduced and if necessary to roll back changes with minimal impact on the project.\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EUse this handy \u003Ca href=\"https:\u002F\u002Fwww.atlassian.com\u002Fgit\u002Ftutorials\u002Fatlassian-git-cheatsheet\"\u003Egit cheat sheet\u003C\u002Fa\u003E guide to enhance your workflow.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Cp\u003EThat’s all for this article. I hope that it would have helped you demystify some of the confusing terminologies related to git and GitHub. Please comment with your valuable suggestions and feedback.\u003Cbr\u003E\nIn case you want to connect with me, follow the links below:\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fpragativerma18\u002F\"\u003ELinkedIn\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FPragatiVerma18\u002F\"\u003EGitHub\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fpragati_verma18\"\u003ETwitter\u003C\u002Fa\u003E | \u003Ca href=\"https:\u002F\u002Fmedium.com\u002F@itispragativerma\"\u003EMedium\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n",body_markdown:"[**Git**](https:\u002F\u002Fgit-scm.com\u002F) and [**GitHub**](https:\u002F\u002Fgithub.com\u002F) are at the core of open source in today’s programming world. However, there are a lot of confusing terms that often seem similar yet can have conflicting meanings and uses. Let’s demystify these confusing terms by decoding their underlying meanings.\n\n**NOTE:** _This article expects some knowledge of Git and GitHub._\n\n![Octacat gif](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1600\u002F1*ZIrFsOM49UJ7dlmATwkzIg.gif)\n\n### Origin and Upstream\n\n**From [Git Documentation](https:\u002F\u002Fgit-scm.com\u002Fdoc):**\n\n\u003E When you fork a repo and clone it locally, then there is a default remote called **origin** that points to your fork on GitHub, not the original repo it was forked from.\nTo keep track of the original repo, you need to add another remote named **upstream**.\n\nThis confusion arises when you are working on the clone of a forked repo. **Upstream** is what you would use to fetch from the original repo to keep your local copy in sync with the project you wanted to contribute to. Meanwhile, **origin** is what you would use to pull and push code to your fork, and thereafter you can contribute back to the upstream repo by making a pull request.\n\n![Origin vs Upstream](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1*2VsgQel00bwqhvKN8qHNCA.png)\n\n**Remember**: Remotes like `upstream` and `origin` are simply an alias that stores the URL of repositories. They can be named anything, but it’s a convention to set original repo’s remote as upstream.\n\n\n### Fetch and Pull\n\n**From [Git Documentation](https:\u002F\u002Fgit-scm.com\u002Fdoc)**:\n\n\u003E `git fetch` can fetch from either a single named repository or URL or from several repositories at once.\n`git pull` incorporates changes from a remote repository into the current branch.\n\n![fetch vs pull](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1224\u002F1*b50bU2iCz4fCf3ZuOn-yfw.jpeg)\n\n`git fetch` is the command that tells your local git to retrieve the latest meta-data info from the original yet doesn’t do any file transferring. It’s more like just checking to see if there are any changes available. `git pull`, on the other hand, git fetch and applies the changes from the remote repository to the local repository.\n\n**Remember**: `git pull` is shorthand for `git fetch` followed by `git merge FETCH_HEAD`.\n\nPutting it rather simply, `git fetch` can be used to know the changes done in the remote repo\u002Fbranch since your last pull. This is useful to allow for checking before doing a git pull, which could change files in your current branch and working copy and potentially lose your changes, etc.\n\n![fetch vs pull](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1216\u002F1*lIGZ2jFMwVcp0-q12Ba2FA.png)\n\n`git fetch` can be helpful in several scenarios, one of them being slightly optimizing your workflow to reduce network hits. Each git pull involves a `git fetch`, so if you want to get a pull on five different branches, you have four redundant extra `git fetch` calls.\nAlso, `git fetch` can often save you in situations you are working offline or working on the go, maybe on a train, but you want to make sure that you have all the changes from every branch available to you while working remotely. You can simply git fetch once while you’re on the network, and then leave. Later, without a network connection, you can manually `git checkout branch`; `git merge origin\u002Fbranch` to merge the changes you previously fetched.\n\n\n### Switch and Checkout\n\n**From [Git Documentation](https:\u002F\u002Fgit-scm.com\u002Fdoc):**\n\n\u003E `git switch` switches to a specified branch. The working tree and the index are updated to match the branch.\n`git checkout` updates files in the working tree to match the version in the index or the specified tree.\n\n`git switch` is not a new feature but an additional command to switch\u002Fchange branch feature which is already available in the overloaded git checkout command. Hence, to separate the functionalities, **Git 2.23** introduced the new `git switch branch` command which is an attempt to start to scale back to the responsibilities without breaking backward compatibility.\n\n![Checkout vs Switch](https:\u002F\u002Fbluecast.tech\u002Fwp-content\u002Fuploads\u002F2019\u002F09\u002Fgit_switch_branch_vs_git_Checkout_branch-1024x521.png)\n\nThe `git checkout` command operates upon three distinct entities: files, commits, and branches. To put it simply, if you modify a file but haven’t staged the changes, then `git checkout \u003Cfilename\u003E` will discard the modifications and you would remain on the same branch, while `git checkout \u003Ccommit hash\u003E` lets you roll back to an older commit, whereas `git checkout \u003Cbranch\u003E` would switch the branches, hence, to avoid this confusion, `git switch` was introduced.\n\nBelow are the three most common use cases of `git checkout`:\n\n![git checkout commit](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1*sHJdaHsRpAzCk_ib4x4gCA.jpeg)\n\n![git checkout branch](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1*kODKf_nR0rwv3ZOr98cEhg.jpeg)\n\n![git checkout file](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1276\u002F1*JwsbBKmfqWuyadWCK275Ag.jpeg)\n\n### HEAD~ and HEAD^\n\nThe `~`(tilde) and `^`(caret) symbols are used to point to a position relative to a specific commit. The symbols are used together with a commit reference, typically `HEAD`(represents the current snapshot of a branch) or a commit hash.\n\n![head terminology](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1200\u002F1*hxjscRxtC0YpXdNf-9YmoA.png)\n\n- `~n` refers to the nth grandparent. `HEAD~1` refers to the commit’s first parent. `HEAD~2` refers to the first parent of the commit’s first parent.\n\n-`^n` refers to the nth parent. `HEAD¹` refers to the commit’s first parent. `HEAD²` refers to the commit’s second parent. A commit can have two parents in a merge commit.\n\n\n### Revert and Reset\n\n**From [Git Documentation](https:\u002F\u002Fgit-scm.com\u002Fdoc):**\n\n\u003E `git revert` is used to record some new commits to reverse the effect of some earlier commits (often only a faulty one).\n`git reset` resets the current `HEAD` to the specified state.\n\nThe `git revert` command is used for undoing changes to a repository’s commit history. It is used to invert the changes introduced by a specific commit and append a new commit with the resulting inverse content. This can be useful for tracking down a bug introduced by a single commit so that it can be automatically fixed by a `git revert` command.\n\n![reset vs revert](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1334\u002F1*gwwLoCvrGdTPk6QfX7PZfQ.jpeg)\n\n`git reset` is another complex and versatile git command used for undoing changes, however, `git reset` will move the `HEAD` ref pointer and the current branch ref pointer whereas the `git revert` command doesn’t move the `HEAD` ref pointer.\n\n![git reset](https:\u002F\u002Fi.stack.imgur.com\u002FUWGiw.png)\n\nPutting it simply, if you have already pushed your branch somewhere or someone pulled from your branch, your only option is to `git revert` to undo the changes. Meanwhile, if you have kept your commits entirely local and private, you can simply use `git reset` to undo the changes.\n\n![reset vs revert](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1*8q5OTBysupIfkpROkbH_qg.jpeg)\n\n\n### Merge and Rebase\n\n**From [Git Documentation](https:\u002F\u002Fgit-scm.com\u002Fdoc):**\n\u003E `git merge` incorporates changes from the named commits (since the time their histories diverged from the current branch) into the current branch.\n`git rebase` reapplies commits on top of another base tip.\n\n![rebase vs merge](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1*1C7Rysd6vNCq2DGXaR1zuw.jpeg)\n\nBoth of these commands are designed to integrate changes from one branch into another branch, the difference lies in the way they do it. **Rebasing** is the process of moving or combining a sequence of commits to a new base commit while merging ties the histories of both branches and is always a forward-moving change record, hence, doesn’t change the existing branches in any way.\nThe major benefit of rebasing is that you get a much cleaner project history as it eliminates the unnecessary merge commits required by git merge.\n\n![rebase vs merge](https:\u002F\u002Fmiro.medium.com\u002Fmax\u002F1400\u002F1*s9vhZ0Arc0ViAnl9ksy_Ew.png)\n\nRebasing works by transferring each local commit to the updated master branch one at a time. This means that you catch merge conflicts on a commit-by-commit basis rather than resolving all of them in one massive merge commit.\nMoreover, rebasing makes it easier to figure out where bugs were introduced and if necessary to roll back changes with minimal impact on the project.\n\n\u003E Use this handy [git cheat sheet](https:\u002F\u002Fwww.atlassian.com\u002Fgit\u002Ftutorials\u002Fatlassian-git-cheatsheet) guide to enhance your workflow.\n\nThat’s all for this article. I hope that it would have helped you demystify some of the confusing terminologies related to git and GitHub. Please comment with your valuable suggestions and feedback.\nIn case you want to connect with me, follow the links below:\n\n[LinkedIn](https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fpragativerma18\u002F) | [GitHub](https:\u002F\u002Fgithub.com\u002FPragatiVerma18\u002F) | [Twitter](https:\u002F\u002Ftwitter.com\u002Fpragati_verma18) | [Medium](https:\u002F\u002Fmedium.com\u002F@itispragativerma)",user:{name:"Pragati Verma",username:"pragativerma18",twitter_username:"pragati_verma18",github_username:"PragatiVerma18",website_url:"https:\u002F\u002Fgithub.com\u002FPragatiVerma18",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--YSpx6zuX--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F242611\u002F68277387-0fa0-4c79-ad6f-4be3ddc940b7.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--li1xF_dl--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F242611\u002F68277387-0fa0-4c79-ad6f-4be3ddc940b7.jpeg"}}},serverRendered:true,routePath:"\u002Farticles\u002Fpragativerma18\u002F712675",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:a}}}}(null,"https:\u002F\u002Fdev.to\u002Fpragativerma18\u002Fconfusing-terms-in-the-git-terminology-1578",215,"2021-05-30T10:43:56Z"));