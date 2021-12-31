import * as i0 from '@angular/core';
import { Injectable, Pipe, EventEmitter, Component, ChangeDetectionStrategy, Optional, Self, Input, ViewChild, HostBinding, Output, NgModule } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import * as i3 from '@angular/forms';
import { NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { parsePhoneNumber, getExampleNumber, parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import * as i2 from '@angular/cdk/a11y';
import * as i4 from '@angular/material/core';
import { mixinErrorState } from '@angular/material/core';
import * as i6 from '@angular/material/menu';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i7 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i8 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i9 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

class NgxMatIntlTelInputService {
    constructor() { }
}
NgxMatIntlTelInputService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxMatIntlTelInputService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/* eslint-disable */
class CountryCode {
    constructor() {
        this.allCountries = [
            ['Afghanistan (‫افغانستان‬‎)', 'af', '93'],
            ['Albania (Shqipëri)', 'al', '355'],
            ['Algeria (‫الجزائر‬‎)', 'dz', '213'],
            ['American Samoa', 'as', '1684'],
            ['Andorra', 'ad', '376'],
            ['Angola', 'ao', '244'],
            ['Anguilla', 'ai', '1264'],
            ['Antigua and Barbuda', 'ag', '1268'],
            ['Argentina', 'ar', '54'],
            ['Armenia (Հայաստան)', 'am', '374'],
            ['Aruba', 'aw', '297'],
            ['Australia', 'au', '61', 0],
            ['Austria (Österreich)', 'at', '43'],
            ['Azerbaijan (Azərbaycan)', 'az', '994'],
            ['Bahamas', 'bs', '1242'],
            ['Bahrain (‫البحرين‬‎)', 'bh', '973'],
            ['Bangladesh (বাংলাদেশ)', 'bd', '880'],
            ['Barbados', 'bb', '1246'],
            ['Belarus (Беларусь)', 'by', '375'],
            ['Belgium (België)', 'be', '32'],
            ['Belize', 'bz', '501'],
            ['Benin (Bénin)', 'bj', '229'],
            ['Bermuda', 'bm', '1441'],
            ['Bhutan (འབྲུག)', 'bt', '975'],
            ['Bolivia', 'bo', '591'],
            ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'],
            ['Botswana', 'bw', '267'],
            ['Brazil (Brasil)', 'br', '55'],
            ['British Indian Ocean Territory', 'io', '246'],
            ['British Virgin Islands', 'vg', '1284'],
            ['Brunei', 'bn', '673'],
            ['Bulgaria (България)', 'bg', '359'],
            ['Burkina Faso', 'bf', '226'],
            ['Burundi (Uburundi)', 'bi', '257'],
            ['Cambodia (កម្ពុជា)', 'kh', '855'],
            ['Cameroon (Cameroun)', 'cm', '237'],
            ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437',
                    '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742',
                    '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']],
            ['Cape Verde (Kabu Verdi)', 'cv', '238'],
            ['Caribbean Netherlands', 'bq', '599', 1],
            ['Cayman Islands', 'ky', '1345'],
            ['Central African Republic (République centrafricaine)', 'cf', '236'],
            ['Chad (Tchad)', 'td', '235'],
            ['Chile', 'cl', '56'],
            ['China (中国)', 'cn', '86'],
            ['Christmas Island', 'cx', '61', 2],
            ['Cocos (Keeling) Islands', 'cc', '61', 1],
            ['Colombia', 'co', '57'],
            ['Comoros (‫جزر القمر‬‎)', 'km', '269'],
            ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'],
            ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'],
            ['Cook Islands', 'ck', '682'],
            ['Costa Rica', 'cr', '506'],
            ['Côte d’Ivoire', 'ci', '225'],
            ['Croatia (Hrvatska)', 'hr', '385'],
            ['Cuba', 'cu', '53'],
            ['Curaçao', 'cw', '599', 0],
            ['Cyprus (Κύπρος)', 'cy', '357'],
            ['Czech Republic (Česká republika)', 'cz', '420'],
            ['Denmark (Danmark)', 'dk', '45'],
            ['Djibouti', 'dj', '253'],
            ['Dominica', 'dm', '1767'],
            ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'],
            ['Egypt (‫مصر‬‎)', 'eg', '20'],
            ['El Salvador', 'sv', '503'],
            ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'],
            ['Eritrea', 'er', '291'],
            ['Estonia (Eesti)', 'ee', '372'],
            ['Ethiopia', 'et', '251'],
            ['Falkland Islands (Islas Malvinas)', 'fk', '500'],
            ['Faroe Islands (Føroyar)', 'fo', '298'],
            ['Fiji', 'fj', '679'],
            ['Finland (Suomi)', 'fi', '358', 0],
            ['France', 'fr', '33'],
            ['French Guiana (Guyane française)', 'gf', '594'],
            ['French Polynesia (Polynésie française)', 'pf', '689'],
            ['Gabon', 'ga', '241'],
            ['Gambia', 'gm', '220'],
            ['Georgia (საქართველო)', 'ge', '995'],
            ['Germany (Deutschland)', 'de', '49'],
            ['Ghana (Gaana)', 'gh', '233'],
            ['Gibraltar', 'gi', '350'],
            ['Greece (Ελλάδα)', 'gr', '30'],
            ['Greenland (Kalaallit Nunaat)', 'gl', '299'],
            ['Grenada', 'gd', '1473'],
            ['Guadeloupe', 'gp', '590', 0],
            ['Guam', 'gu', '1671'],
            ['Guatemala', 'gt', '502'],
            ['Guernsey', 'gg', '44', 1],
            ['Guinea (Guinée)', 'gn', '224'],
            ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'],
            ['Guyana', 'gy', '592'],
            ['Haiti', 'ht', '509'],
            ['Honduras', 'hn', '504'],
            ['Hong Kong (香港)', 'hk', '852'],
            ['Hungary (Magyarország)', 'hu', '36'],
            ['Iceland (Ísland)', 'is', '354'],
            ['India (भारत)', 'in', '91'],
            ['Indonesia', 'id', '62'],
            ['Iran (‫ایران‬‎)', 'ir', '98'],
            ['Iraq (‫العراق‬‎)', 'iq', '964'],
            ['Ireland', 'ie', '353'],
            ['Isle of Man', 'im', '44', 2],
            ['Israel (‫ישראל‬‎)', 'il', '972'],
            ['Italy (Italia)', 'it', '39', 0],
            ['Jamaica', 'jm', '1', 4, ['876', '658']], ['Japan (日本)', 'jp', '81'],
            ['Jersey', 'je', '44', 3],
            ['Jordan (‫الأردن‬‎)', 'jo', '962'],
            ['Kazakhstan (Казахстан)', 'kz', '7', 1],
            ['Kenya', 'ke', '254'],
            ['Kiribati', 'ki', '686'],
            ['Kosovo', 'xk', '383'],
            ['Kuwait (‫الكويت‬‎)', 'kw', '965'],
            ['Kyrgyzstan (Кыргызстан)', 'kg', '996'],
            ['Laos (ລາວ)', 'la', '856'],
            ['Latvia (Latvija)', 'lv', '371'],
            ['Lebanon (‫لبنان‬‎)', 'lb', '961'],
            ['Lesotho', 'ls', '266'],
            ['Liberia', 'lr', '231'],
            ['Libya (‫ليبيا‬‎)', 'ly', '218'],
            ['Liechtenstein', 'li', '423'],
            ['Lithuania (Lietuva)', 'lt', '370'],
            ['Luxembourg', 'lu', '352'],
            ['Macau (澳門)', 'mo', '853'],
            ['Macedonia (FYROM) (Македонија)', 'mk', '389'],
            ['Madagascar (Madagasikara)', 'mg', '261'],
            ['Malawi', 'mw', '265'],
            ['Malaysia', 'my', '60'],
            ['Maldives', 'mv', '960'],
            ['Mali', 'ml', '223'],
            ['Malta', 'mt', '356'],
            ['Marshall Islands', 'mh', '692'],
            ['Martinique', 'mq', '596'],
            ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'],
            ['Mauritius (Moris)', 'mu', '230'],
            ['Mayotte', 'yt', '262', 1],
            ['Mexico (México)', 'mx', '52'],
            ['Micronesia', 'fm', '691'],
            ['Moldova (Republica Moldova)', 'md', '373'],
            ['Monaco', 'mc', '377'],
            ['Mongolia (Монгол)', 'mn', '976'],
            ['Montenegro (Crna Gora)', 'me', '382'],
            ['Montserrat', 'ms', '1664'],
            ['Morocco (‫المغرب‬‎)', 'ma', '212', 0],
            ['Mozambique (Moçambique)', 'mz', '258'],
            ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'],
            ['Namibia (Namibië)', 'na', '264'],
            ['Nauru', 'nr', '674'],
            ['Nepal (नेपाल)', 'np', '977'],
            ['Netherlands (Nederland)', 'nl', '31'],
            ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'],
            ['New Zealand', 'nz', '64'],
            ['Nicaragua', 'ni', '505'],
            ['Niger (Nijar)', 'ne', '227'],
            ['Nigeria', 'ng', '234'],
            ['Niue', 'nu', '683'],
            ['Norfolk Island', 'nf', '672'],
            ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'],
            ['Northern Mariana Islands', 'mp', '1670'],
            ['Norway (Norge)', 'no', '47', 0],
            ['Oman (‫عُمان‬‎)', 'om', '968'],
            ['Pakistan (‫پاکستان‬‎)', 'pk', '92'],
            ['Palau', 'pw', '680'],
            ['Palestine (‫فلسطين‬‎)', 'ps', '970'],
            ['Panama (Panamá)', 'pa', '507'],
            ['Papua New Guinea', 'pg', '675'],
            ['Paraguay', 'py', '595'],
            ['Peru (Perú)', 'pe', '51'],
            ['Philippines', 'ph', '63'],
            ['Poland (Polska)', 'pl', '48'],
            ['Portugal', 'pt', '351'],
            ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'],
            ['Réunion (La Réunion)', 're', '262', 0],
            ['Romania (România)', 'ro', '40'],
            ['Russia (Россия)', 'ru', '7', 0],
            ['Rwanda', 'rw', '250'],
            ['Saint Barthélemy', 'bl', '590', 1],
            ['Saint Helena', 'sh', '290'],
            ['Saint Kitts and Nevis', 'kn', '1869'],
            ['Saint Lucia', 'lc', '1758'],
            ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2],
            ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'],
            ['Saint Vincent and the Grenadines', 'vc', '1784'],
            ['Samoa', 'ws', '685'],
            ['San Marino', 'sm', '378'],
            ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'],
            ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'],
            ['Senegal (Sénégal)', 'sn', '221'],
            ['Serbia (Србија)', 'rs', '381'],
            ['Seychelles', 'sc', '248'],
            ['Sierra Leone', 'sl', '232'],
            ['Singapore', 'sg', '65'],
            ['Sint Maarten', 'sx', '1721'],
            ['Slovakia (Slovensko)', 'sk', '421'],
            ['Slovenia (Slovenija)', 'si', '386'],
            ['Solomon Islands', 'sb', '677'],
            ['Somalia (Soomaaliya)', 'so', '252'],
            ['South Africa', 'za', '27'],
            ['South Korea (대한민국)', 'kr', '82'],
            ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'],
            ['Spain (España)', 'es', '34'],
            ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'],
            ['Sudan (‫السودان‬‎)', 'sd', '249'],
            ['Suriname', 'sr', '597'],
            ['Svalbard and Jan Mayen', 'sj', '47', 1],
            ['Swaziland', 'sz', '268'],
            ['Sweden (Sverige)', 'se', '46'],
            ['Switzerland (Schweiz)', 'ch', '41'],
            ['Syria (‫سوريا‬‎)', 'sy', '963'],
            ['Taiwan (台灣)', 'tw', '886'],
            ['Tajikistan', 'tj', '992'],
            ['Tanzania', 'tz', '255'],
            ['Thailand (ไทย)', 'th', '66'],
            ['Timor-Leste', 'tl', '670'],
            ['Togo', 'tg', '228'],
            ['Tokelau', 'tk', '690'],
            ['Tonga', 'to', '676'],
            ['Trinidad and Tobago', 'tt', '1868'],
            ['Tunisia (‫تونس‬‎)', 'tn', '216'],
            ['Turkey (Türkiye)', 'tr', '90'],
            ['Turkmenistan', 'tm', '993'],
            ['Turks and Caicos Islands', 'tc', '1649'],
            ['Tuvalu', 'tv', '688'],
            ['U.S. Virgin Islands', 'vi', '1340'],
            ['Uganda', 'ug', '256'],
            ['Ukraine (Україна)', 'ua', '380'],
            ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'],
            ['United Kingdom', 'gb', '44', 0],
            ['United States', 'us', '1', 0],
            ['Uruguay', 'uy', '598'],
            ['Uzbekistan (Oʻzbekiston)', 'uz', '998'],
            ['Vanuatu', 'vu', '678'],
            ['Vatican City (Città del Vaticano)', 'va', '39', 1],
            ['Venezuela', 've', '58'],
            ['Vietnam (Việt Nam)', 'vn', '84'],
            ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'],
            ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1],
            ['Yemen (‫اليمن‬‎)', 'ye', '967'],
            ['Zambia', 'zm', '260'],
            ['Zimbabwe', 'zw', '263'],
            ['Åland Islands', 'ax', '358', 1]
        ];
    }
}
CountryCode.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CountryCode, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CountryCode.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CountryCode });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CountryCode, decorators: [{
            type: Injectable
        }] });
const Examples = {
    '001': '001',
    AC: '40123',
    AD: '312345',
    AE: '501234567',
    AF: '701234567',
    AG: '2684641234',
    AI: '2642351234',
    AL: '662123456',
    AM: '77123456',
    AO: '923123456',
    AR: '91123456789',
    AS: '6847331234',
    AT: '664123456',
    AU: '412345678',
    AW: '5601234',
    AX: '412345678',
    AZ: '401234567',
    BA: '61123456',
    BB: '2462501234',
    BD: '1812345678',
    BE: '470123456',
    BF: '70123456',
    BG: '48123456',
    BH: '36001234',
    BI: '79561234',
    BJ: '90011234',
    BL: '690001234',
    BM: '4413701234',
    BN: '7123456',
    BO: '71234567',
    BQ: '3181234',
    BR: '11961234567',
    BS: '2423591234',
    BT: '17123456',
    BW: '71123456',
    BY: '294911911',
    BZ: '6221234',
    CA: '5062345678',
    CC: '412345678',
    CD: '991234567',
    CF: '70012345',
    CG: '061234567',
    CH: '781234567',
    CI: '01234567',
    CK: '71234',
    CL: '221234567',
    CM: '671234567',
    CN: '13123456789',
    CO: '3211234567',
    CR: '83123456',
    CU: '51234567',
    CV: '9911234',
    CW: '95181234',
    CX: '412345678',
    CY: '96123456',
    CZ: '601123456',
    DE: '15123456789',
    DJ: '77831001',
    DK: '32123456',
    DM: '7672251234',
    DO: '8092345678',
    DZ: '551234567',
    EC: '991234567',
    EE: '51234567',
    EG: '1001234567',
    EH: '650123456',
    ER: '7123456',
    ES: '612345678',
    ET: '911234567',
    FI: '412345678',
    FJ: '7012345',
    FK: '51234',
    FM: '3501234',
    FO: '211234',
    FR: '612345678',
    GA: '06031234',
    GB: '7400123456',
    GD: '4734031234',
    GE: '555123456',
    GF: '694201234',
    GG: '7781123456',
    GH: '231234567',
    GI: '57123456',
    GL: '221234',
    GM: '3012345',
    GN: '601123456',
    GP: '690001234',
    GQ: '222123456',
    GR: '6912345678',
    GT: '51234567',
    GU: '6713001234',
    GW: '955012345',
    GY: '6091234',
    HK: '51234567',
    HN: '91234567',
    HR: '921234567',
    HT: '34101234',
    HU: '201234567',
    ID: '812345678',
    IE: '850123456',
    IL: '502345678',
    IM: '7924123456',
    IN: '8123456789',
    IO: '3801234',
    IQ: '7912345678',
    IR: '9123456789',
    IS: '6111234',
    IT: '3123456789',
    JE: '7797712345',
    JM: '8762101234',
    JO: '790123456',
    JP: '9012345678',
    KE: '712123456',
    KG: '700123456',
    KH: '91234567',
    KI: '72001234',
    KM: '3212345',
    KN: '8697652917',
    KP: '1921234567',
    KR: '1000000000',
    KW: '50012345',
    KY: '3453231234',
    KZ: '7710009998',
    LA: '2023123456',
    LB: '71123456',
    LC: '7582845678',
    LI: '660234567',
    LK: '712345678',
    LR: '770123456',
    LS: '50123456',
    LT: '61234567',
    LU: '628123456',
    LV: '21234567',
    LY: '912345678',
    MA: '650123456',
    MC: '612345678',
    MD: '62112345',
    ME: '67622901',
    MF: '690001234',
    MG: '321234567',
    MH: '2351234',
    MK: '72345678',
    ML: '65012345',
    MM: '92123456',
    MN: '88123456',
    MO: '66123456',
    MP: '6702345678',
    MQ: '696201234',
    MR: '22123456',
    MS: '6644923456',
    MT: '96961234',
    MU: '52512345',
    MV: '7712345',
    MW: '991234567',
    MX: '12221234567',
    MY: '123456789',
    MZ: '821234567',
    NA: '811234567',
    NC: '751234',
    NE: '93123456',
    NF: '381234',
    NG: '8021234567',
    NI: '81234567',
    NL: '612345678',
    NO: '40612345',
    NP: '9841234567',
    NR: '5551234',
    NU: '8884012',
    NZ: '211234567',
    OM: '92123456',
    PA: '61234567',
    PE: '912345678',
    PF: '87123456',
    PG: '70123456',
    PH: '9051234567',
    PK: '3012345678',
    PL: '512345678',
    PM: '551234',
    PR: '7872345678',
    PS: '599123456',
    PT: '912345678',
    PW: '6201234',
    PY: '961456789',
    QA: '33123456',
    RE: '692123456',
    RO: '712034567',
    RS: '601234567',
    RU: '9123456789',
    RW: '720123456',
    SA: '512345678',
    SB: '7421234',
    SC: '2510123',
    SD: '911231234',
    SE: '701234567',
    SG: '81234567',
    SH: '51234',
    SI: '31234567',
    SJ: '41234567',
    SK: '912123456',
    SL: '25123456',
    SM: '66661212',
    SN: '701234567',
    SO: '71123456',
    SR: '7412345',
    SS: '977123456',
    ST: '9812345',
    SV: '70123456',
    SX: '7215205678',
    SY: '944567890',
    SZ: '76123456',
    TA: '8999',
    TC: '6492311234',
    TD: '63012345',
    TG: '90112345',
    TH: '812345678',
    TJ: '917123456',
    TK: '7290',
    TL: '77212345',
    TM: '66123456',
    TN: '20123456',
    TO: '7715123',
    TR: '5012345678',
    TT: '8682911234',
    TV: '901234',
    TW: '912345678',
    TZ: '621234567',
    UA: '501234567',
    UG: '712345678',
    US: '2015550123',
    UY: '94231234',
    UZ: '912345678',
    VA: '3123456789',
    VC: '7844301234',
    VE: '4121234567',
    VG: '2843001234',
    VI: '3406421234',
    VN: '912345678',
    VU: '5912345',
    WF: '501234',
    WS: '7212345',
    XK: '43201234',
    YE: '712345678',
    YT: '639012345',
    ZA: '711234567',
    ZM: '955123456',
    ZW: '712345678'
};

const phoneNumberValidator = (control) => {
    const error = { validatePhoneNumber: true };
    let numberInstance;
    if (control.value) {
        try {
            numberInstance = parsePhoneNumber(control.value);
        }
        catch (e) {
            control.setValue(null);
            return error;
        }
        if (numberInstance && !numberInstance.isValid()) {
            control.setValue(null);
            if (!control.touched) {
                control.markAsTouched();
            }
            return error;
        }
    }
    return null;
};

class SearchPipe {
    // country | search:'searchCriteria'
    transform(country, searchCriteria) {
        if (!searchCriteria || searchCriteria === '') {
            return true;
        }
        return `${country.name}+${country.dialCode}`
            .toLowerCase()
            .includes(searchCriteria.toLowerCase());
    }
}
SearchPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SearchPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, name: "search" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: SearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'search'
                }]
        }] });

