"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
var Typography = require("@mui/material/Typography");
var List = require("@mui/material/List");
var ListItem = require("@mui/material/ListItem");
var ListItemButton = require("@mui/material/ListItemButton");
var ListItemText = require("@mui/material/ListItemText");
var ListItemAvatar = require("@mui/material/ListItemAvatar");
var Avatar = require("@mui/material/Avatar");
var Checkbox = require("@mui/material/Checkbox");
var styles = require("@mui/material/styles");
var Drawer = require("@mui/material/Drawer");
var material = require("@mui/material");
var SwipeableDrawer = require("@mui/material/SwipeableDrawer");
var CardContent = require("@mui/material/CardContent");
var Card = require("@mui/material/Card");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var Typography__default = /*#__PURE__*/ _interopDefaultLegacy(Typography);
var List__default = /*#__PURE__*/ _interopDefaultLegacy(List);
var ListItem__default = /*#__PURE__*/ _interopDefaultLegacy(ListItem);
var ListItemButton__default =
  /*#__PURE__*/ _interopDefaultLegacy(ListItemButton);
var ListItemText__default = /*#__PURE__*/ _interopDefaultLegacy(ListItemText);
var ListItemAvatar__default =
  /*#__PURE__*/ _interopDefaultLegacy(ListItemAvatar);
var Avatar__default = /*#__PURE__*/ _interopDefaultLegacy(Avatar);
var Checkbox__default = /*#__PURE__*/ _interopDefaultLegacy(Checkbox);
var Drawer__default = /*#__PURE__*/ _interopDefaultLegacy(Drawer);
var SwipeableDrawer__default =
  /*#__PURE__*/ _interopDefaultLegacy(SwipeableDrawer);
var CardContent__default = /*#__PURE__*/ _interopDefaultLegacy(CardContent);
var Card__default = /*#__PURE__*/ _interopDefaultLegacy(Card);

function Header() {
  return React__default["default"].createElement(
    Typography__default["default"],
    { variant: "h3" },
    "Popr.ai"
  );
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

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}

var ContactCompanyList = function (_a) {
  var companyName = _a.companyName,
    logoS3Id = _a.logoS3Id,
    companyPosition = _a.companyPosition;
  _a.linkedInURL;
  return React__default["default"].createElement(
    List__default["default"],
    {
      component: "div",
      disablePadding: true,
      sx: {
        width: "100%",
        maxWidth: 300,
        bgcolor: "background.paper",
        marginLeft: "15px",
      },
    },
    React__default["default"].createElement(
      ListItem__default["default"],
      null,
      React__default["default"].createElement(Avatar__default["default"], {
        src: logoS3Id,
      }),
      React__default["default"].createElement(
        ListItemText__default["default"],
        { primary: companyName, secondary: companyPosition }
      )
    )
  );
};

var ContactCheckbox = function (_a) {
  var checked = _a.checked,
    index = _a.index,
    labelId = _a.labelId,
    onChange = _a.onChange;
  return React__default["default"].createElement(Checkbox__default["default"], {
    edge: "end",
    onChange: onChange(index),
    checked: checked.indexOf(index) !== -1,
    inputProps: { "aria-labelledby": labelId },
  });
};

var ContactListItem = function (_a) {
  var contact = _a.contact,
    index = _a.index,
    checked = _a.checked,
    onChange = _a.onChange;
  var _b = React__default["default"].useState(false),
    open = _b[0],
    setOpen = _b[1];
  var handleClick = function () {
    setOpen(!open);
  };
  var labelId = "checkbox-list-secondary-label-".concat(contact.linkedInURL);
  return React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    React__default["default"].createElement(
      ListItem__default["default"],
      {
        key: contact.linkedInURL,
        secondaryAction: React__default["default"].createElement(
          ContactCheckbox,
          {
            index: index,
            checked: checked,
            onChange: onChange,
            labelId: labelId,
          }
        ),
        disablePadding: true,
      },
      React__default["default"].createElement(
        ListItemButton__default["default"],
        { onClick: handleClick },
        React__default["default"].createElement(
          ListItemAvatar__default["default"],
          null,
          React__default["default"].createElement(Avatar__default["default"], {
            alt: "Avatar n\u00B0".concat(index + 1),
            src: contact.profilePictureS3Id,
          })
        ),
        React__default["default"].createElement(
          ListItemText__default["default"],
          { id: labelId, primary: contact.name }
        )
      )
    ),
    open &&
      React__default["default"].createElement(ContactCompanyList, {
        companyName: contact.companyName,
        logoS3Id: contact.logoS3Id,
        companyPosition: contact.companyPosition,
        linkedInURL: contact.linkedInURL,
      })
  );
};

