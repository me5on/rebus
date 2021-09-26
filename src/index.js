/* eslint-disable import/max-dependencies */


import bgn from './assert/bgn.fn.js';
import end from './assert/end.fn.js';
import nla from './assert/nla.fn.js';
import nlb from './assert/nlb.fn.js';
import pla from './assert/pla.fn.js';
import plb from './assert/plb.fn.js';
import ctl from './class/ctl.fn.js';
import hex from './class/hex.fn.js';
import nup from './class/nup.fn.js';
import nuv from './class/nuv.fn.js';
import pup from './class/pup.fn.js';
import puv from './class/puv.fn.js';
import uni from './class/uni.fn.js';
import utf from './class/utf.fn.js';
import ASSERT from './etc/assert.enum.js';
import CLASS from './etc/class.enum.js';
import ESC from './etc/escape.const.js';
import FLAG from './etc/flag.enum.js';
import UNICODE from './etc/unicode.enum.js';
import cap from './group/cap.fn.js';
import nocap from './group/nocap.fn.js';
import nc from './range/nc.fn.js';
import or from './range/or.fn.js';
import pc from './range/pc.fn.js';
import iref from './reference/iref.fn.js';
import nref from './reference/nref.fn.js';
import ref from './reference/ref.fn.js';
import rebus from './util/rebus.fn.js';


Object.assign(
    rebus,
    {

        ESC, esc: ESC, escape: ESC,

        ASSERT, A: ASSERT, assert: ASSERT,
        CLASS, C:  CLASS, class: CLASS,
        FLAG, F:   FLAG, flag: FLAG,

        UNICODE, U: UNICODE, unicode: UNICODE,

        ctl, hex, utf, uni,
        pup, nup, puv, nuv,
        bgn, end, nla, nlb, pla, plb,
        cap, nocap,
        nc, pc, or,
        ref, iref, nref,

    },
);


export default rebus;