/* eslint-disable @typescript-eslint/member-ordering, no-underscore-dangle, id-blacklist,
id-match, @typescript-eslint/naming-convention */
class NgxMatIntlTelInputBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _NgxMatIntlTelInputMixinBase = mixinErrorState(NgxMatIntlTelInputBase);
class NgxMatIntlTelInputComponent extends _NgxMatIntlTelInputMixinBase {
    constructor(_changeDetectorRef, countryCodeData, fm, elRef, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._changeDetectorRef = _changeDetectorRef;
        this.countryCodeData = countryCodeData;
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.preferredCountries = [];
        this.enablePlaceholder = true;
        this.onlyCountries = [];
        this.enableSearch = false;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.stateChanges = new Subject();
        this.focused = false;
        this.id = `ngx-mat-intl-tel-input-${NgxMatIntlTelInputComponent.nextId++}`;
        this.phoneNumber = '';
        this.allCountries = [];
        this.preferredCountriesInDropDown = [];
        this.countryChanged = new EventEmitter();
        this._format = 'default';
        this.onTouched = () => {
        };
        this.propagateChange = (_) => {
        };
        fm.monitor(elRef, true).subscribe(origin => {
            if (this.focused && !origin) {
                this.onTouched();
            }
            this.focused = !!origin;
            this.stateChanges.next();
        });
        this.fetchCountryData();
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
        this.phoneNumber = this.formattedPhoneNumber;
        this.stateChanges.next();
    }
    static getPhoneNumberPlaceHolder(countryISOCode) {
        try {
            return getExampleNumber(countryISOCode, Examples).number.toString();
        }
        catch (e) {
            return e;
        }
    }
    ngOnInit() {
        if (!this.searchPlaceholder) {
            this.searchPlaceholder = 'Search ...';
        }
        if (this.preferredCountries.length) {
            this.preferredCountries.forEach(iso2 => {
                const preferredCountry = this.allCountries.filter((c) => c.iso2 === iso2).shift();
                this.preferredCountriesInDropDown.push(preferredCountry);
            });
        }
        if (this.onlyCountries.length) {
            this.allCountries = this.allCountries.filter(c => this.onlyCountries.includes(c.iso2));
        }
        if (this.numberInstance && this.numberInstance.country) {
            // If an existing number is present, we use it to determine selectedCountry
            this.selectedCountry = this.getCountry(this.numberInstance.country);
        }
        else {
            if (this.preferredCountriesInDropDown.length) {
                this.selectedCountry = this.preferredCountriesInDropDown[0];
            }
            else {
                this.selectedCountry = this.allCountries[0];
            }
        }
        this.countryChanged.emit(this.selectedCountry);
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    onPhoneNumberChange() {
        try {
            this.numberInstance = parsePhoneNumberFromString(this.phoneNumber.toString(), this.selectedCountry.iso2.toUpperCase());
            this.formatAsYouTypeIfEnabled();
            this.value = this.numberInstance.number;
            if (this.numberInstance && this.numberInstance.isValid()) {
                if (this.phoneNumber !== this.formattedPhoneNumber) {
                    this.phoneNumber = this.formattedPhoneNumber;
                }
                if (this.selectedCountry.iso2 !== this.numberInstance.country) {
                    this.selectedCountry = this.getCountry(this.numberInstance.country);
                    this.countryChanged.emit(this.selectedCountry);
                }
            }
        }
        catch (e) {
            // if no possible numbers are there,
            // then the full number is passed so that validator could be triggered and proper error could be shown
            this.value = this.phoneNumber.toString();
        }
        this.propagateChange(this.value);
        this._changeDetectorRef.markForCheck();
    }
    onCountrySelect(country, el) {
        if (this.phoneNumber) {
            this.phoneNumber = this.numberInstance.nationalNumber;
        }
        this.selectedCountry = country;
        this.countryChanged.emit(this.selectedCountry);
        this.onPhoneNumberChange();
        el.focus();
    }
    getCountry(code) {
        return this.allCountries.find(c => c.iso2 === code.toLowerCase()) || {
            name: 'UN',
            iso2: 'UN',
            dialCode: undefined,
            priority: 0,
            areaCodes: undefined,
            flagClass: 'UN',
            placeHolder: ''
        };
    }
    onInputKeyPress(event) {
        const pattern = /[0-9+\- ]/;
        if (!pattern.test(event.key)) {
            event.preventDefault();
        }
    }
    fetchCountryData() {
        this.countryCodeData.allCountries.forEach(c => {
            const country = {
                name: c[0].toString(),
                iso2: c[1].toString(),
                dialCode: c[2].toString(),
                priority: +c[3] || 0,
                areaCodes: c[4] || undefined,
                flagClass: c[1].toString().toUpperCase(),
                placeHolder: ''
            };
            if (this.enablePlaceholder) {
                country.placeHolder = NgxMatIntlTelInputComponent.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
            }
            this.allCountries.push(country);
        });
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    writeValue(value) {
        if (value) {
            this.numberInstance = parsePhoneNumberFromString(value);
            if (this.numberInstance) {
                const countryCode = this.numberInstance.country;
                this.phoneNumber = this.formattedPhoneNumber;
                if (!countryCode) {
                    return;
                }
                setTimeout(() => {
                    this.selectedCountry = this.getCountry(countryCode);
                    if (this.selectedCountry.dialCode && !this.preferredCountries.includes(this.selectedCountry.iso2)) {
                        this.preferredCountriesInDropDown.push(this.selectedCountry);
                    }
                    this.countryChanged.emit(this.selectedCountry);
                    // Initial value is set
                    this._changeDetectorRef.markForCheck();
                    this.stateChanges.next();
                }, 1);
            }
            else {
                this.phoneNumber = value;
            }
        }
        // Value is set from outside using setValue()
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    get empty() {
        return !this.phoneNumber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
    reset() {
        this.phoneNumber = '';
        this.propagateChange(null);
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef);
    }
    get formattedPhoneNumber() {
        if (!this.numberInstance) {
            return this.phoneNumber.toString();
        }
        switch (this.format) {
            case 'national':
                return this.numberInstance.formatNational();
            case 'international':
                return this.numberInstance.formatInternational();
            default:
                return this.numberInstance.nationalNumber.toString();
        }
    }
    formatAsYouTypeIfEnabled() {
        if (this.format === 'default') {
            return;
        }
        const asYouType = new AsYouType(this.selectedCountry.iso2.toUpperCase());
        // To avoid caret positioning we apply formatting only if the caret is at the end:
        if (this.phoneNumber.toString().startsWith(this.previousFormattedNumber || '')) {
            this.phoneNumber = asYouType.input(this.phoneNumber.toString());
        }
        this.previousFormattedNumber = this.phoneNumber.toString();
    }
}
NgxMatIntlTelInputComponent.nextId = 0;
NgxMatIntlTelInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: CountryCode }, { token: i2.FocusMonitor }, { token: i0.ElementRef }, { token: i3.NgControl, optional: true, self: true }, { token: i3.NgForm, optional: true }, { token: i3.FormGroupDirective, optional: true }, { token: i4.ErrorStateMatcher }], target: i0.ɵɵFactoryTarget.Component });
NgxMatIntlTelInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NgxMatIntlTelInputComponent, selector: "ngx-mat-intl-tel-input", inputs: { preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", inputPlaceholder: "inputPlaceholder", cssClass: "cssClass", name: "name", onlyCountries: "onlyCountries", errorStateMatcher: "errorStateMatcher", enableSearch: "enableSearch", searchPlaceholder: "searchPlaceholder", describedBy: "describedBy", format: "format", placeholder: "placeholder", required: "required", disabled: "disabled" }, outputs: { countryChanged: "countryChanged" }, host: { properties: { "id": "this.id", "class.ngx-floating": "this.shouldLabelFloat" } }, providers: [
        CountryCode,
        { provide: MatFormFieldControl, useExisting: NgxMatIntlTelInputComponent },
        {
            provide: NG_VALIDATORS,
            useValue: phoneNumberValidator,
            multi: true,
        }
    ], viewQueries: [{ propertyName: "matMenu", first: true, predicate: MatMenu, descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"ngx-mat-tel-input-container\">\r\n  <button\r\n    type=\"button\"\r\n    mat-button\r\n    [matMenuTriggerFor]=\"menu\"\r\n    class=\"country-selector\"\r\n    [disabled]=\"disabled\"\r\n  >\r\n    <span\r\n      class=\"country-selector-flag flag\"\r\n      [ngClass]=\"selectedCountry.flagClass\"\r\n    ></span>\r\n    <span class=\"country-selector-code\" *ngIf=\"selectedCountry?.dialCode\"\r\n      >+{{ selectedCountry.dialCode }}</span\r\n    >\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <input\r\n      mat-menu-item\r\n      *ngIf=\"enableSearch\"\r\n      class=\"country-search sticky\"\r\n      [(ngModel)]=\"searchCriteria\"\r\n      type=\"text\"\r\n      [placeholder]=\"searchPlaceholder\"\r\n      (click)=\"$event.stopPropagation()\"\r\n    />\r\n    <button\r\n      type=\"button\"\r\n      mat-menu-item\r\n      class=\"country-list-button\"\r\n      *ngFor=\"let country of preferredCountriesInDropDown\"\r\n      (click)=\"onCountrySelect(country, focusable)\"\r\n    >\r\n      <div class=\"icon-wrapper\">\r\n        <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n      </div>\r\n      <div class=\"label-wrapper\">\r\n        {{ country.name }}\r\n        <span *ngIf=\"country?.dialCode\">+{{ country.dialCode }}</span>\r\n      </div>\r\n    </button>\r\n    <mat-divider *ngIf=\"preferredCountriesInDropDown?.length\"></mat-divider>\r\n    <ng-container *ngFor=\"let country of allCountries\">\r\n      <button\r\n        type=\"button\"\r\n        mat-menu-item\r\n        class=\"country-list-button\"\r\n        *ngIf=\"country | search: searchCriteria\"\r\n        (click)=\"onCountrySelect(country, focusable)\"\r\n      >\r\n        <div class=\"icon-wrapper\">\r\n          <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <div class=\"label-wrapper\">\r\n          {{ country.name }} +{{ country.dialCode }}\r\n        </div>\r\n      </button>\r\n    </ng-container>\r\n  </mat-menu>\r\n\r\n  <input\r\n    matInput\r\n    type=\"tel\"\r\n    autocomplete=\"off\"\r\n    [ngClass]=\"cssClass\"\r\n    (blur)=\"onTouched()\"\r\n    (keypress)=\"onInputKeyPress($event)\"\r\n    [(ngModel)]=\"phoneNumber\"\r\n    (ngModelChange)=\"onPhoneNumberChange()\"\r\n    [errorStateMatcher]=\"errorStateMatcher\"\r\n    [placeholder]=\"inputPlaceholder\"\r\n    [disabled]=\"disabled\"\r\n    [aria-describedby]=\"describedBy\"\r\n    #focusable\r\n  />\r\n</div>\r\n", styles: [".sticky{position:sticky;top:0;background:white;z-index:1}input:not(.country-search){border:none;background:none;outline:none;font:inherit;width:100%;box-sizing:border-box;padding:0 6px 0 90px;margin-left:0;position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;margin-right:0}input.country-search{width:100%;height:34px;border:none;border-bottom:1px solid #ddd;font-size:14px;padding:20px 20px 24px}.icon-wrapper{padding-right:24px}.flag{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAABw4CAMAAAAs8X1iAAADAFBMVEUAAAD////OESYAJH0AAAAAK3/80RbtKTn/ywDRETPQFCvYJx7/AAAAejkAI5UANpV0rt0AZTTvKy3BAQPCJy1Bid3eKg8AnUkAlETgGx3VAQD93QXtHCQAeF8AN6YBhU0AakLeChcAAIzKLzwAKWb91AActTr94wAAo17209YAbcsCrsnHDR/kABLoES0AcsEiRY1LktoAak4DJ4s6ecn38/ABHqERSK8DaacBod3GDDDYFDsAgAASrSsDlsAHiTBpuuYCKKYAmzpKrdYAP4j9zyT1s7YAZgAAV6VmzP8ormbeFh4EUZkkSaX630X0rgG6CC6eLzoPPHytHSX33xYZigABPppKl88BPxw6gj3WZHTe5/DZECNbl7H6uBEAlWcBS6joKDoAAGYaRJHlAjb1xsrZJBEAXbsCf/3gUmEjnkLNDCwANrKdqsrVJyftHSjjPDIvmzAMBwTnbnKMGj3mqK/B0eT8OjKyIjQhXDNAWInzlpX950kNXq8ei0M+bU3////c29r/cgDsho3idQnsAAD9TRQ+XrivDgv2gwFLqFZeteMWFpbgACXuxQmakKswVpmnp6X+xh3PSFB/rY8AUbrgTwf+mjIjXEI7eCgAmQDasjM/mQEiG1ASiAeozbbGvcOLJyqNqdbPf4ejyuxRfMB/msPelZ0NrS00sjBtg7hLaaPxK0IZIG0/PnEwkAngUCWwigqxxNpTSgfCHhp/teHG0rzk7uYOdCjy3roAUPBNL2rSuhy1uAglMXTHujMxLRHFpV59CRBvjTp4YmiUsjy1oyHqkBdguI3CdyFtaZFHlHNUWlWLgyqOh4ZyhnMpd2XseCNnXDOmUzh7awhLiKQzDw2yNFDvQ02RqGZagyxpoKt6tB5PaIWRxZrFQBxDTEB5flJsOE9SCxp6MBimuIf24p3sf0nltl5Ds5PYw4DPrJzAfVf22XudPyMSOTn///8CNwPAGTilUGUCi0b////MECjvKiwAMoze8+gABhCSwecEfcgAOJTnESwetTri0eK2AAABAHRSTlMA/////////////////////////////////////////////////////////////////v////3///7///////////7//f/////+///////////+//////7//////////f/////////////9/vz//////////v3//f///////////vz///7////////////////+//7/////////////////+////v/9/v7///////////7//v///v////7//////f///////v///////v////7//////v/+///+//v//////////v/////+//3//v/////U/9f7pY6kfJrKwsC2SaOqKyxZfwAAjiFJREFUeJzsvQ1cVNe97z0bBgRiG6MkPY3JPecTYsy0NiGtu/Ym57WN0z5pDBGbkyvTcNpL6DnkdIgZyphAm2QufKIxdhyETxIfkjIRHW+GlPLmTPhkVEDlRWEIiESivImgAtLTa3uf89zzfO591tovM/tlrb3XShyc0P1Thz17/7/r//uvtfaW2TOzt8kUcxXkM/bMRChLWpqFW8jck1OQn4iRCW7kEQHI5NdggcQ8EeEAITwPFw+ARBGBADo8SQpYIipOSyuOPotG14Xn9niiQBpGkYjMudkrs35yIOn06a1bR0owlqwIS+dvA+qXFZ1pZ/ILcvbAovmlTGnBdadPv316NCkKCOF5fLfmKZCk2pz5+fnrBbURQAyPDJyAiEBOz/x8T09PjpjCJIZLpgaHRIAz85U9GZW1ESBRW0kuS9AC/rpIgUT/5Etnz740GRkI3QxNI/uczn0jTYRAUu11T93x43We62IR2kB9uL3dxe77lHW1t4frCYCS+dnZPb66Ot+e2dn5EhJL4enp2VnuX0WYqAagURA/PRp5qg8oFI/AUtAX9NgqA3SPrUpA99iamHjvvZTA229jLamOrUl1nqTstyeOJkWyaB9bk0r8Z79ZMnqqxPf2X5UkCYD2sTXz42zPKPhXEjmQ6RxbR0vqTo2+fVtJnfg/hM6x9eipUX/JaP3vR0f7j0ZrwOvomVMlTU32Jqf91IkzRwmAE/MnRnfUeTx1nlMnLl/UB949c+ZEid3+d39n31PfP7/5t7rAxfcmj2b/4O8ef/xL/5h9dHL+I13goxOj9W9/s9vpOv3NV97uPXNRFzh66tSpV9721NVt+viU/9RovS6QXT9aUn80Me/WxLrRU/X12boASksCWApaLtGXCGQAsQcYfb1qANTAqwSSAWYCGUBsgEWRPOcqmf5vmQzg8wHrWuiAlkqgjBZiID0DEC3plYTAzpaMVS0ZoH2YggTISE9fxeZb2VUt6RkkQEtlWcu6Yqu1eFVLWWULSYbKQwWgAlBFwaFKkgzplZU5LZb8DEtLTmVlOkmGgrL0VfmHii2r0styiIpuGU8vKC4rO1SQPt5CBpQB7y3poJZaMmBVektlUSX4CyDSkbZa84uL89Mp5lJxRkb6uvjaH5Y+MGUm1JQArBsmix9eJwAJWxzyLeDp8DD3Q7Z2S4IIJHTINzW3mZubzW3N8rUdCVEgQVKGw2F2hMxDQ+aQAy5HC0iQAtIyGtvMoaHGxqGQua1RWoAMkJYx7B5qTHa7kxuH3NFmQAFyQCzD0TxsHkoOJQOFkpvNw82OSAEKQCxjuNPdyMUDotHdORwtQAlEymh2Jwtyi/3EFaAEQBlAbc19naGNgkKdfc1tcO2WBBSQcPFBjC4moIGEEnR8SQIOePhXqPhfPYwFEl5EAS8m4AFUGRcTtAB1GSUJ2kCaRf6LrSVNB0ioZKXxbGWCHpBQJAWKEvSBhOJofHECCRAtQ14AFoiUoSgAD4hlFKk24AC+DGUBWgAsQ1WAFgDKUBegCSQUqQuIAjGWcb4VffqUChgJ94dnA+BhGmlJ/V5WgGFaW+FUDEiK1novCwBX3rp2hZUA2udbAZA70zojAXTOt063zlxjmLfeYiM16LyXFWausK2tbNZMWFKDlkaZa1lZrTMzjPi2i+5bU0HQPjvDtBK/+TUd4CSWoA9kjx0AGssmBjgiGk9yJjG7qkry1ms8ntyMQ2Bx9FUyLV2gBfzt6Gj56g93drRwz/SA4Z0tHQ5zx1e3mB0dLS0OfWBLx/BwR4ejxTG8c2p4aqc+0DE1bHZ8FfzS3TJsHp6a0gemOsDvr/BXWPijgwDY2RH9hRt4I6oh+ht6B0ENU1PRVx/AHkHRHR3D/G/0juEpEkstHSBsii+go2MLSYYfbulwTJmH4biRZNi585YOR0eHeWqneaplCwEAjcDJYe7YuXMKTirdGr761Vsg4JjacgvoZP0MfJopx5SscT0ApFDHa+5ALcM71Su1ALl5EgClpQXEVt+glAHEBvhPlDKA2ABZlDKA2ACLItTpArQM4PMC2wZyC6mAhtzkrgbCU15QhYUJhbnJDaRAWkNubkNaWm5XISGQ0JAMW78lOZcUKNy7FzaeO0AINIBoCHQpekoAzCp19gnnzENtsvVYoDG5kfvtODRkJgMcoRAk2pJDhIDZMRQKtTlCjW1kwBCIG24MDYUUbyjgAEdjcqixsXOos1H51gcuQxtoPDTU5xgaaiYDIMO5b+tsJgVEd52UgEJLCFhPrJsIHLY5DxygAJz8ifXDh28nA2yRk/3OFQ8RALfL3oE48BAOeGiFsPYh+XscB3DA7ayw6bAccGItHWZsh2ECVg4wt+OA9QdAc05lOMM8hAUQwdoZ1q9AEaxkNJTA7TYEABAscAAZzzC0gA0LODEZVuAAXApsBum8k+gwLYAfBzAvEKacWgBEDhxYcdjJRnKx67WBCCjGr6AEpLNbExAsOR8iBVYccNoOHF4hX7lYB7IVFPoPA4gfwEYhJwRQeyXb2mpBHgYxADszOzvbiiAwANs6W91VPdtKDsy0d2V1XUGkwANZAJghr4HWEixidoaiaK5bUfE8QD1wcTj5DIAEiLX+K43e/cUWcgAEr0vPOUQGCMHwsyX6gCSYCbA6gCSYDczNL1xyaQDSltkACAY6g7MkDQaa46KBAihAEQw1L8SHVUUjgvl4LsVcMBiUAOhgWMA8sLQAEa/LxZq0gzkgyIRh+MIlbwACmsEw3sWyXtBJC5dqeUt6wLXZIBwyAMwxkaI1oNZZ7tMUQWApGAU0oNa91dXgsOnqOeNi5AAOCoIcV6qrq10sAkBC16qvzFZ3Vl9pn8XPVhnEXgHB7eD/vBl0BgTEzly5Uj3HYCyhIZZlSQBETTHYRRUQ/WFmUbSMWAYQV4CVWAKAOyKpZQCxBKgHLg4nnwGQADHW9nzGvvseqPzly/O5hd17zm3nlxAy7SkQEQHgwhkfFgABAsIBQvhuaczu3TLgHhGBACL8nt1Op2SFKT+i0uXLS6PPsMByjLCWCAB50TJLVpQlQZskRduZ/O0Fe2DR+8HSuT27VdH33GNndwiAEC52qxTZ7fdHWJ+NT2ESw6MDxyMcYLNFALFykxgunRoQ4Zb8fnXRuN6QaXd0LEkBZIbdqN7BW9p9T13dPfpIFNjhBNpBAdzjZBgnhaXdTfB43oTypNofRE8si3SkmN7RRf+mTepx0gKwwlkiEz2wKLqdWDLgIUrgoQOUwP5DlMChAgJPEeCh/YcqU2vtK0iBhw4cKkhNfSTHq0dILD1U+8hhCktA9hz9eBmwwksJ3K5bsRIgkQFQAFXEEoBkYgnAeWJ9VoDaEnXRcThw1MAPpAqldKWmpqWk9P8AJQOIJ8AjlQhMelDigRS5eACp0GcEGuTalpqa2oARD6QSq/AzAtSWYt9L1AMXh5PPAEiAGOtvKWUAsQGeRemDstIC5IZnn0UCBWzZI49gCBTwCFvGYUUfEAIFzCMcxpTFCqC2RF20drfeTykDiA2wFPRlXk2M/8t53+pE/3/e+eWoRGAT+NP0ZQyBAr785R0MY9uEJtCAhisMgHeFAfCusADOFR7AuMIDGFdaANKVJoBypQmgXOkAald6gMqVHqBypQ8oXBEAclcEgNwVESB1RQZIXJEBElekQMQVMSC6IgZEV5NSYFEkv4bBRpmQ1zcwgM8KhEKUwNAQOTDUuHdjtcNRvXFv4xAR0Gge2tvncPTtHTI3EgF729o2buT/7SWrodFcDYFqkIAM2OtohECjYy9pLzUPQWCombhbh5pDbW2h5iFiQLgyWiMxUN3Y2dbW2RiiGWnYrVRTgxqgmUvxugPFFbBXJgTwTSr98YsCvN3b+zY58PbmDzhtRjJq4OIHEV0kATZ/INFmfeDiBzKpcyiAtz9QSFWHAtisBFSmFIAy/oMPtIFX1IDSkxzoVQO9NxagtkRdNH23Ug8c9dSgn3z005t+B+IYql1UW/EJCIp+E7btiYgua3xeywAMwAAMwAC0gJXEMoC4B7ZvpwQGBiiB3FwKYHvXwEBy8sBAl8oWLkPDXu6DOw24DF9R6Tl3crL7OfV6LPAVmACxGgtccD/3nPsCDRB5ILWEkQF8kQGSe/xE9Seab6FAGUCsgG4qjZlM/0SlqwYQI+AVKvWbTD+j0hkDiBdAssOyxajbGchUoDwIWMoy6AAgq1YaBFBcQJPBUqa+ip8GwGo2jsqg303qGnS6CdVLFrpe0u4kJWApQtzpQgNgdeNVllgdR6iitbvpcwO6I/d5i7YU6cy9zz1wfBq6qaGzR3zO6U2/A9HuogTd9PkPM3QHMuJDJVumO4eAMqwMdx0f3oluh6aVCdemMI3xC1Yd7/x1HYLdJtN9uwJ8ARq+ODcgZOy+/wOA++7rDmr6Et0Edt0nAPfdp+Ur4gYGioDcV1qR1cJa+CGPurlPBkh9FYjXRcrPkLpRAhFfnIPgCHzCSt2oAdEXjExPmIwsj0lC5EDEFxN8MQJE3CCB++6rEeKmhZ/d8s1qYEwx2R/TA2oUwC4SYJrvrukgCQAsjSSkw9CRhIQAmaXJhJYooFM0360jgiWXXrdGB04q/MBJp4YQqzU1KCcf7fSm3IEod1HagwD1YUbTjdrXZzhUmkx/qdBzet9eMwADiBvglQdwMgADuNmA/FO28v9Cl8lkAAZgAAZgAKRAjIW7zyvuzqbY+7xiAdx9XvEA5j6vWAB3n1csgNvA68XNEb1IBHziCgaDmzsqwON1lCWr0tIn4HWMq6PjOhhzEUjE3Oc1CtSu2rlZCmDu8yoC3trrHTvfm6uIALj7vIpAxcTo6OnR3lMRAHefVxEIT/b1nn3jjf4IoNNLwS2Dg4MTvb0dXkLAtXNwcvBS84mdmwkB74mK/sFLe7wn5smAMyNj/Se83j39u0ZOEAGb9zXvvBQOD65q3reZCEjb/MrEC1v37WsT43WBtCcH973wwr7BLeJzXQDM2MHBF6PPCIC0BOkTEkCmRQCWgn5EKdMvaQF4pd9rT1ABnFpJKdlZ7NaZX26kAQTqGiwreYAU4KmZK2/hgBMVLhSSU8CiOwN+LM8x0V8RlIVbCwoKKotZVGdEPsc33Bv2ilRZBpyXGUWozpDfTaitN1wbZFjWUnzoEPjfiGXYQ4rO+JHq9kMdHW2b9wSY4kPwzQKmrEhmFZRl6huU34BqeN0UvEPqe2cqXGzRoQzV1a+5ydc51OyIEFum4H1hp+C/zZ9kBJEAlLtRoDqmhtMdwJnZMQ7vWyvtDBnAKdQ41AbaXxiHt58dXzCLN7oFneFlUQBUcqinZUtDYWHDli3DZoekOkAFUMCPctMKGxrGx7eMFyYo75dldrQhgOTchoGGhkLw0CjtDEG6u6hbQZHt07AzHDSAQDW3UQGcjtAfZhZFt5DKAOILoL6n5VpSGUBMgSOkEoEvkcoA4gvYQiwDiCugmFgCgPzlGCkDiCXQRCwByCSWAcQVYPouoUw3FXj/fSrgb46sXXvkb8iBC6vhbxarLxACzx0Rfxk58hwJAJpfc7w+O7v++BplEhTwfmjt2s6j/GUfjnauXRt6QRuA7jujV4rolFeiAt53A+NrjkaBo2vACvf7GOC/88WOjI0Famrso9keQBzni//vKOCCm++a0brs7MwSv72mChD1/DohiRSI9mW2YCfTX+PLvFfWw3iAP5mfdN45igWEioHqMzkEVpDoqcFaihY9mQkTcMYyMyc1ipZ0K+igTJAn21Oi2a2KgUvyZGbrDRzQC8LUSEoCfUowNb4rTr577yWcfN+ln97fpd6Bvku/i36X+iCA0SICsdXv//brVDKZzd+kQrgziXdTAmbzf/kOJWA2E5cSPZP4TVqAsBTZucrfE5SiOLnZXP2EjpRnQx19lIDZPNxJCZjNbcdiC1Baoi2aslspB452alBOPsrpTbkD0e6ilAcB6sPMomgjofYO0AG5r71GA+wdeI0KAM3rA09cu8YvXOOa1wOeeGKmdWYGMteuXH5NH/jltZlWNsiyQdeM1Vp2WRd44onWVpYDWLZUMKRjaYYLZmcvWy8TAU+A6NaZa6X5xaWlpUQ1wAzWy69dLi1iL+tleIJ7hDUES8tKrcHiAR0A9ucTG60WFspiCeZrZwDdCeOsELicX/aaRBiA5e4CDhV8beA1XeCJVnbmrctlVms+GIHXXtMHrgEjXLdctrDw8bIeMAOdw6ZLrWzp5TKLHnDNEmSDFt7M5dJ81mrVAK5d++VM0FLKllrzhXYv5zPsZQ0AdKjlchEr6coyaz4+wzULm28deG2gVOYb30vXWkv5breyVmV/ooArV8TVVrZYP8NeyZBaWX1LubL1A5j4CLAXG4EGcvUj5YD0ghmlTMm995YwpajLcfw/JgP4ogOlEeXzQH4pQmVRQHq2kAOQskaBEomy7703uwSpcBS4l0inPgdAbYm6aOpujcOpYQAxAFYQywC+2ICTWAJQQSwBQLxoxyh+Aeqiqbs1DqeGAcQEiLGslZZDtTkZxDJl5BfnHKIBanMslZU0gOWQxVpMA1SWHarMiWmGsgxLDlUNwE9BAVWG/JxiqnGwHDqUw9IAOTmWMqpeshYfsuTUxhKgtkRdNHW3cgM3sotY/NSoogC4yTdGAXDTm8YSl4HGEreL0gDcQYAG4A4zNMCiiODiA4I+K/AosTBAnr/JFmRtTf48MsDHusaCY2NsVZD1EQB5zpqqwIirKhAYCYwFnHl6QB4I3RUMTI+MjDDBqpqALU8HcLKBMWZ6ZHp65PjvahjXCOPUBnxjVS52Ojzyu+npnr7JikCNq8anBeSx7BjDzs8H52o/feH49TATGKlh8zQAf1U/Ozd/5cr0745PjkxfujRf6wrU+DWAJnbaNXe5unrWVTs3Hb506dIc6KsmDcBWNc0wlrm5OVfwypX2uWkXw4CO0gDYALzyChsM1rqutV5j4Uftx6pYLWAMXgyGZb0u17Un2iHABgJagG2sBgaxQfbAgWt8hqoqLUugaPj1B9Z5wOk8EAALTNDFaBXtr6mpCYKO+fTs2bPPfDpdE2TGpgNa3QoGrqrm+MjI8RcuXHjh0wvvTIJh0By4R31ghjKs1+saGwt67SwDnmlODTj5aqpYp6vC6/K6nIFAYExn8j2aZxtzBcZcToZxBsemq1y60xvsQAzYDapqxqYrqoKM/g4E62CDzK5gVYBxEe2ij/IHAZbiIKChz3ogowZirOUS4T73J425YYDFQgmcO0cH5C9fnk8BFBVtX758e1EZMVDKPy0lBFjGwj+1MKw+YLUw2/OFCCZ/O2Ox6gDnwI+7LNvhs+2Wu8DjOR2gdLlCpTpAvhLI1wbYu5TAXax2BouCuMui163sduma7SzBOBRFVxSRjXQkx3bCqbF9+7myoqKyc9tJAW66SiYrEWC1xhoopQXyafdpmWTAUtBfU0oEnvodFfAO/GzhkacwMU9JN3AA/ACf+501a9DEb44c+Y0ceGft2gvvXHjqyNojSOB3R478Tg6AyAt//ZunfuNeiy5EZcntfuedd37z1FPvrH0HU4USWAs9HXlqTQR454jbfURBvyO1BLoolAU4wdIF0MBTf/0bmcEja96JAO/Ajyw2gnihaPCc3/jUhQti//zmgjsKwBRrFtasFbs10l2/W7MmkuWp30QtcQO3ZnVk4NxrLwhLF8QFedFcAxLDUSDSfMTaX6Mmn3oEn4q2gAIiRf8GsRE5vYVufQe1Db0/oAZOE9AQCaDeH7Sl3h90pN4fbrQlueiBRdK/6On29uQBGqBqY9ctCWrgPCb8mWO5DYrfo/kNx5AEdKP6xZvflDyCc4MAzp8/P5K8ETw+jXKDAJ6u5i931450A9SQq7TUDuOr0G4SbunaWKUEngbx1Rg3A8kjt/+LEhhJPrYx+Wm0m2PPgFVKoLrqX24/VoV2w61TALfDRoSxU7lBAbi+4dxoAig3GgDaDRbAucEBWDdoQMMNslu13CAAbTcqQM+NCtBzowL03KgAPTdoQMMNCtB0gwC03agAPTcKIEmpi6mcLqo2yIDeXirgaH1nZ/1RCqA+lJISqqex1JuSEvFEBPT19vZRAdncXzJA9YqkjAfKVBsMgAJ4QalBHhhUbTAACiBFqQEeGFBtMAAK4C/wOin7SsmALqCIv0UPUMbrAap4HUAdrw0g4jUBVLwWgIzXANDxeAATjwVw8TgAG48B8PFoQCMeCWjFowDNeASgHa8GdOJVgF68EtCNVwD68XKAIF4GkMRLAaJ4CUAWHwUI4yMAabwIEMdHrqfEa7mGTCgtMaAoH6iIAuDeYyr9swGKuM+/c+8lWLjFIh0gX/mbZ/4XD6AuOg4HbrEA6h1IpaUHvC6TfO7dL5MBGIABGIABkAIxFu6+A4kYYe87gAVw9x2QyOORAZj7Doiy++tYts4fyYi974Cw3cc4E222RCfjEwHc1c75izzZE5v8SdnZSf4mkCpTF0hiWE+SeK0klklSW7LKLdX5RSPQnL9OLBp53wHQaKY9OykKJGXbM5MggLnvQGJito3xS3vXz9iyAYC77wA04cuUApk+aBB73wFYQl6SFEjKqxNqwMjD2OQrbIxHG7A55ZacNm0g0ZPoUT/VAjJtLulTly1TB/CwNk+k7CSPjdXLkJhUlx0Zal92HT81tABgivF74OTzgFHje0AbSLQ3gUGpqwP7V5OwR+gAcKKxfj9rj3SwLpCYmcn/IwYUogcWRf9JJkZDiwxs2EAJ+P1UwIYNTiefgxBogs+baCz5GMZHVQP8ZiQV4OP+xtfAxRLQOMeFPuVlAAZw04C7ZUqQCXmrTQNYQkBhISUwMEADFBYW5uYW3lJIDKR1wa1daRSWANFFVUMuEA2QBkoeSIuzgTOALwBwB7FuCJCSQgq8+Sb3o7ycFHj9dXH1mwTAm2++uXbtm0KStVkEQBb8KH2W4AqbQmoJAhru1UDK2rVi/5DUADzdcYfg6I61rxMAUr2O7VkkgDeEBjRLRwFv0mbQlAEYwM0GkollAAZws4FbiWUAFEACsQyAAojD23obgAEYgAF8wQHV14o09e9xCdTRiebucVDOuARyqFRL858uVKUBxAigHrjYz6XYA9S7aOyPGrEHYq5fHP0WlUxpaRdpgbSHP6IE0tJeJPclfkLqkxIPmaIfqSpjiWaf5DNYGcWUQFpagYUYyBCQIl1fAlBWIGa5btcWBFIzMiz5GWKSF7VHhQO4assipWjOFt5SvjSeCOA+p0ZsKe2RIlA2RdESEXcr9cB9lqlBOfkopzflDkS7i1IeBKgPM7EX+YkZTv9uAPEK9D5KAWSCv8nHwAMWkgMleydvvXV09Na80DEcocjQ2c//PDlJaElf/y75dYmdkRw32Gvog8h/SIBfbpTEtCa3YoAiOtWaCumUI81wuQj3RJoBW8OMbtEz0hBZl8kA6nGQPsvs7OV+5p2cJJwacC7B2Ro6Rpbh1rw8fraCn2QAFJitGlqMXdRE86uucDz+TICHEsh25mXrhkuATCfD1lFl8NucdJY8XBG6SRS9lKebRQZ4mmyM065dujyDh2FsOl0lB/JYm4vGUlKdJ8lPlYFASwiYJJYA/IhYiwbEYbcuBSDGuvXjl6lk+od/IEGOH5cAJMjWjSLBAQTIMZEQAF1ka3W1AtBAjp8ErZ/cuEsObNBATm7cePKk4EkE/LYdsiy7dkmJXdUbASMDDvKAgJzcGAmIJqk+vkteQ7QWLr76uIzgVm1VAj/nf2wExLGtL2+UFg7WHH9ZmWGH7SD8UQLq2wpjonVsrT65NdKtP98QBfwcUH0SbN66MQJsPSmGc4DTpqwC+j0OTIDQ48dPnjx5PGoNAvv3C+1HgBMQOLnxBGpcojX83LlBRlSfQA4lols5lZREOpkMkEiOEAByJAJsIkQic4n1k2URgU3OHZrxEYSoBilCBUBkcQ5+yBcKSP1bvACtV8SXN0QAOzsQeXFEAIDwy9HXjDiAZcWfs13ls5KXWzhgtmt2hmXZmcvl5eWz0g04oLVcVJf8JSwSmGllr0SAK4w2AMxHgzlZdIDLivjyAVYTkLffNTML/GkDrVLgsqo3EEVLUlxRv95FAOyVAS74CiIcDcBX0rNXpCu0gYoKFwiKdqY3rAO4piER5acrdADQ5HSECFaEK/QsMex0RTjsCoKlQM10xXSA0QNAu2GABNlp8COg2ITdgbzT4XBNBdE4RNIEUWvj5jCjAl79N2LxgJ/sjDcT+dphdmYTJZCdTZgkChAmkQBkSWQASRI5QJBECegmUQF6SRCAdhIUoJkEDWgkwQD4JFgAlwQPHP3FD1HCAh+1IONxAKZ5LIBrHgPgm0cDGs2jAM3mEYB28ypAr3kloNu8HCBoXgaQNC8ByJqPAoTNiwD5LYah/pcBxAvQQSeT6U4q7TSAGAFvUqkFcUVmTb1uAPECxFzcRaa487uWhAQLt8BfqQrK6bPbuAWbz+4Sfj8RrksVBYRrVvlcjM0Pcb+TZbl3e+qabIytzpQkXvmKB8SrYvEnlT3+uuykzNHMpDy/X1hlEi2w+yEQDQcB2T5ggbXX7Rutq6lhmCYAZ/ulF51KSJBcB0usAVjfNRbYV+VzMtzLRuyHHn1OFtYw+mG/c1fVvtOZo9lCDThAqME/um8r0Ol9p0uEGnCW+BrYsapdIH7frgDL1ZDn54oWroMFihYuagVW8jVUVI2N7dq6q8rli9QghovdKiJCDUmZp7fu6t/64WheksfO1SCGRweOX8PX4PO/sjVz9MPR0a2nhfc1TWK4dGpAxAdGC4wDW2P31Pf3s0EX21SXB2tgnH4fP01Yn0/49dbut/O/GoNtYC7NzgVtfA1wLnFvPIIuZrn5lAmsO2HybL/TJs6l2Vlum8fuYl1gLgGf/DTJ9vsFn3U+4f1LsC1vtH5+vv5UZJuJv34PsFdn4zxkJnmc3Hz2wPKB2n/2ZsOqWSEok6/BKcx5v7KGJlDDbHlPT/mssga7zYao4SDcFp6bnZs9wdUAtslrEK3LasiuC++pAwvKGrK5GlxiDazPk83XYK/r7eVegDgPZnI1NOnUwDBzxWBvFceIrwF0sY3bb0ENtia+hiabSxijuTlfkrwG3l5epAa/T3hHtY6rr7cXNOSL1PAqUFNdJqgBLNj8nmyPEyzAGjLt/LaSTD8LFsAYZWf6FuHIB2Q7/PeEEgDQxbQAwxygBRgbCSIFAKJfihwgKEUJMKyOLxWg5wsBaCNIQKuLlYD4Oh1bigJgi/R8KYDiQokvZBdLAbZoW+EPt22T3PQT4UueoeiHPyyUXOmaHfsbleSAFQDR+Jr71PEKoKiULRAzBHYhwpWARfjHMMFuZLgS0DKvBSDN4wEX2jwOwJrHAGMabhBAzfs64XIgqGleBbA65pWArnk5ENA3LwdMpoclggU9jJJJIgMwAAzAkCjOgTjsVgP4ggIx1V+hlJxsNjMMcpMBRNS1LT29oJgYeHtzetp776Wlb36bENicPpGWkZ42kb4ZBagvl9KVlpZWeP1UKvjRhbiYinrVtsEX09JGT32S9uLgNgSgPo+clp6eluq/7T34U70VA6TteeklDKA+hhZASxfffglYKkAcYdWr4Fe6WsY/nQA/EF+LwnVrevpmTLfeiIGjnhpxOb1vLrAYulct/lRKMfLb0Abw5wOoDyXwE0D9YewHmFBARXiu1ksDdO8JV/TTAFVF4apdNMCJM2fOhBHrsQAbZF2o9Ryg7rwE/tSAXd3fmQawxAB4KvdVHGC6DSXUTBJfNxnAZwMuvpj6SCXiO94YYOLF1NQXyw6V5ajuoIcGJuAdvTlL+UoCDYD2J7ga2MiHdTWBi6mpm/miC8Qzi9oAn+C2nIKcR8iKBhW8BH6wj6SmFih/SbwxALUl6qKpu5V+4KinBqzjxYdpJh8nVbABUALriGUAFAD5pzVuBJAbCuXSAF09QF0UQDkEyomBxqyunvH29uosXA4lUB0ab1zwHprbW00GZM33jPctzBXP9cxnkQHtPeNnLvbOzfW0EwLz1T0LC5vHx6sJM6RcAUDPeM+Z6itkNaQcO9ZzZn5+vOdYJyEQcqe4q6vBQ4gQ0FX87kBLAVhNLAP4HEDn4ORIKDQ52BciA9aEQo197ZNDjUcIgdUbQ6vdzUPu1e6NZMBGd+eFvvn20JGQikAD1Z19x6v6+/s/7TxGBqwO9fXvb1pxvv84aQ3uyekKb40vPOnGAD9R6GRJeKRqZCRcclK5BQdkXj999uPT1zOJgdHNox97wAMpMBnyn5mcPJMXmiQDHvecnO4DOnbS8wOyDD/xPH6yvnfyB56fPE4GPP74Tx6vr3/8Jz9QJhCBu4hlAOTAQxQygDgCfk8hDqD5coIBxA7opRAHIF91YmQAcQTE460QDIAEsBJLAFBzQHlKUDozEEArawmyiAv04QD2ykzrzAzi6/t4YBaIAghemQ0GZ6+ov5mOA1qvtAJdUReBBWAJACEGGJhgBnFtVgGoUMvrnfMiVgsA5cHbAOIFiLE6HOSOOFfrdtIR8CzIFC2wjsYWf56FwpZ4YobYVuRMDqmt6KkfQluSc0Ut0nd90MdWeByQnj7KEaMsldjrM8vPRmUIh5bKQ0wZESDYYtfl57TkoK8ZjQHYsnWYFDhLxZZDN75o2m7d8tKXSBQBLhGFR4CWCcJ4ASC0EwFI7QgAuR0eoLDDATR2OGApKHVh8AXSbzNw32h4FogG4gAaKAKQQjKABIoCK5dtf3b787qQCDww8NZbK996660HHtDJJAANDW81bB94dtlbAwM69nhg2cBbD4CHhmXPNry1XbsmHmjY2/DsyrcG9m5/duXevcpukEMi8Oyz2/e+NQBqHnhLDUghHuCiGt4a4Ba3owkB4oG39i579oFlewdA7MDelVjgkeunDoqWloGmG5YtAywmAwy+HUiwtHfgAeAIlL5941sPYIOjACRg48vU8dJgCbAStP7AwAPb9+7drhEsASAyAPp1+wNawTIAVD7QoBOsAPSDVYBesAwgCY4ApMEcQBPMAYuidcQyAAqA+q3azwUYnxPQBYzPCWgAcbgDLQUgxvo7Sn1RgL+8+/ENGx6/+y9JARDN63EygIsvGcUQagDEl2za0D+yYVMJilC/hQ9bHt0wMrKBy6F+I1+5oh+GbeofHe3fBJf6dQHPhv6TIyPH+kfA48n+DR5dALRbctIzsmHDiOckKGITCbDBA5oGiTwbSAAP6FHPSH//SP+IZ7SEwFL/hk2cHc7WJoKiYbeOjkx6PJMjHmS3qi5H9xGw79ng8WwYBYV8pL5anWrNj+th/3tg8xvqf0wA/PDHH8Hegb31kToeBfzwhy9+lLlhQ+ZHLyIvoIdaqaV4BBZF5LeAualASSYFUHLrrZludya3QAL0uXtvvXUS3sfH3UcETIaEe/fkhZQ3hLoBRedN9spuDZTXO5mnDbhD8jZDbm3g1hJFz8if34AaEMMlXaUCet2qO2tNuns1gDwUkKcB6OlGAKOKWzrljWoDme6QfKRDbs1eAlNVUfWkbMJiashTLWgDkyGh53sJpzfs+bxJMEvVo4IG8qAVt1tYIAA4KWetLoDWIgHS8+xNws1e7Lgz9/9mAF9cQHqnTuFqi0mZuFt51pko7xns+XMFqLs1DqeGAZAAr0oUAV7FSLjxQGwFL46azX3FFl6kk1vIhpdMxV4Pj7+eanYU4MJZOxbgAyDCAUJ49r144F4REa/fynL5sADuYqlYAPfpKWH7nojIgDc+Ge/pGR8HD5+8QWTpjdraxqyurKyu8gwRgEUrr98aLfqNyoEGoIGMjDMRIFsM4rtVfCYANQFnMCenBkgEom2KA8evEYGxmjEAnB5zioAYLp0aEBEAZ8ALMrCBoEsEcP0tADlAGRnwMUbA3ze5WGjpiZmmvycDDgdZFhT9WEC8NKMe8PeHXS7YrZFLOeoCf7/CnpNjXxF5qg8AZIXkCQkg05IAloK4C08nQlnS0izcAndh6kSMhGNrZhQQLn2NBRLFq2HzgHilbFw8ABJFBAJ64QCQHMjS0iQHMmG7Z4cgjwikYSRsX/+0c/2DUOtJAafLZd/veyYKyCxZVZbWPxhgWYYNRgHYkcKxFRQtXOg6WuP6B+0uKAkgXhub79Y8BbL+wfX2Z56RWhLDIwMnIBHgm998+6Xb3v5OBBDDJVODQ4Tt+xl2rrh1jmX2S2rQku/pZ660T1955ns+QsDj8/WHq/pXrNhECOR5vcVe11y7N480Q8X6+f7++bN2sd90gGzv/B773Jyvae5MEhFgn6uY9zud/rkz82EioG6+tiJce+LMmeu1p4iAxFMlmXXh8GhmyWgiGaBSPAJxqBWUumHA4cOUwIEDVMBhG7zwM02GwwyD8YQBDjidGE83r1uJgQOKWg8rS1ECTpu0Ow/bbE5twAn6X/ocjIeCUGVg5BmU8Z+/Bl3dNODAAdz8vkGzlX5/WOFU9r8eQL1PY0UPLJKipxUO//Mny5Z98s+HUacc/mQAX3jgcES388DthxH6jyjwzxJxAFIPRYFPJPrpsmU//QSpcBRYRqTrnwOgtkRdNHW3xuHUMIAYAF+WSR4kn68GYAAGYAAGQAqYTPeTyCSRAcQHcJJEUkB98X+EDCDmQDuJpMB6EhlA/AExFXdDN5s/SXoimbtRRloxI12X5HeVpaYV5JseSVMjakAMZxiTq0yNKIFoOGMzwSdKRA5Iw/1JJn6FHJEC8nDhzLoSiQLK8MipeDkiAupwybl7KSIC6nAAMCgJAEqmYpSKIFCE3IR9Pw6neASoi6bu1ujAwZuq5hekPVLmEgFhTWqZSzJw6nDp1FAjJnW4fPIpEZM6XDm95YhJHa7egaSISR2O2kWjiEkdjj4IiIhJHY47zPDIYhz6ZJ/4KSwUlxpUC5z+pxxo2LuX317YlTzArxpI7irEAwm5ucLCwF4hrDC5C5EhXdT4uLiQPq5YAIoA6VuPEfzqcPKVKHD33brIyZfvlgF3370rpB1+txLQQDpf5rargLvvPo5Cjm0VtiIABBIJxwAAccO43K5c+CO0VbJFCmx9WbLhZDIY7wEwxqFd0pZkwK7kk9JNZxIKwZBP3n03FjgOzEo2jUM/XRc1gQa3ZNPDaSA+QQt4OdT3qdRSYW5Drqalu++WVM0VnVCoWbREZN0aDacbOMqpQTn5KKc35Q5Eu4siDgLpDaoFyUEgelzKzVUdl/ZqHpf27hUWupI1j0sRRQ6VhWmFioUIgLpE2vblQNsR/+fy+syAxYIGousVwF13oYHldyEBq3XlXVarGrBa79ourpcB52DQOTUgXS/PULryrtJSNVBaetfKUlQGfA13oWuQ3thDDkTXf95xIAa2q7Sck3q9ACwnVvwC1EXHfhzEp9RTg3LyUU9v+h2IdhelPgh8hsNMVDd64NwvoL4Sj5IArF59gRZYTZgkChAmkQJESWQASRIFoJ9ECegmUQM6SRCAmOTDD4kBPsngIDnAJVlYoABSusoHf/jDwcFBlS1chqxb4Le9W/YRW1qdAgFE2VhgDQQQY4IFuu7Izb2jSz0mWCBLeFAmwQIRKZLoA4okJIAsCREgTUIIRJOQApEk5ICQhALgk1ABMAkdAJIIgOqYW/YAJ/U1MW8i8PwA0PM0GQZ+9KMGKksrf/SjlUsbKFOqgAcKVBsE4IGInhcXOEC58oEHVMDAwEpeDWAchMWBAS3gRwjdWKCB0hJh0dTdGodT46YAtLso/UEg5sclHSCBWAYQV0AXsQQAdX6rsRG1VgNobqYA3KFQyGwGD25CoHOYv5T3sOrMH86SuxnGN6sS4GtwQ0AdjwcazQ6HGdFPWKB5KDl5CNFPAtCpUl/kQS4B+CtiGUBcATGW6pCuoxsEWHMqK3OspAAIrt28ZcsntZWVlUTA3Isvzm3u6PgE/ERcwh4B5N95Zz4E4E8yoKMjf/Pw8CfwJwlgOTQ1VQyAzcVTU4fU1+1XAWxt7cWOjHVbtqzL6LhYW6u6Tr46g3dLy5YtGUBbwIL6XXCEpTu/cWfLnUAtYIHAEgDuvHPnnR0d4OFOQmBqaudOs3nnzqkpMmCVw7yzw2zu2Gl2rCIBard0ADW3wccttfoAm5OT80lL+qVL6S2fgEV1tyKvePfjHy8s/Bhx+T94MbxvoHTnOBByyzfQwDe+gYu/YcCdlMCd442xBn42/jMcEGcHvy8KYLFa87H31FAB7KGMVKgCzJFYCeTz4RyCyqIErKkSZSAIBWBJlQl1rJcDlXIgVX2wlwNWRXzqI+ojgAzIUQKpqq6SAxkqQPWqSQ6o4lNzMICwWd0pxcoW5ID6OHpIG1DPBlU3yAGVY/YRbUDlqUzVCwqgUj5QFnW3KQC5KYt6XFSAdE7nqwpAAamPlPFIfgEiHAUAZRTkFKBaxwJail8gDl/tGgAJ4CWWANiIJQDfItafMxAklgAEiCUA+4hlAHEFyPdb+Qmif5LJAAzAAAzAAEgB4T/ho9mS/5FlT5Lqkf+xhzolMaE+yZPJ5CQUsDokaVP65Fudq+tVQFJffaizXmg2++RRd+TJtyYnJ1cfPVmvAOpXuzv7klcf5UJ6V4eiT77lXj0Z6lw9qbQ02Xuyr35SaLRP+qS3t69zcjJJXcOkGMHzkie9k9mIorM7O5MiIdmdJ5MkdEhdNCyjPhryrV7pk2+JuQXgfxFLAFQ3f3W0mZvNbQ71nWLlgOMPfITD3Nzc3NjcPGRu0wT+8Ic/fP8PMLyteahxtdsdcg+1tTm0AUD84Q/NbY1u4VMsQ0NaGRwcApgj0c+9DA058AAs4vtAR9xRwN3c7NAAuATAv0SNWr3E5fjDH2SAe0grAwAcbUOy274cadbOYAZ96pZZahvWAcxtQ1IgpGMJqHlImmKI62qHFmBulowDmCB/4IUHHG1RonGo2SGNR2dwwLnh5vwPDTv4rnZoAcCUo3Fo6MgQmK58YCQB9pbYjuFmR7NDOVU1ADgTkfdZFoCX3yGVADz4AiXwte/QAl/7mBb4GmEZUYCwjChAWIYEICtDChCVIQO+VkP80lIAbo+eEWydAWpVnwOWA197I0qwriDq/tAK4GsHIkDwua90EwBfs4lAoMYbpAIYl4uhsATsz3kZRApc0aBkl4t16QHRbmW4K+EG9SwVW3UlA65/VV9SYJQgXgr86hZKIJ0kXgKQFCAFiAqQAGQFSACyAqIAYQFR4FecnAzz9K90dLMAn+6JQQWwQj2tFdObGnByAvuXjVvYr3ulBkUz+3WLpgae5gQOMfu5hRVNWC1aLymA9brXz/y8U0Mf4NOBXsJdzldpCV8kpmhqAD9QmgNHos8KEF2DRGN6x6CXqN8diH0vUQMx1o2/70BS4lEZIAbI7zsguaZ+b2+vHIi0Gb3vQKY0InHitzJA574DELh0SYLo3UYgMTPxt20T7yZmZhMCdmfJuxMT7/rsdaSWTm2qH63/1g4xge59BxK//e363t6j3/6ypFvFIL5bFUjJaKa/t9f/7eahegGIBogDJ7vvwGhvIsjwbuIp870CEG0vOjUk9x3o7a9/5dN9k7495nejNWgo+0TbxPl3LpyvGzU7iID6/ole/6cX/Jn1DiIgu/fExAl//6Q/afQEmaWJ3sHB3j3nfSWnTtxLBgA1v/1xTbA2TJbht2BavHvvN7NLMnvJblSQ+N5CMxB4qdzxWzLg3eZGMMT3DjVOJJIBE0NnYNN9lwYJAVAFfDz6rvh8idx34Gm55P+F2OQbHzKAeAdYGsAVYJjJIBMIkgI1rtaZmelgIEAKTLPszExrwDVNCIBAtvXaTA1LCgSnWdfs7Ow0+EloKRDwsi7XNHkNwcm5ADM9MskSj0Ng2hWYnvZSjjQbb3PJAD4nQKl0SpnSPzpKoY8AcJTmVptHv0jAxYuJNMBvrz+94vpvKYDrK57+3veukwMf+Z6+evpp30VS4LfhN7539ezTb4TVptDARyveeOOZZ954Y4U6BRq4+EbY5wuvuP4GOXB4xfn+qnCYFPhoxxu29Z4HH6z7iBBIOvGg52ujZ0cQ/YoBjh47drYqdEydADtwF9dfPXkMMQz4uXQxhIzXmHwfIeO/WDuQBnDxIwpdTDf9D0p9hmNlzJWQoPXJBbUMIKbAli2UwNQUDbBlyxaHYwufhAh4knube/hJCkuAGOaXvqIjAXAA0QBbhtetG95CAayLPJBaisoAbg6wCJqouqpnQ6I/mkwOR3+wpvt+cmDdlHm4nWWcY48RAnBym5urr7UywTF9c3/kD98dDsdQ8sZrrSyrZ04AEqAv+CXxX87omPtj5D8I6Iv7ovsTmub+KPkfhfPFScOcFIj44oQx90f5/1kRX8k4c39U/icX9SWaY2TmVIDcl9qcGlD6UphDASpfUnP/50YAlJYwRXfjiqbsVsqBU0+Nbs2pIZt8jO7ko5zesh1IbUQFUO6ilAcB8TCjZUQGUB/IqA+VJtMdxBIOx0sX2EYF3FLKFFEB+QxzjgYoYvKZUkLgFvhgZUpZUqCoaNu2O/JZxnLOyrL5BfoA/NpqcRlr2cZaWFBJkS5QwFisTEF+UamFYUoZxnKLHnCHBRRs3VZQsG2bBfi6Qx/YxjLA/LmCfEuZauzQ3XpLUWnptqLSIgtTRgbccUepxcJaS0GiW8iAMsbCsqX5llKmgAzIZ0Hr24oZVjU9kMAt8FoObMEd26wMoaVbisqKuMh84qIFqefrF22fvqlAjLU9n7Hvvgcqf/nyfG5h955z2/klhEx7CkREALhwxocFQICAcIAQvlsas3u3DLhHRCCACL9nt9MpWWHKj6h0+fLS6DMsgLv8MtYSASAvWmbJirIkaJOkaDuTv71gDyx6P1g6t2e3Kvqee+zsDgEQwsVulSK7/f4I67PxKUxieHTgeIQDbLYIIFZuEsOlUwMi3JLfry4a1xsy7Y6OJSmAzLAb1Tt4S7vvqau7Rx+JAjvgZ/l2UAD3OBnGSWFpdxN8j6UJ5Um1P4ieWBbpSDG9o4v+TZvU46QFYIWzRCZ6YCnoa5QygNgAjFI27BNOKuDA1yRBtui3A7CA8yHps4ecuoAY+RBmA64GAYinGrCKx6nxZwksBZHfU0O4s8ZNAiqXFxSAB0LgrhW1v/jk9OmS3XvO30UE7Pl4/Ucfffzx4OD3zu4hAlbefvsvLp49e7SksnIZEbDc56sEXu6q9PkQG1EHgbLtVvbcOda6vQh1EECsK1peCm+xUbqcFLBairbn528vsqCuMYYEmHPLLZbl5xhSoOiuUsv27ZbSu2JXA1sELRWxpJYsLF8Dq772FgB2I5RjhZasOahtSGD3dVj0deQmNKChP09gEfRtKh01gCUE/IMPyA/+HSQFGCZY1T8Gfp2jAFzTwSAF4A0HrlXsCaIB9cXcMpg9p+YvXz/lzVdv+59IgG0P9cz3VLeqLrWIA45/OnK87/jI1hFCIHWyf7I/PDnZf4IU0JABfHGBmCuDUgYQGwDxO5SmDCA2wCuUMoDYAIsi+dh/R6YUmQzAAAzAAAyAFEB8ZhAjAzCAmw0wxDIAA7jZQIyl/EytwsSr/00hAzAAAzCAzwm8qpAKWCQxRPrT5wAOEOk/osDPiXQwroEb0K2s+nNF2oBvg5rAAyzr3HHgoOp6rFhg/4YNP+f+7mDJAHZD00GGse3Yr7g8Id7S/g2waf8G4hr2cxU/9HNSIGLJF6uiqbsVim7goGinBkoSIA53IGqA+jBD3UvUQEyFu3oeTgYQ1cPkQA74l54TqIU/5mvnc3SByrmCQy7XbLASwt5KVSq1pVpvbU5lLXsILM6p2kcB4z2wbTaYnpbhKiABOM23t89V5rgySIEcJjDHBmcD6YRABst654uDrjnENiQw13oItJ2QgNqGBmbmEGY0gLSc4CE6IK3SVdtDBaSluxCDpglM01lKq8QkiMs9blH0FrEMIK6AVmIJAOJ/WLvfb0esxgL+JputyU8O2JucdruzSZ0DB/ht0JJNneKGAdSWqIvW69ZpYgnAb4hlAHEFxFjwwtN53JXALAkJFm6BvzA1lNNn51/a2Hx2lzD/+GtV50WBPH6Nz8XY/BD3O1nWng0W6ppsjK3OJLQHEA4QwjP5y495/HXZSZmjmUl5fr+wyiRaYPdDIBoOArLhK0XWXrdvtK6mhmGaAJztl16IOiFBciFqsQZgfddYYF+VD35vB7wUxL5F43OysIbRD/udu6r2nc4czRZqwAFCDf7RfVuBTu87XSLUgLPE18COVe0C8ft2BViuhjw/V7RwbWxQtHAda7CSr6Giamxs19ZdVS5fpAYxXOxWERFqSMo8vXVX/9YPR/OSPHauBjE8OnD8Gr4Gn/+VrZmjH46Obj3tEWoQw6VTAyI+MFpgHNgau6e+v58NutimujxYA+P0+/hpwvp8TeJhzM6/+AbbwFyanQva+BrgXKpL4qcJy82nTGDdCZNn+502cS7NznLbPHYX6wJzCfjkp0m23y/4rPPVJYk15I3Wz8/Xn4psM/HfKwX26mych8wkj5Obzx5YPlD7z95sWDUrBGXyNTiFOe9X1tAEapgt7+kpn1XWYLfZEDUchNvCc7Nzsye4GsA2eQ2idVkN2XXhPXVgQVlDNleDS6yB9Xmy+Rrsdb29fujQeTCTq6FJpwaGmSsGe6s4RnwNoItt3H4LarA18TU02VzCGM3N+ZLkNfD28iI1+H3+bKEYWF9vL2jIF6kBnlRtqssENYAFm9+T7XGCBVhDpp3fVpLpZ8ECGKPsTN/iHPxi/96uAcQE0L/dkuK2S8pfo4LiLZ2CyvtNYYBuEXC6ukkA8N8TO8YxrrHubn0gWMWMna6CQGCMBHCe7u4+XQVdBbsJgJqq02NAp7vHWJDn9Onu0zWaADs2VsMJXkM8GAgEXIGgNhBwuRgNCUAFsQQAdbc7tAwgfoDnKGUAZMAuKj1n2jVWNcapSvJHWAGOGtIV4CgytssUpBTuLLwV9U1O7jiAXJufX1xsyScHLGXWMvAX9e1PNFBaCoHSUmLAai0qKytCl4GuwVoEhC4b00vwm8HoLfTfHSgqLeP+AJVJ/iieRlYUmW45V1BQIP3HPxQUFCFXFJrupJQBEAGfTbdGtIkpKywsYzbdipIBfOGBTRHt4IEdm1CKAtLDAgcgZYsCZRIVApWhFQUKibTtcwDUlqiLpu7WOJwaBhAD4C9kks8fxfcmDcAADMAADABK/gFaBPDAAw8UWJQftH31VVa9yvrTBx74qcn0CCAeKFO+RGJ/qVjBWApgIACEBdmLsGutrddaZ2akDZTBqEfK/gR/bbB+8ADnK7p55omNT2zcKMkK3XAhf+J/zyhT+LI0NGzbVqBw8wE0IQCMwpd1oAv8Ubjhnvwp8puMzJd127aGbSsVbhSAzJeloWtg4JzCjQqQ+gIJ4G9NMjdqQOLrUE9PA6twgwJAk4Kvsp/mK90ggagvi8oNBhC75RGVGywglKpyow/8lBCgtCT2jTgErDYgHSmSblWMlN7AqZtU+5IA6nmDakQyvdXpURvkOxBqpJA7ENoN0hd/EMC5Qfj6k3iYQbtR+/oTd+TTcKP09VPsoRIh4VAZc60Bcl/4LoEuuGEsB5AgfDgAhtwkiBjuHjKZHfpINNxhhuewdRBpuNnMn/TWQOThIoBFlOFRAImow6WACkGFywEZgg5XAhIEHa4GIJIihqeowm8AQGmJsmjKbqUcOMqpQTn5KKc37Q5EvYuShEsR+sPMUtCWYdWU1xR/pxw6gA4R3pEnRyJv4ZMikvf8yRDlTZToABJE9TGEAvQ7UhEhPregjYhAJSkiAIfYIsIsPJBWzJRRAQkZGYV0luiL/qzduvntL+nIRBcuA0jCJQBZeAQgDRcA8nAOoAkHAF04ABZF2nNBNi+WNJBfXIzaLzAAm/Pwk0AP56jeQEYD1icjUr5sQQKSeBWBAlhp/JMPs7pAjgx4MkcXeFgOPKwH5D+pUL4OUKwEim80QG2Jumj6bqUeOOqpAYhIGQ8TTT766Q1FtwPhtYQAkt+rhN99vihAG3JRA5gIg4dh+MtfeILMkmvCPFxZOWyecJFZMvd6HauKilY5vL0YYI9S4c2rDh1atTms2iAA+UoVr1pVDP+pNgjAKqU6Vq0qK+N+KIQDHDtX5eSs2ukgBswdq9LTV3WYSYGd5iloacq8M1YAtSX6ovW6lXrgxpQKn4FT40xYtUEAvq/UK9/fWVS08/uTqg0YoP/732+urGzmFoiAl1QLOgBeSwZ4gEr/e0kDz9MAzz+/7bWBhm0oCAmsXDnQBTWwciURsLKhKzfXnZub1dXVoMqBAJ6HzTcMDDQMuLMGGgiAhoHcroaurNyugW1ZWQ1KQg0A/7nbQPC2hoGuhlxVCjWwDb47uOa1hoaGgbUNuaoq1EDDQFZDCigBCJBd+hmeBwAMXsshoGt1a2jIGlg5MLB2be7AwPOgcl1LcBSeB/7Xrh1YSVQ0163Pb8tdk7VyZZbKEQoAKbq6tj0P+jdXPQzIqdGwTZwaAwOqjejJB8aAm3yq9rHTe9vKlQ2vqWceFuAg9Oov1EHgBgKmfyDXv3NHYwMgAX5NrifxQGUGJVBRSw4UgH8ZAe+Pf/3rRypJgH91gbBKrzf117+u9ZIAOa5Dv/7XCq8XeHK5KvWByoqAF4RDVbhcFet0gQxvwOt1ubwB8A9IP8M6rwtm4MJdrjl9oGDO652bg43Dx7kMPSCjeC4wV1xc7PXyD4f0gENeWIPwANx5c7SBR1yW/IDLYrFwDy7wkK9Xg6aejNcdaCkAsZb63QFtIYDxhvFC7kd5+TgRkDBeDn7tAb8qIcLRQMJ4V5cbAKSW+CTjhegtN6LohIS0woYGXApcDbm5XVnERZd3uTkhy0YAhQNudzKQO7cc4QoBNORy8ZBApNAGyhEAay0rSMvIOZTPWoqLKtMqi4pZtnXmlxs3/nKmNbLKwuYfyslIKyizsiaXcPqLdYrnDW3iKsZlU210mR7Nq/M12f2eRx991HNwf5OvLg8u+ZuauFVw4/6D3Ea/ndto4iNAsI+LePTROr+wCgT767hVHr+Pg+AqeM7OZm+yCZntwlUDbE3CKgasYoVV3LU2TCCnDa72A0NgEwvyguw22IzfAzaCVU5gyg+bsoGNJi6T+iEvD73+UZPYkg205DsL08CW/HV1fi4zaPysD2S2iZlNKq9sxD4ohFXVBizlnfX5xN7YH+mNSO/tF3vP5zsLVnE10IgeWAQdD+2lkcm0detJWmDrp8coga1byX0JALmvCEDqKwoQ+hKBXSMju7ZuHdM9893KA7tcTGAXvMbK1gARUMUwY1tHglyqkaA+sIthAuBxl1CKpi8OcDEs50ssfpeGLwjwCURLOr4gMAIrkFjS9CUBtsqABcR/DVAFaEuD6Zh4DhCKjlr6FNe8CAgpdum4iQKygcO7kQCSqaHZfBSAkw8CgzrhEgDq4/X6OiUBzhLES4DTJOFRgMSNFCByEwUI3YgAsRsRUN8YQK4LycmNDvmbLlrhzx1LDjUr36UhbJ4AkDevDyia1wO45uG7X5F3wByNWgDfvGuizSUCzaFkPCC6rwA7o9h88t4GLCC6bwPHJ5dDaL6rMAEDRDqn1wUPaK4JvvmEBAwg6xxXBXDDN48BFH1fEW0eDSj7vs0caR4FqIZW2jwCUA+ttHkVoNe8EuCaD5vNExOY5uWA0LzLGw46MM3LANH9Hobx4pqXABH3YTCwbC+m+SgQ6ZyJcJhhK7wT6OajgLRzvHuwzUcBad/3t2GbjwKyrsc3jwY0mkcBms0jAO3mVYBe81EgxvoJpeIRIL/ilHDdqecppQBWnju3kgJYZoWXXLEuIwWWWRimqIhhLFqEFIAf3Fm2DDxYyYCV1oKiouefLyoqsGrUIQHOMaX8QilzjhBgLPAnqIQMWBkFyCyBosuet1qfLyMtGnRrEWgdPJB2Kxw42KnEA/c89dQgEf30jv0eF3tgUaT5WlKmzw+4UFGSlUrA63CpPmDHuhxeHMC2hSfCiiSu/on+NhYDnGgLt+1xyHKwjj2glQo04HVUwD/yDHCVd9iLAqChExO93GJxZUZGJf/txN6KE1FTMqBiAhqCv3daUx/mlAp3wGBbBXDqRVli23hD1ocjsvKmJsS6lN1aAQ0FU6NAKsuZwnUrr9qHJSqWb0MCF4XYX1y8+OLDlQTA0Se5+Ivwipy/yCABPorEJyV9QgIkHf3o4lE+Puk6ARBOkiisDXDdymZH47PhOE7gulUcuD1RYA/DDVwbcuAq2sSpsUfIkQ3j8VODbeufCPdOwEXXqaNAYWHyhTGTD0xvb69qeu9xVPS62pDTG+xAE4gdCBiaiOyjql20n24XhQcBRimtgwC8ZiZCkpWf/0BGCMRYf7iN8gsTZvN/oQXMVEn4X+0pkgivBciTRF5tkCaJvjwhTCJ9xUSURPYSi2ByvGoA1ADJV82lr1w7tF9XCq8uI/FT60jiIwBZ81GAsHkRIG5eAMib5wCa5iFA1XzCYr1oN31bosy1Mm1LlcgAPiewMXlj8trVpMDGK9Xt7e3H3Mf2kgGr2yNaQ5aher7yCvzYY3X1aiKgvX3+iWvw05jV7dUkAHA0f6W0gAPa15BkAHGXqy9XV4OfISJLa9qry7u63D3l1e1kNVTzwABpDWurw+2gj5K7usBYEGaIiCzD6ghBOA5r165efQzYWU08lyAS2rgmzvaHPwMgtvo6pUxfv3r1Kh3QffIYZYaRk5QZaIGrI92oDbjSIDCCWN8NgKuoljhA3Vb31WMpuSdRBOwlNXAVxAOdRLhC13D1KoxPyUXUAYAqdQ3dPJCCBlQDBwsOwfhjoO4qfeDqsWOACcH47q+HlK2hLIFA7g+I71b1OapoGAseuq9+feTrqh5EdisIBeFwRLtVVWMGDlIwF7KXkFMDdlX3MeRIXx1R9pxQCXr2fYb9gX4Hot5FaQ8ClFqcgx/179EGQALcSywskH3K5zuVTQ6UcJ8xtJWQAiXiS1sVgQayI7dttildoYFT0VfPdUSA5L7WvtgA1Jaoi6buVvqBA67gZ0MppgZW8bsDLQXgLmIZAAWAOj3XjTzJjgfGvvLYGOJmIljA+dhX7v/KY2oCC3Q/dvX+x7pdpEDw6mNAVx9Tf8wVA7jGHrv/K1+5/7H7uwmBAKjg/se+AgClKTQwdnXsMZAA/FV1FCZDN0gA4ruvPqb0hASCV7sfu/+xx+DnrLqDJHcVC9Z0d9fABM6x7m4niSX4+XuQgPtYb4AEYGDd3fc/pl6NvfRKjQu0HazBAnG4Ay0FIMb6vyh18wCnkxJgGDrggNd7gAqw9fbaqICg2RykAWxhszmMToEGmDazuQ1dNhI4UAHf96hAlo0EbNznSSeQnpCAy2xuhp8sJQVs/ea25OQ2cz8qBQpgHQ53crLbMcySAQcqHCH41bKQA1U2ArBNNPJfRmtElY0AXEPJgoYQZasB20hyRCPqFGqAdUcBt7psFXBgY7JEG1Vlq4Bre/fu3SgILF7Tt6QjemARlESlf/9cwFF8HBI4OkEF1B+9dzL7qG6SCDDZ1zc4ONjX10sIHO3r7OwbBA+ThEB2X9/QECD6+kiBzurO6qGNIA0hkDTZCYLBv3pSIPv3Dqjf68R/zpGOFUD+ogzqFwZgADcRiLmyKPVZgNs4Df43TllZC+UL72HUM96FAHqyejDxC1ldKGBhgQMQ1MLCe0hAaI2L6OlZWADGIzQe6Om6lFUOi2zsWmjsyWpcWNABurre43ulq6tr4dJ7lxobdYCs8vcaG0H7WY2N5V2NjY1depaA7S7Yfhbf8nuNepZgnZc4oKenvBywOhkWuhrfW5CNsJ4lUGS5DNCz1DiU1UWZIRLaRQR0XQL1wnEDT2F8OUG3guHm50R51oJ+Br6v+LiFrJ5yXYCbT0J8F8igNdIL4txc4GfcAif89KbfgTR20Z6uz3QQoATiUJLT4BeVVxpG6TMC/Gn9U0TfEuFCnZnw0ac+oYQ4xXTvvZn+OqbJXwcyFOvrkElo2ZZJU4OTYaCnixkE4gBbXZOPooZ7s7P5fiIGIuNQSSD6gTsVVfgQgejvP626vqmOTCS+ZTVQAyyl6IvOoRR9DdQZqGug7iXqGqiBRdG3iWUAsQT2E0sAEJM42NuLersMD4T3VOyhA070hhGr8UDFiRMViNV4wOuQfOWGAGAnzOY2mnf8TsAzuifIgRP8Z+vVBAaoaOudmGgDD6q6MQAb7p1om+jtDeMu8l+D0NgYaq0A/AWxDCB2QC6dDCBegE+pdNxk+isqbV0CwERcAhNUGjSZ0qnUYADxAiyj0v82gHgB6C6vUUrzZWio/CUA/L9xCRyg0n+YTP+ZSv+fAcQLEHNtppQBxAlQSyn6s3BxCFAXHftxMICYAEtB36DUnydgptTNAhzhihO9DuQmNBCGd3ls63cgGDQAr3/q6GWY2AHUlqiL1tAiAM9R6s8TWBSRn0IwgKUHvPceJTAxQQO8d2lw4qXBS+okOGDzSxODANlMYemlwcGXKCylvwjPY75IAbz30ubNLyH66Ys10gaw+ICJ6FOxJpkMwABuGkDy2t4ADCA+gFhKecHvNQr9q0JfHCCFFmgcaqQA3EMpRwYHwQ9SYGhwaA0AhgYbSYG2HqgzbcTAYMOlS++910OawT042AA/dA4ANxnQNjg5GGoED0NkwJrmif6JvsGjACCsYbCtr7dvsKSPopeGGicnhxrJgaFLjWcmQ5caSYGUNY2DQCFuRpEAQEcGm91009stzldSIP72uBsJLAVVU8pUPd5CoXEAtKyiUMuNA1owq3HAeE/PODnQIgKITShgfBz8BcD4qp4eEqClp6elp7qlpboHLhEA4z3VPavgwXgVWFAWggGqx+eBxqs7CYHO6vET8ydGyQFA9PbMT1Z3dpIVDYnJycm+TsRYILsV9k7f8eN9oI/IgHHQs51AECQCWuCggZ4C1ZMCLfw4IISdS3QAVwhyst7IHUgDoD4I0B5mFkVflkn+6638kz8GYAAGYAAGQArIQ7ZryAAMIL4AzbvYGIAB3GSATrfSqTcK/CNJeE95FNhEEl4uAepIwiNAXl6ef1OefrgIbNq0w+87eBDn6tFIePkVDsjb5Nvf1GT3e5BENPzyDMPwwI79Thtrs/vz1F0VDb9igePKA/4m+C1Jp2+HOlzSOMMD/7ipzu/jgf3+g548VPiV6LcuuQybDtptDMM6/XVSS9mDQuOt0Ynm9PGWDvqbnE7n/oMeVXjXbKRxtskP0gvd6vH7gJ86ZXi0cdt+IbswcJvydvjrPPLwaONOXzS1ODX+8daD/ygLvyI23uSXjU50Lnkk4WLjNvtB5chEgbxIuNC4TT0sMgAoczDSuNOPmVgSIPOM0DjbdBA/cU2S8AHYeKT/tIGjZ7jGpf2nBRw90zPL8gOpKwDUz7e36hmRAPXzswRGJEAFrv9wwFLQHVnc7WSyfnanRG/CVW9K1/xMCLvDdOedAiLbDleoWgDhd95pgk95RJrEvXatW9k8DBcAAVkTTfL62rWvR5tfEwmPAAKSJbEQobMk4RKAR1KEsJ+tXfuzaPPRcBnAI4KTlJSIN2m4AuCQFG57eTn3NEURrgI4BMTe8eabILBcFQ4AbosCeZ0fuNdV4aAdE3dXppSsrNfL33xTHIg7+JsJ3RENK389KysF3uhprUl+wyGAvv76m/y4rn3zzUhYVDrA62iACyt/8w6MpZ9BSyJqijonLJq6W1XhNANHOTUwky8FM/kopzflDkS5i/Lhq7UPAqsjBwHqw8yi6D6ZkmVCfhTGAAzAAAzAAHSBFGItceCJJyiBmRlKgGXpgCcYBuVJAC6oFWCYAGK1ALyvVpBhgojVamAXL+7GI2PCE23AxSjk0gbef39MHj+mYwkmkVz1K7jrfX3g/fcjd00J6BfNSzjbwKo2YIBdYoZdGOC4QtMiMK3cIgA/VcgC3BQVAV8W5RY0cI5h8s+BH/kMc44IKGVKFQs6gLVAXCqwEgEfIBc1AA3FLxBjKb+x8LhCqm80LBrQMEAJZGXRZmigA8azssapgIE1awZogPEGt7thnCZDFxBFhvHx8YEB8EAKDKzpGu8Cf7kyCAFONEBDeUMDXYasrnIqwJ2b5aasIYuuhvGGcrpe4q7jTdVLWVkUvTQ+0AAGG+xD44SATHEALIruJpYByNXZSQG8fPzuu4/Dfy8TAluP8z+PbyW39PH58x+TWoJmTtcwTM1pflkXeBk4h3fXc3bzy0SWrtoYxnaV0NLdV2vOn4a/Sp8+X6NkkABwE3TBDC5AOQkA2f0Hu0mAGvircVMTw91lkKQG4F3Q+dMkNXSfP39+DFR7dQwsEGW4ej4iol6C4yxI6Qg/cLAMVQFaAE5/zkCM9SClkMAzPrvX7rQ/vZ4MOD83Pz9/ZnByvn3Op0ZUwDNNtfOzM62tVRUz7fPtTWf1AJ93vr211Xdw/fqzvmDr/Hzrd7SB9TbQ/DMPesJAv1r/TOtcrWu9JtA6f6YVRHjCFXvCoO31gT5vkxawPthTBVv8Ttjl7Ydm1lfNs+s1gJq5+fPcwijrGuUWqia9+zUA5/wM196vKhgGkt95cH24tkkTaAUdG2S5F9Qs6zr44IOzPa3r8UBTsRMaF+6MyjXtqvVqZKioCPIgjPdxi2zYrgH0h13PyIH1rle0gPOTLq5PWMbrYlxwab93Ugs42z9tAyU+HawIhyvgAPzKFQ48rQE8aJ/LB2U/A2dG+JlnwEwJaI80sDwHTH2nHwJg5JoCc07tuQSIWZfTxwGnfE6AK/cI1f6w3tkesHNAv2t2tulp5Xb1HrfeOceVEO5vD+wn2OOAnj7LA88Q7tNAo7CEXyE3YQ4z33lQuWtGgEVRplpw8iFWywGPvclepwbgaj8C8NT5fT4fqwSE1R5UBtCWzY6yZLc1IS1l+ljRkQyQrFZmcLI2u0cFeJpYW5MHBWR6/HbGp7bkOSiulgN1NsYp9ocEAKtd4mpZL2WyjM1pc9oVvZRpk6yWAn67jbH7fE2MRwbUyVYravDbm8Shk9YgWY2dGh4IeNTrBUB5ihWv+AWoixaj7E0+zP5QhwA+y/4gmfiSDDdyf6hzMsj9IbpatT/UofeHOuz+YEPvD7YmH8oSvz+oMtgkq1X7g1+1P8hXK/eHJqcTtT+A1U06+4POofI2Yi1x4NNPKYEjRwiBfdxjpzslxd35YXSFHnBbX0pKn2wFFhCsd7rdnbIVWEAIa+T+CkuaQOg2hWQrUICiO4/rAX1uWZX73H06wIfu0EvRZy+F3B/qAKBD3RFXn7pTZAnQI30kJSXUt++ll/b1hVJSFOONnhqd0TcdO28jAW77NMSHK3tMY/K99Glf36cvqdd/sfa4JQ/EWAX5jD0zEcqSlmbhFjL35BTkJ2Jkght5RAAy+TVYIDFPRDhACM/DxQMgUUQgoBcOAEtExWlpxdFnWCANI35zUnZEZIDnb4G+Ax++l4SyZFVaAsB3fj/x9u8lAOxIO5NfkLMHFs0vZUYccxlGq0algBCex3drnhyBwPdGX35MAojhkYETEEmGb37cLQHEcMnU4BAJ0N/9T/IaNASBq5Nf+hINcPr0xJc+JAbyBhfGF6Y+/HBhYTKRCEjsX1gYvwSBU4RA5uDCQs+HxxcmI1NDB0j0gBwLZ8J54nNdIDGpLhz2RJ/qAwotCWBRhHx9hNzRo4DFO0cLKO8vpwlYLLVe7yELSwx4vd6KCq/clSYwRwswzCGvsuobWzTDsHOU3Uo9cAZgAAawaEAcfixsKQC/JZYBUADKa8fhZQAUwFeIZQAUQCqxDIAe0LqgQwyAl7vHTr9MAZxmx6gyvMzW0FmqYV6mA1wsZdHUALUl6qKpu5V+4JS6MQCBDIACoLgTDwZwOIanpoYR9x/CAMMdHVNAHR3DZMBUx9QwJ7BAADigGTMId3DGHLoAZ34L/KraFo7QA4Y7phzD4rfbhh1T8joQADDhWCcC6xwOeQpUBthqRCAbKsOURB1Tkni+eyUSgARiGUAsgUvEEoAXiGUA8QMo75+uPJmgmh0GsIgAOzdfGyQHWFd7+5lLgy5yYGYWAJcGSQG2dW5uHl4if44MYBnX3NzgmfDkYJgMmLa4ZmcnQfsVFdNEQCt72pvvDZ844Q22EgGuOfb8+Y/7q84Hpl1kRbcGDhye7a+pCbSSdutca2B6uqY1wBKPtGsuYJ2jGOm4nK1LHIhD/VeM7sQoCrz7rgyoxEgE+lIaByekiLK3RAmA2z0Bf0y8++6EABRhZBLa5+MH+/oGJ0hqSAlxVUzAj14JgAUjDng3pZH70Qg/j9P4EQnQyTnq44AJAktuN/djsDMlpXOQpOjBlD4uEzygvkvUrY0C8W5k+PQGbqIz1CcOAeHUUAhrqR4jK0aqy1rpyVRKKfrbehdSih6gtkRdNHW34gYIO3DUNSyKLtJ+kSv1RdT3KrWA1Id7KYHUVDJbEiB1M4ktKUBkSwaQ2FIAqZtpgdT0/rOakgKFDdyP6xVakgBbBrrAw5PgH/qm0LKzDqCHhocbV783tQWiT6pO4aiAtG1TjvGh5kvj27YVQkR5CkedoaH5yOzE4OwTa7v42jtwtiKWCucnJvb0BxpSSYEnJ/pdFcETQry+pS2O+fbZ2SfaOwiLTn14S5Z7W2HWmidTSbs1rSsNxA40UAwcr8LqX2pKCTSkrNWWAhhYrRMvBwqz9MLlwDa3frwU0LcjA9K6SMKjAJEdCdBAZEcCJOmozpZfKTtBqx2ebWfLFGd0CZtXAtlJk+CfRvNKoLO3c7JPq/nU1P+/vfMBiuO68zzNPyHbiqX4zymxL7IXWHmsTRnduUvK6kJURUxStiXWxFlHsFbFRY02U3XIWiZMLIjBc8OVYks1MILIUGSXCSB0i7QERJgR0vAvAgTMMIPQyOGPQDNKCUn8cZLiKrtXydXde/1n+s/0635P1shI7i8w9PT8Pu/3571uBuh+zyYC2sbD4WFfeDwX3Xy1wS32EA6DN4i+sErzdMN/EoDc8TC8Knx4OIxu3rt5s8jDt33wyvOwT6X5zRKgDeTsGQ8P56KblwKwSmG+SsrNywHft8eTfGrNy4EkrtuQzUcDGs0rAmrNKwDqzUcDGs3LAc3mZYB28xIAp3kxgNW8AGA2LwCYzQsAZvMCgNm8AqDefDSg0bwc0GxeAGKs/06o+w58DYgAKPCNA/kKMIGv+Txbt3qC9q0en4oXAfjaJJxUuD8IHtIvogkB8EF7ewfzEzjdhwYOcWpnf1b39zPfPO2HEIoAo4xhB3gDC78/M6oJdLBAZye3oQn0MHb2YJANrQcTeKa//xlMoEPqQTskNulgZ2cQM+l2D9Nwf3+HRlkjh99MOuOCcZA+gz5Khc1rgOjp7OxRtRcDm2d6guDtclFHj4q9BNj8rcP9QJ3fUrGXAjhai8D90wkN3dKBtQlo/SFqSQ5I/+xUerldvDILkEsVuMVEkY0NdLNht2MDpVyihpgBxCERJw2CuqVZ1gYNzcuB/6Wh/6cDaxOInaRX1Y1QURqRWtw7wEoIWOfJAHp+xE0EuEfgnH74AF1TVuYlAea93jI+JixgBDjw1uAD1jKvQGAB3hFAbBihMQHauwG62FDWgOuhwQvtN3hxAdAJ3jJYJxcu0AAcAHnn3XhAwwiIv8y7wVtjxQKsNSMboAMANOAAbu+rG6AHUKmRGjeOB1fNyKtgswxONYgVkttlddPz/NjDPYDmy2INWBsIAUFy4GHQFpnkOctf1wEd0AEdiDVwH/Qikf6iA2sFaFbWWeXdf0bcDO2m3LRb6QWLMuCm6Hz4iAuA96tLN7spmo5+SRlwU93W7EWawgYoqg9oUekFBGC9OX3z5k0FB+ikhUcsgHbTtFLKDIDoOIT+vCYHnw7gAHFx38MWdzrWgbUBFGOLA5QOdmXpQCyBs9jiAIUJQhHSgTUFxMV9OaJSqiQtrYQq/bKC/j1OBx50QLic28gCRqVLvW0CID4zMICisgWgRKTctLTcEkX5BSANS2OfASAOiThp4rKuwaGhAzEBeP3H/43ep6rcAkKid9cFMie9u3a910uCAGDXrhuP4xMMsIsgLg7Y9WPc5HkA28kFaGuago+/xUr+wjtTU9m0wbTLhJn8hV3ZNnB6KC2dwozrwi4T/B2XLuWTz9UgQA4mI20w7xKSV4+rjbW6IdKFx9Xi6o00G9F/gC9NAGSrHroUMBEQADCXGmyl2ETvLlsxqGs2NtG7y8RcEGHDjar3jJH544QBNw/OA9fTGAQAbAbKUGzGrS6okslkNNl24fYH0w9nhJGkSfTukkuDiAY0iMd7o/U47ri6Z0oilA58YYDjhCIHBGcFGRkFRDkUtrQUEgAFhXCVxkJNHxEgowWe8loyYgcQh0Sc9F2UFU/3AXgYBCf1z2V+TYOTyzMbuXCq/2SEuHUHIGJobzfw5nQhEmANIGK4dMnAm+emoYE0HuHXHaAZf0hAuI/fHwr5hWdIAE6P294OH33JyT7hmSpw6RJ8BFGkCc/uXUgwafm6A6pJ8+a5bD9EniEBoU2mHyL+kABvLh4aEEECqBd0QAdIgYdBD+aaLqdPiwHtNV1OV1eLCI0lWhg1NSUQAUm5uUlEIXGBiZJWWdMlsnXa5MjlAJU1XXJPnzrNRZPUxC3aor6mS2UqZ5aQm8AtV6K+pkvrGL8MipC0fIeWvihAlWiFFhygNS+vlQjIra7OFZ5hAAWtrQVEgFQPy5ouMdZrImH9LxXYHXrNbHvtHQJgyjw1ZT5EALxmMBoNBCHZaCNtyKZt+B5Ks+lsoqS/Umqesn0FHzhkPMQ9YALvwMZf+8o7r2EpTttEBz4j8N8wpAOxAe6LFA/F9Ur6HIB8UuAqEUDTltctkSsRMQDL+6+//vr7FoKQaADQBCFR+a+//Xo+CXAWrj+81jouVsDrSlJsZa0ANClgIgJo2rDLEBnCGIAxFVQz1UgQEr1r/S6aICTKsMu8y0ACZBsoQzYJcD867h4A/yCR1ET6mg7ogA7ogA7gAvIJttHSAQKAwhYSWFhMLV4xYAP0xyu347PBAy6wcvt2afzfLHy8uIIHGD42AyD+tu3WbflNR8rAxx/nlRan/s2KreljeVDKwMpKXtPSUtNSU9OKPCZl4FJOXhMjc87HWMDZxrymVeeSP6+p0IIFWFoqU6tbW1JTW1rzsQCq5WTLydZW8FAofwXV05A42XqyMeoF5NDIP9kSHY8aQCneGxcB1uAB9DAAcXG/I7IGSvzke4RAYtFvCIHERMWw2tvRgFJYB5MvqQAKYV1WB2RhHbp88HLy/v2X1QBJWAfbjzP/p2xXA4oiYT2yP3k/+4/N/QdVAH8krMvCv0IvI4EiN+Xnw2oHYtq/dKkd7SHgDomrBb20H2xXAYoSiyTVaod1PXhJJYeoah28DNJ/RBEo6ufjknTiwYOXuZhkQMhJh9hCUa4iUViPPBrfflDRA0Wx8YeogCQsZNKhUJEk8aixhUhaMpf277SBEKVcLSQgX8dOFJYioDC59+9UgKIihwLBh6UEuPmSKoWlFNKgI6QAcGGpjiWlsIgAGBYZAMKKu186u+drRAI/cxt3kAEL3XQrCUD/dAH85D9C4IH9kY+divC+ATMV8V+YTxIA9AqMzIKRCgMs0N0rNL0AU9GMK45pfqH7p/TCAuOqBccDvQLOuis0VipxcMGuhVcAsHdhASILK+qpKAHG6ni0okMymFTMWUCStO0RVft4WVmLU9XNOYDvONXgpQAD5WmbiwGt4CMAW5xszeB5gDmANEop9QAOUTNeNBxAnSIwBwB28DxwXyT0Xc0P1PUFAA6TAYFyIg+1VgV7FaCWdnBbNYdrazEAK8VbuSgaw0OAcvMOwF4MwEW5eBuvW5Q9EqAEoFzIAA0cpiirQo1UASq619RDUh4lKklTtDj2w1pAAGxbhaAirFrHUZSbL6dQV7WhAZ9aa8rLvTVuIR3Vwac0hFWHdw07P41LPGo1DqByb6Bc2h2f+zH9+QEfEOgPUgfa0gEduKdA9L2JaE3pgA58rkDc5rLrj05R2Y8+Orm5PFNV3Nl7cvPmTwFwcN/mskEs4NFPN28OU8ayzfsOSoCJCW/5BLNVLgVMpmXvCGX1BkwmP29b3pmZOdkz3LEzs3y8o2NSCogOQSdr3mHvmMnMBMb95TsnvBP9oQkJUFxc3NBAuRuWiosrmf1XvRMh4GNior+zvHPnzonJ8plOSQ5Plm32Uq7Nmycf5XKYmOzsDJZPlINvkxPl48HgjMTDp2WbJ6upbJD6JAtMBDs6Orzlk8FgsKM82AGeSXOATcN+AI7YclxMSUm5uDOYY0+xz8CFuuwTmRe9E50RIHyzdLXYmL1aeiowxwDDKSkdE5ACpnCx2OFMiJVHAAdFOdwUDb5Z/8JE1GNPuTgBl/RKGZ6Aj5OZM8Md46KyOq0U7XRTbieVxabQ2VleDi1TxqEfOwy0vFwMgHc6oH3wBYGJzP7yUIiJKOUiXI3Ws3MmfDEo7jgneFPopyk3A0xkTlzs6AiywPh4ir2jA1ZNDDgpGJTbScMcQKdOTIDXvSn2nJ4eEFKwc6Yz2BMsFwEOPiDKDZIunyzP7EnJKR/vBJ3XUd4RnJgABb6YKQNAFn6uSsGOcVChjskgGIKToPfCoLI90sFnBeYumqJdbJW8wR647m7HxcnyMHCSA+rklQClq3mltlVbadOq7S/80OjpAe3aO2Bnd+TkdEqBJxgdOAAeSrjBF+zJ6fEAyJOT0wPGVYpnQgKcqKj48ERFTsWJJ67u3Hl150uZVVVBT2DInhIOD9vDV8Oe8NXynVfBazzw1Q9Hcz78MOfEiScyr76V+dbVq9vAF/gegE/Yr5evZoLvkZAqKk78Gn4+IT3m34IP26JPAiD2r3I5wL1Zu3dnbWO+dXVlHe06Cp7CZ1nSHC6dqLgEcuBayuK+MrMgCqzfknr4asVoTsWHOREg663dXbuBMUNkHQWNM9uikNgcnoA5gEiO7mZbP5rFRHKUb1/WD4ykScOwsrgvMRBjmYy0k/i+LBYR35dFO9G3ZBTwiHBfFu8TdQ8Hh0TueZWZ/z7twgURoH0TVFrtv7UJt02p32blmwGWc3OBudyE3N40baC3rxZYDQb8bQkJ4xfr0qJDypaGlNR7OO1wWvlMXblvKBxOS+OTznDS/H1Z7Baf9O9r6w7XtvkHJ8d7PZ6+tl4W4My5+7IyxEha3eGEJF9o8OLM73N733yTuWcnjjcXOo7dw/qoHRr2+Pz+8Zna2uFeNmmF+7IYhAXaxi9OzPnn5vYdDiUJHYfWxTfHd774Ut/VF1+qra0LaQNJdbW1O1/0zgy9+OJQr+9ir7aH2sN1O18aom9efbFtvG8YI6SkcGhnYMZ1ceil3NraXgzANzxcNXTRc23G+/u62iQMIKEtXF5Xd62u7mLCYW6P1i1KvqS6i9fqZtLYbsYBwmnjw9fK24b4HVpAmy8hbaY2oXccF4jSw3Jf1p74/4kpDjh//sLXCYHz539MCpzf8x4hcP58yd8QAufPj5k1JAfOn29W/901Gjj/lPxyHy3g/PntChfYIICnuO9dmMD2Zs1UpEBzvhDXkWqlSdW+LAK6ujZSVFdX14945MLz6v3wFPuvlO2i7G9odBwsjqRcWgAlBbRCAjE99aP8Lvykz2+PPGCXNSLcjiMfGkwqKuZKAOHwJjyACA9R0pMA4WmG8ERGfKqMsZDrxyMUF/89lSXhFYH4ePSi8wggniQs9ro2grD4C+Gww4pcOYcblnCpHWZYomvzHilWP3oYfSC5mM+seG2kChBfrXBdriqgHdZnBUhDIkz6kWKcf1mIOu7wBhxFgF9imQtACNOeAzDDiQC44fAAdjgsQBAOA5CEwwD3Rd+RqfMxlHTgboHvX+ux23NOYAO/sP/iOx1PP12R8zQecK3vlmnq1i3waVciooCerfUVTz9WceKxiss9HizAXv9YKXU2n/7yT04o5RENXINAi4X6yU9OnPhQG/hFz7XliqaWxrONFZcrcuw4QM/A07aWRkvjT35SoZREVEj271x8zAxCoh+bqsAJCeRwrb0i+2z+rf9xa6sdJ+lr9mvjFY89+9jTt+z2rThl/c61nmvDt6ambuVc2qo0OtBD40PcocEMvh57ToWS+QNzAD2YQBaJHlpgtma+ZhYfqOlj1q9/8yYmwJpD9WEBgj1wggHc3CqWgg858IwE2BqdugyYl9pvHdAC+mRAdBYawDMxBzRDIk6auKzkHUc8NMgHH/nwziI+gNT1sACEepRQOhAboJpQqMudlO+EBFIGaKvTqbh2IQKgrY55a4NV+XZLRcD5qpued+ADbuer3d3zThIP8955F0FIFLOyoHLWiLLSbjeirnGNhIrTuskj6g4LHYgJoAtHsuOguOmNH6tKDjibVokAwykNezmgTcg9aEUU5YEuJvSQp1GkaA9OQg9aKUR5oIwx96CFPAA5EPeD1uEQ5cGtOZbcEhm1j4eHRF+SSFq1dRLpgA7ogA7oAC4gXUdGuvKB9B+zOqADOqADOoALpGLr3gDV1YTAlSskwDInXGB5dAAwqQOjCCIKqL4yemV0dHn0CiKP6JCAORQqDQVgeHQYfGoAF3jdWF290nQFfK6u3rigJA7I5dWWVzy6VFy8NFqc15arpCjAYEhdNhiWUw0GTMBqPXXK7T51ymrFBJacztWmpjyn04kJOK3OvOLiPPANEzBalww0bViyGjGBYvdS3qnivCV3Ma4HAwBOLRcbslWBq7xai08tLZ0CX8XFrVeVxAHCu6O85SvVbnf16HIepagooHh0tNjtho+YAJU3Wmw0Fo+ale2VZjE8daq4+NQphL3ytIcGlevhFAE16YAO3GPgJLY4gPgP9zoQE6ANWxxA8D9OHVhLwDewtXaAbdu2kQDbMu/cuZNJAGTemZ6eZglMYNrj6ZvGB7bdmfbY+6bvbMP2cGekr69v5A5+SNvujIyMMA5wywpv0mbrunZ6Wg6kY0sHCIBabOkAAbAJWzrA6Dnwsem55zaUlZXBjU0bnnvuOVXAOz/f8FyNd8Q73+D21syXNTQ0zG9QASbmG2pcE94a1wiwrJmfL/M2zDeUqQDeebphvmxiYqRmBLTurfHWNDSMTKiG1DBvtbpA0yN0mbUGxDbf4PWqABvK5r1Wb1nNiIt2zdfMj9RMgJDUABBzg2sDjH5+ZAIEVOMCDtSAEQDAuL1eaNgw0bBhYkQ1aYnYDtig3g8aekCAMi+jCUbesg2awIaRGkFWSwNZSGCU3/scvihAjPXzn//8H3/OS9hS0vuBV5KTIdAY2dOlZW4fj/v5yxYqfyOzqzGfan5f3fzwYeBhI5XPBURRL2uYM0DXU83c7uaN2zXMGYBVo5JplHkE2G6hmhXDkZkLHvIpJRdR5gLQvD0aUDBnga6IxUYtcwi83Ew1s8XpstCRfkCYMx4a+X54P9IPSHMW2GjhzCyN2zXMGSAy4v5Rq3VJx2nFrgxomksBDHMxgGUuAJjmPIBtzgIE5hAgMgcAmTkAyMwB8DDo21LN7ZXq8kGZZEDBbYn57UNyezkwLbG/FWUuB6QBRYUTBUgCUggnCpjWCEcOzGmFIwNEASHCkQHTmuEcrC41xCkEhAgHWMO/AkcFpBwOay0GplXCiViLgDlkOGJrAeACigpHZi0A00rhRFtHgLnocBSteYAJSByOorXbNT/iLYvjA7qlYs2acnfKcwFdVrYWm0YAEBAXjtg62jQCTLPhRKxRpjwwB8NhrdVNOaDg9iFgjWPKAf4mXFMOeBgUUlwRGa24c4ffIwTOnfslKXCOJCwGIAmLBQjC4gHssCIAblgCcO5cg+JRL9UHYuDcCM60JWLgXJmVENAO67MCpCGRJt2ANVdLxHwT3rQ8EeAHeLP4RIA/YtpzAGY4EQA3HB7ADocFCMJhAJJwGOB+aKdEzKzEQzsR+osOfJEAj0QMYPcgNAyBFAJ51ihAnPQa7DgdWBtA3DpscWdj/umUiQiw0Qbz1NQZbMBIZa9bd6bUjAvYKANsHB8wULZ15lLATJWqZCIAZyjKtM5WCndm4wPakoW07gyAVDl50qXGM1O0Wtrysk5NrWO+sAC2487gd9w64qGBIw7QfCsZkQ7owOcNxFgmI3W2ipnqOzK5fJXDpLLuAHyRRTigit2DnnK8ikcYoEpoAD1HOWcEAS1zyST/2VGT/CsCqusO3BWQMReACxVghzTw5tbprVvfHJAkfZYymkwOmDS7JUo66c2tW4fCPVvfTIoAVbwRW1YZAoGeHrsIEAz4joN78hw84HA4btbUOBwRQGhPGBoQ4V0Er7QUtrR0dYlzUNWnwYstLbMtjdjAZLBztmVwcgwbKAnO1Nb2d5ZgAwm+uatXM69GnmoDSSev3rkqWsNCEwCDQ7xqxlqc5H8NAg+D8M/13Bl/LQMtL1dVvdxCAFR9d+fO71YRACUQKCEBXm5sfBkD+C6vEpqi6JLvakkEWIBIgIJWi6W1gAD4bsbYWIamvRjA01oEniWUDsQGuE8SVqkopUrS0kqoUqUVLP5dBx54oDQiIwsYSxVkEwDx6ZkBFJUtACUi5aal5ZYoyi8AaVga+wwAcUjESROXdQ0ODR2IAaD5lkd476MDdwGYwU/Jd20m+MMScVmOAvCswawJ8He0tpiefbfUbCi1AcSpds/rDzmdBIDBSBuNpc8+W/xDJcmBqWe//OyzRoC9iw1k0wbaYKCnsAGTecpgM5nXYQJMQY3MIxbwvg1YHhxbhb1RiAP80JnadqPthz+80XbD/DIWcGSM2yhQdsADwkQPlSXM/tcrxxTngeAnghC937JBHwWOKfW3Y+Jd5sqqsVPrNN6/SfZ9mR2t+ICqvsjAX2NLB9YU8H+wxQF3//NBB+4l8GdsccBL2NKBNQVgDo44kR4IYCn68kR1YJEMuBkeD09b8QHH+PT4dHgcH6DHoW5iAzR1E9iHKRoPoJ3+cDA4CT4bfFhAOOAPTk6OBSaDYd+kWxuwBnzh8dnZQEtgfNI3SWsDdDg0OT7mD7SMhSfLQwEEcFTQ1fJQ+XggMDcWCE+GQldFryCAo+WhUDAQCIwFxn2h8iwcoDzkmwQEiKg8dBQDADGFJiengb2v/G0c4OjbocBsIByeDYQk9mjgaEuj01HpcBY2ZmECjWdnZ+fmZgvPbsQEENIBMkB6v8JPJfqKRDqw5oG9ewmBoSFC4J/+iQDYOzQ0tGHL0NC1vbge+r4FN77Vhx/S3rING8r2kuSwZcuGLSRJD5X19ZUNkQCRh9j1tA48AMBT2NKBzwhs304INDcTAvn5ZMB2ilKKSRHYDtVFUV3MBg5gEd55WnCAp57q4u27cHPYng/N86OzQCbNRGWJ3o/0wK4qhu+hC2QLco9KAQnkM93cHN13yJAk3zAApHQglsA+bD1EQA22OIDC1t0CedjigL9T0JNPKu1VAUZHCYH6egLgySefvH78+PUno8NCAO3HObXjhvRkPTSvj84bmcOTEFCoExIYhYBCnZDApUtPPnnpEj7wJNP4KDIH4qER+9FKfACtwZNA7IEYK5fsxuDEuB070kiBHX//z4TAjh2PE9w/vYMVdio8gJ2KAOz4+98TAjt2HCl0aooFqnhkLM+sIRaYm96xYw+L3PiH11TFAc/09YU5J3ve0ASqAs8884xHSKXtvXsNEId0F0kTl5XvOMsfNCUCXv/P38KQAGCZC8DrG/DsOeD1LZjmHIAZDQ+QmAOAIBoWeBg0+U0yxa0nJOLWExIAICMgQEQwAAnBAusn/xVXHLD+Mu698jwgJ+x25W0BkBEdHcrbIkBM2O39/Xy74m0pICI6wQ+wos7obSSQEkxMDCpto0JK6ezv71TaRibdwXxGb6PLitTddhzp0CAdfKTDm/QAIj1ESU8CxKeZ2GsHoXRgjQDKv7DRNI2YvEkZoGk3ilAEaLe12211KxLKQENL90JLQzc24GpdXHG5WvGBbn9NIFBT41Z6TTmkGsfZs46b+B6o7vlAQNkedY8fTcmv1ogAsR8aOhAT4G70fw6q/9oj+gWIFfWHKUKA+sBGCFAUXlgiAC8sMYAVlgTACUsGaIclBuif/pTWDEsEdNcvL9cvgLC+ggfkmdqBTCaNsASg6SNvS8vRjXDpuw/MOIDt7Vmns6Wxia0WMiweoGnzRvg3i41N7Dn+D4c0gIWVvBaH31HZsvrTvRCw/FeEeGDvSt6s0+p2tqwu9AH7FpR9BFhYtPkrW1oq/aaFRYquQtpHALpvpbvYZs7OXuhzI8MRAxS9mPzKyspez+1udDgSAPT0wsrKSrdaODKAUq0OAlAPJwrQCkcOaIYjA7TDkQA44YgBrHBEwJ9x7XkgHls6sKaAbGzJjzhNKQA1chvJDgVgi+ytpHuLGkB7N2zYUCZC3HCiYy+NBCgKGEg9gAZUQyqbL5PE5AY71AAaWEsB8EmrAFriAAe2OADzz/yJkWlJdWBtAEew9RABfdjiAOLV3X6GLRTwy1D/IG04VY0JfC/U21vkhIewMRUH+GXRP5eU9HJX6DdxbSCA60CTRUW/B0BiwOVy0TQ9APctW5uUgOuMfWJoMDA4N1bU74eqpAaujxqLFTxcv87ZJ/aHoIoSQz6f02kFUXEvyYBPS0pKJECRGACvfioDflxScgF+vwFDAioa5EJior/BvSrO4ULJDeb7jSJGiS42aTbbX5aU/DIq6R9HysocXCFaVNaffe/Hqh0H7Iv8NG7H/YwZGiBp7KGhorsd3sQH0Bo8CcQeiLFMRqqQnQItMpFcRmWeyhyD8EUW4YAMdg96erEMHmGADKGBiESz8yUw85FxRhBQME9o9VuSRIAwhV/xI48UK8wx2JLvz28VAZpTBuaePF1S9TgucKTg221h3+Rgb9Lfv44TUsHJrsw2Xyjka2t9aedpIelCOOdfJUya3YokXVBVkFkSGBvbebqrqiqJLytvxJZViuzMfP90qGX2pZdebt3DhSQY8B3H7mHyza369smuuZbZ3CPfTng8iXERJ7QnDI1Cdo7B3vBAW1vukdbWuZKC3La2gXAvlwNKbbmLy4NzP4LXFv5obnB5sbdNC+hdXA4HvjH71luzPxoMYwG3AXDyqeaup94CwG1tIGk57BuzWLq6LJYxX3g5SQvoTVgO954uPNvVdbaw99/CywlaSSckDC77BumrhS1v5w/6lgeZXRrT7fl8vha31eJuBRsJOECCK7/JebbQeSrfmYAHDPqtVofDaln1YQJAla6zlcIzfY5BLN2Hc2uB0rm1QLUfCuTnVrQ5zrlVDtzr+VtzMzjxPyOkIUXP3zr2Cid+alL1cysA9n9cmpJTMZojAJx5AVvWAhkCgeM5oyKAN490XIFwbgU6nbK/dH/OpUs5p3mANxcNjYJCYf7WqpSUlOuf5uTs5+eM1TqAcvem2Gdm7Cl7I1XSABIWU3r+9Zs9KYv8c02gau+1b37z2t7ILLbax/RY37VrfZEJYnFOAlUrK6KJdXHOGkmiNwJrcrLUNQjcF0nnZpNeAPK3EumADuiADugALvAliaR/fFdcVkMHdEAHdEAHNAD5eqDv/RcV3V/ATAjsogkBM1XNbjx5UUUcUJ1nMhmobJMpL3X9+kMpKuKAXUau6sXr8YD16+GVThRtWo8NrIc+Tq3HB3ZRVDZFEwA2unq9iWbq9J7WTX5sDrvAQ6ppjY0lbOA9md7QSlqtioplfRgAteNF8QBSK7tiPzwMwJqcUpYY0LrTUHTPISsKW2sXGMMWB/wztnQglgBxx63BwUcMEB+ia/A0QwzEWF8l1BcTOEgo1NhG3ZaFuIFoL72wQO8lABYiD1jA3m5gDcy7lXwoATD+lRVEHgoAvcBB1IICoQzQMCQaF6DolZWVBXjhPmZIgOhegCK4e21hobsbBdQRKu47hPpiAg+D7v4/fkkqVkpAiyUXacRfbyIFkGvH+jwexZAQavOkp7fhA73j6enpdvEeKdB6WvI0KWyHFxYOywHhn8lnW8Sv+TzslYjjMqCKlrbLKXecv3RRDiSdzlCw99kj1zpGhaSg3mHRxZEqSSs0D9WrASSNp0sVVgd6PfILNtV7WhYOI6WxxCl3ONpc4oIHkgpakxDNS7siAlho0BvybCNKaZMDCVVVCtkKsvfKgYSEcAraHhBtciA8DOQRyS4oJSUlPWWcOfAiwLjHMyzTuEThcFhypVpuL1AbK59Ek2FeEg+4+rxPi/dEne2PEikusX+UCIlLTCzq+JgAYW6v6DyOj7D3Y/R7XsFFuBs4ijpewUQid3x0HsdDhFtEQFg4CAOEImFpIwzgHEwM+bmwtBAGqKSsdCgSljoCgZCVoqyJorDUEAD4mfukfPgAiISyOpwh/JASE939kb7ASjrRT1hW4o67i6FBOvhIhzfhAUR6iJKeBIhPM/dFr0JduXJlcHD1SvhVNUmA0bBv0O/HB8Krk6uD4VUf3L6D5cHhXw1fGWc8NLw6Aj60AJACyIMBRl6df3VkXhNIfeO3qVfGX4XGcIdbEwiDjzfCMIMGuIPWAsIgoCvlkSrNWzSAN8LhK5PjPh6Yp5VKJfHw2zeuXHmDTfrOvKtBsbRiYPRK6m/ZpFUk8fAGeJdwg2RoTN64sjo5SQSsXiECSEMiT/oKCOgKSdLl4RuD4clBbGDyozB467UPH7gyCd+ukYQExsYbhEkv+4lOAsvLq6tNBCeB3zr8/tXlZXygetXvX14mCKm6+rfgsK4mANqrU1OrCQBgDJSKBXwdWzrwWYDXbAaaNthewwWmDBRlgF9TeMAURZmf//rzZ2wUJScUgdcM1Jmvv5tNwSsHDK9hADbK/PXnDRQkDJQNAzBQzwOIMptLSwGCAdDAKJsuhVsUTccCIA6JOGlJWZ/HAIg7jnxokA8+tHSAAIixlP4+/4SKIoDRZjMSAbYnnrDFEADxVD/xRDUflTZg45/aYgUQhxT7Kt1Nx2EPDbUXdUAHSID7ouexpQN3B7xbaqBoo+01XMBMg7ckpWZb8RQeYIZnQGbL9A4O8A4N3ylx288rhSUDisGbsMhr75wxawLAgRD7a2coW7ZJFXgXZPBuxN5sEPu7NwBxSORJE5eVuOPIhwYz+GiSwaclHcAGbJS1n/9ruZ8ypqrPbvenuLh4E+0O8cQgZVAnIBBfTdM+ngjRdLUmEJ9qoAYjf/O3UnmaQPwjRsrPE5+4KJsmEP9IMeXgF2kpclDFj2gB8fE2yhVZ1gUUC0UIQHyeqLzoYokAUF46Ul4fqlhiABZLKK+bNmkC8amiYoHymjWB+EeyRcVyUqc0gfj4U5RTVN7sqGJFAfFmUbEC0cWKBiRj0UcZqjUB+Vg0aQKwvAFUsRQBWKxKngDFsmkCcCw6lcciAoBjUXLgHtQE4vNot9JYRAOwWJHyCgeuCiA9cN3cgasGxB8UH7hWtliqgPTAdTLFUgdgsSLlTayEY1ELiBqLmoD8wDXFxV6ouVreRgg5V4uS8SwEUHO1KJhPD8xCADFXSzRQk5JSAwDUXC0KEfX1QQ+oqVfkzdfUcEljALPwI8XOAai5WkTAtH367emUetYFcq4WkYO+FPvs2zV8P6DmahEnMCDaRs7VolAlFkDN1aJgOzsNAVRL0QIdN60JzDLj5212GNlTtD3AirIboEqzs7NaAKioh3ExzYyjt7U98BWd9fS9jQdA1czWCE9wkp5OEfUcGuBin357diClbxYDmJ5lkoa2oojQAFeXafl+JDBr71PcTzA0OOC+6K+U9JiSPitw7K9awRcBcPZY/rGz+MCRPa0thS2te47gAscsheC3skLLMUzg2JFW5o+CrUeOxQggDok8abashTHtOOKhgQ0ovqYDOrAmgb9W1b/2JScHuXe6OMC15OThTxKxAXHzOICkeW1A1jz4PUUdkDefGExWA6KbH05+RQVQaD55ehsSUGz+zje+gQKUm/8GCkA1jwKQzSsDKs0rAmrNKwDqzUcDGs3LAc3mZYB28xIAp3kxgNW8AGA2LwCYzYsAvOYFALN5AcBsXglQbT4a0Gg+CtBqXgD+EVs6oAOfN6B235BUOqADnzeQiK21C3RiiwOewdbaBRRW6Pj1lepfoxfuiJ7HwEyHlyizwvwGCMBMuUNuSoFAAM9TlNMH/yjyPCYwRVGBEFydZQoByAdAiAIhDabaqBBiaMh3F1EUbe1vMtFFmEBigHJYK42GQNQLyNEKCAcVba82WsPhL95oVV9mJnpUorR2ATK1ResN+bxsYsW1WdvanGNtlZVtc842+MSqBTCGFubTOQfBNqvSlZC84trG2sDn3NzYHLsFPp20iuLaCtvaKoHxWFsJaLwQfuKExMTO5dK2Wq2iuDZgXgg8gKRB8074qZkDDL+kBCQyxn53GlUEQ+Jb5nIh74fVPBVxHthPzoNGDiUgcLb+IPySubmStqViFcXBHi6MhMT0uHoOg9FqUhPBbE1cDqcIFTUnoZbIPRDnoFoSpSoR56DWq4o9TZyD2shUHK3EOdwXbceWDnwG4Oj2jRs3dm3cCDZwgI2WoxshAZCjzRsxgObmjazymzc2N2sDzfkglK6jG0HzFghpA8Ds6NHm5mZLF4jJog1YYET5VHMzlQ/ybrZgAEc3WrqAAwq4wgO6QPtdXfl08/ajOACTaj4IirJ0gRJr5wCrCfpsYzPVzBRKEwD9ACxhz4GAcPqBJRhF2aPGUrPF0gw7wiK3R45W0DjANm6MeuHBOYAeRIBM+vtW/X0rKgf9fau29PetWDk8JO9bCTL+LICVctFW1Oyi0QBNLXYvWgeY9eEbdyAl8jDQ3Xd7YHHRBYGvIRUBrG5rn8czXH+7ewkPoBf7+jx2j8dzG2SRb0EqArgWgQMA1A8surGSpt2AsANC3V4A3IsD9XBmt8XbixR19iRSYg+3+4Zv3+6DU57iJE25XXTfgKvejVtW2NPdi26XFW5ZGpGSjiX1fGVDA1McgA4BERI6SUTSxAC6o5AdR5g0MYAezojhHfsqoQ96lZNAbKtEDMRYmYRigeYs5lvW7sxm8KEN5GcReshnNrughy7woQ3QzOY29mEbBtC8W7QHB8jcvTsLxpJ1FCOkOUKJbjbAE/l7jS8kQFzWGUJpXCMZLR3AAu6ntkokGUAf6IAa0E2TAd19AzQRsLC42I0PuLuXFgcGXIvgrSke0L3kdi0OgHebuIDV6XJ3d3cvDi/ghuS0AmJxcQDXA/i1hW4irFL96JIbH+i+vbhYnO2yWt2YAPg1ymg0GN1uKyYAes2QTRuc2B6gig0xHnzUoew1dwA92MAHEkktX4poOllBQy9EpANrHPBEHvCAoY/g40dD2MALL4DWPS+8gAsAC+DioxdeGMIE4EseD3yMFQBD8ngIQoJJf/QRQdKgrB7I4Jc1GcbzEUHHJTMZkwDJkRLhAkN8iXCBZMEBJjA0RAiI9EAAZCs86sCaAXzY4gCFpS1aMzJa0SteRFlXVVHw83TU4jDKQC5dmFCQlFSQUEjLl9tRAgoKEyKLyGQkFBZoAhniVWpO0xmaQIEkjFxND2fzJQsLJeWf1QBOy6opXZ6HAy5giwNQs01ESwfWFBBjoeZqSUAIOVcLEkDN1YIGEHO1IAHUXC1IAFVy7vWqkqoSRqeT8IDyw+c2HZ7cdPhcba5SSNlRIXnrxs/tC28KzuzjgQTEXC2cJjrrNgWs+zrrIh5Qc7XwQN3MpgZrYEYAUHO18DlMzpTPu8NBAUDN1cID5w7va7BuqjtXy1dJpY8YYFPduNVdG5zBBoJ1m2jaO1mHDdTVbXJT8zN15XhAbiA4A4CG4ExNBg6QUX/8ZvmmffvO7aupr8/AAMbqPZ6BmtrDNTeHe+r9OCFljPV1ePr6gPmYaGioZ+Ef6Bse8Ee6/jOsgbd2gPsiCltrHFhwSy5D6F6RrUdKw79NiQDaY39lrwB12+3p3RFj98LKK3Z7txR4hVlk7ZWVbgbqrrenrzD76e6VvewCbG5pSHQ93Omxp9uTuyGfnr6XbSclJWIvS/o23J2ebk9JpqmF9PT0VwC4Nx3uAaqno6tEc0TK3tbCvoFAoG+xcGwxhbPvllaJvR7UvQDXjEt/xZoWkXNvOozoNjBpFlfJss1CZR2lrK5Fe489vU8ABpLTPfbbVgtF7c4Se6C37c7f1kw11N3shtUSloOGLhctWVEAeNq8jZ7fV1fXAHrAU2wzGfKajNXFpwCwmJW1jXbLgfxtWbsp6mLdrwKgl24v8UBT/aL76LasjVn5coDKAlmAkP6lzgUv92higVMDNEXvzjq6rSsqJGr3NlAE175/qQu4qRXPIgsswfJkZWXBAsmB5uZ88Bio+37dzUVQ9jwjAPJW7PYVEGw+a0ArDO+Gurrvz4Cs6e7FvKaBRQoMl5FtolEcfTzc/GjIU99NL9h7hoc99hWqu8/ehzgeIuN+8SMatpwDh6Jl27Y73RoARVn3ubrZdQUXm7dtE0eEOkRdVmqBsaeBhyxKG4Dqrq8Hx2h+V1YzJiDkRApIdN8A4vW7dIDTpUuEwDPPEAJbt5IBFVu3VhAB9q1b7ZjApXR4voZ/vYdn8vRLmsCj+8V/8t+PE1KFYC/PA5VDOmuejpUDVDsLRK9dhwLsLBBdJxTAlGirQt8hALbXKhRiQgB21rI9OiYEcClqQysHpHQAG/jke+sJ9Cd49zQJAoCO/sTE3/0dAeBJJkEAUBS0EyBMDiTIn9hbxhnkE4D8LSbAIUWJRVrIn4Sb0iESBMhvVBEe6O9nkGS7FsIC/fA/UQzSoYWwPQ2M+jvszCTBn3DIJ7/7jbIgEOwo6uws8nSwufSzCEKfMEAQAIkdHfxOgCR7OpQVhEA/iL+ocxgfSOwcDgaD/LRN6iH9kS9rMNlTJEo68Y8/UNb/5oBOZmREarRpM0o8UFQkdFziD5DmAiAMDVVzEcANPg3zCMAPby1zDuAPoB9s0LSHAIk5A3gIzBmAxJzL4Y/Y5gxAYs4AcXFfgmKnGTWtAzJNrUOIO3vrwFoHzKVQZjlQAMUC5ikgMwecOTMFf8cynjkjA9j7dsxQJkbcy1NGSIAHowxARTwFjbMBRGMDgFgHnMQQIA0J2BtIkj4D7ZXKigKQHYcG5NKBNQXEWEmCcnNFT1BLI4iAXIsllwhIKmwk8VDAemktwARaqSoGoFowgdNWzhGuB1YtVURJAz8ZREAkHEygKj+/ighIoigyD0kZGTgA6gUd0AFS4P5oD54eLKCV+8IBjjSe3NNKn93TQjXuOVJ4RAto3XMk3wKg1j0nAdhIndxz5KQKUGXJP7nnpGBx8vSRI5b8I2hgT0sjv1USvUu1SssDVdE71YDpgYHpEgJgbgBoWe5EBRhgFMAEqvzTLDDgxwHmBkQKVGkDe/wDEkQbGJMAcxg5iF1IskABcwgH6LKW8FUamMaoEiPGOmp4qAAgjbE9Vbgdx6QxF7VPFRgjBaoUBvfaPi8Rn+t1YG0A2djigNj/X1QHcAAHtjgA9ffhaOnAmgLu5+CD01BRBvaDprlLMtWuOTGX2syGdoM522YuNRnNpdnV2beyDWqAzQY+bXQ7baJKjTYDZaZMNqMKYCsttpmNZmBXagZfEDDbiu9l0qSAy+V0UpTV6rQygjdNUk6ny4UCrA6X1WGlrGPHqjL2ZGTsOdYKnjisLrBPEQAtgg8XZW09xqnVze20KgMOq8MJXrOePnZsjPk8DZ44nQ6rQxkArzghAT20Op2V0AOwB3scTiWAZnJ1sB6OnR47xnpwMNnTih4q/QBxuK2V/IRYlW43sHf6KxU9UH6rw++HzS0f4FQNnfr9DmslImmnM1AJQj514DqjA00ghcoATFu5H2iYn9/pqn56dPj69eHRp6tdTtC80xkZ4PKepkHP+h3OpgPXR6+DzwNNLoefokSXEsoAtwPWyM/k8OiBA9dBDn5YJ4cbATjg8WatpJ1LziWjsdi6ZKUBAHY6EAAzAthOcrusbrYzYTWcCIB2gKQracoNkrFa3TRIia6E3Y9OGgwNkEhlZSX78wN8c4NdyKTZRJzA0snIAT8kLyoBNI1+dv+O6S1QXlAS8yENiYEtWxooKpsIwHDCAft4QtMJB+wf3oLphAMu7fdgOuGAoo79mE44IDGxE9NJBEjEdCIACk4oI/J9K/sjNcoJemjwP4WlTrZ4oyUDZE4UJAeAk/0SJ/ccIA2JMGnSskZ3nOVslFSGRv6RLykIPfgKH1ey5wHM5gUAs3kBwGxeADCbFwDM5qMAreZlgHbzAvB9bMUC+NWvxJsYQHC0oyPY0fEL8FURxArpFx0VQB0VoxVBLA8QCcJLeIKYObDRs+YEAJ/5WugH5p0cc8x/CKUDOqADnx2IsRz9vyJSHGUNEQIU7fsOGQB+yejswRY3LemkHXslMvZtCj3YQQLQ1CHKEczBEgQWjt8+kA2q9esDGIJA9/H9Bx6FYf0MDzBkf3x8/9PmbAPl+A0GQB86cODS8eP7Txw4MEVb+z/REvBQemD/8f37j18qhen75H+0kovJYT+jbmxggQXAL4V4IVHZx6F9PYWXNABKP769svLxbeyycjcVEXQcI5KhQT74iIc34QFEeoiSngSITzMx1/8HeoVBt2wcOp8AAAAASUVORK5CYII=);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.icon-wrapper,.label-wrapper{display:table-cell;vertical-align:middle}.country-selector{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIUlEQVQoz2NgGAUkgtKG0v9IsIGwsgbCpjUQtrRhZAUzAB5rGRmoZRO5AAAAAElFTkSuQmCC);background-position:right center;background-repeat:no-repeat;background-size:18px auto;border-radius:0;color:#000000de;flex-shrink:0;height:initial;line-height:unset;width:90px;opacity:0;transition:opacity .2s;position:absolute;top:0;bottom:0;padding:1px;right:auto;left:0;font-size:inherit;font-weight:inherit;z-index:1}.country-selector:disabled{color:#00000061}:host.ngx-floating .country-selector{opacity:1!important}.country-selector-flag{display:inline-block;margin-right:.5ex}.country-list-button{color:#000000de;direction:ltr;font-size:16px;font-weight:400;height:initial;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.flag.KY{background-position:0 0}.flag.AC{background-position:0 -14px}.flag.AE{background-position:0 -28px}.flag.AF{background-position:0 -42px}.flag.AG{background-position:0 -56px}.flag.AI{background-position:0 -70px}.flag.AL{background-position:0 -84px}.flag.AM{background-position:0 -98px}.flag.AO{background-position:0 -112px}.flag.AQ{background-position:0 -126px}.flag.AR{background-position:0 -140px}.flag.AS{background-position:0 -154px}.flag.AT{background-position:0 -168px}.flag.AU{background-position:0 -182px}.flag.AW{background-position:0 -196px}.flag.AX{background-position:0 -210px}.flag.AZ{background-position:0 -224px}.flag.BA{background-position:0 -238px}.flag.BB{background-position:0 -252px}.flag.BD{background-position:0 -266px}.flag.BE{background-position:0 -280px}.flag.BF{background-position:0 -294px}.flag.BG{background-position:0 -308px}.flag.BH{background-position:0 -322px}.flag.BI{background-position:0 -336px}.flag.BJ{background-position:0 -350px}.flag.BL{background-position:0 -364px}.flag.BM{background-position:0 -378px}.flag.BN{background-position:0 -392px}.flag.BO{background-position:0 -406px}.flag.BQ{background-position:0 -420px}.flag.BR{background-position:0 -434px}.flag.BS{background-position:0 -448px}.flag.BT{background-position:0 -462px}.flag.BV{background-position:0 -476px}.flag.BW{background-position:0 -490px}.flag.BY{background-position:0 -504px}.flag.BZ{background-position:0 -518px}.flag.CA{background-position:0 -532px}.flag.CC{background-position:0 -546px}.flag.CD{background-position:0 -560px}.flag.CF{background-position:0 -574px}.flag.CG{background-position:0 -588px}.flag.CH{background-position:0 -602px}.flag.CI{background-position:0 -616px}.flag.CK{background-position:0 -630px}.flag.CL{background-position:0 -644px}.flag.CM{background-position:0 -658px}.flag.CN{background-position:0 -672px}.flag.CO{background-position:0 -686px}.flag.CP{background-position:0 -700px}.flag.CR{background-position:0 -714px}.flag.CU{background-position:0 -728px}.flag.CV{background-position:0 -742px}.flag.CW{background-position:0 -756px}.flag.CX{background-position:0 -770px}.flag.CY{background-position:0 -784px}.flag.CZ{background-position:0 -798px}.flag.DE{background-position:0 -812px}.flag.DG{background-position:0 -826px}.flag.DJ{background-position:0 -840px}.flag.DK{background-position:0 -854px}.flag.DM{background-position:0 -868px}.flag.DO{background-position:0 -882px}.flag.DZ{background-position:0 -896px}.flag.EA{background-position:0 -910px}.flag.EC{background-position:0 -924px}.flag.EE{background-position:0 -938px}.flag.EG{background-position:0 -952px}.flag.EH{background-position:0 -966px}.flag.ER{background-position:0 -980px}.flag.ES{background-position:0 -994px}.flag.ET{background-position:0 -1008px}.flag.EU{background-position:0 -1022px}.flag.FI{background-position:0 -1036px}.flag.FJ{background-position:0 -1050px}.flag.FK{background-position:0 -1064px}.flag.FM{background-position:0 -1078px}.flag.FO{background-position:0 -1092px}.flag.FR{background-position:0 -1106px}.flag.GA{background-position:0 -1120px}.flag.GB{background-position:0 -1134px}.flag.GD{background-position:0 -1148px}.flag.GE{background-position:0 -1162px}.flag.GF{background-position:0 -1176px}.flag.GG{background-position:0 -1190px}.flag.GH{background-position:0 -1204px}.flag.GI{background-position:0 -1218px}.flag.GL{background-position:0 -1232px}.flag.GM{background-position:0 -1246px}.flag.GN{background-position:0 -1260px}.flag.GP{background-position:0 -1274px}.flag.GQ{background-position:0 -1288px}.flag.GR{background-position:0 -1302px}.flag.GS{background-position:0 -1316px}.flag.GT{background-position:0 -1330px}.flag.GU{background-position:0 -1344px}.flag.GW{background-position:0 -1358px}.flag.GY{background-position:0 -1372px}.flag.HK{background-position:0 -1386px}.flag.HM{background-position:0 -1400px}.flag.HN{background-position:0 -1414px}.flag.HR{background-position:0 -1428px}.flag.HT{background-position:0 -1442px}.flag.HU{background-position:0 -1456px}.flag.IC{background-position:0 -1470px}.flag.ID{background-position:0 -1484px}.flag.IE{background-position:0 -1498px}.flag.IL{background-position:0 -1512px}.flag.IM{background-position:0 -1526px}.flag.IN{background-position:0 -1540px}.flag.IO{background-position:0 -1554px}.flag.IQ{background-position:0 -1568px}.flag.IR{background-position:0 -1582px}.flag.IS{background-position:0 -1596px}.flag.IT{background-position:0 -1610px}.flag.JE{background-position:0 -1624px}.flag.JM{background-position:0 -1638px}.flag.JO{background-position:0 -1652px}.flag.JP{background-position:0 -1666px}.flag.KE{background-position:0 -1680px}.flag.KG{background-position:0 -1694px}.flag.KH{background-position:0 -1708px}.flag.KI{background-position:0 -1722px}.flag.KM{background-position:0 -1736px}.flag.KN{background-position:0 -1750px}.flag.KP{background-position:0 -1764px}.flag.KR{background-position:0 -1778px}.flag.KW{background-position:0 -1792px}.flag.AD{background-position:0 -1806px}.flag.KZ{background-position:0 -1820px}.flag.LA{background-position:0 -1834px}.flag.LB{background-position:0 -1848px}.flag.LC{background-position:0 -1862px}.flag.LI{background-position:0 -1876px}.flag.LK{background-position:0 -1890px}.flag.LR{background-position:0 -1904px}.flag.LS{background-position:0 -1918px}.flag.LT{background-position:0 -1932px}.flag.LU{background-position:0 -1946px}.flag.LV{background-position:0 -1960px}.flag.LY{background-position:0 -1974px}.flag.MA{background-position:0 -1988px}.flag.MC{background-position:0 -2002px}.flag.MD{background-position:0 -2016px}.flag.ME{background-position:0 -2030px}.flag.MF{background-position:0 -2044px}.flag.MG{background-position:0 -2058px}.flag.MH{background-position:0 -2072px}.flag.MK{background-position:0 -2086px}.flag.ML{background-position:0 -2100px}.flag.MM{background-position:0 -2114px}.flag.MN{background-position:0 -2128px}.flag.MO{background-position:0 -2142px}.flag.MP{background-position:0 -2156px}.flag.MQ{background-position:0 -2170px}.flag.MR{background-position:0 -2184px}.flag.MS{background-position:0 -2198px}.flag.MT{background-position:0 -2212px}.flag.MU{background-position:0 -2226px}.flag.MV{background-position:0 -2240px}.flag.MW{background-position:0 -2254px}.flag.MX{background-position:0 -2268px}.flag.MY{background-position:0 -2282px}.flag.MZ{background-position:0 -2296px}.flag.NA{background-position:0 -2310px}.flag.NC{background-position:0 -2324px}.flag.NE{background-position:0 -2338px}.flag.NF{background-position:0 -2352px}.flag.NG{background-position:0 -2366px}.flag.NI{background-position:0 -2380px}.flag.NL{background-position:0 -2394px}.flag.NO{background-position:0 -2408px}.flag.NP{background-position:0 -2422px}.flag.NR{background-position:0 -2436px}.flag.NU{background-position:0 -2450px}.flag.NZ{background-position:0 -2464px}.flag.OM{background-position:0 -2478px}.flag.PA{background-position:0 -2492px}.flag.PE{background-position:0 -2506px}.flag.PF{background-position:0 -2520px}.flag.PG{background-position:0 -2534px}.flag.PH{background-position:0 -2548px}.flag.PK{background-position:0 -2562px}.flag.PL{background-position:0 -2576px}.flag.PM{background-position:0 -2590px}.flag.PN{background-position:0 -2604px}.flag.PR{background-position:0 -2618px}.flag.PS{background-position:0 -2632px}.flag.PT{background-position:0 -2646px}.flag.PW{background-position:0 -2660px}.flag.PY{background-position:0 -2674px}.flag.QA{background-position:0 -2688px}.flag.RE{background-position:0 -2702px}.flag.RO{background-position:0 -2716px}.flag.RS{background-position:0 -2730px}.flag.RU{background-position:0 -2744px}.flag.RW{background-position:0 -2758px}.flag.SA{background-position:0 -2772px}.flag.SB{background-position:0 -2786px}.flag.SC{background-position:0 -2800px}.flag.SD{background-position:0 -2814px}.flag.SE{background-position:0 -2828px}.flag.SG{background-position:0 -2842px}.flag.SH{background-position:0 -2856px}.flag.SI{background-position:0 -2870px}.flag.SJ{background-position:0 -2884px}.flag.SK{background-position:0 -2898px}.flag.SL{background-position:0 -2912px}.flag.SM{background-position:0 -2926px}.flag.SN{background-position:0 -2940px}.flag.SO{background-position:0 -2954px}.flag.SR{background-position:0 -2968px}.flag.SS{background-position:0 -2982px}.flag.ST{background-position:0 -2996px}.flag.SV{background-position:0 -3010px}.flag.SX{background-position:0 -3024px}.flag.SY{background-position:0 -3038px}.flag.SZ{background-position:0 -3052px}.flag.TA{background-position:0 -3066px}.flag.TC{background-position:0 -3080px}.flag.TD{background-position:0 -3094px}.flag.TF{background-position:0 -3108px}.flag.TG{background-position:0 -3122px}.flag.TH{background-position:0 -3136px}.flag.TJ{background-position:0 -3150px}.flag.TK{background-position:0 -3164px}.flag.TL{background-position:0 -3178px}.flag.TM{background-position:0 -3192px}.flag.TN{background-position:0 -3206px}.flag.TO{background-position:0 -3220px}.flag.TR{background-position:0 -3234px}.flag.TT{background-position:0 -3248px}.flag.TV{background-position:0 -3262px}.flag.TW{background-position:0 -3276px}.flag.TZ{background-position:0 -3290px}.flag.UA{background-position:0 -3304px}.flag.UG{background-position:0 -3318px}.flag.UM{background-position:0 -3332px}.flag.UN{background-position:0 -3346px}.flag.US{background-position:0 -3360px}.flag.UY{background-position:0 -3374px}.flag.UZ{background-position:0 -3388px}.flag.VA{background-position:0 -3402px}.flag.VC{background-position:0 -3416px}.flag.VE{background-position:0 -3430px}.flag.VG{background-position:0 -3444px}.flag.VI{background-position:0 -3458px}.flag.VN{background-position:0 -3472px}.flag.VU{background-position:0 -3486px}.flag.WF{background-position:0 -3500px}.flag.WS{background-position:0 -3514px}.flag.XK{background-position:0 -3528px}.flag.YE{background-position:0 -3542px}.flag.YT{background-position:0 -3556px}.flag.ZA{background-position:0 -3570px}.flag.ZM{background-position:0 -3584px}.flag.ZW{background-position:0 -3598px}\n"], components: [{ type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i6.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i6.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { type: i7.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], directives: [{ type: i6.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i8.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], pipes: { "search": SearchPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-mat-intl-tel-input', providers: [
                        CountryCode,
                        { provide: MatFormFieldControl, useExisting: NgxMatIntlTelInputComponent },
                        {
                            provide: NG_VALIDATORS,
                            useValue: phoneNumberValidator,
                            multi: true,
                        }
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-mat-tel-input-container\">\r\n  <button\r\n    type=\"button\"\r\n    mat-button\r\n    [matMenuTriggerFor]=\"menu\"\r\n    class=\"country-selector\"\r\n    [disabled]=\"disabled\"\r\n  >\r\n    <span\r\n      class=\"country-selector-flag flag\"\r\n      [ngClass]=\"selectedCountry.flagClass\"\r\n    ></span>\r\n    <span class=\"country-selector-code\" *ngIf=\"selectedCountry?.dialCode\"\r\n      >+{{ selectedCountry.dialCode }}</span\r\n    >\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <input\r\n      mat-menu-item\r\n      *ngIf=\"enableSearch\"\r\n      class=\"country-search sticky\"\r\n      [(ngModel)]=\"searchCriteria\"\r\n      type=\"text\"\r\n      [placeholder]=\"searchPlaceholder\"\r\n      (click)=\"$event.stopPropagation()\"\r\n    />\r\n    <button\r\n      type=\"button\"\r\n      mat-menu-item\r\n      class=\"country-list-button\"\r\n      *ngFor=\"let country of preferredCountriesInDropDown\"\r\n      (click)=\"onCountrySelect(country, focusable)\"\r\n    >\r\n      <div class=\"icon-wrapper\">\r\n        <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n      </div>\r\n      <div class=\"label-wrapper\">\r\n        {{ country.name }}\r\n        <span *ngIf=\"country?.dialCode\">+{{ country.dialCode }}</span>\r\n      </div>\r\n    </button>\r\n    <mat-divider *ngIf=\"preferredCountriesInDropDown?.length\"></mat-divider>\r\n    <ng-container *ngFor=\"let country of allCountries\">\r\n      <button\r\n        type=\"button\"\r\n        mat-menu-item\r\n        class=\"country-list-button\"\r\n        *ngIf=\"country | search: searchCriteria\"\r\n        (click)=\"onCountrySelect(country, focusable)\"\r\n      >\r\n        <div class=\"icon-wrapper\">\r\n          <div class=\"flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <div class=\"label-wrapper\">\r\n          {{ country.name }} +{{ country.dialCode }}\r\n        </div>\r\n      </button>\r\n    </ng-container>\r\n  </mat-menu>\r\n\r\n  <input\r\n    matInput\r\n    type=\"tel\"\r\n    autocomplete=\"off\"\r\n    [ngClass]=\"cssClass\"\r\n    (blur)=\"onTouched()\"\r\n    (keypress)=\"onInputKeyPress($event)\"\r\n    [(ngModel)]=\"phoneNumber\"\r\n    (ngModelChange)=\"onPhoneNumberChange()\"\r\n    [errorStateMatcher]=\"errorStateMatcher\"\r\n    [placeholder]=\"inputPlaceholder\"\r\n    [disabled]=\"disabled\"\r\n    [aria-describedby]=\"describedBy\"\r\n    #focusable\r\n  />\r\n</div>\r\n", styles: [".sticky{position:sticky;top:0;background:white;z-index:1}input:not(.country-search){border:none;background:none;outline:none;font:inherit;width:100%;box-sizing:border-box;padding:0 6px 0 90px;margin-left:0;position:relative;z-index:0;margin-top:0!important;margin-bottom:0!important;margin-right:0}input.country-search{width:100%;height:34px;border:none;border-bottom:1px solid #ddd;font-size:14px;padding:20px 20px 24px}.icon-wrapper{padding-right:24px}.flag{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAABw4CAMAAAAs8X1iAAADAFBMVEUAAAD////OESYAJH0AAAAAK3/80RbtKTn/ywDRETPQFCvYJx7/AAAAejkAI5UANpV0rt0AZTTvKy3BAQPCJy1Bid3eKg8AnUkAlETgGx3VAQD93QXtHCQAeF8AN6YBhU0AakLeChcAAIzKLzwAKWb91AActTr94wAAo17209YAbcsCrsnHDR/kABLoES0AcsEiRY1LktoAak4DJ4s6ecn38/ABHqERSK8DaacBod3GDDDYFDsAgAASrSsDlsAHiTBpuuYCKKYAmzpKrdYAP4j9zyT1s7YAZgAAV6VmzP8ormbeFh4EUZkkSaX630X0rgG6CC6eLzoPPHytHSX33xYZigABPppKl88BPxw6gj3WZHTe5/DZECNbl7H6uBEAlWcBS6joKDoAAGYaRJHlAjb1xsrZJBEAXbsCf/3gUmEjnkLNDCwANrKdqsrVJyftHSjjPDIvmzAMBwTnbnKMGj3mqK/B0eT8OjKyIjQhXDNAWInzlpX950kNXq8ei0M+bU3////c29r/cgDsho3idQnsAAD9TRQ+XrivDgv2gwFLqFZeteMWFpbgACXuxQmakKswVpmnp6X+xh3PSFB/rY8AUbrgTwf+mjIjXEI7eCgAmQDasjM/mQEiG1ASiAeozbbGvcOLJyqNqdbPf4ejyuxRfMB/msPelZ0NrS00sjBtg7hLaaPxK0IZIG0/PnEwkAngUCWwigqxxNpTSgfCHhp/teHG0rzk7uYOdCjy3roAUPBNL2rSuhy1uAglMXTHujMxLRHFpV59CRBvjTp4YmiUsjy1oyHqkBdguI3CdyFtaZFHlHNUWlWLgyqOh4ZyhnMpd2XseCNnXDOmUzh7awhLiKQzDw2yNFDvQ02RqGZagyxpoKt6tB5PaIWRxZrFQBxDTEB5flJsOE9SCxp6MBimuIf24p3sf0nltl5Ds5PYw4DPrJzAfVf22XudPyMSOTn///8CNwPAGTilUGUCi0b////MECjvKiwAMoze8+gABhCSwecEfcgAOJTnESwetTri0eK2AAABAHRSTlMA/////////////////////////////////////////////////////////////////v////3///7///////////7//f/////+///////////+//////7//////////f/////////////9/vz//////////v3//f///////////vz///7////////////////+//7/////////////////+////v/9/v7///////////7//v///v////7//////f///////v///////v////7//////v/+///+//v//////////v/////+//3//v/////U/9f7pY6kfJrKwsC2SaOqKyxZfwAAjiFJREFUeJzsvQ1cVNe97z0bBgRiG6MkPY3JPecTYsy0NiGtu/Ym57WN0z5pDBGbkyvTcNpL6DnkdIgZyphAm2QufKIxdhyETxIfkjIRHW+GlPLmTPhkVEDlRWEIiESivImgAtLTa3uf89zzfO591tovM/tlrb3XShyc0P1Thz17/7/r//uvtfaW2TOzt8kUcxXkM/bMRChLWpqFW8jck1OQn4iRCW7kEQHI5NdggcQ8EeEAITwPFw+ARBGBADo8SQpYIipOSyuOPotG14Xn9niiQBpGkYjMudkrs35yIOn06a1bR0owlqwIS+dvA+qXFZ1pZ/ILcvbAovmlTGnBdadPv316NCkKCOF5fLfmKZCk2pz5+fnrBbURQAyPDJyAiEBOz/x8T09PjpjCJIZLpgaHRIAz85U9GZW1ESBRW0kuS9AC/rpIgUT/5Etnz740GRkI3QxNI/uczn0jTYRAUu11T93x43We62IR2kB9uL3dxe77lHW1t4frCYCS+dnZPb66Ot+e2dn5EhJL4enp2VnuX0WYqAagURA/PRp5qg8oFI/AUtAX9NgqA3SPrUpA99iamHjvvZTA229jLamOrUl1nqTstyeOJkWyaB9bk0r8Z79ZMnqqxPf2X5UkCYD2sTXz42zPKPhXEjmQ6RxbR0vqTo2+fVtJnfg/hM6x9eipUX/JaP3vR0f7j0ZrwOvomVMlTU32Jqf91IkzRwmAE/MnRnfUeTx1nlMnLl/UB949c+ZEid3+d39n31PfP7/5t7rAxfcmj2b/4O8ef/xL/5h9dHL+I13goxOj9W9/s9vpOv3NV97uPXNRFzh66tSpV9721NVt+viU/9RovS6QXT9aUn80Me/WxLrRU/X12boASksCWApaLtGXCGQAsQcYfb1qANTAqwSSAWYCGUBsgEWRPOcqmf5vmQzg8wHrWuiAlkqgjBZiID0DEC3p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);background-size:100% auto;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.icon-wrapper,.label-wrapper{display:table-cell;vertical-align:middle}.country-selector{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAIUlEQVQoz2NgGAUkgtKG0v9IsIGwsgbCpjUQtrRhZAUzAB5rGRmoZRO5AAAAAElFTkSuQmCC);background-position:right center;background-repeat:no-repeat;background-size:18px auto;border-radius:0;color:#000000de;flex-shrink:0;height:initial;line-height:unset;width:90px;opacity:0;transition:opacity .2s;position:absolute;top:0;bottom:0;padding:1px;right:auto;left:0;font-size:inherit;font-weight:inherit;z-index:1}.country-selector:disabled{color:#00000061}:host.ngx-floating .country-selector{opacity:1!important}.country-selector-flag{display:inline-block;margin-right:.5ex}.country-list-button{color:#000000de;direction:ltr;font-size:16px;font-weight:400;height:initial;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.flag.KY{background-position:0 0}.flag.AC{background-position:0 -14px}.flag.AE{background-position:0 -28px}.flag.AF{background-position:0 -42px}.flag.AG{background-position:0 -56px}.flag.AI{background-position:0 -70px}.flag.AL{background-position:0 -84px}.flag.AM{background-position:0 -98px}.flag.AO{background-position:0 -112px}.flag.AQ{background-position:0 -126px}.flag.AR{background-position:0 -140px}.flag.AS{background-position:0 -154px}.flag.AT{background-position:0 -168px}.flag.AU{background-position:0 -182px}.flag.AW{background-position:0 -196px}.flag.AX{background-position:0 -210px}.flag.AZ{background-position:0 -224px}.flag.BA{background-position:0 -238px}.flag.BB{background-position:0 -252px}.flag.BD{background-position:0 -266px}.flag.BE{background-position:0 -280px}.flag.BF{background-position:0 -294px}.flag.BG{background-position:0 -308px}.flag.BH{background-position:0 -322px}.flag.BI{background-position:0 -336px}.flag.BJ{background-position:0 -350px}.flag.BL{background-position:0 -364px}.flag.BM{background-position:0 -378px}.flag.BN{background-position:0 -392px}.flag.BO{background-position:0 -406px}.flag.BQ{background-position:0 -420px}.flag.BR{background-position:0 -434px}.flag.BS{background-position:0 -448px}.flag.BT{background-position:0 -462px}.flag.BV{background-position:0 -476px}.flag.BW{background-position:0 -490px}.flag.BY{background-position:0 -504px}.flag.BZ{background-position:0 -518px}.flag.CA{background-position:0 -532px}.flag.CC{background-position:0 -546px}.flag.CD{background-position:0 -560px}.flag.CF{background-position:0 -574px}.flag.CG{background-position:0 -588px}.flag.CH{background-position:0 -602px}.flag.CI{background-position:0 -616px}.flag.CK{background-position:0 -630px}.flag.CL{background-position:0 -644px}.flag.CM{background-position:0 -658px}.flag.CN{background-position:0 -672px}.flag.CO{background-position:0 -686px}.flag.CP{background-position:0 -700px}.flag.CR{background-position:0 -714px}.flag.CU{background-position:0 -728px}.flag.CV{background-position:0 -742px}.flag.CW{background-position:0 -756px}.flag.CX{background-position:0 -770px}.flag.CY{background-position:0 -784px}.flag.CZ{background-position:0 -798px}.flag.DE{background-position:0 -812px}.flag.DG{background-position:0 -826px}.flag.DJ{background-position:0 -840px}.flag.DK{background-position:0 -854px}.flag.DM{background-position:0 -868px}.flag.DO{background-position:0 -882px}.flag.DZ{background-position:0 -896px}.flag.EA{background-position:0 -910px}.flag.EC{background-position:0 -924px}.flag.EE{background-position:0 -938px}.flag.EG{background-position:0 -952px}.flag.EH{background-position:0 -966px}.flag.ER{background-position:0 -980px}.flag.ES{background-position:0 -994px}.flag.ET{background-position:0 -1008px}.flag.EU{background-position:0 -1022px}.flag.FI{background-position:0 -1036px}.flag.FJ{background-position:0 -1050px}.flag.FK{background-position:0 -1064px}.flag.FM{background-position:0 -1078px}.flag.FO{background-position:0 -1092px}.flag.FR{background-position:0 -1106px}.flag.GA{background-position:0 -1120px}.flag.GB{background-position:0 -1134px}.flag.GD{background-position:0 -1148px}.flag.GE{background-position:0 -1162px}.flag.GF{background-position:0 -1176px}.flag.GG{background-position:0 -1190px}.flag.GH{background-position:0 -1204px}.flag.GI{background-position:0 -1218px}.flag.GL{background-position:0 -1232px}.flag.GM{background-position:0 -1246px}.flag.GN{background-position:0 -1260px}.flag.GP{background-position:0 -1274px}.flag.GQ{background-position:0 -1288px}.flag.GR{background-position:0 -1302px}.flag.GS{background-position:0 -1316px}.flag.GT{background-position:0 -1330px}.flag.GU{background-position:0 -1344px}.flag.GW{background-position:0 -1358px}.flag.GY{background-position:0 -1372px}.flag.HK{background-position:0 -1386px}.flag.HM{background-position:0 -1400px}.flag.HN{background-position:0 -1414px}.flag.HR{background-position:0 -1428px}.flag.HT{background-position:0 -1442px}.flag.HU{background-position:0 -1456px}.flag.IC{background-position:0 -1470px}.flag.ID{background-position:0 -1484px}.flag.IE{background-position:0 -1498px}.flag.IL{background-position:0 -1512px}.flag.IM{background-position:0 -1526px}.flag.IN{background-position:0 -1540px}.flag.IO{background-position:0 -1554px}.flag.IQ{background-position:0 -1568px}.flag.IR{background-position:0 -1582px}.flag.IS{background-position:0 -1596px}.flag.IT{background-position:0 -1610px}.flag.JE{background-position:0 -1624px}.flag.JM{background-position:0 -1638px}.flag.JO{background-position:0 -1652px}.flag.JP{background-position:0 -1666px}.flag.KE{background-position:0 -1680px}.flag.KG{background-position:0 -1694px}.flag.KH{background-position:0 -1708px}.flag.KI{background-position:0 -1722px}.flag.KM{background-position:0 -1736px}.flag.KN{background-position:0 -1750px}.flag.KP{background-position:0 -1764px}.flag.KR{background-position:0 -1778px}.flag.KW{background-position:0 -1792px}.flag.AD{background-position:0 -1806px}.flag.KZ{background-position:0 -1820px}.flag.LA{background-position:0 -1834px}.flag.LB{background-position:0 -1848px}.flag.LC{background-position:0 -1862px}.flag.LI{background-position:0 -1876px}.flag.LK{background-position:0 -1890px}.flag.LR{background-position:0 -1904px}.flag.LS{background-position:0 -1918px}.flag.LT{background-position:0 -1932px}.flag.LU{background-position:0 -1946px}.flag.LV{background-position:0 -1960px}.flag.LY{background-position:0 -1974px}.flag.MA{background-position:0 -1988px}.flag.MC{background-position:0 -2002px}.flag.MD{background-position:0 -2016px}.flag.ME{background-position:0 -2030px}.flag.MF{background-position:0 -2044px}.flag.MG{background-position:0 -2058px}.flag.MH{background-position:0 -2072px}.flag.MK{background-position:0 -2086px}.flag.ML{background-position:0 -2100px}.flag.MM{background-position:0 -2114px}.flag.MN{background-position:0 -2128px}.flag.MO{background-position:0 -2142px}.flag.MP{background-position:0 -2156px}.flag.MQ{background-position:0 -2170px}.flag.MR{background-position:0 -2184px}.flag.MS{background-position:0 -2198px}.flag.MT{background-position:0 -2212px}.flag.MU{background-position:0 -2226px}.flag.MV{background-position:0 -2240px}.flag.MW{background-position:0 -2254px}.flag.MX{background-position:0 -2268px}.flag.MY{background-position:0 -2282px}.flag.MZ{background-position:0 -2296px}.flag.NA{background-position:0 -2310px}.flag.NC{background-position:0 -2324px}.flag.NE{background-position:0 -2338px}.flag.NF{background-position:0 -2352px}.flag.NG{background-position:0 -2366px}.flag.NI{background-position:0 -2380px}.flag.NL{background-position:0 -2394px}.flag.NO{background-position:0 -2408px}.flag.NP{background-position:0 -2422px}.flag.NR{background-position:0 -2436px}.flag.NU{background-position:0 -2450px}.flag.NZ{background-position:0 -2464px}.flag.OM{background-position:0 -2478px}.flag.PA{background-position:0 -2492px}.flag.PE{background-position:0 -2506px}.flag.PF{background-position:0 -2520px}.flag.PG{background-position:0 -2534px}.flag.PH{background-position:0 -2548px}.flag.PK{background-position:0 -2562px}.flag.PL{background-position:0 -2576px}.flag.PM{background-position:0 -2590px}.flag.PN{background-position:0 -2604px}.flag.PR{background-position:0 -2618px}.flag.PS{background-position:0 -2632px}.flag.PT{background-position:0 -2646px}.flag.PW{background-position:0 -2660px}.flag.PY{background-position:0 -2674px}.flag.QA{background-position:0 -2688px}.flag.RE{background-position:0 -2702px}.flag.RO{background-position:0 -2716px}.flag.RS{background-position:0 -2730px}.flag.RU{background-position:0 -2744px}.flag.RW{background-position:0 -2758px}.flag.SA{background-position:0 -2772px}.flag.SB{background-position:0 -2786px}.flag.SC{background-position:0 -2800px}.flag.SD{background-position:0 -2814px}.flag.SE{background-position:0 -2828px}.flag.SG{background-position:0 -2842px}.flag.SH{background-position:0 -2856px}.flag.SI{background-position:0 -2870px}.flag.SJ{background-position:0 -2884px}.flag.SK{background-position:0 -2898px}.flag.SL{background-position:0 -2912px}.flag.SM{background-position:0 -2926px}.flag.SN{background-position:0 -2940px}.flag.SO{background-position:0 -2954px}.flag.SR{background-position:0 -2968px}.flag.SS{background-position:0 -2982px}.flag.ST{background-position:0 -2996px}.flag.SV{background-position:0 -3010px}.flag.SX{background-position:0 -3024px}.flag.SY{background-position:0 -3038px}.flag.SZ{background-position:0 -3052px}.flag.TA{background-position:0 -3066px}.flag.TC{background-position:0 -3080px}.flag.TD{background-position:0 -3094px}.flag.TF{background-position:0 -3108px}.flag.TG{background-position:0 -3122px}.flag.TH{background-position:0 -3136px}.flag.TJ{background-position:0 -3150px}.flag.TK{background-position:0 -3164px}.flag.TL{background-position:0 -3178px}.flag.TM{background-position:0 -3192px}.flag.TN{background-position:0 -3206px}.flag.TO{background-position:0 -3220px}.flag.TR{background-position:0 -3234px}.flag.TT{background-position:0 -3248px}.flag.TV{background-position:0 -3262px}.flag.TW{background-position:0 -3276px}.flag.TZ{background-position:0 -3290px}.flag.UA{background-position:0 -3304px}.flag.UG{background-position:0 -3318px}.flag.UM{background-position:0 -3332px}.flag.UN{background-position:0 -3346px}.flag.US{background-position:0 -3360px}.flag.UY{background-position:0 -3374px}.flag.UZ{background-position:0 -3388px}.flag.VA{background-position:0 -3402px}.flag.VC{background-position:0 -3416px}.flag.VE{background-position:0 -3430px}.flag.VG{background-position:0 -3444px}.flag.VI{background-position:0 -3458px}.flag.VN{background-position:0 -3472px}.flag.VU{background-position:0 -3486px}.flag.WF{background-position:0 -3500px}.flag.WS{background-position:0 -3514px}.flag.XK{background-position:0 -3528px}.flag.YE{background-position:0 -3542px}.flag.YT{background-position:0 -3556px}.flag.ZA{background-position:0 -3570px}.flag.ZM{background-position:0 -3584px}.flag.ZW{background-position:0 -3598px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: CountryCode }, { type: i2.FocusMonitor }, { type: i0.ElementRef }, { type: i3.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i3.NgForm, decorators: [{
                    type: Optional
                }] }, { type: i3.FormGroupDirective, decorators: [{
                    type: Optional
                }] }, { type: i4.ErrorStateMatcher }]; }, propDecorators: { preferredCountries: [{
                type: Input
            }], enablePlaceholder: [{
                type: Input
            }], inputPlaceholder: [{
                type: Input
            }], cssClass: [{
                type: Input
            }], name: [{
                type: Input
            }], onlyCountries: [{
                type: Input
            }], errorStateMatcher: [{
                type: Input
            }], enableSearch: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], describedBy: [{
                type: Input
            }], format: [{
                type: Input
            }], matMenu: [{
                type: ViewChild,
                args: [MatMenu]
            }], id: [{
                type: HostBinding
            }], countryChanged: [{
                type: Output
            }], shouldLabelFloat: [{
                type: HostBinding,
                args: ['class.ngx-floating']
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class NgxMatIntlTelInputModule {
}
NgxMatIntlTelInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxMatIntlTelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputModule, declarations: [NgxMatIntlTelInputComponent,
        SearchPipe], imports: [CommonModule,
        FormsModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatDividerModule,
        ReactiveFormsModule], exports: [NgxMatIntlTelInputComponent] });
NgxMatIntlTelInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputModule, imports: [[
            CommonModule,
            FormsModule,
            MatInputModule,
            MatMenuModule,
            MatButtonModule,
            MatDividerModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxMatIntlTelInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxMatIntlTelInputComponent,
                        SearchPipe,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatInputModule,
                        MatMenuModule,
                        MatButtonModule,
                        MatDividerModule,
                        ReactiveFormsModule
                    ],
                    exports: [NgxMatIntlTelInputComponent]
                }]
        }] });

/*
 * Public API Surface of ngx-mat-intl-tel-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxMatIntlTelInputComponent, NgxMatIntlTelInputModule, NgxMatIntlTelInputService };
//# sourceMappingURL=ngx-mat-intl-tel-input.mjs.map
