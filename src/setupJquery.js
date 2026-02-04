// src/setupJquery.js
import $ from "jquery";

// jQueryをグローバルに登録
if (typeof window !== "undefined") {
  window.jQuery = $;
  window.$ = $;
  require("jquery.ripples");
}
