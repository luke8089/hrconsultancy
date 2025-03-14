(function ($) {
    $(function () {
  
      function agPanelShow(btn, panel) {
        if (panel.css('display') != 'block') {
          btn.next(panel).fadeIn();
        }
      }
  
      function agPanelClose(panel) {
        $(document).bind('keyup', function (e) {
          if (e.keyCode != 27) {
            return true;
          }
          /* 'Esc' key (27) */
          if (e.keyCode == 27 && panel.is(':visible')) {
            panel.fadeOut();
          }
        });
  
        $(document).mouseup(function (e) {
          if (!panel.is(e.target) && panel.has(e.target).length === 0) {
            panel.fadeOut();
          }
        });
      }
  
      /* login 
      var agLoginBtn = $('.js-start-login_link'),
        agLoginPanel = $('.js-start-login_panel');
  
      agLoginBtn.on('click', function (e) {
        e.preventDefault();
  
        agLoginBtnWidth = agLoginBtn.width();
        agLanguageBtnWidth = agLanguageBox.width();
        agPanelPosition = (agLanguageBtnWidth + 4),
        agArrowPosition = ((Math.floor(agLoginBtnWidth / 2) + agLanguageBtnWidth) - 4);
  
        agLoginPanel.css({right: - agPanelPosition});
        $('.js-start-login_panel-arrow').css({right: agArrowPosition});
        agPanelShow(agLoginBtn, agLoginPanel);
      });
  
      agPanelClose(agLoginPanel);
         */
  
      
  
    /* search */
var agSearchBlock = $('.js-search-block'),
agSearchBtn = $('.js-search_btn'),
agCloseBtn = $('.js-search_btn-close'),
agSubmitBtn = $('#ag-search_btn-submit'),
searchInput = $('.js-search_input'),
searchForm = $('#ag-search_form'); // Select the form

agSearchBtn.on('click', function () {
agSearchBtn.next(agSearchBlock).addClass('js-ag-search-block');
agCloseBtn.show();
agSubmitBtn.show();
});

agCloseBtn.on('click', function () {
agSearchBlock.removeClass('js-ag-search-block');
$(this).hide();
agSubmitBtn.hide();
searchInput.val('');
});

// Function to handle search
function handleSearch() {
var query = searchInput.val().toLowerCase().trim();
var redirectUrl = '';

// Dynamic redirection based on keywords
if (query.match(/career|job|employment/)) {
    redirectUrl = '/components/career.html';
} else if (query.match(/service|product|hr|human resource|solutions/)) {
    redirectUrl = '/components/services.html';
} else if (query.match(/contact|location|address/)) {
    redirectUrl = '/components/contact/location.html';
} else if (query.match(/about|company|info/)) {
    redirectUrl = '/components/about.html';
} else if (query.match(/blog|news|article/)) {
    redirectUrl = '/components/blog/blog.html';
} else if (query.match(/investment|finance|portfolio/)) {
    redirectUrl = '/components/investment.html';
} else {
    redirectUrl = '/index.html'; // Default to home page
}

// Redirect to the relevant page
if (redirectUrl) {
    window.location.href = redirectUrl;
}
}

// Handle search button click
agSubmitBtn.on('click', function (e) {
e.preventDefault(); // Prevent default form submission
handleSearch();
});

// Listen for "Enter" key press inside the input field
searchInput.on('keypress', function (e) {
if (e.which === 13) { // 13 is the keycode for Enter
    e.preventDefault(); // Prevent form submission
    handleSearch();
}
});

// Prevent form from submitting normally
searchForm.on('submit', function (e) {
e.preventDefault();
handleSearch();
});


      /* mobile menu */
      var agFlagScreenToggle,
  
        agBody = $('body'),
        agHeader = $('.js-header-wrap'),
        agMenuBtn = $('.js-menu_btn-wrap'),
        agMenuBlock = $('.js-menu-block'),
        agMenuNav = $('.js-menu_nav'),
  
        agParentCat = $('.js-menu-subcat_title-list'),
        agSubcatList = $('.js-menu-subcat_list');
  
      function agMenuClose() {
        agMenuBtn.children().removeClass('js-ag-menu_btn-show');
        agMenuBlock.removeClass('js-ag-menu-block');
        agMenuNav.removeClass('js-ag-menu_nav'); // remove animation for categories items
  
        agBody.removeClass('js-ag-body-noscroll');
        agHeader.removeAttr('data-pos');
        setTimeout(function () {
          agHeader.removeClass('js-ag-header-wrap__overlay');
        }, 305);
      }
  
      function agSubcatListHide() {
        agParentCat.next('.js-menu-subcat_list').removeClass('js-ag-menu-subcat_list');
        agParentCat.next('.js-menu-subcat_list').slideUp();
        agParentCat.parent().removeClass('js-ag-menu-parent_item');
      }
  
      $(window).resize(function () {
        var width = $(window).width();
  
        if (width <= 767) { // screen <= 767
          if (agFlagScreenToggle === true || agFlagScreenToggle == undefined) {
  
             //agLanguagePanel.removeAttr('style'); // uncomment, if you need to hide the panel after resizing
            //agLoginPanel.removeAttr('style'); // uncomment, if you need to hide the panel after resizing
  
            /* toggle menu */
              agMenuBtn.on('click', function () {
  
                if(agMenuBtn.children().hasClass('js-ag-menu_btn-show')) {
                    var agPagePos = agHeader.attr('data-pos');
  
                  agMenuClose();
                  agSubcatListHide();
  
                  $('body, html').animate({scrollTop: agPagePos}, 0);
  
                } else {
  
                  if(!agHeader.hasClass('js-ag-header-wrap__overlay')) { // if the menu closing animation hasn't ended
                    var agScrollSelector = '';
  
                    if (!agScrollSelector && $('html').scrollTop()) {
                      agScrollSelector = 'html';
                    }
                    if (!agScrollSelector && $('body').scrollTop()) {
                      agScrollSelector = 'body';
                    }
  
                    agScrollPos = $(agScrollSelector).scrollTop() ? $(agScrollSelector).scrollTop() : 0;  // page position before opening the menu
  
                    agMenuBtn.children().addClass('js-ag-menu_btn-show');
  
                    agMenuBlock.animate({scrollTop: 0}, 100).addClass('js-ag-menu-block');  // scroll menu to top (to the starting position)
                    agMenuNav.addClass('js-ag-menu_nav');  // add animation for categories items
  
                    agBody.addClass('js-ag-body-noscroll');
                    agHeader.addClass('js-ag-header-wrap__overlay').attr('data-pos', agScrollPos);
                  }
  
                }
  
              });
            /* /toggle menu */
  
  
            /* show header when scrolling */
            var agScrollPrev = 100;
  
            $(window).scroll(function () {
              var agScrolled = $(window).scrollTop();
  
              if (agScrolled > 100) {
                if (agScrolled > agScrollPrev) {
                  agHeader.addClass('js-ag-header-wrap__scroll');
                } else {
                  agHeader.removeClass('js-ag-header-wrap__scroll');
                }
                agScrollPrev = agScrolled;
              }
            });
            /* /show header when scrolling */
  
            /* select country */
            var agLanguageSelectbox = $('#ag-mob-language_selectbox'),
              agGetClass = agLanguageSelectbox.attr('class');
  
            function agGetFlag() {
              var agLanguageSelectbox = $('#ag-mob-language_selectbox'),
                agLanguageCode = $('.js-mob-language_select option:selected').val(),
                agLanguageFlag = 'ag-language_icon-' + agLanguageCode;
  
              agLanguageSelectbox.attr('class', agGetClass).addClass(agLanguageFlag);
            }
  
            agGetFlag();
  
            $('.js-mob-language_select').change(function () {
              agGetFlag();
            });
            /* /select country */
  
            /* show subcategories */
            agParentCat.on('click', function (e) {
              e.preventDefault();
  
              if ($(this).next('.js-menu-subcat_list').css('display') == 'none') {
                agSubcatListHide();
  
                agParentCat.removeClass('js-ag-menu-parent_item');
                $(this).next('.js-menu-subcat_list').addClass('js-ag-menu-subcat_list');
                $(this).next('.js-menu-subcat_list').slideDown();
                $(this).parent().addClass('js-ag-menu-parent_item');
              }else{
                agSubcatListHide();
              }
            });
            /* /show subcategories */
  
            agFlagScreenToggle = false;
          }
        }else{ // screen > 767 
          if (agFlagScreenToggle === false || agFlagScreenToggle == undefined) {
  
            agMenuBtn.off('click');
            agParentCat.off('click');
            agSubcatList.removeAttr('style');
  
            agMenuClose();
  
            agSubcatListHide();
  
            agFlagScreenToggle = true;
          }
        }
      }).resize();
      /* /mobile menu */
  
    });
  })(jQuery);
  

 /* script for the our members*/

  let members = $(".teamz__members");
let isHover = false;

setInterval(() => {
  if (!isHover) {
    let min = 1;
    let max = $(members).length;
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    $(".teamz__members:nth-child(" + random + ")")
      .addClass("teamz__members--show")
      .siblings()
      .removeClass("teamz__members--show");
  }
}, 3000);
function mediaSize() { 
  	
$(members).hover(

  () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
    $(members).removeClass("teamz__members--show");
    isHover = true;
      console.log('hover');
    }
  },
  () => {
     if (window.matchMedia('(min-width: 768px)').matches) {
    isHover = false;
     }
  }
);
    
}

	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);