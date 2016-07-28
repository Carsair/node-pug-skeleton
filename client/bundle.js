var $ = require("jquery");

var $left = $('#left-tab');
var $right = $('#right-tab');

var SHOW_INDEX = 2;
var HIDE_INDEX = 1;

// Set up initial tab ordering.
function initTabs () {
  $left.css('z-index', SHOW_INDEX);
  $left.data('SHOW_TAB', true);
  $right.css('z-index', HIDE_INDEX);
  $right.data('SHOW_TAB', false);
}

// Swap oder of tabs.
function swapTabs () {
  var tempZIndex =  $left.css('z-index');
  var tempData = $left.data('SHOW_TAB');

  $left.css('z-index', $right.css('z-index'));
  $left.data('SHOW_TAB', $right.data('SHOW_TAB'));

  $right.css('z-index', tempZIndex);
  $right.data('SHOW_TAB', tempData);
}

// Listen to clicks on tabs.
function listenTabs () {
  $('.data').click(function (ev) {
    clickedTab = $(ev.target);
    if (!clickedTab.data('SHOW_TAB')){
      swapTabs();
    }
  });
}

initTabs();
listenTabs();

console.log("Hillary vs Trump");
