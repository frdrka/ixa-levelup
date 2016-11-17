/*
 * @frederika_ (https://twitter.com/frederika_)
 */

var u = window.location.href, elem;
if (/union\/special_result\.php/.test(u)){
  // union again? 
  document.querySelector('form#union_data > p > a > img').click();
} else if (/union\/special\.php/.test(u)) {
  // select kosho
  elem = document.querySelector("#busho_info .td_center > div > a");
  if (elem) {
    elem.click();
  } else {
    // select busho
    document.querySelector("div.ig_deck_smallcardbtnarea > a").click();
  }
} else if (/union\/special_confirm\.php/.test(u)) {
  // confirm 
  document.querySelector(".common_box3in >  .common_box3bottom  > .mt10 >  a").click();
}
