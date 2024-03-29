<<<<<<< HEAD
import $ from 'jquery';
import 'slider-pro';
import 'slider-pro/dist/css/slider-pro.min.css';

import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

(function () {
    'use strict';

    $( '#main-banner' ).sliderPro({

        width: '100%',
        height: 500,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
    
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        type: 'error',
        confirmButtonText: 'Cool'
    });
=======
import $ from 'jquery'
import 'slider-pro'
import 'slider-pro/dist/css/slider-pro.min.css'
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
(function () {
  'use strict'
>>>>>>> 9c6f4e63b97653f23b334e66a3c2e5d9570bfdfc

  $('#main-banner').sliderPro({
    width: '100%',
    height: 500,
    arrows: true,
    buttons: false,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
    thumbnailPointer: true,
    autoplay: false,
    autoScaleLayers: false
  })
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function titleSrc (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>'
      }
    }
  })
})() // Page Ready
