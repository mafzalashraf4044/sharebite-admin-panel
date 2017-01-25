$(document).ready(function(){

  //Initializing Date Picker
  datePicker();

  var $allowanceHoursContainer = $('#allowance-hours-container');
  var $allowanceHoursRow = $($allowanceHoursContainer).html();

  //Hidding Remove Btn
  $('.col-md-7').addClass('col-md-8');
  $('.col-md-7').removeClass('col-md-7');
  $('.col-md-1').addClass('hidden');

  //Appending a new row of Allowance Hours if Add btn is clicked
  $(document).on('click', '#add-btn', function(){
    $($allowanceHoursContainer).append($allowanceHoursRow);

    //Reinitializing Date Picker for Newly Added DOM elements
    datePicker();

    //Displaying the Remove Btn
    $('.col-md-8').addClass('col-md-7');
    $('.col-md-8').removeClass('col-md-8');
    $('.col-md-1').removeClass('hidden');
  });

  //Removing Allowance Hours row is on Remove Btn Click
  $(document).on('click', '.remove-btn', function(){
      //Remove the row if total rows are greater than 1
      if($('.remove-btn').length > 2){
        $(this).parent().parent().remove();
      }

      //Hidding Remove Btn
      if($('.remove-btn').length === 2){
        $('.col-md-7').addClass('col-md-8');
        $('.col-md-7').removeClass('col-md-7');
        $('.col-md-1').addClass('hidden');
      }

      //Remove the Disabled class from Add Btn if 'Weekdays', 'Weekdays and Saturday' or '7 Days a week' was selected
      var $allowanceDays = $(this).parent().prev().prev().prev().find('select').val();

      if($allowanceDays == 'Weekdays' || $allowanceDays == 'Weekdays and Saturday' || $allowanceDays == '7 Days a week'){
        $('#add-btn').removeClass('disabled');
      }
  });

  //Add Disabled class if 'Weekdays', 'Weekdays and Saturday' or '7 Days a week' is selected
  $(document).on('change', '#allowance-days', function(){
    var $allowanceDays = $(this).val();

    if($allowanceDays == 'Weekdays' || $allowanceDays == 'Weekdays and Saturday' || $allowanceDays == '7 Days a week'){
      $('#add-btn').addClass('disabled');
    }

  });
});

function datePicker() {
    $('.date').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
            previous: "fa fa-arrow-left",
            next: "fa fa-arrow-right",
        },
        format: 'LT',
    });
}

$('.selectpicker').selectpicker({
  style: 'btn-defalut',
});
