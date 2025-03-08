"use strict";

// "Options.config.user" verisini chrome.storage.local'dan alıp işleme
chrome.storage.local.get("Options.config.user", function(result) {
  if (result["Options.config.user"]) {
    var o = result["Options.config.user"];
    
    // Veriyi chrome.storage.local'a kaydetme
    chrome.storage.local.set(o, function () {
      // "Options.config.user" anahtarını chrome.storage.local'dan silme
      chrome.storage.local.remove("Options.config.user");
    });
  }
});

// "Options.config.base" anahtarını chrome.storage.local'dan silme işlemi
chrome.storage.local.get("Options.config.base", function(result) {
  if (result["Options.config.base"]) {
    chrome.storage.local.remove("Options.config.base");
  }
});