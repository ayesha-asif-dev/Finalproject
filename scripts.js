$(document).ready(function () {

  // ==========================================
  // 1. NAVBAR & MOBILE MENU LOGIC
  // ==========================================
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".main-nav").addClass("scrolled");
    } else {
      $(".main-nav").removeClass("scrolled");
    }
  });

  $(".menu-btn").click(function () {
    $(this).toggleClass("active");
    $(".nav-links").toggleClass("show");
  });

  $(".nav-links a").click(function () {
    $(".nav-links").removeClass("show");
    $(".menu-btn").removeClass("active");
  });


  // ==========================================
  // 2. FAQ ACCORDION (Safely wrapped)
  // ==========================================
  if ($("#accordion").length && $.fn.accordion) {
    $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
  }


  // ==========================================
  // 3. SWIPER CAROUSEL (Safely wrapped)
  // ==========================================
  if ($(".mySwiper").length && typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      }
    });
  }


  // ==========================================
  // 4. COUNTER ANIMATION
  // ==========================================
  if ($(".count").length) {
    $(".count").each(function () {
      const counter = $(this);
      const target = parseInt(counter.data("count"));
      let count = 0;

      const interval = setInterval(function () {
        count++;
        counter.text(count + "+");

        if (count >= target) {
          clearInterval(interval);
        }
      }, 20);
    });
  }


  // ==========================================
  // 5. CONTACT FORM & MODAL LOGIC
  // ==========================================
  const form = $('#myForm');
  const modal = $('#previewModal');
  const previewList = $('#previewList');

  if (form.length && $.validator) {

    // Custom Validation Method for Pakistan Phone Numbers
    $.validator.addMethod('pkPhone', function (value, element) {
      const cleanNumber = value.replace(/[-\s]/g, '');
      return this.optional(element) || /^0\d{10}$/.test(cleanNumber);
    }, 'Enter a valid 11-digit number (e.g. 03XXXXXXXXX).');

    // Custom Validation Method: Destination must differ from Origin
    $.validator.addMethod('differentFrom', function (value, element, param) {
      return value !== $(param).val();
    }, 'Destination must differ from starting point.');

    // Form Validation Setup
    form.validate({
      rules: {
        fullName: { required: true, minlength: 3 },
        email: { required: true, email: true },
        contactNo: { required: true, pkPhone: true },
        transport: { required: true },
        from: { required: true },
        to: { required: true, differentFrom: '#from' },
        days: { required: true, min: 1, max: 60 },
        budget: { required: true, min: 500 },
        tripDate: { required: true },
        tripTime: { required: true }
      },

      errorPlacement: function (error, element) {
        const errorSpanId = '#err-' + element.attr('name');
        if ($(errorSpanId).length) {
          $(errorSpanId).html(error);
        } else {
          error.insertAfter(element);
        }
      },

      highlight: function (element) {
        $(element).addClass('invalid');
      },

      unhighlight: function (element) {
        $(element).removeClass('invalid');
        $('#err-' + $(element).attr('name')).empty();
      }
    });

    // Helper Function: Estimated Hours
    function getEstHours(transport) {
      if (transport === 'Flight') return '2 - 3 hrs';
      if (transport === 'Train') return '12 - 18 hrs';
      if (transport === 'Car') return '8 - 10 hrs';
      return '10 - 14 hrs'; // Default for Bus
    }

    // Function: Build Modal Preview List
    function buildPreview() {
      const days = Number($('#days').val()) || 0;
      const dailyBudget = Number($('#budget').val()) || 0;
      const transport = $('#transport').val();

      const tripSummary = {
        "Name": $('#fullName').val(),
        "Route": `${$('#from').val()} → ${$('#to').val()}`,
        "Transport": transport,
        "Est. Travel Time": getEstHours(transport),
        "Duration": `${days} Days`,
        "Departure": `${$('#tripDate').val()} at ${$('#tripTime').val()}`,
        "Total Budget": `PKR ${(days * dailyBudget).toLocaleString()}`
      };

      previewList.empty();
      $.each(tripSummary, function (key, value) {
        previewList.append(`<li><span>${key}:</span> <strong>${value}</strong></li>`);
      });
    }

    // Event: Preview Button Click
    $('#previewBtn').on('click', function () {
      if (form.valid()) {
        buildPreview();
        modal.addClass('open');
      }
    });

    // Event: Modal Close
    $('#closeModal').on('click', function () {
      modal.removeClass('open');
    });

    modal.on('click', function (e) {
      if ($(e.target).is(modal)) {
        modal.removeClass('open');
      }
    });

    // Event: Reset Button Click
    $('#resetBtn').on('click', function () {
      form.validate().resetForm();
      form.find('.invalid').removeClass('invalid');
      $('.error-msg').empty();
    });

  }

});