/* eslint-disable max-lines */
// @see https://tc39.es/ecma262/multipage/text-processing.html#sec-runtime-semantics-unicodematchproperty-p
// @see https://www.unicode.org/reports/tr18/
// @see https://www.unicode.org/reports/tr44/
// @see https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt

const {freeze: f, assign: a} = Object;


// noinspection JSPrimitiveTypeWrapperUsage
const s = (

    (value, values) => f(a(
        new String(value), // eslint-disable-line no-new-wrappers
        values,
    ))

);


const UNICODE = f({

    binary: f({
        ascii:    'ASCII',
        ahex:     'ASCII_Hex_Digit',
        alpha:    'Alphabetic',
        any:      'Any',
        assigned: 'Assigned',
        bidic:    'Bidi_Control',
        bidim:    'Bidi_Mirrored',
        ci:       'Case_Ignorable',
        cased:    'Cased',
        cwcf:     'Changes_When_Casefolded',
        cwcm:     'Changes_When_Casemapped',
        cwl:      'Changes_When_Lowercased',
        cwkcf:    'Changes_When_NFKC_Casefolded',
        cwt:      'Changes_When_Titlecased',
        cwu:      'Changes_When_Uppercased',
        dash:     'Dash',
        di:       'Default_Ignorable_Code_Point',
        dep:      'Deprecated',
        dia:      'Diacritic',
        emoji:    'Emoji',
        ecomp:    'Emoji_Component',
        emod:     'Emoji_Modifier',
        ebase:    'Emoji_Modifier_Base',
        epres:    'Emoji_Presentation',
        extpic:   'Extended_Pictographic',
        ext:      'Extender',
        grbase:   'Grapheme_Base',
        grext:    'Grapheme_Extend',
        hex:      'Hex_Digit',
        idsb:     'IDS_Binary_Operator',
        idst:     'IDS_Trinary_Operator',
        idc:      'ID_Continue',
        ids:      'ID_Start',
        ideo:     'Ideographic',
        joinc:    'Join_Control',
        loe:      'Logical_Order_Exception',
        lower:    'Lowercase',
        math:     'Math',
        nchar:    'Noncharacter_Code_Point',
        patsyn:   'Pattern_Syntax',
        patws:    'Pattern_White_Space',
        qmark:    'Quotation_Mark',
        radical:  'Radical',
        ri:       'Regional_Indicator',
        sterm:    'Sentence_Terminal',
        sd:       'Soft_Dotted',
        term:     'Terminal_Punctuation',
        uideo:    'Unified_Ideograph',
        upper:    'Uppercase',
        vs:       'Variation_Selector',
        space:    'White_Space',
        xidc:     'XID_Continue',
        xids:     'XID_Start',
    }),

    general: s('Gc', {

        letter: s('L', {
            cased:     'LC',
            lowercase: 'Ll',
            modifier:  'Lm',
            other:     'Lo',
            titlecase: 'Lt',
            uppercase: 'Lu',
        }),

        mark: s('M', {
            enclosing: 'Me',
            nospacing: 'Mn',
            spacing:   'Mc',
        }),

        number: s('N', {
            decimal: 'Nd',
            letter:  'Nl',
            other:   'No',
        }),

        other: s('C', {
            control:    'Cc',
            format:     'Cf',
            private:    'Co',
            surrogate:  'Cs',
            unassigned: 'Cn',
        }),

        punctuation: s('P', {
            connector: 'Pc',
            close:     'Pe',
            dash:      'Pd',
            final:     'Pf',
            initial:   'Pi',
            open:      'Ps',
            other:     'Po',
        }),

        separator: s('Z', {
            line:      'Zl',
            paragraph: 'Zp',
            space:     'Zs',
        }),

        symbol: s('S', {
            currency: 'Sc',
            math:     'Sm',
            modifier: 'Sk',
            other:    'So',
        }),
    }),

    prop: f({
        extensions: 'scx',
        general:    'gc',
        script:     'sc',
    }),

    script: f({
        adlm: 'Adlam',
        hluw: 'Anatolian_Hieroglyphs',
        ahom: 'Ahom',
        arab: 'Arabic',
        armn: 'Armenian',
        avst: 'Avestan',
        bali: 'Balinese',
        bamu: 'Bamum',
        bass: 'Bassa_Vah',
        batk: 'Batak',
        beng: 'Bengali',
        bhks: 'Bhaiksuki',
        bopo: 'Bopomofo',
        brah: 'Brahmi',
        brai: 'Braille',
        bugi: 'Buginese',
        buhd: 'Buhid',
        cans: 'Canadian_Aboriginal',
        cari: 'Carian',
        aghb: 'Caucasian_Albanian',
        cakm: 'Chakma',
        cham: 'Cham',
        chrs: 'Chorasmian',
        cher: 'Cherokee',
        zyyy: 'Common',
        copt: 'Coptic',
        xsux: 'Cuneiform',
        cprt: 'Cypriot',
        cyrl: 'Cyrillic',
        dsrt: 'Deseret',
        deva: 'Devanagari',
        diak: 'Dives_Akuru',
        dogr: 'Dogra',
        dupl: 'Duployan',
        egyp: 'Egyptian_Hieroglyphs',
        elba: 'Elbasan',
        elym: 'Elymaic',
        ethi: 'Ethiopic',
        geor: 'Georgian',
        glag: 'Glagolitic',
        goth: 'Gothic',
        gran: 'Grantha',
        grek: 'Greek',
        gujr: 'Gujarati',
        gong: 'Gunjala_Gondi',
        guru: 'Gurmukhi',
        hani: 'Han',
        hang: 'Hangul',
        rohg: 'Hanifi_Rohingya',
        hano: 'Hanunoo',
        hatr: 'Hatran',
        hebr: 'Hebrew',
        hira: 'Hiragana',
        armi: 'Imperial_Aramaic',
        zinh: 'Inherited',
        phli: 'Inscriptional_Pahlavi',
        prti: 'Inscriptional_Parthian',
        java: 'Javanese',
        kthi: 'Kaithi',
        knda: 'Kannada',
        kana: 'Katakana',
        kali: 'Kayah_Li',
        khar: 'Kharoshthi',
        kits: 'Khitan_Small_Script',
        khmr: 'Khmer',
        khoj: 'Khojki',
        sind: 'Khudawadi',
        laoo: 'Lao',
        latn: 'Latin',
        lepc: 'Lepcha',
        limb: 'Limbu',
        lina: 'Linear_A',
        linb: 'Linear_B',
        lisu: 'Lisu',
        lyci: 'Lycian',
        lydi: 'Lydian',
        mahj: 'Mahajani',
        maka: 'Makasar',
        mlym: 'Malayalam',
        mand: 'Mandaic',
        mani: 'Manichaean',
        marc: 'Marchen',
        medf: 'Medefaidrin',
        gonm: 'Masaram_Gondi',
        mtei: 'Meetei_Mayek',
        mend: 'Mende_Kikakui',
        merc: 'Meroitic_Cursive',
        mero: 'Meroitic_Hieroglyphs',
        miao: 'Miao',
        modi: 'Modi',
        mong: 'Mongolian',
        mroo: 'Mro',
        mult: 'Multani',
        mymr: 'Myanmar',
        nbat: 'Nabataean',
        nand: 'Nandinagari',
        talu: 'New_Tai_Lue',
        newa: 'Newa',
        nkoo: 'Nko',
        nshu: 'Nushu',
        hmnp: 'Nyiakeng_Puachue_Hmong',
        ogam: 'Ogham',
        olck: 'Ol_Chiki',
        hung: 'Old_Hungarian',
        ital: 'Old_Italic',
        narb: 'Old_North_Arabian',
        perm: 'Old_Permic',
        xpeo: 'Old_Persian',
        sogo: 'Old_Sogdian',
        sarb: 'Old_South_Arabian',
        orkh: 'Old_Turkic',
        orya: 'Oriya',
        osge: 'Osage',
        osma: 'Osmanya',
        hmng: 'Pahawh_Hmong',
        palm: 'Palmyrene',
        pauc: 'Pau_Cin_Hau',
        phag: 'Phags_Pa',
        phnx: 'Phoenician',
        phlp: 'Psalter_Pahlavi',
        rjng: 'Rejang',
        runr: 'Runic',
        samr: 'Samaritan',
        saur: 'Saurashtra',
        shrd: 'Sharada',
        shaw: 'Shavian',
        sidd: 'Siddham',
        sgnw: 'SignWriting',
        sinh: 'Sinhala',
        sogd: 'Sogdian',
        sora: 'Sora_Sompeng',
        soyo: 'Soyombo',
        sund: 'Sundanese',
        sylo: 'Syloti_Nagri',
        syrc: 'Syriac',
        tglg: 'Tagalog',
        tagb: 'Tagbanwa',
        tale: 'Tai_Le',
        lana: 'Tai_Tham',
        tavt: 'Tai_Viet',
        takr: 'Takri',
        taml: 'Tamil',
        tang: 'Tangut',
        telu: 'Telugu',
        thaa: 'Thaana',
        thai: 'Thai',
        tibt: 'Tibetan',
        tfng: 'Tifinagh',
        tirh: 'Tirhuta',
        ugar: 'Ugaritic',
        zzzz: 'Unknown',
        vaii: 'Vai',
        wcho: 'Wancho',
        wara: 'Warang_Citi',
        yezi: 'Yezidi',
        yiii: 'Yi',
        zanb: 'Zanabazar_Square',
    }),
});


export default UNICODE;
