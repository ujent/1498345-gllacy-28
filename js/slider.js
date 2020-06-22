var adsSlider = document.querySelector(".advertisement.slider");

if (adsSlider) {
  var siteWrapper = document.querySelector(".site-wrapper");
  var adsItem1 = adsSlider.querySelector(".advertisement-item-1");
  var adsItem2 = adsSlider.querySelector(".advertisement-item-2");
  var adsItem3 = adsSlider.querySelector(".advertisement-item-3");
  var sliderBtn1 = adsSlider.querySelector("button[name='slider1']");
  var sliderBtn2 = adsSlider.querySelector("button[name='slider2']");
  var sliderBtn3 = adsSlider.querySelector("button[name='slider3']");

  sliderBtn1.addEventListener("click", function (evt) {
    siteWrapper.classList.add("site-wrapper-1");
    siteWrapper.classList.remove("site-wrapper-2", "site-wrapper-3");

    adsItem1.classList.add("slide-current");
    adsItem2.classList.remove("slide-current");
    adsItem3.classList.remove("slide-current");

    sliderBtn2.classList.remove("current");
    sliderBtn3.classList.remove("current");
    sliderBtn1.classList.add("current");
  });

  sliderBtn2.addEventListener("click", function (evt) {
    siteWrapper.classList.add("site-wrapper-2");
    siteWrapper.classList.remove("site-wrapper-1", "site-wrapper-3");

    adsItem2.classList.add("slide-current");
    adsItem1.classList.remove("slide-current");
    adsItem3.classList.remove("slide-current");

    sliderBtn1.classList.remove("current");
    sliderBtn3.classList.remove("current");
    sliderBtn2.classList.add("current");
  });

  sliderBtn3.addEventListener("click", function (evt) {
    siteWrapper.classList.add("site-wrapper-3");
    siteWrapper.classList.remove("site-wrapper-1", "site-wrapper-2");

    adsItem3.classList.add("slide-current");
    adsItem1.classList.remove("slide-current");
    adsItem2.classList.remove("slide-current");

    sliderBtn1.classList.remove("current");
    sliderBtn2.classList.remove("current");
    sliderBtn3.classList.add("current");
  });
}
