window.onpagehide = (event) => {
  if (event.persisted) {
    console.log('This page *might* be entering the bfcache.');
  } else {
    console.log('This page will unload normally and be discarded.');
  }
};

window.onpageshow = (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bfcache.');
  } else {
    console.log('This page was loaded normally.');
  }
};

function beforeUnloadListener(event) {
  event.preventDefault();
  return event.returnValue = 'Are you sure you want to exit?';
};

// A function that invokes a callback when the page has unsaved changes.
onPageHasUnsavedChanges(() => {
  window.onbeforeunload = beforeUnloadListener;
});

// A function that invokes a callback when the page's unsaved changes are resolved.
onAllChangesSaved(() => {
  window.onbeforeunload = beforeUnloadListener;
});
