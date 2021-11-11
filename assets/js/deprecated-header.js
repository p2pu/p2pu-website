// NOTE: don't delete this file, it's being used by other sites like courses.p2pu.org

function deprecatedHeader(){
  return `
    <style>
      #deprecated-site-alert {
        transition: all 0.3s ease-in-out;
        bottom: -100px;
        opacity: 0;
        position: fixed;
        right: 0;
        left: 0;
        padding: 40px;
        z-index: 1000;
        display: flex;
        justify-content: center;
      }

      #deprecated-site-alert > div[role="alert"] {
        padding: 10px 20px;
        background: #FC7100;
        color: #fff;
        box-shadow: -2px 2px 8px 1px rgba(0,0,0,0.2);
        border: 2px solid #fff;
        border-radius: 8px;
        display: flex;
      }

      #deprecated-site-alert.showDeprecationAlert {
        bottom: 0;
        opacity: 1;
      }

      #deprecated-alert-close {
        background: transparent;
        border: none;
        color: rgba(255,255,255,0.7);
        margin-left: 6px;
      }
    </style>

    <div id="deprecated-site-alert" aria-hidden="true">
      <div role="alert" tabindex="1">
        <div>
          Thanks for visiting P2PU. This domain is no longer being updated. Head to <a href="https://www.p2pu.org">www.p2pu.org</a> for the latest information. If you’re looking to create an open online courses, we now support <a href="https://course-in-a-box.p2pu.org/">Course-in-a-box</a>
        </div>
        <div>
          <button id="deprecated-alert-close" aria-label="Close">&times;</button>
        </div>
      </div>
    </div>

  `;
}

var callback = function(){
  // Handler when the DOM is fully loaded
  let body = document.getElementsByTagName('body')[0];
  body.insertAdjacentHTML("afterbegin", deprecatedHeader());

  var deprecationAlert = document.getElementById('deprecated-site-alert');
  var deprecationAlertCloseButton = document.getElementById('deprecated-alert-close');

  function showDeprecationAlert(alert) {
    alert.classList.add('showDeprecationAlert')
    alert.setAttribute('aria-hidden', 'false')
  }

  function hideDeprecationAlert(alert) {
    alert.classList.remove('showDeprecationAlert')
    alert.setAttribute('aria-hidden', 'true')
  }

  setTimeout(function() {
    showDeprecationAlert(deprecationAlert);
  }, 2000);

  deprecationAlertCloseButton.addEventListener('click', function() {
    hideDeprecationAlert(deprecationAlert);
  })

}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