var ContactList = function (_a) {
  var contacts = _a.contacts;
  var _b = React__default["default"].useState([1]),
    checked = _b[0],
    setChecked = _b[1];
  var haveAnyContacts =
    (contacts === null || contacts === void 0 ? void 0 : contacts.length) !== 0;
  var handleToggle = function (value) {
    return function () {
      var currentIndex = checked.indexOf(value);
      var newChecked = __spreadArray([], checked, true);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
  };
  return React__default["default"].createElement(
    List__default["default"],
    {
      dense: true,
      sx: {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      },
    },
    haveAnyContacts
      ? contacts === null || contacts === void 0
        ? void 0
        : contacts.map(function (contact, index) {
            return React__default["default"].createElement(ContactListItem, {
              onChange: handleToggle,
              checked: checked,
              index: index,
              contact: contact,
            });
          })
      : React__default["default"].createElement(
          Typography__default["default"],
          { variant: "h6" },
          "No contacts yet..."
        )
  );
};

var LargeDeviceDrawer = styles.styled(Drawer__default["default"])(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(
      [
        "\n  flex-shrink: 0;\n  width: 33.6rem;\n  & .MuiDrawer-paper {\n    width: 33.6rem;\n    border-right: none;\n    background: white;\n  }\n",
      ],
      [
        "\n  flex-shrink: 0;\n  width: 33.6rem;\n  & .MuiDrawer-paper {\n    width: 33.6rem;\n    border-right: none;\n    background: white;\n  }\n",
      ]
    ))
);
var Puller = styles.styled(material.Button)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  width: 1.875rem;\n  height: 0.375rem;\n  background-color: #451d53;\n  border-radius: 3rem;\n  left: calc(50% - 30px);\n  &:hover {\n    background-color: #8c29af;\n  }\n",
      ],
      [
        "\n  width: 1.875rem;\n  height: 0.375rem;\n  background-color: #451d53;\n  border-radius: 3rem;\n  left: calc(50% - 30px);\n  &:hover {\n    background-color: #8c29af;\n  }\n",
      ]
    ))
);
var DrawerOpenBox = styles.styled(material.Box)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  height: 3rem;\n  top: -100px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  visibility: visible;\n  right: 0;\n  left: 0;\n",
      ],
      [
        "\n  height: 3rem;\n  top: -100px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  visibility: visible;\n  right: 0;\n  left: 0;\n",
      ]
    ))
);
var DrawerClosedBox = styles.styled(material.Box)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  height: 3rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  visibility: visible;\n  right: 0;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n",
      ],
      [
        "\n  height: 3rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  visibility: visible;\n  right: 0;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n",
      ]
    ))
);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4;

var SmallDeviceDrawer = function (_a) {
  var children = _a.children;
  var _b = React__default["default"].useState(false),
    open = _b[0],
    setOpen = _b[1];
  var toggleDrawer = function (newOpen) {
    return function () {
      setOpen(newOpen);
    };
  };
  return React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    React__default["default"].createElement(
      DrawerClosedBox,
      null,
      React__default["default"].createElement(Puller, {
        onClick: toggleDrawer(true),
      })
    ),
    React__default["default"].createElement(
      SwipeableDrawer__default["default"],
      {
        anchor: "bottom",
        open: open,
        onClose: toggleDrawer(false),
        onOpen: toggleDrawer(true),
        disableSwipeToOpen: false,
        ModalProps: {
          keepMounted: true,
        },
      },
      React__default["default"].createElement(
        DrawerOpenBox,
        null,
        React__default["default"].createElement(Puller, {
          onClick: toggleDrawer(false),
        })
      ),
      children
    )
  );
};

var StepperDrawer = function (_a) {
  var children = _a.children,
    isSmallDevice = _a.isSmallDevice;
  return isSmallDevice
    ? React__default["default"].createElement(SmallDeviceDrawer, null, children)
    : React__default["default"].createElement(
        LargeDeviceDrawer,
        { variant: "permanent" },
        children
      );
};

var PreviewLayoutBox = styles.styled(material.Box)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background: #e6e6e6;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-self: end;\n  flex-direction: column;\n",
      ],
      [
        "\n  background: #e6e6e6;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-self: end;\n  flex-direction: column;\n",
      ]
    ))
);
var templateObject_1;

    var children = _a.children, isSmallDevice = _a.isSmallDevice;
    return isSmallDevice ? (React__default["default"].createElement(SmallDeviceDrawer, null, children)) : (React__default["default"].createElement(LargeDeviceDrawer, { variant: "permanent" }, children));
};

var PreviewLayoutBox = styles.styled(material.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #e6e6e6;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-self: end;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n"], ["\n  background: #e6e6e6;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-self: end;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: scroll;\n"])));
var templateObject_1;

var PreviewLayoutContainer = function (_a) {
  var children = _a.children;
  return React__default["default"].createElement(
    PreviewLayoutBox,
    null,
    children
  );
};

var CardContainer = styles.styled(Card__default["default"])(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  width: 25rem;\n  height: 25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: none;\n",
      ],
      [
        "\n  width: 25rem;\n  height: 25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: none;\n",
      ]
    ))
);
var templateObject_1;

var Slide = function (_a) {
  var header = _a.header,
    main = _a.main,
    footer = _a.footer;
  return React__default["default"].createElement(
    CardContainer,
    null,
    React__default["default"].createElement(
      CardContent__default["default"],
      null,
      React__default["default"].createElement(
        Typography__default["default"],
        { variant: "body2", color: "text.secondary" },
        header
      )
    ),
    React__default["default"].createElement(
      CardContent__default["default"],
      null,
      React__default["default"].createElement(
        Typography__default["default"],
        { variant: "body2", color: "text.secondary" },
        main
      )
    ),
    React__default["default"].createElement(
      CardContent__default["default"],
      null,
      React__default["default"].createElement(
        Typography__default["default"],
        { variant: "body2", color: "text.secondary" },
        footer
      )
    )
  );
};

exports.ContactList = ContactList;
exports.Header = Header;
exports.Slide = Slide;
exports.PreviewLayoutContainer = PreviewLayoutContainer;
exports.StepperDrawer = StepperDrawer;
