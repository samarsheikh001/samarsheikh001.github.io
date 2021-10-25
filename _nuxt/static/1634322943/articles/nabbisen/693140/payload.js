__NUXT_JSONP__("/articles/nabbisen/693140", (function(a,b,c,d,e,f){e.type_of="article";e.id=693140;e.title="Fix failure in building Gitea on OpenBSD because of bad memory allocation in Node.js";e.description="Trouble   I built my Gitea server on OpenBSD and have managed it for years....";e.readable_publish_date="May 10";e.slug="fix-failure-of-building-gitea-on-openbsd-because-of-bad-memory-allocation-in-node-js-kb6";e.path="\u002Fnabbisen\u002Ffix-failure-of-building-gitea-on-openbsd-because-of-bad-memory-allocation-in-node-js-kb6";e.url=f;e.comments_count=0;e.public_reactions_count=a;e.collection_id=b;e.published_timestamp=c;e.positive_reactions_count=a;e.cover_image=b;e.social_image="https:\u002F\u002Fdev.to\u002Fsocial_previews\u002Farticle\u002F693140.png";e.canonical_url=f;e.created_at="2021-05-10T01:45:01Z";e.edited_at="2021-05-11T01:04:43Z";e.crossposted_at=b;e.published_at=c;e.last_comment_at=c;e.reading_time_minutes=a;e.tag_list="gitea, openbsd, node, troubleshooting";e.tags=["gitea","openbsd","node","troubleshooting"];e.body_html="\u003Ch2\u003E\n  \u003Ca name=\"trouble\" href=\"#trouble\"\u003E\n  \u003C\u002Fa\u003E\n  Trouble\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EI built my \u003Ca href=\"https:\u002F\u002Fgitea.io\u002F0\"\u003EGitea\u003C\u002Fa\u003E server on \u003Ca href=\"https:\u002F\u002Fwww.openbsd.org\u002F\"\u003EOpenBSD\u003C\u002Fa\u003E and have managed it for years.\u003C\u002Fp\u003E\n\n\n\u003Cdiv class=\"ltag__link\"\u003E\n  \u003Ca href=\"\u002Fnabbisen\" class=\"ltag__link__link\"\u003E\n    \u003Cdiv class=\"ltag__link__pic\"\u003E\n      \u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--xxv7IesV--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880\u002Fhttps:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--Z4aygbOe--\u002Fc_fill%2Cf_auto%2Cfl_progressive%2Ch_150%2Cq_auto%2Cw_150\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F87972\u002Fa3543f5f-7054-4b0b-a2cd-7dea7ec97a2a.jpeg\" alt=\"nabbisen\" loading=\"lazy\"\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fa\u003E\n  \u003Ca href=\"\u002Fnabbisen\u002Fgitea-on-openbsd-from-source-code-update-21c0\" class=\"ltag__link__link\"\u003E\n    \u003Cdiv class=\"ltag__link__content\"\u003E\n      \u003Ch2\u003EGitea on OpenBSD from Source Code: Update\u003C\u002Fh2\u003E\n      \u003Ch3\u003EHeddi Nabbisen ・ Dec 29 '20 ・ 2 min read\u003C\u002Fh3\u003E\n      \u003Cdiv class=\"ltag__link__taglist\"\u003E\n        \u003Cspan class=\"ltag__link__tag\"\u003E#gitea\u003C\u002Fspan\u003E\n        \u003Cspan class=\"ltag__link__tag\"\u003E#selfhosted\u003C\u002Fspan\u003E\n        \u003Cspan class=\"ltag__link__tag\"\u003E#openbsd\u003C\u002Fspan\u003E\n        \u003Cspan class=\"ltag__link__tag\"\u003E#git\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E\n\n\n\u003Cp\u003ELast month and this month, I was struggling to update it from 1.13.7 to 1.14.[0-2]. I met the fatal error about memory allocation below and failed every time.\u003C\u002Fp\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"solution\" href=\"#solution\"\u003E\n  \u003C\u002Fa\u003E\n  Solution\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EIt didn't seem to always happen on OpenBSD servers, because that in OpenBSD \u003Ca href=\"https:\u002F\u002Fwww.openbsd.org\u002Ffaq\u002Fports\u002Fports.html\"\u003EPorts\u003C\u002Fa\u003E system has been updated to 1.14. At last, I found it was because the memory size of my server was too small and seemed not to get along with Node.js and its V8 module.\u003C\u002Fp\u003E\n\n\u003Cp\u003EI modified the updating command to add \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fv8.html\"\u003EV8\u003C\u002Fa\u003E's \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fcli.html#cli_max_old_space_size_size_in_megabytes\"\u003E\u003Ccode\u003Emax_old_space_size\u003C\u002Fcode\u003E\u003C\u002Fa\u003E option of Node.js so as to limit memory consumption.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight diff\"\u003E\u003Ccode\u003E\u003Cspan class=\"gd\"\u003E- env TAGS=\"bindata\" make -f BSDmakefile\n\u003C\u002Fspan\u003E\u003Cspan class=\"gi\"\u003E+ env TAGS=\"bindata\" NODE_OPTIONS=\"--max_old_space_size=1024\" make -f BSDmakefile\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Cp\u003EIt was successful🙂\u003C\u002Fp\u003E\n\n\u003Cp\u003EBesides, the official documentation \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fcli.html#cli_max_old_space_size_size_in_megabytes\"\u003Esays\u003C\u002Fa\u003E:\u003C\u002Fp\u003E\n\n\u003Cblockquote\u003E\n\u003Cp\u003EOn a machine with 2GB of memory, consider setting this to 1536 (1.5GB) to leave some memory for other uses and avoid swapping.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\n\u003Ch2\u003E\n  \u003Ca name=\"description\" href=\"#description\"\u003E\n  \u003C\u002Fa\u003E\n  Description\n\u003C\u002Fh2\u003E\n\n\u003Cp\u003EHere are logs I got when I ran the original command and failed.\u003C\u002Fp\u003E\n\n\u003Ch3\u003E\n  \u003Ca name=\"1st-trial\" href=\"#1st-trial\"\u003E\n  \u003C\u002Fa\u003E\n  1st trial\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EIt said \"std::bad_alloc\" after \u003Ccode\u003Enpx webpack\u003C\u002Fcode\u003E but I didn't know the detail.\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight console\"\u003E\u003Ccode\u003E\u003Cspan class=\"gp\"\u003E$\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"nb\"\u003Eenv \u003C\u002Fspan\u003E\u003Cspan class=\"nv\"\u003ETAGS\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"bindata\"\u003C\u002Fspan\u003E make \u003Cspan class=\"nt\"\u003E-f\u003C\u002Fspan\u003E BSDmakefile generate build\n\u003Cspan class=\"go\"\u003ERunning go generate...\ngenerating bindata for options\ngenerating bindata for public\ngenerating bindata for templates\nnpm install --no-save\n\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003Ecore-js@3.8.1 postinstall \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea\u002Fnode_modules\u002Fcore-js\n\u003Cspan class=\"gp\"\u003E&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003Enode \u003Cspan class=\"nt\"\u003E-e\u003C\u002Fspan\u003E \u003Cspan class=\"s2\"\u003E\"try{require('.\u002Fpostinstall')}catch(e){}\"\u003C\u002Fspan\u003E\n\u003Cspan class=\"go\"\u003E\nThank you for using core-js ( https:\u002F\u002Fgithub.com\u002Fzloirock\u002Fcore-js ) for polyfilling JavaScript standard library!\n\nThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: \n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003Ehttps:\u002F\u002Fopencollective.com\u002Fcore-js \n\u003Cspan class=\"gp\"\u003E&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003Ehttps:\u002F\u002Fwww.patreon.com\u002Fzloirock \n\u003Cspan class=\"go\"\u003E\nAlso, the author of core-js ( https:\u002F\u002Fgithub.com\u002Fzloirock ) is looking for a good job -)\n\nadded 224 packages from 1007 contributors, removed 988 packages, updated 282 packages and moved 6 packages in 105.905s\nrm -rf public\u002Fjs public\u002Fcss public\u002Ffonts public\u002Fimg\u002Fwebpack public\u002Fserviceworker.js\nnpx webpack\nterminating with uncaught exception of type std::bad_alloc: std::bad_alloc\ngmake: *** [Makefile:668: public\u002Fjs\u002Findex.js] Abort trap (core dumped)\n*** Error 2 in \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea (BSDmakefile:46 'FRC': \"gmake\" \"--no-print-directory\" generate build )\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n\u003Ch3\u003E\n  \u003Ca name=\"2nd-trial\" href=\"#2nd-trial\"\u003E\n  \u003C\u002Fa\u003E\n  2nd trial\n\u003C\u002Fh3\u003E\n\n\u003Cp\u003EI ran the same command. Curiously, log has been changed without my manual change in OS, F\u002FW or files permission.\u003Cbr\u003E\nIt said clearly \"FATAL ERROR: NewSpace::Rebalance Allocation failed - JavaScript heap out of memory\".\u003Cbr\u003E\n\u003C\u002Fp\u003E\n\n\u003Cdiv class=\"highlight js-code-highlight\"\u003E\n\u003Cpre class=\"highlight console\"\u003E\u003Ccode\u003E\u003Cspan class=\"gp\"\u003E$\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"nb\"\u003Eenv \u003C\u002Fspan\u003E\u003Cspan class=\"nv\"\u003ETAGS\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E\u003Cspan class=\"s2\"\u003E\"bindata\"\u003C\u002Fspan\u003E make \u003Cspan class=\"nt\"\u003E-f\u003C\u002Fspan\u003E BSDmakefile generate build\n\u003Cspan class=\"go\"\u003ERunning go generate...\nbindata for options already up-to-date\ngenerating bindata for public\nbindata for templates already up-to-date\nrm -rf public\u002Fjs public\u002Fcss public\u002Ffonts public\u002Fimg\u002Fwebpack public\u002Fserviceworker.js\nnpx webpack\n\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E&lt;--- Last few GCs ---&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"go\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E[90805:0x7a9cc648000]    16873 ms: Scavenge 253.8 (270.9) -&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E245.3 \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003E274.6\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E MB, 100.5 \u002F 0.0 ms  \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003Eaverage mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000, current mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E allocation failure \n\u003Cspan class=\"gp\"\u003E[90805:0x7a9cc648000]    17997 ms: Scavenge 258.2 (275.1) -&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E249.5 \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003E279.1\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E MB, 841.7 \u002F 0.0 ms  \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003Eaverage mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000, current mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E allocation failure \n\u003Cspan class=\"gp\"\u003E[90805:0x7a9cc648000]    18190 ms: Scavenge 262.5 (279.6) -&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E253.8 \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003E283.4\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E MB, 17.2 \u002F 0.0 ms  \u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003Eaverage mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000, current mu \u003Cspan class=\"o\"\u003E=\u003C\u002Fspan\u003E 1.000\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E allocation failure \n\u003Cspan class=\"go\"\u003E\n\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E&lt;--- JS stacktrace ---&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"go\"\u003ECannot get stack trace in GC.\nFATAL ERROR: NewSpace::Rebalance Allocation failed - JavaScript heap out of memory\n\nWriting Node.js report to file: report.20210510.101055.90805.0.001.json\n\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003EFatal error \u003Cspan class=\"k\"\u003Ein\u003C\u002Fspan\u003E , line 0\n\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003EFatal process out of memory: Zone\n\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E#\u003C\u002Fspan\u003EFailureMessage Object: 0x7aa023e61a0\n\u003Cspan class=\"go\"\u003E 1: 0x7a784e46689 node::MultiIsolatePlatform::CancelPendingDelayedTasks(v8::Isolate*) [node]\n 2: 0x7a785bbcb11 V8_Fatal(char const*, ...) [node]\n 3: 0x7a784f2c9d9 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]\n 4: 0x7a78559fb30 v8::internal::Zone::ReleaseMemory() [node]\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E 5: 0x7a785d941e5 std::__1::vector&lt;v8::internal::compiler::BasicBlock*, v8::internal::ZoneAllocator&lt;v8::internal::compiler::BasicBlock*&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"w\"\u003E \u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E&gt;\u003C\u002Fspan\u003E::__append\u003Cspan class=\"o\"\u003E(\u003C\u002Fspan\u003Eunsigned long\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E[\u003C\u002Fspan\u003Enode]\n\u003Cspan class=\"go\"\u003E 6: 0x7a785d92456 v8::internal::compiler::Schedule::PlanNode(v8::internal::compiler::BasicBlock*, v8::internal::compiler::Node*) [node]\n 7: 0x7a785d9b920 v8::internal::compiler::ScheduleLateNodeVisitor::ScheduleNode(v8::internal::compiler::BasicBlock*, v8::internal::compiler::Node*) [node]\n 8: 0x7a785d9ac42 v8::internal::compiler::ScheduleLateNodeVisitor::ProcessQueue(v8::internal::compiler::Node*) [node]\n 9: 0x7a785d9596b v8::internal::compiler::Scheduler::ScheduleLate() [node]\n\u003C\u002Fspan\u003E\u003Cspan class=\"gp\"\u003E10: 0x7a785d945b7 v8::internal::compiler::Scheduler::ComputeSchedule(v8::internal::Zone*, v8::internal::compiler::Graph*, v8::base::Flags&lt;v8::internal::compiler::Scheduler::Flag, int&gt;\u003C\u002Fspan\u003E, v8::internal::TickCounter\u003Cspan class=\"k\"\u003E*\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E[\u003C\u002Fspan\u003Enode]\n\u003Cspan class=\"gp\"\u003E11: 0x7a785caaf2a void v8::internal::compiler::PipelineImpl::Run&lt;v8::internal::compiler::ComputeSchedulePhase&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"o\"\u003E()\u003C\u002Fspan\u003E \u003Cspan class=\"o\"\u003E[\u003C\u002Fspan\u003Enode]\n\u003Cspan class=\"go\"\u003E12: 0x7a785ca418c v8::internal::compiler::PipelineImpl::ComputeScheduledGraph() [node]\n13: 0x7a785ca1f32 v8::internal::compiler::PipelineImpl::OptimizeGraph(v8::internal::compiler::Linkage*) [node]\n14: 0x7a785ca195f v8::internal::compiler::PipelineCompilationJob::ExecuteJobImpl() [node]\n15: 0x7a784ff6121 v8::internal::OptimizedCompilationJob::ExecuteJob() [node]\n16: 0x7a7850208ee v8::internal::OptimizingCompileDispatcher::CompileNext(v8::internal::OptimizedCompilationJob*) [node]\n17: 0x7a785022201 v8::internal::OptimizingCompileDispatcher::CompileTask::RunInternal() [node]\n18: 0x7a784e440c0 node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int) [node]\n19: 0x7a9d64a5f51 pthread_create [\u002Fusr\u002Flib\u002Flibpthread.so.26.1]\ngmake: *** [Makefile:668: public\u002Fjs\u002Findex.js] Illegal instruction (core dumped)\n*** Error 2 in \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea (BSDmakefile:46 'FRC': \"gmake\" \"--no-print-directory\" generate build )\n\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"highlight__panel js-actions-panel\"\u003E\n\u003Cdiv class=\"highlight__panel-action js-fullscreen-code-action\"\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"\u003E\u003Ctitle\u003EEnter fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"20px\" height=\"20px\" viewbox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"\u003E\u003Ctitle\u003EExit fullscreen mode\u003C\u002Ftitle\u003E\n    \u003Cpath d=\"M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z\"\u003E\u003C\u002Fpath\u003E\n\u003C\u002Fsvg\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\n\n";e.body_markdown="## Trouble\n\nI built my [Gitea](https:\u002F\u002Fgitea.io\u002F0) server on [OpenBSD](https:\u002F\u002Fwww.openbsd.org\u002F) and have managed it for years.\n\n{% post nabbisen\u002Fgitea-on-openbsd-from-source-code-update-21c0 %}\n\nLast month and this month, I was struggling to update it from 1.13.7 to 1.14.[0-2]. I met the fatal error about memory allocation below and failed every time.\n\n## Solution\n\nIt didn't seem to always happen on OpenBSD servers, because that in OpenBSD [Ports](https:\u002F\u002Fwww.openbsd.org\u002Ffaq\u002Fports\u002Fports.html) system has been updated to 1.14. At last, I found it was because the memory size of my server was too small and seemed not to get along with Node.js and its V8 module.\n\nI modified the updating command to add [V8](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fv8.html)'s [`max_old_space_size`](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fcli.html#cli_max_old_space_size_size_in_megabytes) option of Node.js so as to limit memory consumption.\n\n```diff\n- env TAGS=\"bindata\" make -f BSDmakefile\n+ env TAGS=\"bindata\" NODE_OPTIONS=\"--max_old_space_size=1024\" make -f BSDmakefile\n```\n\nIt was successful🙂\n\nBesides, the official documentation [says](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fcli.html#cli_max_old_space_size_size_in_megabytes):\n\n\u003E On a machine with 2GB of memory, consider setting this to 1536 (1.5GB) to leave some memory for other uses and avoid swapping.\n\n## Description\n\nHere are logs I got when I ran the original command and failed.\n\n### 1st trial\n\nIt said \"std::bad_alloc\" after `npx webpack` but I didn't know the detail.\n\n```console\n$ env TAGS=\"bindata\" make -f BSDmakefile generate build\nRunning go generate...\ngenerating bindata for options\ngenerating bindata for public\ngenerating bindata for templates\nnpm install --no-save\n\n\u003E core-js@3.8.1 postinstall \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea\u002Fnode_modules\u002Fcore-js\n\u003E node -e \"try{require('.\u002Fpostinstall')}catch(e){}\"\n\nThank you for using core-js ( https:\u002F\u002Fgithub.com\u002Fzloirock\u002Fcore-js ) for polyfilling JavaScript standard library!\n\nThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: \n\u003E https:\u002F\u002Fopencollective.com\u002Fcore-js \n\u003E https:\u002F\u002Fwww.patreon.com\u002Fzloirock \n\nAlso, the author of core-js ( https:\u002F\u002Fgithub.com\u002Fzloirock ) is looking for a good job -)\n\nadded 224 packages from 1007 contributors, removed 988 packages, updated 282 packages and moved 6 packages in 105.905s\nrm -rf public\u002Fjs public\u002Fcss public\u002Ffonts public\u002Fimg\u002Fwebpack public\u002Fserviceworker.js\nnpx webpack\nterminating with uncaught exception of type std::bad_alloc: std::bad_alloc\ngmake: *** [Makefile:668: public\u002Fjs\u002Findex.js] Abort trap (core dumped)\n*** Error 2 in \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea (BSDmakefile:46 'FRC': \"gmake\" \"--no-print-directory\" generate build )\n```\n\n### 2nd trial\n\nI ran the same command. Curiously, log has been changed without my manual change in OS, F\u002FW or files permission.\nIt said clearly \"FATAL ERROR: NewSpace::Rebalance Allocation failed - JavaScript heap out of memory\".\n\n```console\n$ env TAGS=\"bindata\" make -f BSDmakefile generate build\nRunning go generate...\nbindata for options already up-to-date\ngenerating bindata for public\nbindata for templates already up-to-date\nrm -rf public\u002Fjs public\u002Fcss public\u002Ffonts public\u002Fimg\u002Fwebpack public\u002Fserviceworker.js\nnpx webpack\n\n\u003C--- Last few GCs ---\u003E\n\n[90805:0x7a9cc648000]    16873 ms: Scavenge 253.8 (270.9) -\u003E 245.3 (274.6) MB, 100.5 \u002F 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure \n[90805:0x7a9cc648000]    17997 ms: Scavenge 258.2 (275.1) -\u003E 249.5 (279.1) MB, 841.7 \u002F 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure \n[90805:0x7a9cc648000]    18190 ms: Scavenge 262.5 (279.6) -\u003E 253.8 (283.4) MB, 17.2 \u002F 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure \n\n\n\u003C--- JS stacktrace ---\u003E\nCannot get stack trace in GC.\nFATAL ERROR: NewSpace::Rebalance Allocation failed - JavaScript heap out of memory\n\nWriting Node.js report to file: report.20210510.101055.90805.0.001.json\n\n#\n# Fatal error in , line 0\n# Fatal process out of memory: Zone\n#\n#\n#\n#FailureMessage Object: 0x7aa023e61a0\n 1: 0x7a784e46689 node::MultiIsolatePlatform::CancelPendingDelayedTasks(v8::Isolate*) [node]\n 2: 0x7a785bbcb11 V8_Fatal(char const*, ...) [node]\n 3: 0x7a784f2c9d9 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]\n 4: 0x7a78559fb30 v8::internal::Zone::ReleaseMemory() [node]\n 5: 0x7a785d941e5 std::__1::vector\u003Cv8::internal::compiler::BasicBlock*, v8::internal::ZoneAllocator\u003Cv8::internal::compiler::BasicBlock*\u003E \u003E::__append(unsigned long) [node]\n 6: 0x7a785d92456 v8::internal::compiler::Schedule::PlanNode(v8::internal::compiler::BasicBlock*, v8::internal::compiler::Node*) [node]\n 7: 0x7a785d9b920 v8::internal::compiler::ScheduleLateNodeVisitor::ScheduleNode(v8::internal::compiler::BasicBlock*, v8::internal::compiler::Node*) [node]\n 8: 0x7a785d9ac42 v8::internal::compiler::ScheduleLateNodeVisitor::ProcessQueue(v8::internal::compiler::Node*) [node]\n 9: 0x7a785d9596b v8::internal::compiler::Scheduler::ScheduleLate() [node]\n10: 0x7a785d945b7 v8::internal::compiler::Scheduler::ComputeSchedule(v8::internal::Zone*, v8::internal::compiler::Graph*, v8::base::Flags\u003Cv8::internal::compiler::Scheduler::Flag, int\u003E, v8::internal::TickCounter*) [node]\n11: 0x7a785caaf2a void v8::internal::compiler::PipelineImpl::Run\u003Cv8::internal::compiler::ComputeSchedulePhase\u003E() [node]\n12: 0x7a785ca418c v8::internal::compiler::PipelineImpl::ComputeScheduledGraph() [node]\n13: 0x7a785ca1f32 v8::internal::compiler::PipelineImpl::OptimizeGraph(v8::internal::compiler::Linkage*) [node]\n14: 0x7a785ca195f v8::internal::compiler::PipelineCompilationJob::ExecuteJobImpl() [node]\n15: 0x7a784ff6121 v8::internal::OptimizedCompilationJob::ExecuteJob() [node]\n16: 0x7a7850208ee v8::internal::OptimizingCompileDispatcher::CompileNext(v8::internal::OptimizedCompilationJob*) [node]\n17: 0x7a785022201 v8::internal::OptimizingCompileDispatcher::CompileTask::RunInternal() [node]\n18: 0x7a784e440c0 node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int) [node]\n19: 0x7a9d64a5f51 pthread_create [\u002Fusr\u002Flib\u002Flibpthread.so.26.1]\ngmake: *** [Makefile:668: public\u002Fjs\u002Findex.js] Illegal instruction (core dumped)\n*** Error 2 in \u002Fvar\u002Fwww\u002Fsites\u002Fscqr.net\u002Fgitea (BSDmakefile:46 'FRC': \"gmake\" \"--no-print-directory\" generate build )\n```";e.user={name:"Heddi Nabbisen",username:d,twitter_username:d,github_username:d,website_url:"https:\u002F\u002Fwww.scqr.net\u002F",profile_image:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--nPL1JIPv--\u002Fc_fill,f_auto,fl_progressive,h_640,q_auto,w_640\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F87972\u002Fa3543f5f-7054-4b0b-a2cd-7dea7ec97a2a.jpeg",profile_image_90:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--p1iewG1e--\u002Fc_fill,f_auto,fl_progressive,h_90,q_auto,w_90\u002Fhttps:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fuploads\u002Fuser\u002Fprofile_image\u002F87972\u002Fa3543f5f-7054-4b0b-a2cd-7dea7ec97a2a.jpeg"};return {data:[{}],fetch:{"data-v-25febe66:0":{article:e}},mutations:[["SET_CURRENT_ARTICLE",e]]}}(4,null,"2021-05-10T07:13:33Z","nabbisen",{},"https:\u002F\u002Fdev.to\u002Fnabbisen\u002Ffix-failure-of-building-gitea-on-openbsd-because-of-bad-memory-allocation-in-node-js-kb6")));