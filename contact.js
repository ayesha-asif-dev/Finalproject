$(document).ready(function () {

  const form = $('#myForm');
  const modal = $('#previewModal');
  const previewList = $('#previewList');

  //  Input Validation 
  $.validator.addMethod('pkPhone', function(value, element) {
    const cleanNumber = value.replace(/[-\s]/g, ''); 
    return this.optional(element) || /^0\d{10}$/.test(cleanNumber);
  }, 'Enter a valid 11-digit number (e.g. 03XXXXXXXXX).');

  $.validator.addMethod('differentFrom', function(value, element, param) {
    return value !== $(param).val();
  }, 'Destination must differ from starting point.');

  // connect input validation to ur code 
  form.validate({
    rules: {
      fullName: { required: true, minlength: 3 },
      email: { required: true, email: true },
      contactNo: { required: true, pkPhone: true },
      transport: { required: true },
      from: { required: true },
      to: { required: true, differentFrom: '#from' },
      days: { required: true, min: 1, max: 30 },
      budget: { required: true, min: 500},
      tripDate: { required: true },
      tripTime: { required: true }
    },
    // error msg placement 
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

  // 4. Travel hours estimator helper (Added 'Car' since you had it in HTML)
  function getEstHours(transport) {
    if (transport === 'Flight') return '2 - 3 hrs';
    if (transport === 'Train') return '12 - 18 hrs';
    if (transport === 'Car') return '8 - 10 hrs';
    return '10 - 14 hrs';  Bus
  }
  // Number of Days
  function buildPreview() {
    //  use HTML IDs to grab the values
    const days = Number($('#days').val()) || 0;
    const dailyBudget = Number($('#budget').val()) || 0;
    const transport = $('#transport').val();

    // Modal  containing preview details
    const tripSummary = {
      "Name": $('#fullName').val(),
      "Route": `${$('#from').val()} → ${$('#to').val()}`,
      "Transport": transport,
      "Est. Travel Time": getEstHours(transport),
      "Duration": `${days} Days`,
      "Departure": `${$('#tripDate').val()} at ${$('#tripTime').val()}`,
      "Total Budget": `PKR ${(days * dailyBudget).toLocaleString()}`
    };

    //  modal list items
    previewList.empty();
    $.each(tripSummary, function (key, value) {
      previewList.append(`<li><span>${key}:</span> <strong>${value}</strong></li>`);
    });
  }

  // 6. Preview Button Click
  $('#previewBtn').on('click', function () {
    if (form.valid()) {
      buildPreview();
      modal.addClass('open'); 
    }
  });

  // 7. Modal Close Events
  $('#closeModal').on('click', function () {
    modal.removeClass('open');
  });

  modal.on('click', function (e) {
    if ($(e.target).is(modal)) modal.removeClass('open');
  });


  // Reset Button Click
  $('#resetBtn').on('click', function () {
    form.validate().resetForm();
    form.find('.invalid').removeClass('invalid');
  });
});