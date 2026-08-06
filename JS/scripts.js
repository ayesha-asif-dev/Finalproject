$(document).ready(function () {

  // 1. NAVBAR
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
    // $("body").toggleClass("menu-open");
  });

  $(".nav-links a").click(function () {
    $(".nav-links").removeClass("show");
    $(".menu-btn").removeClass("active");
    // $("body").removeClass("menu-open");
  });


  //  FAQ ACCORDION 
  if ($("#accordion").length && $.fn.accordion) {
    $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
  }


  //  SWIPER CAROUSEL 
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


  //  COUNTER ANIMATION
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


  //  CONTACT FORM & MODAL 
  const form = $('#myForm');
  const previewModal = $('#previewModal');
  const previewList = $('#previewList');

  if (form.length && $.validator) {

    // Custom Validation 
    $.validator.addMethod('pkPhone', function (value, element) {
      const cleanNumber = value.replace(/[-\s]/g, '');
      return this.optional(element) || /^0\d{10}$/.test(cleanNumber);
    }, 'Enter a valid 11-digit number (e.g. 03XXXXXXXXX).');

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

    // Estimated Hours for TRANSPORT Calculation
    function getEstHours(transport) {
      if (transport === 'Flight') return '2 - 3 hrs';
      if (transport === 'Train') return '12 - 18 hrs';
      if (transport === 'Car') return '8 - 10 hrs';
      return '10 - 14 hrs';
    }

    // Build Modal Preview List
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

    // Preview Button Click
    $('#previewBtn').on('click', function () {
      if (form.valid()) {
        buildPreview();
        previewModal.addClass('open');
      }
    });

    // Modal Close
    $('#closeModal').on('click', function () {
      previewModal.removeClass('open');
    });

    previewModal.on('click', function (e) {
      if ($(e.target).is(previewModal)) {
        previewModal.removeClass('open');
      }
    });

    // Reset Button Click
    $('#resetBtn').on('click', function () {
      form.validate().resetForm();
      form.find('.invalid').removeClass('invalid');
      $('.error-msg').empty();
    });

  }  

  // EXPLORE PAGE STARTED
const cardsGrid = $('#cardsGrid');

if (cardsGrid.length) {
  $.each(citiesData, function (index, city) {
    const cardHtml = `
      <div class="city-card">
        <img src="${city.cardImg}" alt="${city.cityName}">
        <div class="city-card-info">
          <h3>${city.cityName}</h3>
          <p>${city.tagline}</p>
          <button type="button" class="btn btn-primary view-details-btn" data-id="${city.id}">
            View Details
          </button>
        </div>
      </div>
    `;
    cardsGrid.append(cardHtml);
  });
}

// EXPLORE MODAL 
const exploreModal = $('#detailModal');
const modalBody = $('#modalBody');

$(document).on('click', '.view-details-btn', function () {
  const cityId = $(this).data('id');
  const selectedCity = citiesData.find(c => c.id === cityId);

  if (selectedCity) {
    const galleryGroup = `gallery-${selectedCity.id}`;

    let hotelsHtml = '';
    $.each(selectedCity.hotels, function (i, item) {
      hotelsHtml += `
        <div class="modal-item-card">
          <a href="${item.img}" data-fancybox="${galleryGroup}" data-caption="${item.name} - ${item.price}">
            <img src="${item.img}" alt="${item.name}">
          </a>
          <h4>${item.name}</h4>
          <div class="price-tag">${item.price}</div>
        </div>
      `;
    });

    let restHtml = '';
    $.each(selectedCity.restaurants, function (i, item) {
      restHtml += `
        <div class="modal-item-card">
          <a href="${item.img}" data-fancybox="${galleryGroup}" data-caption="${item.name} - ${item.detail}">
            <img src="${item.img}" alt="${item.name}">
          </a>
          <h4>${item.name}</h4>
          <p>${item.detail}</p>
        </div>
      `;
    });

    let placesHtml = '';
    $.each(selectedCity.places, function (i, item) {
      placesHtml += `
        <div class="modal-item-card">
          <a href="${item.img}" data-fancybox="${galleryGroup}" data-caption="${item.name} - ${item.detail}">
            <img src="${item.img}" alt="${item.name}">
          </a>
          <h4>${item.name}</h4>
          <p>${item.detail}</p>
        </div>
      `;
    });

    const modalContent = `
      <div class="modal-header-banner">
        <h2>Explore ${selectedCity.cityName} With Us</h2>
        <div class="video-container">
      <iframe 
        src="${selectedCity.modalVideo}" 
        title="${selectedCity.cityName} Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
       </div>
       
      </div>

      <h3 class="modal-section-title">Top Luxury Hotels</h3>
      <div class="modal-grid-3">${hotelsHtml}</div>

      <h3 class="modal-section-title">Famous Dining & Restaurants</h3>
      <div class="modal-grid-3">${restHtml}</div>

      <h3 class="modal-section-title">Best Places & Sightseeing</h3>
      <div class="modal-grid-3">${placesHtml}</div>
    `;

    modalBody.html(modalContent);
    exploreModal.addClass('open');
  }
});

$('#closeExploreModal').on('click', function () {
  exploreModal.removeClass('open');
});

exploreModal.on('click', function (e) {
  if ($(e.target).is(exploreModal)) {
    exploreModal.removeClass('open');
  }
});

// FANCYBOX INITIALIZATION
Fancybox.bind("[data-fancybox]", {
});

});

// Explore ended 


