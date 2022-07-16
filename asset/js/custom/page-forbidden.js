function closeWindow() {
  window.close();
  window.location = "about:blank";
}

function disableDebug() {
  if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
    closeWindow();
  }

  if (typeof console.profiles == "object" && console.profiles.length > 0) {
    closeWindow();
  }
}

function disableRightMenu() {
  document.oncontextmenu = function (event) {
    if (window.event) {
      event = window.event;
    }

    try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}

function disablePaste() {
  document.onpaste = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}

function disableCopy() {
  document.oncopy = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}

function disableCut() {
  document.oncut = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}

function disableSelect() {
  document.onselectstart = function (event) {
    if (window.event) {
      event = window.event;
    }
    try {
      var the = event.srcElement;
      if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
}

function disableF12() {
  document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      return false;
    }
  }
}

// 屏蔽控制台
//disableDebug();
// 屏蔽右键菜单
disableRightMenu();
// 屏蔽粘贴
disablePaste();
// 屏蔽复制
disableCopy();
// 屏蔽剪切
disableCut();
// 屏蔽选中
disableSelect();
// 屏蔽F12
//disableF12();