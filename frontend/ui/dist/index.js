'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Typography = require('@mui/material/Typography');
var List = require('@mui/material/List');
var ListItem = require('@mui/material/ListItem');
var ListItemButton = require('@mui/material/ListItemButton');
var ListItemText = require('@mui/material/ListItemText');
var ListItemAvatar = require('@mui/material/ListItemAvatar');
var Checkbox = require('@mui/material/Checkbox');
var Avatar = require('@mui/material/Avatar');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemButton__default = /*#__PURE__*/_interopDefaultLegacy(ListItemButton);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var ListItemAvatar__default = /*#__PURE__*/_interopDefaultLegacy(ListItemAvatar);
var Checkbox__default = /*#__PURE__*/_interopDefaultLegacy(Checkbox);
var Avatar__default = /*#__PURE__*/_interopDefaultLegacy(Avatar);

function Header() {
    return React__default["default"].createElement(Typography__default["default"], { variant: "h3" }, "Popr.ai");
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ContactListItem = function (_a) {
    var id = _a.id, name = _a.name, profilePicture = _a.profilePicture, company = _a.company, companyLogo = _a.companyLogo, position = _a.position, index = _a.index, checked = _a.checked, onChange = _a.onChange;
    var _b = React__default["default"].useState(false), open = _b[0], setOpen = _b[1];
    var handleClick = function () {
        setOpen(!open);
    };
    var labelId = "checkbox-list-secondary-label-".concat(id);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ListItem__default["default"], { key: id, secondaryAction: React__default["default"].createElement(Checkbox__default["default"], { edge: "end", onChange: onChange(index), checked: checked.indexOf(index) !== -1, inputProps: { "aria-labelledby": labelId } }), disablePadding: true },
            React__default["default"].createElement(ListItemButton__default["default"], { onClick: handleClick },
                React__default["default"].createElement(ListItemAvatar__default["default"], null,
                    React__default["default"].createElement(Avatar__default["default"], { alt: "Avatar n\u00B0".concat(index + 1), src: profilePicture })),
                React__default["default"].createElement(ListItemText__default["default"], { id: labelId, primary: name }))),
        open && (React__default["default"].createElement(List__default["default"], { component: "div", disablePadding: true, sx: {
                width: "100%",
                maxWidth: 300,
                bgcolor: "background.paper",
                marginLeft: "15px"
            } },
            React__default["default"].createElement(ListItem__default["default"], null,
                React__default["default"].createElement(Avatar__default["default"], { src: companyLogo }),
                React__default["default"].createElement(ListItemText__default["default"], { primary: company, secondary: position }))))));
};

var contacts = [
    {
        id: "maria-de-los-angeles",
        name: "María de los Ángeles Portal",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4E03AQEtoVcL8kI8sw/profile-displayphoto-shrink_100_100/0/1617053829266?e=1667433600&v=beta&t=Jd1BrxeqAWpDP16H4Sj2_avspwMM028WHQO8W0Y2O4k",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "Full-Stack Developer"
    },
    {
        id: "rosariosantamarina",
        name: "Rosario Santa Marina",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4D03AQHW2Cuwbra6qA/profile-displayphoto-shrink_100_100/0/1610374777767?e=1667433600&v=beta&t=6XEKzBN-0GLObfDc1D2C-xSi_gLdKu-kEAFRnREGWrY",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "Sr. Software developer en NaNLABS"
    },
    {
        id: "agustin-perkins",
        name: "Agustin Perkins",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4D03AQGjxjJM3scOUw/profile-displayphoto-shrink_100_100/0/1575408719695?e=1667433600&v=beta&t=ffyUluaJ7xkiejp38Kk1smn2xKDuvlnzfrc8pct7dPw",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "Software Developer en NaNLABS"
    },
    {
        id: "sgshimojo",
        name: "Silvina Grace Shimojo",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4E03AQF0PFuxxBf9Qw/profile-displayphoto-shrink_100_100/0/1607540876685?e=1667433600&v=beta&t=G94KzLXXzQ0SE-r-sNliOcvq-aLD_q9WoMWr6dXLcm0",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "IT Project Manager at NaNLABS l CSM"
    },
    {
        id: "valeriacerrada",
        name: "Valeria Cerrada Cortes",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4D03AQF_ICEw0jDgog/profile-displayphoto-shrink_100_100/0/1644850367873?e=1667433600&v=beta&t=vmcCUBmN5aBuNQ9VTBu2wuTAAVWU7xzjPAjv87pxxsw",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "UX UI Designer"
    },
    {
        id: "pamela-contin-5357531ab",
        name: "Pamela Contin",
        profilePicture: "https://media-exp1.licdn.com/dms/image/C4D03AQETWJV95kV4hg/profile-displayphoto-shrink_100_100/0/1614781299830?e=1667433600&v=beta&t=HH31ip0WZDDtlZ0JuGc4VfdMBGgbUutI91kmRwCDNbM",
        company: "NaNLABS",
        companyLogo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEQpYbJwhTLPw/company-logo_100_100/0/1658182094225?e=1669852800&v=beta&t=C-9TRhzQRk8YuDWGJbwy8PfVqjFBmyvE4wWGnyi8F3U",
        position: "Fullstack developer en NaNLABS"
    },
];
var ContactList = function () {
    var _a = React__default["default"].useState([1]), checked = _a[0], setChecked = _a[1];
    var haveAnyContacts = contacts.length !== 0;
    var handleToggle = function (value) { return function () {
        var currentIndex = checked.indexOf(value);
        var newChecked = __spreadArray([], checked, true);
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }; };
    return (React__default["default"].createElement(List__default["default"], { dense: true, sx: {
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper"
        } }, haveAnyContacts ? (contacts.map(function (contact, index) {
        return (React__default["default"].createElement(ContactListItem, __assign({ onChange: handleToggle, checked: checked, index: index }, contact)));
    })) : (React__default["default"].createElement(Typography__default["default"], { variant: "h6" }, "No contacts yet..."))));
};

exports.ContactList = ContactList;
exports.Header = Header;
