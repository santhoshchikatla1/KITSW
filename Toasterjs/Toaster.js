
    jQuery(document).ready(function () {

        UIToastr.init();
    });
    function Notificationtoastr(h, msg, ty) {
        var shortCutFunction = ty;
    var msg = msg;
    var title = h || '';
    var $showDuration = '1000';
    var $hideDuration = '1000';
    var $timeOut = '5000';
    var $extendedTimeOut = '1000';
    var $showEasing = 'swing';
    var $hideEasing = 'linear';
    var $showMethod = 'fadeIn';
    var $hideMethod = 'fadeOut';
    toastr.options = {
        closeButton: true,

    positionClass: 'toast-top-right',
    onclick: null
        };
    toastr.options.showDuration = $showDuration;
    toastr.options.hideDuration = $hideDuration;
    toastr.options.timeOut = $timeOut;
    toastr.options.extendedTimeOut = $extendedTimeOut;
    toastr.options.showEasing = $showEasing;
    toastr.options.hideEasing = $hideEasing;
    toastr.options.showMethod = $showMethod;
    toastr.options.hideMethod = $hideMethod;

    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    if ($toast.find('#okBtn').length) {
        $toast.delegate('#okBtn', 'click', function () {

            $toast.remove();
        });
        }
    if ($toast.find('#surpriseBtn').length) {
        $toast.delegate('#surpriseBtn', 'click', function () {

        });
        }

    $('#clearlasttoast').click(function () {
        toastr.clear($toastlast);
        });
    }
